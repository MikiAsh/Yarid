import { Component, OnInit } from '@angular/core';
import {MatDialog, MatDialogConfig} from '@angular/material/dialog';
import { NewStoreComponent } from '@app/dialogs/new-store/new-store.component';

@Component({
  selector: 'yrd-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(public dialog: MatDialog) {}

  ngOnInit(): void {
  }

  popDialog(): void {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.width = '640px';
    dialogConfig.height = '800px';

    const dialogRef = this.dialog.open(NewStoreComponent, dialogConfig);
    // dialogRef.afterClosed().subscribe(result => {
    //   console.log(`Dialog result: ${result}`);
    // });
  }

}
