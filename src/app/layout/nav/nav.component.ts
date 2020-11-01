import { Component, OnInit, Input } from '@angular/core';
import { MenuEntry } from "@app/models/menu-entry";

@Component({
  selector: 'yrd-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {
  @Input() menuEntries: MenuEntry[];

  constructor() { }

  ngOnInit(): void {
  }

}
