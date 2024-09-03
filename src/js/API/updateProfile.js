import { fetchData } from './fetchData';
import { API_Base, API_Key, API_Profiles } from '../data/constants';
import { load } from '../localStorage/load';

export async function updateProfile(url) {
  const profile = load('profile');
  const token = load('token');
  const { name } = profile;

  const options = {
    method: 'PUT',
    Headers: {
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
    console.log('profile updated successfully:', response);
    return true;
  } catch (error) {
    console.error('Error updating profile', error);
    return false;
  }
}
