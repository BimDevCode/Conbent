import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccountComponent } from './account.component';
import { UserComponent } from './user/user.component';
import { SettingsComponent } from './settings/settings.component';
import { MessagesComponent } from './messages/messages.component';
import { SubUsersComponent } from './sub-users/sub-users.component';
import { WallComponent } from './wall/wall.component';


const routes: Routes = [
  {path: '',component: AccountComponent,
    children: [
      {path: '', component: UserComponent},
      {path: 'settings', component: SettingsComponent},
      {path: 'messages', component: MessagesComponent},
      {path: 'sub-users', component: SubUsersComponent},
      {path: 'wall', component: WallComponent},
  ]}
    // more child routes can be added here
  ];
@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(routes)
  ]
})
export class AccountRoutingModule { }
