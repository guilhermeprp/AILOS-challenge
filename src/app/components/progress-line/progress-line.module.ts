import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProgressLineComponent } from './progress-line.component';

@NgModule({
  declarations: [ProgressLineComponent],
  imports: [CommonModule],
  exports: [ProgressLineComponent],
})
export class ProgressLineModule {}
