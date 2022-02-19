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

  test(page:any): Observable<any> {
    // let test = {
    //   nombre:"pp",
    //   precio:10,
    // }
    // return this.http.post("http://localhost:8080/producto/create",test);

    // return this.http.get("http://localhost:8080/user/detail/1");

    // return this.http.get("http://localhost:8888/device/detail/1");  //microservicio externo

    return this.http.get("http://localhost:8080/producto/pages?page=" +  this.datatableService.formatPage(page)); //paginacion
  }



}
