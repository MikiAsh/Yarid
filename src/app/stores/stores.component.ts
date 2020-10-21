import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { StoresService } from './stores.service';
import { Store } from '@models/store';

@Component({
  selector: 'yrd-stores',
  templateUrl: './stores.component.html',
  styleUrls: ['./stores.component.scss'],
})
export class StoresComponent implements OnInit {
  stores$: Observable<Store[]>;
  constructor(private db: StoresService) {}

  ngOnInit(): void {
    this.stores$ = this.db.getStores();
  }
}
