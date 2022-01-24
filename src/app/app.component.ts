import { Component, OnInit } from '@angular/core';
import { MainService } from './services/main.service';
import { TokenService } from './services/token.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit  {
  title = 'appRiego';
  isLogged = false;
  constructor(
    private mainService: MainService,
    private tokenService: TokenService
  ){}

  ngOnInit(): void {
    this.mainService.detectTokenFromLogin();
    this.isLogged = this.tokenService.isLogged();
  }

}
