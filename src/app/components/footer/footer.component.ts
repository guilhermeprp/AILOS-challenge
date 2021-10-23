import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  template: `
    <footer class="footer">
      <button type="button" class="footer__button-submit" *ngIf="confirm">
        Iniciar nova admissão
      </button>
      <button type="button" class="footer__button-tip">
        Dicas para admissão
      </button>
    </footer>
  `,
  styleUrls: ['./footer.component.css'],
})
export class FooterComponent implements OnInit {
  @Input() confirm!: Boolean;
  constructor() {}
  ngOnInit(): void {}
}
