import { Component, DoCheck, Input, OnInit } from '@angular/core';
import { handleResize } from 'src/utils/window-size';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: [
    './navbar.component.css',
    '../../../assets/font-icons.css',
    '../../../assets/animations.css',
  ],
})
export class NavBarComponent implements OnInit, DoCheck {
  @Input() expand: boolean = false;
  width!: number;
  constructor() {}

  handleExpand() {
    this.expand = !this.expand;
  }

  ngOnInit(): void {
    this.width = handleResize().width;
  }

  ngDoCheck() {
    this.width = handleResize().width;
  }
}
