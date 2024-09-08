import { API_Auth, API_Base, API_Register } from '../data/constants';
import { fetchData } from './fetchData';

export async function registerUser(name, email, password) {
  if (!name || !email || !password) {
    console.error('Name, email, and password are required to register.');
    return null;
  }

  try {
    const response = await fetchData(
      `${API_Base}${API_Auth}${API_Register}`,
      {
        headers: {
          'Content-Type': 'application/json; charset=UTF-8',
        },
        method: 'POST',
        body: JSON.stringify({ name, email, password }),
      },
      'register',
    );

    if (!response?.data) {
      console.error('Registration failed: No data received from the server.');
      return null;
    }

    return response.data;
  } catch (error) {
    console.error('Error during registration:', error);
    return null;
  }
}
