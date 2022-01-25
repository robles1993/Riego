import { createAction, props } from '@ngrx/store';
import { MessagesInterface } from 'src/app/models/messages.interface';
 
export const loadMessages = createAction(
  '[Messages List] Load Messages',
);
 
export const loadedMessages = createAction(
    '[Messages List] Load success',

    props<{ messages: MessagesInterface[]}>()
);