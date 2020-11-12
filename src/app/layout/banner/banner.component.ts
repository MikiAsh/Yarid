import { Component, OnInit } from '@angular/core';
import { DisplayService } from '@app/services/display.service';
import { Store } from '@models/store';
import { Observable } from 'rxjs';

@Component({
  selector: 'yrd-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss']
})
export class BannerComponent implements OnInit {
  store$: Observable<Store>;
  default_back_img_url = '/assets/img/banner.png';
  constructor(private displayService: DisplayService) { }

  ngOnInit(): void {
    this.store$ = this.displayService.banner$.asObservable();
  }

}
