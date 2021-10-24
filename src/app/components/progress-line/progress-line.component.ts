import { Component, OnChanges, OnInit } from '@angular/core';

@Component({
  selector: 'app-progress-line',
  template: `
    <div class="line-progress__wrapper">
      <div
        *ngFor="let item of steps"
        class="line-progress__item__box"
        [class]="item.current ? 'current' : item.completed ? 'completed' : ''"
      >
        <div class="ball"></div>
        <p>{{ item.title }}</p>
      </div>
      <progress
        [value]="progress"
        [max]="steps.length"
        class="line-progress__progress"
      ></progress>
    </div>
  `,
  styleUrls: ['./progress-line.component.css'],
})
export class ProgressLineComponent implements OnInit, OnChanges {
  progress!: number;
  steps = [
    {
      title: 'Início',
      current: true,
      completed: false,
      progress: 0,
    },
    {
      title: 'Documentos',
      current: false,
      completed: false,
      progress: 4 / 3,
    },
    {
      title: 'Dados cadsatrais',
      current: false,
      completed: false,
      progress: (4 / 3) * 2,
    },
    {
      title: 'Admissão',
      current: false,
      completed: false,
      progress: 4,
    },
  ];

  ngOnInit(): void {
    this.steps.map((item) => {
      if (item.current) this.progress = item.progress;
    });
  }

  ngOnChanges(): void {
    this.steps.map((item) => {
      if (item.current) this.progress = item.progress;
    });
  }
}
