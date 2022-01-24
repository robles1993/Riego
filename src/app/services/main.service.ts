import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { Observable } from 'rxjs';
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

  detectTokenFromLogin() {
    if(this.cookieService.get('token')){
      this.infoToken = new JwtDTO(this.cookieService.get('token'));
      this.tokenService.setToken(this.infoToken);
    }
  }

  test(user?:any): Observable<any> {
    let test = {
      nombre:"pp",
      precio:10,
    }
    return this.http.post("http://localhost:8080/producto/create",test);

  }
}
