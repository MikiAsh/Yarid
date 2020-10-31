import { Component, OnInit } from '@angular/core';
import { StoresService } from '../stores/stores.service';
import { Store } from '@models/store';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'yrd-single-store',
  templateUrl: './single-store.component.html',
  styleUrls: ['./single-store.component.scss']
})
export class SingleStoreComponent implements OnInit {

  constructor(private db: StoresService, private route: ActivatedRoute) {}

  ngOnInit(): void {
    const storeId = this.route.snapshot.paramMap.get('id');
    console.log('route id', storeId);
  }

}
