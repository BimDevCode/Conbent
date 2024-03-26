import { Component, OnInit, inject } from '@angular/core';
import { AuthService } from '../../../core/services/auth.service';
import { User, UserProfile } from 'oidc-client-ts';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrl: './user.component.scss'
})
export class UserComponent  implements OnInit{
  readonly authService = inject(AuthService);

  mockUserProfile: UserProfile = {
    sub: '1234567890',
    name: 'Mikalai Sabaleuski',
    given_name: 'Mikalai',
    family_name: 'Sbalaeuski',
    preferred_username: 'Sabaleuski',
    email: 'Mikalai.Sabaleuski@example.com',
    picture: 'http://example.com/johndoe.jpg',
    iss: '',
    aud: '',
    exp: 0,
    iat: 0
  };

  mockCurrentUser: User | null = new User({
    id_token: 'your_id_token',
    session_state: 'your_session_state',
    access_token: 'your_access_token',
    refresh_token: 'your_refresh_token',
    token_type: 'your_token_type',
    scope: 'your_scope',
    profile: this.mockUserProfile,
    expires_at: 1234567890, // example timestamp
    userState: {}, // example userState
    url_state: 'your_url_state'
  });

  shortAuthorName: string = 'MS';

  ngOnInit(): void {
    
    this.authService.getUser().then(user => {
      this.mockCurrentUser = user;
      this.mockUserProfile = user?.profile || this.mockUserProfile;
    }).catch(err => {});
  }
}
