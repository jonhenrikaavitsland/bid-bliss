import { fetchData } from '../API/fetchData';
import { API_Base, API_Listings } from './constants';

export const listings = await fetchData(`${API_Base}${API_Listings}`);
