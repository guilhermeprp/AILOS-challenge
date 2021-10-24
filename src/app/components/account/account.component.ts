import { Component, DoCheck, OnInit } from '@angular/core';
import { handleResize } from 'src/utils/window-size';

@Component({
  selector: 'app-account',
  template: `
    <div
      class="header__account__wrapper"
      [class]="{ notification__mobile: width < 730 }"
    >
      <app-notification></app-notification>
      <app-viacredi-button *ngIf="width > 730"></app-viacredi-button>
      <app-profile *ngIf="width > 730"></app-profile>
    </div>
  `,
  styleUrls: ['./account.component.css'],
})
export class AccountComponent implements OnInit, DoCheck {
  width!: number;
  constructor() {}

  ngOnInit(): void {
    this.width = handleResize().width;
  }

  ngDoCheck() {
    this.width = handleResize().width;
  }
}
