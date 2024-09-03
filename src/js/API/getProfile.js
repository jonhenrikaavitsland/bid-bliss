import { API_Base, API_Profiles } from '../data/constants';
import { load } from '../localStorage/load';
import { save } from '../localStorage/save';
import { fetchData } from './fetchData';
import { API_Key } from '../data/constants';
import { swapAvatar } from '../localStorage/swapAvatar';

export async function getProfile() {
  const { name } = load('profile');

  const profile = await fetchData(`${API_Base}${API_Profiles}/${name}`, {
    headers: {
      Authorization: `Bearer ${load('token')}`,
      'X-Noroff-API-Key': API_Key,
    },
  });

  const {
    data: { ...user },
  } = profile;
  save('profile', user);
  swapAvatar();
}
