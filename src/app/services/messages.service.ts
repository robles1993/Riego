import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { loadedMessages, loadMessages } from '../state/actions/messages.actions';
import { AppState } from '../state/app.state';
import { selectListMessages } from '../state/selectors/messages.selectors';

@Injectable({
  providedIn: 'root'
})
export class MessagesService {
  messages$: Observable<any> = new Observable();
  constructor(
    private store: Store<AppState>
  ) { }

  setMessages(type:string, value:string) {
    let message:any = {
      type:type,
      value:value,
    }
    // this.store.dispatch(loadMessages())
    this.store.dispatch(loadedMessages({
      messages:[message] 
    }));
    setTimeout( () => {
      // this.store.dispatch(loadMessages())
      this.store.dispatch(loadedMessages({
        messages: [],
      }))
    }, 10000);
  }

}
