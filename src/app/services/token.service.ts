import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { JwtDTO } from '../models/jwts-dto.class';

const TOKEN_KEY = "AuthToken";
const USERNAME_KEY = "AuthUserName";
const AUTHORITIES_KEY = "AuthAuthorities";


@Injectable({
  providedIn: 'root'
})
export class TokenService {
  roles: Array<string> = [];

  constructor(
    private cookieService: CookieService,
  ) { }

  public setToken(token: JwtDTO): void {
    window.sessionStorage.removeItem(TOKEN_KEY);
    window.sessionStorage.setItem(TOKEN_KEY, token.token);
    this.cookieService.delete('token', '/');
  }

  public getToken() {
    return sessionStorage.getItem(TOKEN_KEY)
  }

  public setUserName(token: JwtDTO): void {
    window.sessionStorage.removeItem(USERNAME_KEY);
    window.sessionStorage.setItem(USERNAME_KEY, token.userName);
    this.cookieService.delete('userName', '/');
  }

  public getUserName() {
    return sessionStorage.getItem(USERNAME_KEY)
  }

  public setAuthorities(token: JwtDTO): void {
    window.sessionStorage.removeItem(AUTHORITIES_KEY);
    window.sessionStorage.setItem(AUTHORITIES_KEY, JSON.stringify(token.authorities));
    this.cookieService.delete('authorities', '/');

  }

  public getAuthorities() {
    this.roles = [];
    if(sessionStorage.getItem(AUTHORITIES_KEY)){
      JSON.parse(sessionStorage.getItem(AUTHORITIES_KEY)).forEach((authority:any) => {
        this.roles.push(authority.authority);
      });
    }
    return this.roles;
  }

  public logOut():void{
    window.sessionStorage.clear();
  }
}
