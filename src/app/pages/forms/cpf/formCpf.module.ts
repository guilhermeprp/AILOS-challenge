import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { HeaderModule } from 'src/app/components/header/header.module';
import { FormCpfComponent } from './formCpf.components';

@NgModule({
  declarations: [FormCpfComponent],
  imports: [CommonModule, HeaderModule],
  providers: [],
  exports: [FormCpfComponent],
})
export class FormCpfModule {}
