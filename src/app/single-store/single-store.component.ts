import { Component, OnInit, OnDestroy } from '@angular/core';
import { StoresService } from '../stores/stores.service';
import { Store } from '@models/store';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'yrd-single-store',
  templateUrl: './single-store.component.html',
  styleUrls: ['./single-store.component.scss']
})
export class SingleStoreComponent implements OnInit, OnDestroy {
  store: Store;
  sub: Subscription;
  constructor(private storesService: StoresService, private route: ActivatedRoute) {}

  ngOnInit(): void {
    const storeId = this.route.snapshot.paramMap.get('id');
    this.sub = this.storesService.getStore(storeId).subscribe(data => {
      this.store = data; 
      this.storesService.selectedStore$.next(data)
    });
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }

}
