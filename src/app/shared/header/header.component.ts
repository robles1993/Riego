import { Component, OnInit } from '@angular/core';
import { InfoTokenEnum } from 'src/app/enums/infoToken.enum';
import { TokenService } from 'src/app/services/token.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  userName: string;
  constructor(
    private tokenService: TokenService
  ) {
  }

  showDetails: boolean = false;
  ngOnInit(): void {
    this.userName = this.tokenService.getUserName()
  }
  showUserDetails(){
    this.showDetails =! this.showDetails;
  }
}
