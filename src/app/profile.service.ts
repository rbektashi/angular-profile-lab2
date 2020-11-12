import { Injectable } from '@angular/core';
import { UserProfile } from './interfaces/user-profile';

@Injectable({
  providedIn: 'root',
})
export class ProfileService {
  userProfile: UserProfile = {
    name: 'Raeanna Bektashi',
    contact: '586-996-9910',
    bio: 'I love sharks!',
  };
  constructor() {}

  getUserProfile = () => {
    return this.userProfile;
  };
  setUserProfile = (newUserProfile: UserProfile): void => {
    this.userProfile = newUserProfile;
  };
}
