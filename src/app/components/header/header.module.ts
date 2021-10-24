import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AccountModule } from '../account/account.module';
import { HeaderComponent } from './header.component';

@NgModule({
  declarations: [HeaderComponent],
  imports: [CommonModule, AccountModule],
  providers: [],
  exports: [HeaderComponent],
})
export class HeaderModule {}
