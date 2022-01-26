import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { JwtDTO } from '../models/jwts-dto.class';

@Injectable({
    providedIn: 'root'
})
export class UserService {

    authURL = 'http://localhost:8080/user/'

    constructor(
        private http: HttpClient
    ) { }

    getUserInfo(userName: string) {
        return this.http.get("http://localhost:8080/user/detailname/" + userName);
    }

}