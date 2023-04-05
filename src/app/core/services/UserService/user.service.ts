import {Injectable} from "@angular/core";

@Injectable({
  providedIn: 'root'
})

export class UserService{

  GetCurrentUserID(): number{
    return 1;
  }

}
