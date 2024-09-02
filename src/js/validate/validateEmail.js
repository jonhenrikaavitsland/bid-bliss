import { REG_Email } from '../data/constants';

export function validateEmail(email) {
  return REG_Email.test(email);
}
