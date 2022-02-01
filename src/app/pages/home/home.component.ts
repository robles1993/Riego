import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { MainService } from 'src/app/services/main.service';
import { MessagesService } from 'src/app/services/messages.service';
import { loadedMessages, loadMessages } from 'src/app/state/actions/messages.actions';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(
    private mainService: MainService,
    private store: Store<any>,
    private messageService: MessagesService
  ) { }

  ngOnInit(): void {
  }

  test() {
    this.mainService.test().subscribe({

      next: (response) => {
        this.messageService.setMessages('SUCCESS','CORRECTO');
      },
      error: error => {

      }

    });
  }

}
