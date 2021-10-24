import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { NavLinkModule } from './nav-link/nav-link.module';
import { NavBarComponent } from './navbar.component';
import { MatBadgeModule } from '@angular/material/badge';
import { ProfileModule } from '../account/sub-components/profile/profile.module';

@NgModule({
  declarations: [NavBarComponent],
  imports: [
    CommonModule,
    MatIconModule,
    MatBadgeModule,
    NavLinkModule,
    ProfileModule,
  ],
  providers: [],
  exports: [NavBarComponent],
})
export class NavbarModule {}
