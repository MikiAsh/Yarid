import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SingleStoreComponent } from './single-store.component';

const routes: Routes = [
  { path: '', component: SingleStoreComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SingleStoreRoutingModule { }
