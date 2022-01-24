import { Component, OnInit } from '@angular/core';
import { MainService } from 'src/app/services/main.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(
    private mainService:MainService
  ) { }

  ngOnInit(): void {
  }

  test(){
    this.mainService.test().subscribe(response=>{
      console.log('RESPONSE TEST',  response)
    });
  }

}
