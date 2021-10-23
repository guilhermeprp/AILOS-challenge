import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { NavLinkModule } from './nav-link/nav-link.module';
import { NavBarComponent } from './navbar.component';

@NgModule({
  declarations: [NavBarComponent],
  imports: [CommonModule, MatIconModule, NavLinkModule],
  providers: [],
  exports: [NavBarComponent],
})
export class NavbarModule {}
