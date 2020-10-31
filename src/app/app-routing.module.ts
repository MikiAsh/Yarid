import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StoresComponent } from 'app/stores/stores.component';

const routes: Routes = [
  { path: '', redirectTo: '/stores', pathMatch: 'full' },
  { path: 'stores', component: StoresComponent },
  { path: 'store/:id', loadChildren: () => import('./single-store/single-store.module').then(m => m.SingleStoreModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
