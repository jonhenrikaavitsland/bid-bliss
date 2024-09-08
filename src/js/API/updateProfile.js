import { fetchData } from './fetchData';
import { API_Base, API_Key, API_Profiles } from '../data/constants';
import { load } from '../localStorage/load';

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
