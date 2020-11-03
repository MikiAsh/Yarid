import { Component, OnInit, OnDestroy } from '@angular/core';
import { StoresService } from '@app/stores/stores.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'Yarid';
  sub: Subscription;
  
  constructor(private storesService: StoresService) {}

  ngOnInit(): void {

  }

}
