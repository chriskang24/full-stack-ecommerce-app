import { createSelector } from 'reselect';

const selectUser = state => state.user;

export const selectCurrentUser = createSelector(
  // 1st argument = array of input selectors
  // 2nd argument = fn that gets the return of the input selecter
  [selectUser], (user) => user.currentUser
);

