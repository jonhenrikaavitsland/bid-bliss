import { API_Auth, API_Base, API_Register } from '../data/constants';
import { fetchData } from './fetchData';

export async function registerUser(name, email, password) {
  const data = fetchData(`${API_Base}${API_Auth}${API_Register}`, {
    headers: {
      'Content-Type': 'application/json; charset=UTF-8',
    },
    method: 'POST',
    body: JSON.stringify({ name, email, password }),
  });
  return data;
}
