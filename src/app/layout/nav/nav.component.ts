import { Component, OnInit } from '@angular/core';
import { navData } from "@config/nav-menu";

@Component({
  selector: 'yrd-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {

  menuEntries = navData;

  constructor() { }

  ngOnInit(): void {
  }

}
