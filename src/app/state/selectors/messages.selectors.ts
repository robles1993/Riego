import { createSelector } from '@ngrx/store';
import { MessageState } from 'src/app/models/message.state';
import { AppState } from '../app.state';


export const selectMessagesFeature = (state: AppState) => state.messages;

export const selectListMessages = createSelector(
    selectMessagesFeature,
    (state: MessageState) => state.messages
);

export const selectLoading = createSelector(
    selectMessagesFeature,
    (state: MessageState) => state.loading
);