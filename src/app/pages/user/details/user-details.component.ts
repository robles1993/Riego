import { Component, Input, OnInit, Output, EventEmitter  } from '@angular/core';
import { Observable } from 'rxjs';
import { UserModel } from 'src/app/models/userModel.class';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {
  @Input() infoUser:UserModel = new UserModel({});
  @Output() cancelDetail = new EventEmitter<any>();
  constructor() { }

  ngOnInit(): void {
  }

  closeDetails(event:boolean){
    this.cancelDetail.emit(event)
  }

}
