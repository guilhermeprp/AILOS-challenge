import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { FormCpfComponent } from './form-cpf.components';
import { FooterModule } from '../../../components/footer/footer.module';
import { HeaderModule } from 'src/app/components/header/header.module';
import { InfoCardsModule } from 'src/app/components/row-cards/row-cards.module';

@NgModule({
  declarations: [FormCpfComponent],
  imports: [
    FormsModule,
    CommonModule,
    FooterModule,
    HeaderModule,
    InfoCardsModule,
  ],
  providers: [],
  exports: [FormCpfComponent],
})
export class FormCpfModule {}
