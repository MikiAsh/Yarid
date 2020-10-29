import { Component, OnInit } from '@angular/core';
import {MatDialog, MatDialogConfig} from '@angular/material/dialog';
import { NewStoreComponent } from '@app/dialogs/new-store/new-store.component';
import { StoresService } from '@app/stores/stores.service';

@Component({
  selector: 'yrd-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(public dialog: MatDialog, private storesService: StoresService) {}

  ngOnInit(): void {
  }

  popDialog(): void {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.width = '640px';
    dialogConfig.height = '800px';

    const dialogRef = this.dialog.open(NewStoreComponent, dialogConfig);
    dialogRef.afterClosed().toPromise().then(store => this.createStore(store));
  }

  createStore(store): void {
    this.storesService.createStore(store)
  }

}
