import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { StoresService } from './stores.service';
import { Store } from '@models/store';
import { DisplayService } from '@app/services/display.service';
import { navData } from '@config/nav-menu';

@Component({
  selector: 'yrd-stores',
  templateUrl: './stores.component.html',
  styleUrls: ['./stores.component.scss'],
})
export class StoresComponent implements OnInit {
  stores$: Observable<Store[]>;
  constructor(private storesService: StoresService, private navService: DisplayService) {}

  ngOnInit(): void {
    this.stores$ = this.storesService.getStores();
    this.navService.menu$.next(navData);
  }
}
