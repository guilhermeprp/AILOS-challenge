import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  template: `
    <header class="header">
      <h2>{{ title }}</h2>
      <p>{{ path }}</p>
      <app-account></app-account>
    </header>
  `,
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  title: string = 'NOVA ADMISSÃO COOPERADO';
  path: string =
    'Cadastro / Admissão do Cooperado / Nova Admissão do Cooperado';
  constructor() {}
  ngOnInit(): void {}
}
