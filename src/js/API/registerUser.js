import { API_Auth, API_Base, API_Register } from '../data/constants';
import { fetchData } from './fetchData';

/**
 * Registers a new user with the provided name, email, and password.
 *
 * Sends a registration request to the authentication API using the provided details.
 * If successful, returns the response data; otherwise, logs errors.
 *
 * @async
 * @param {string} name The user's name.
 * @param {string} email The user's email address.
 * @param {string} password The user's password.
 * @returns {Promise<Object|null>} A promise that resolves to the registration data if successful, or `null` if registration fails.
 * @throws {Error} Logs errors if any of the parameters are missing, or if the registration request fails.
 * @example
 * ```js
 * // Register a new user
 * const name = 'John Doe';
 * const email = 'john@example.com';
 * const password = 'securePassword';
 * registerUser(name, email, password)
 *   .then(data => {
 *     if (data) {
 *       console.log('User registered successfully:', data);
 *     } else {
 *       console.log('Registration failed.');
 *     }
 *   })
 *   .catch(error => console.error('Registration error:', error));
 * ```
 */
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
      'registerBtn',
      'email',
      'password',
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
