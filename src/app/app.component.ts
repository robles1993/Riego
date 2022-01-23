import { Component, OnInit } from '@angular/core';
import { MainService } from './services/main.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit  {
  title = 'appRiego';

  constructor(
    private mainService: MainService
  ){}

  ngOnInit(): void {
    this.mainService.detectToken();
  }

}
