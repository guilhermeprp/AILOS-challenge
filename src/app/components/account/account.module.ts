import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccountComponent } from './account.component';
import { ProfileModule } from './sub-components/profile/profile.module';
import { NotificationModule } from './sub-components/notification/notification.module';
import { ViacrediButtonModule } from './sub-components/viacredi-button/viacredi-button.module';

@NgModule({
  declarations: [AccountComponent],
  imports: [
    CommonModule,
    ProfileModule,
    NotificationModule,
    ViacrediButtonModule,
  ],
  exports: [AccountComponent],
})
export class AccountModule {}
