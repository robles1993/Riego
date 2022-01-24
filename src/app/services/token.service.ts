import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { JwtDTO } from '../models/jwts-dto.class';

const TOKEN_KEY = "AuthToken";

@Injectable({
  providedIn: 'root'
})
export class TokenService {
  roles: Array<string> = [];

  constructor(
    private cookieService: CookieService,
  ) { }

  public setToken(token: JwtDTO): void {
    window.localStorage.removeItem(TOKEN_KEY);
    window.localStorage.setItem(TOKEN_KEY, token.token);
    this.cookieService.delete('token', '/');
  }

  public getToken() {
    return localStorage.getItem(TOKEN_KEY)
  }

 

  public getUserName():string {
    if(!this.isLogged()) return null;
    const token = this.getToken();
    const payload = token.split('.')[1];
    const payloadDecoded = atob(payload);
    const values = JSON.parse(payloadDecoded);
    const username = values.sub;
    return username;

  }

  public isAdmin():boolean {
    if(!this.isLogged()) return false;
    const token = this.getToken();
    const payload = token.split('.')[1];
    const payloadDecoded = atob(payload);
    const values = JSON.parse(payloadDecoded);
    const roles = values.roles;
    if(roles.indexOf('ROLE_ADMIN') < 0){
      return false;
    }
    return true;
  }

  public isLogged():boolean{
    if(this.getToken()) return true;
    return false;
  }

  public logOut(): void {
    window.localStorage.clear();
    window.location.href = "http://localhost:63498/";
  }
}
