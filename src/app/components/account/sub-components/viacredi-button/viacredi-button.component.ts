import { Component, OnInit } from '@angular/core';
import { handleResize } from 'src/utils/window-size';

@Component({
  selector: 'app-viacredi-button',
  template: ` <button type="button" class="viacredi-button">VIACREDI</button> `,
  styleUrls: ['./viacredi-button.component.css'],
})
export class ViacrediButtonComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
    window.addEventListener<'resize'>('resize', handleResize);
  }
}
