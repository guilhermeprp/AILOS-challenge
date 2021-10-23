import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InfoCardsComponent } from './row-cards.component';
import { CardModule } from './card/card.module';

@NgModule({
  declarations: [InfoCardsComponent],
  imports: [CommonModule, CardModule],
  providers: [],
  exports: [InfoCardsComponent],
})
export class InfoCardsModule {}
