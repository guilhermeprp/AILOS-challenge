import { Component, Input, OnInit } from '@angular/core';
import { INavLink } from './nav-link.model';

@Component({
  selector: 'app-nav-link',
  template: `
    <a
      *ngFor="let item of links"
      href="#"
      class="navbar__contents__row__icons"
      [class]="{ current: item.current }"
    >
      <mat-icon fontSet="{{ item.fontSet }}"> {{ item.icon }} </mat-icon>
      <span *ngIf="expanded">{{ item.text }}</span>
    </a>
  `,
  styleUrls: ['../navbar.component.css', '../../../../assets/font-icons.css'],
})
export class NavLinkComponent implements OnInit {
  @Input() expanded!: boolean;
  @Input() links: Array<INavLink> = [
    {
      fontSet: 'material-icons-round',
      icon: 'search',
      text: 'Buscar',
      current: true,
    },
    {
      fontSet: 'material-icons-round',
      icon: 'star_border',
      text: 'Favoritos',
      current: false,
    },
    {
      fontSet: 'material-icons-outlined',
      icon: 'sms',
      text: 'Chat',
      current: false,
    },
    {
      fontSet: 'material-icons-round',
      icon: 'tune',
      text: 'Configurações',
      current: false,
    },
    {
      fontSet: 'material-icons-outlined',
      icon: 'account_balance',
      text: 'Banco',
      current: false,
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
