import { Component, OnInit, OnDestroy } from '@angular/core';
import { StoresService } from '../stores/stores.service';
import { Store } from '@models/store';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { clone } from '@app/utils/util';
import { MenuEntry } from '@app/models/menu-entry';
import { DisplayService } from '@app/services/display.service';
import { emptyMenuDefault } from '@config/nav-menu';

@Component({
  selector: 'yrd-single-store',
  templateUrl: './single-store.component.html',
  styleUrls: ['./single-store.component.scss']
})
export class SingleStoreComponent implements OnInit, OnDestroy {
  store: Store;
  sub: Subscription;
  constructor(private storesService: StoresService, private route: ActivatedRoute, private displayService: DisplayService) {}

  ngOnInit(): void {
    const storeId = this.route.snapshot.paramMap.get('id');
    this.sub = this.storesService.getStore(storeId).subscribe(data => {
      this.store = clone(data); 
      this.storesService.selectedStore$.next(data);
      this.populateNavMenu(data);
    });
  }

  populateNavMenu(store: Store): void {
    let menuEntries: MenuEntry[];

    if (store.tags) {
      menuEntries = store.tags.map(tag => ({displayName: tag}));
      this.displayService.menu$.next(menuEntries);
    }
    else {
      this.displayService.menu$.next(emptyMenuDefault);
    }
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }

}
