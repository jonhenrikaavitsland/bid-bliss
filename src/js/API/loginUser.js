import { API_Auth, API_Base, API_Login } from '../data/constants';
import { save } from '../localStorage/save';
import { fetchData } from './fetchData';

/**
 * Logs in a user with the provided email and password.
 *
 * Sends a login request to the authentication API using the provided credentials.
 * If successful, saves the access token and profile information to local storage.
 *
 * @async
 * @param {string} email The user's email address.
 * @param {string} password The user's password.
 * @returns {Promise<void>} No return value; handles errors and success internally.
 * @throws {Error} Logs errors if email or password is missing, or if the login request fails.
 * @example
 * ```js
 * // Log in a user
 * const email = 'user@example.com';
 * const password = 'password123';
 * loginUser(email, password)
 *   .then(() => console.log('User logged in successfully'))
 *   .catch(error => console.error('Login error:', error));
 * ```
 */
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
      'loginBtn',
      'email',
      'password',
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
