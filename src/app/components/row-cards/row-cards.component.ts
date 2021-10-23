import { Component, Input, OnInit } from '@angular/core';
import { CooperadoSelected } from 'src/app/pages/forms/cooperado.model';
import { ICard } from './card/card.model';

@Component({
  selector: 'app-row-cards',
  template: `<app-card class="info-card__row" [cardContent]="list"></app-card>`,
  styleUrls: ['./row-cards.component.css'],
})
export class InfoCardsComponent implements OnInit {
  @Input() cardData?: CooperadoSelected | void;

  list!: Array<ICard>;

  constructor() {}

  ngOnInit(): void {
    this.list = [
      {
        titulo: 'Situação cadastral do CPF',
        subtitulo: 'Consulta da Receita Federal',
        categoria1: 'Nome',
        content1: this.cardData!.pessoa.nome,
        categoria2: 'Situação do CPF',
        content2: 'Regular',
        type: 'person',
      },
      {
        titulo: 'Conta Aplicação',
        subtitulo: 'Cooperativa Viacredi',
        categoria1: 'Número da conta',
        content1: this.cardData!.pessoa.conta_aplicacao,
        command: 'Duplicar Conta',
        type: 'credit_card',
      },
      {
        titulo: 'Conta Aplicação',
        subtitulo: 'Cooperativa Viacredi',
        categoria1: 'Número da conta',
        content1: this.cardData!.pessoa.conta_corrente,
        command: 'Duplicar Conta',
        type: 'credit_card',
      },
    ];
  }
}
