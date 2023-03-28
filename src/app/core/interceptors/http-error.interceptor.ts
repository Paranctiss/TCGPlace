import {
  HttpErrorResponse,
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
  HttpResponse
} from "@angular/common/http";
import {Injectable} from "@angular/core";
import {catchError, Observable, of, tap} from "rxjs";
import {ToastService} from "../services/toast.service";

@Injectable({
  providedIn: 'root',
})

export class HttpErrorInterceptor implements HttpInterceptor {

  constructor(private toastService:ToastService) {}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(req).pipe(
      tap(evt => {
        console.log("wowo")
        if(evt instanceof HttpResponse){
          console.log("hello")
          if(evt.status === 500){
            this.toastService.presentToastError("Erreur interne au serveur survenue !")
          }
          if(evt.status === 400){
            this.toastService.presentToastError("Erreur de requête !")
          }
        }
      }),
      catchError((err: any) => {
        if(err instanceof HttpErrorResponse){
          try{
            this.toastService.presentToastError("Serveur inatteignable")
          }catch (e) {
            this.toastService.presentToastError("Serveur inatteignable")
          }
        }
        return of(err);
      })
    );
  }
}
