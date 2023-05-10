import {Injectable} from "@angular/core";
import {AUTH_URL} from "../../../../../config";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {BehaviorSubject, Observable, tap} from "rxjs";
import {UserModel} from "../../models/user.model";

@Injectable({
  providedIn: 'root'
})

export class UserService{

  private apiURL = AUTH_URL;
  private currentUserSubject = new BehaviorSubject<UserModel | null>(null)
  private isLoggedIn = new BehaviorSubject<boolean>(false)
  constructor(private httpClient : HttpClient) {
    const userJson = localStorage.getItem('current_user')
    if (userJson) {
      const user = JSON.parse(userJson) as UserModel;
      this.currentUserSubject = new BehaviorSubject<UserModel | null>(user);
    } else {
      this.currentUserSubject = new BehaviorSubject<UserModel | null>(null);
    }
  }

  setCurrentUser(user : UserModel | null){
    this.currentUserSubject.next(user)
    localStorage.setItem('current_user', JSON.stringify(user));
  }

  getCurrentUser(): Observable<UserModel | null>{
    return this.currentUserSubject.asObservable()
  }
  isLogged() : Observable<boolean>{
    if(this.currentUserSubject.value != null){
      this.isLoggedIn.next(true)
    }else{
      this.isLoggedIn.next(false)
    }
    return this.isLoggedIn
  }

  Logout():void{
    this.currentUserSubject.next(null)
    this.isLoggedIn.next(false)
    localStorage.removeItem('access_token');
    localStorage.removeItem('current_user');
  }

  GetCurrentUserID(): number{
    return 1;
  }
  GetUserInfo(token: string): Observable<any> {
    const data = { token: token };
    return this.httpClient.post(`${this.apiURL}/Registration/user-info`, data);
  }

  RegisterUser(user : any) : Observable<any>{
    return this.httpClient.post(`${this.apiURL}/Registration`, user);
  }

  Login(email : string, password : string): Observable<any> {
    const body = {
      email : email,
      password : password
    }
    return this.httpClient.post(`${this.apiURL}/Registration/authenticate`, body).pipe(
      tap((response) => {
        if(response){
          this.isLoggedIn.next(true)
        }
      })
    )
  }
}
