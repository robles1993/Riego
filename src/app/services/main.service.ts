import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { Observable } from 'rxjs';
import { JwtDTO } from '../models/jwts-dto.class';
import { DatatableService } from './datatable.service';
import { TokenService } from './token.service';

@Injectable({
  providedIn: 'root'
})
export class MainService {
  infoToken:JwtDTO;
  constructor(
    private http: HttpClient,
    private cookieService: CookieService,
    private tokenService: TokenService,
    private datatableService:DatatableService) { }

  detectTokenFromLogin() {
    if(this.cookieService.get('token')){
      this.infoToken = new JwtDTO(this.cookieService.get('token'));
      this.tokenService.setToken(this.infoToken);
    }
  }

  test(page:number = 0): Observable<any> {
    return this.http.get("http://localhost:8080/producto/pages?page=" +  page); //paginacion
  }

  genericSearch(search:string): Observable<any> {
    return this.http.get("http://localhost:8080/producto/search?filtro=" + search + '&' + "page=0" ); //paginacion
  }

}
