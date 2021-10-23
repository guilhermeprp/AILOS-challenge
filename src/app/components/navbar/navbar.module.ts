import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { NavBarComponent } from './navbar.component';

@NgModule({
  declarations: [NavBarComponent],
  imports: [CommonModule, MatIconModule],
  providers: [],
  exports: [NavBarComponent],
})
export class NavbarModule {}
