import { Component, OnInit } from '@angular/core';
import { InfoTokenEnum } from 'src/app/enums/infoToken.enum';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  userName: string;
  constructor() {
  }

  showDetails: boolean = false;
  ngOnInit(): void {
    this.userName = sessionStorage.getItem(InfoTokenEnum.USERNAME_KEY)
  }
  showUserDetails(){
    this.showDetails =! this.showDetails;
  }
}
