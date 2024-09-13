import { fetchData } from './fetchData';
import { API_Base, API_Key, API_Profiles } from '../data/constants';
import { load } from '../localStorage/load';

/**
 * Updates the user's profile with a new avatar URL.
 *
 * Sends a PUT request to update the user's profile with the provided avatar URL.
 * The function checks for necessary profile and authorization data before making the request.
 *
 * @async
 * @param {string} url The URL of the new avatar image.
 * @returns {Promise<boolean>} Returns `true` if the profile update is successful, otherwise `false`.
 * @throws {Error} Logs errors if required data is missing or if the update request fails.
 * @example
 * ```js
 * // Update profile with a new avatar URL
 * const avatarUrl = 'https://example.com/new-avatar.jpg';
 * updateProfile(avatarUrl)
 *   .then(success => {
 *     if (success) {
 *       console.log('Profile updated successfully');
 *     } else {
 *       console.log('Failed to update profile');
 *     }
 *   })
 *   .catch(error => console.error('Profile update error:', error));
 * ```
 */
export async function updateProfile(url) {
  if (!url || typeof url !== 'string') {
    console.error('Invalid URL provided for profile update.');
    return false;
  }

  const profile = load('profile');
  const token = load('token');

  if (!profile || !profile.name) {
    console.error('Profile data is missing or incomplete.');
    return false;
  }

  if (!token) {
    console.error('Authorization token is missing.');
    return false;
  }

  const { name } = profile;

  const options = {
    method: 'PUT',
    headers: {
      Authorization: `Bearer ${token}`,
      'X-Noroff-API-Key': API_Key,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      avatar: { url, alt: name },
    }),
  };

  try {
    const response = await fetchData(`${API_Base}${API_Profiles}/${name}`, options);

    if (response && !response.error) {
      return true;
    }

    console.error(`Error updating profile: ${response.error || 'Unknown error'}`);
    return false;
  } catch (error) {
    console.error('Error updating profile:', error);
    return false;
  }
}
