import { FooterModule } from '../../../components/footer/footer.module';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { HeaderModule } from 'src/app/components/header/header.module';
import { FormCpfComponent } from './form-cpf.components';
import { FormsModule } from '@angular/forms';
import { InfoCardsModule } from 'src/app/components/info-cards/info-cards.module';

@NgModule({
  declarations: [FormCpfComponent],
  imports: [
    CommonModule,
    FormsModule,
    HeaderModule,
    FooterModule,
    InfoCardsModule,
  ],
  providers: [],
  exports: [FormCpfComponent],
})
export class FormCpfModule {}
