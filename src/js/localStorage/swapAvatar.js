import { load } from './load';
import { save } from './save';

export function swapAvatar() {
  const profile = load('profile');

  const {
    name,
    email,
    bio,
    avatar: { url },
    credits,
    _count: { listings, wins },
  } = profile;

  let newProfile;

  if (url === 'https://images.unsplash.com/photo-1579547945413-497e1b99dac0?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&q=80&h=400&w=400') {
    newProfile = { name, email, bio, avatar: { url: '/src/images/placeholder.jpg', alt: name }, credits, _count: { listings, wins } };

    save('profile', newProfile);
  }
}
