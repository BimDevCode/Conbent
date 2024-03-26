import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrl: './account.component.scss'
})
export class AccountComponent implements OnInit{
  tieredItems: MenuItem[] | undefined;
  ngOnInit(): void {
    this.tieredItems = [
      {
        label: 'Profile',
        icon: 'pi pi-fw pi-user',
        items: [
            {
              label: 'Account Page',
              icon: 'pi pi-fw pi-id-card',
              routerLink: ['/account']
            },
            {
                label: 'Settings',
                icon: 'pi pi-fw pi-cog',
                routerLink: ['/account/settings']
            }
        ]
    },
    {
      label: 'Your Wall',
      icon: 'pi pi-fw pi-tablet',
      routerLink: ['/account/wall']
    },
    {
      label: 'Messages',
      icon: 'pi pi-fw pi-envelope',
      routerLink: ['/account/messages']

    },
    {
        label: 'Sub Users',
        icon: 'pi pi-fw pi-sitemap',
        routerLink: ['/account/sub-users'],
        items: [
            {
                label: 'New',
                icon: 'pi pi-fw pi-plus',
                items: [
                    {
                        label: 'User',
                        icon: 'pi pi-fw pi-plus'
                    },
                    {
                        label: 'Duplicate',
                        icon: 'pi pi-fw pi-copy'
                    },

                ]
            },
            {
                label: 'Edit',
                icon: 'pi pi-fw pi-user-edit'
            }
        ]
    },
      { separator: true },
      {
          label: 'Quit',
          icon: 'pi pi-fw pi-sign-out',
          routerLink: ['/'],
      }
  ];

  }

}
