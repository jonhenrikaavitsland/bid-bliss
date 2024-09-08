import { API_Base, API_Profiles, API_Key } from '../data/constants';
import { load } from '../localStorage/load';
import { save } from '../localStorage/save';
import { fetchData } from './fetchData';
import { swapAvatar } from '../localStorage/swapAvatar';

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
