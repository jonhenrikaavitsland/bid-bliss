import { getProfile } from '../../API/getProfile';
import { load } from '../../localStorage/load';
import { addBtn } from './addBtn';

export function ifLoggedIn() {
  if (load('token') && load('profile')) {
    getProfile();
    addBtn();
    // Apply logged in menu
  }
}
