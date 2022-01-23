import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { JwtDTO } from '../models/jwts-dto.class';
import { TokenService } from './token.service';

@Injectable({
  providedIn: 'root'
})
export class MainService {
  infoToken:JwtDTO;
  constructor(
    private http: HttpClient,
    private cookieService: CookieService,
    private tokenService: TokenService) { }

  detectToken() {
    this.infoToken = new JwtDTO({
      token: this.cookieService.get('token'),
      userName:  this.cookieService.get('userName'),
      authorities: this.cookieService.get('authorities'),
    });
    this.tokenService.setToken(this.infoToken);
    this.tokenService.setUserName(this.infoToken);
    this.tokenService.setAuthorities(this.infoToken);
  console.log('detect Token', this.infoToken )

  }
}
