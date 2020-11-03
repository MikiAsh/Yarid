import { Component, OnInit } from '@angular/core';
import { MenuEntry } from "@app/models/menu-entry";
import { DisplayService } from '@app/services/display.service';
import { Subscription, Observable } from 'rxjs';

@Component({
  selector: 'yrd-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {
  menuEntries: Observable<MenuEntry[]>;
  
  constructor(private displayService: DisplayService) {}

  ngOnInit(): void {
      this.menuEntries = this.displayService.menu$.asObservable();
  }

}
