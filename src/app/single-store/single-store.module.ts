import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SingleStoreRoutingModule } from './single-store-routing.module';
import { SingleStoreComponent } from './single-store.component';


@NgModule({
  declarations: [
    SingleStoreComponent,
  ],
  imports: [
    CommonModule,
    SingleStoreRoutingModule,
  ]
})
export class SingleStoreModule { }
