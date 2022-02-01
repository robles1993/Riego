import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { observable, Observable } from 'rxjs';
import { MessageState } from './models/message.state';
import { MessagesInterface } from './models/messages.interface';
import { MainService } from './services/main.service';
import { TokenService } from './services/token.service';
import { AppState } from './state/app.state';
import { selectListMessages, selectLoading } from './state/selectors/messages.selectors';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit  {
  title = 'appRiego';
  isLogged = false;
  loading$: Observable<boolean> = new Observable();
  messages$: Observable<any> = new Observable();
  sidenavWidth:string = "250px"
  _messages:any = {
    type:null,
    value:null,
  }

  constructor(
    private mainService: MainService,
    private tokenService: TokenService,
    private store: Store<AppState>,
  ){}

  ngOnInit(): void {
    this.mainService.detectTokenFromLogin();
    this.isLogged = this.tokenService.isLogged();
    this.loading$ = this.store.select(selectLoading);
    this.listenerMessages()
  }

  listenerMessages(){
    this.messages$ = this.store.select(selectListMessages);
    // this.messages$.subscribe((response)=>{
    //   console.log('RESPONSE', response);
    //   this._messages.type = response.type;
    //   this._messages.value = response.value;

    // })
  }
  hiddenSidenav(){
    if(this.sidenavWidth==="0px"){
      this.sidenavWidth = "250px"
    }else{
      this.sidenavWidth = "0px"
    }
  }
}
