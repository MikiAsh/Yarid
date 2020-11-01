import { Component, OnInit, OnDestroy } from '@angular/core';
import { navData } from '@config/nav-menu';
import { MenuEntry } from "@app/models/menu-entry";
import { StoresService } from '@app/stores/stores.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'Yarid';
  menuEntries: MenuEntry[] = navData;
  sub: Subscription;
  constructor(private storesService: StoresService) {}

  ngOnInit(): void {
    this.populateNavMenu();
  }

  populateNavMenu(): void {
    this.sub = this.storesService.selectedStore$.subscribe(store => {
      if (store && store.tags) {
        this.menuEntries = store.tags.map(tag => ({displayName: tag}));
      }
      else {
        this.menuEntries = [];
      }
    });
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }
}
