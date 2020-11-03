import { Component, OnInit } from '@angular/core';
import { MenuEntry } from "@app/models/menu-entry";
import { NavService } from '@app/layout/nav/nav.service';
import { Subscription, Observable } from 'rxjs';

@Component({
  selector: 'yrd-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {
  menuEntries: Observable<MenuEntry[]>;
  
  constructor(private navService: NavService) {}

  ngOnInit(): void {
      this.menuEntries = this.navService.menu$.asObservable();
  }

}
