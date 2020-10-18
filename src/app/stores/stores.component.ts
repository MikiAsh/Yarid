import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { StoresService } from './stores.service';

@Component({
  selector: 'yrd-stores',
  templateUrl: './stores.component.html',
  styleUrls: ['./stores.component.scss'],
})
export class StoresComponent implements OnInit {
  stores$: Observable<any>;
  constructor(private db: StoresService) {}

  ngOnInit(): void {
    this.stores$ = this.db.getStores();
  }
}
