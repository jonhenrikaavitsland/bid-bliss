import { API_Base, API_Profiles, API_Key } from '../data/constants';
import { load } from '../localStorage/load';
import { save } from '../localStorage/save';
import { fetchData } from './fetchData';
import { swapAvatar } from '../localStorage/swapAvatar';

/**
 * Fetches the user's profile data using stored profile name and authentication token.
 *
 * Loads the profile and token from local storage, constructs the request URL, and fetches the profile data.
 * If successful, the profile data is saved back to local storage, and the user's avatar is swapped.
 *
 * @async
 * @returns {Promise<void>} No return value; handles errors and success internally.
 * @throws {Error} Logs errors if profile data or authentication token is missing, or if the fetch operation fails.
 * @example
 * ```js
 * // Fetch the profile data for the current user
 * getProfile()
 *   .then(() => console.log('Profile loaded successfully'))
 *   .catch(error => console.error('Error loading profile:', error));
 * ```
 */
export async function getProfile() {
  try {
    const profileData = load('profile');
    const token = load('token');

    if (!profileData?.name) {
      console.error('Profile name is missing or invalid.');
      return;
    }
    if (!token) {
      console.error('Authentication token is missing.');
      return;
    }

    const url = `${API_Base}${API_Profiles}/${profileData.name}`;
    const headers = {
      Authorization: `Bearer ${token}`,
      'X-Noroff-API-Key': API_Key,
    };

    const profile = await fetchData(url, { headers });

    if (profile?.data) {
      save('profile', profile.data);
      swapAvatar();
    } else {
      console.warn('Received empty or malformed profile data.');
    }
  } catch (error) {
    console.error('Failed to fetch profile:', error);
  }
}
