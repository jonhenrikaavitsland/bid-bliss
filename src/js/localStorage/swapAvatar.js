import { placeholderImg } from '../data/images';
import { load } from './load';
import { save } from './save';

/**
 * Swaps the user's avatar URL in the profile if it matches a specific default image URL.
 *
 * This function checks the current profile data loaded from localStorage and replaces the avatar URL
 * with a placeholder image if it matches the specified default URL. If the profile data is missing
 * or does not have the required structure, it logs an error.
 *
 * @returns {void} No return value; updates the profile in localStorage if the conditions are met.
 * @example
 * ```js
 * // Swap avatar URL if it matches the default image
 * swapAvatar();
 * ```
 */
export function swapAvatar() {
  const profile = load('profile');

  if (!profile || typeof profile !== 'object') {
    console.error('Invalid or missing profile data');
    return;
  }

  const { name, email, bio, avatar, credits, _count } = profile;

  if (!avatar || typeof avatar.url !== 'string' || !_count) {
    console.error('Profile structure is missing required properties');
    return;
  }

  const { url } = avatar;
  const { listings, wins } = _count;

  if (url === 'https://images.unsplash.com/photo-1579547945413-497e1b99dac0?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&q=80&h=400&w=400') {
    const newProfile = {
      name,
      email,
      bio,
      avatar: { url: placeholderImg, alt: name },
      credits,
      _count: { listings, wins },
    };

    save('profile', newProfile);
  }
}
