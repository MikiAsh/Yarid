import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StoresComponent } from 'app/stores/stores.component';
import { SingleStoreComponent } from 'app/single-store/single-store.component';

const routes: Routes = [
  { path: '', redirectTo: '/stores', pathMatch: 'full' },
  { path: 'stores', component: StoresComponent },
  { path: 'store', component: SingleStoreComponent },
  // { path: 'store/:id', component: SingleStoreComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
