import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  template: `
    <header class="header">
      <h2>NOVA ADMISSÃO COOPERADO</h2>
      <p>Cadastro / Admissão do Cooperado / Nova Admissão do Cooperado</p>
    </header>
  `,
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  constructor() {}
  ngOnInit(): void {}
}
