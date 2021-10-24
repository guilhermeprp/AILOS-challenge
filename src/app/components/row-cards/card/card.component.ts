import { Component, Input, OnInit } from '@angular/core';
import { ICard } from './card.model';

@Component({
  selector: 'app-card',
  template: `
    <div *ngFor="let item of cardContent" class="info-card">
      <div>
        <h3>{{ item.titulo }}</h3>
        <p class="info-card__subtitle">{{ item.subtitulo }}</p>
      </div>

      <div class="info-card__content__row">
        <mat-icon
          class="info-card__content__row__icon"
          aria-hidden="false"
          aria-label="Person icon"
        >
          {{ item.type }}
        </mat-icon>
        <div>
          <h5 class="info-card__category">{{ item.categoria1 }}</h5>
          <p class="info-card__category__content">{{ item.content1 }}</p>
        </div>
      </div>

      <div *ngIf="item.categoria2" class="info-card__content__row">
        <mat-icon
          class="info-card__content__row__icon"
          [class]="item.content2 === 'Suspenso' ? 'suspenso' : 'regular'"
          aria-hidden="false"
          aria-label="Situation icon"
        >
          {{ item.content2 === 'Suspenso' ? 'cancel' : 'check_circle_outline' }}
        </mat-icon>
        <div>
          <h5 class="info-card__category">{{ item.categoria2 }}</h5>
          <p class="info-card__category__content">{{ item.content2 }}</p>
        </div>
      </div>

      <div *ngIf="item.command" class="info-card__link__wrapper">
        <a href="#">{{ item.command }}</a>
      </div>
    </div>
  `,
  styleUrls: ['./card.component.css', '../../../../assets/animations.css'],
})
export class CardComponent implements OnInit {
  @Input() cardContent!: Array<ICard>;
  constructor() {}

  ngOnInit(): void {}
}
