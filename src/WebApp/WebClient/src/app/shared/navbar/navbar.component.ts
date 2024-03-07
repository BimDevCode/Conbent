import { Component } from '@angular/core';
import { MessageService} from 'primeng/api';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
  providers: [MessageService]
})
export class NavbarComponent {

}
