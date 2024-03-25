import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-account-chip',
  templateUrl: './account-chip.component.html',
  styleUrl: './account-chip.component.scss'
})
export class AccountChipComponent {
  shortAuthorName: string = 'MS';
  @Input() authorNameSurname: string = 'Mikalai Sabaluski';
  constructor() {
    this.shortAuthorName = this.authorNameSurname!.split(' ').map(word => word[0].toUpperCase()).join('');
  }
}
