import { API_Auth, API_Base, API_Login } from '../data/constants';
import { save } from '../localStorage/save';
import { fetchData } from './fetchData';

export async function loginUser(email, password) {
  if (!email || !password) {
    console.error('Email and password are required for login.');
    return;
  }

  try {
    const response = await fetchData(
      `${API_Base}${API_Auth}${API_Login}`,
      {
        headers: {
          'Content-Type': 'application/json; charset=UTF-8',
        },
        method: 'POST',
        body: JSON.stringify({ email, password }),
      },
      'login',
    );

    if (response?.data) {
      const { accessToken, ...profile } = response.data;
      save('token', accessToken);
      save('profile', profile);
    } else {
      console.error('Login failed: No data received from the server.');
    }
  } catch (error) {
    console.error('Error during login:', error);
  }
}
