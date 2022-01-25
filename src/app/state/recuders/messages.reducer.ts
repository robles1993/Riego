import { createReducer, on } from '@ngrx/store';
import { MessageState } from 'src/app/models/message.state';
import { MessagesInterface } from 'src/app/models/messages.interface';
import { loadedMessages, loadMessages } from '../actions/messages.actions';

// export const initialState: ReadonlyArray<MessagesInterface> = [];

export const initialState:MessageState = { loading:false, messages:[] }

export const messagesReducer = createReducer(
  initialState,
  on(loadMessages, (state) => {
      return {...state, loading:true};
  }),
  on(loadedMessages, (state, {messages}) => {
    return {...state, loading:false, messages};
})
);