import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { JwtDTO } from '../models/jwts-dto.class';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  
  authURL = 'http://localhost:8080/auth/'

  constructor(
    private httpClient: HttpClient
  ) { }


  public refresh(dto: JwtDTO): Observable<JwtDTO> {
    return this.httpClient.post<JwtDTO>(this.authURL + 'refresh', dto);
  }

}
