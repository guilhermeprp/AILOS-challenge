import { Component, DoCheck, Input, OnInit } from '@angular/core';
import { handleResize } from 'src/utils/window-size';

@Component({
  selector: 'app-profile',
  template: `
    <div
      class="avatar__wrapper"
      [ngClass]="{ 'light-background': width < 730, expand: expanded }"
    >
      <img src="./assets/images/avatar.png" alt="Avatar" />
    </div>
  `,
  styleUrls: ['./profile.component.css'],
})
export class ProfileComponent implements OnInit, DoCheck {
  @Input() expanded!: boolean;

  width!: number;
  constructor() {}

  ngOnInit(): void {
    this.width = handleResize().width;
  }

  ngDoCheck() {
    this.width = handleResize().width;
  }
}
