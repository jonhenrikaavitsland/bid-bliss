import { load } from '../../localStorage/load';
import { addBtn } from './addBtn';

export function ifLoggedIn() {
  if (load('token') && load('profile')) {
    addBtn();
    // Apply logged in menu
  }
}
