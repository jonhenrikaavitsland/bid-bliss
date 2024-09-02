export const modal = document.querySelector(`[data-modal="modalObject"]`);
export const gallery = document.querySelector(`[data-modal="galleryObject"]`);

export const API_Base = 'https://v2.api.noroff.dev';
export const API_Auth = '/auth';
export const API_Register = '/register';
export const API_Login = '/login';
export const API_Profiles = '/auction/profiles';
export const API_Listings = '/auction/listings';
export const API_Key = '469afe69-d51d-4f51-8e40-618b936a4e1a';

export const REG_Email = /^[a-zA-Z0-9._%+-]+@stud\.noroff\.no$/;
export const REG_Password = /[<>/]/;
export const MSG_Email = 'Email must be a @stud.noroff.no address and cannot contain illegal characters.';
