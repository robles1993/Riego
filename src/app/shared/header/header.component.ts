import { Component, OnInit } from '@angular/core';
import { InfoTokenEnum } from 'src/app/enums/infoToken.enum';
import { UserModel } from 'src/app/models/userModel.class';
import { TokenService } from 'src/app/services/token.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  userName: string;
  infoUser:UserModel = new UserModel({}); // tipar
  constructor(
    private tokenService: TokenService,
    private userService:UserService
  ) {
  }

  showDetails: boolean = false;
  ngOnInit(): void {
    this.userName = this.tokenService.getUserName()
  }
  showUserDetails(){
    this.showDetails =! this.showDetails;
    this.getInfoUser();
  }

  getInfoUser(){
    this.userService.getUserInfo(this.userName).subscribe((info)=>{
      this.infoUser = new UserModel (info);
    });
  }
  
}
