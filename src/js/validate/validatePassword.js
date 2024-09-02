import { REG_Password } from '../data/constants';

export function validatePassword(password) {
  return password.length >= 8 && REG_Password.test(password);
}
