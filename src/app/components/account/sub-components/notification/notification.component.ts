import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-notification',
  template: `
    <mat-icon fontSet="material-icons-outlined" class="notification-icon"
      >notifications
      <div class="badge">
        <span>7</span>
      </div>
    </mat-icon>
  `,
  styleUrls: [
    './notification.component.css',
    '../../../../../assets/font-icons.css',
    '../../../../../assets/animations.css',
  ],
})
export class NotificationComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
