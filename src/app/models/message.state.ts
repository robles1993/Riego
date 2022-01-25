import { MessagesInterface } from "./messages.interface";

export interface MessageState{
    loading:boolean,
    messages:ReadonlyArray<MessagesInterface>
}