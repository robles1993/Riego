import { AuthService } from './../services/auth.service';
import { JwtDTO } from './../models/jwts-dto.class';
import { catchError, concatMap } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HTTP_INTERCEPTORS, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { TokenService } from '../services/token.service';
import { MessagesService } from '../services/messages.service';
const AUTHORIZATION = 'Authorization';
@Injectable() 
export class AuthInterceptor implements HttpInterceptor {
  constructor(private tokenService: TokenService,
    private authService: AuthService,
    private messageService: MessagesService) { }
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    if (!this.tokenService.isLogged()) {
      return next.handle(req);
    }
    if (!this.tokenService.isLogged()) {
      return next.handle(req);
    }

    let intReq = req;
    const token = this.tokenService.getToken();

    intReq = this.addToken(req, token);

    return next.handle(intReq).pipe(catchError((err: HttpErrorResponse) => {
    if(err.error?.mensaje){
      this.messageService.setMessages('ERROR', err.error.mensaje)
    }
      if (err.status === 401) {
        const dto: JwtDTO = new JwtDTO(this.tokenService.getToken());
        console.log('DTO', this.tokenService.getToken())
        return this.authService.refresh(dto).pipe(concatMap((data: any) => {
          this.tokenService.setToken(data);
          intReq = this.addToken(req, data.token);
          // this.messageService.setMessages('INFO', 'Refrescano el token...')
          return next.handle(intReq);

        }));
        // this.tokenService.logOut();

      } else {
        return throwError(err);
      }
    }));
  }

  private addToken(req: HttpRequest<any>, token: string): HttpRequest<any> {
    return req.clone({ headers: req.headers.set(AUTHORIZATION, 'Bearer ' + token) });
  }
}
export const interceptorProvider = [{ provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true }];