import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavLinkComponent } from './nav-link.component';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  declarations: [NavLinkComponent],
  imports: [CommonModule, MatIconModule],
  exports: [NavLinkComponent],
})
export class NavLinkModule {}
