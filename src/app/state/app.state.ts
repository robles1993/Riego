import { ActionReducerMap } from "@ngrx/store";
import { MessageState } from "../models/message.state";
import { messagesReducer } from "./recuders/messages.reducer";

export interface AppState {
  messages: MessageState;
}

export const ROOT_REDUCERS:ActionReducerMap<AppState> = {
  messages: messagesReducer
}