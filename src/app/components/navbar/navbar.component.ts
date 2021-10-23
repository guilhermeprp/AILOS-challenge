import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css', '../../../assets/font-icons.css'],
})
export class NavBarComponent implements OnInit {
  expand: boolean = false;

  constructor() {}
  ngOnInit() {}
  handleExpand() {
    this.expand = !this.expand;
  }
}
