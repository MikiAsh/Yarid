import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { MatDialogRef} from '@angular/material/dialog';
import { Store } from '@models/store';
@Component({
  selector: 'yrd-new-store',
  templateUrl: './new-store.component.html',
  styleUrls: ['./new-store.component.scss']
})
export class NewStoreComponent implements OnInit {

  newStoreForm: FormGroup = this.formBuilder.group({
    name: ['', Validators.required],
    desc: [''],
    city: [''],
    email: ['', Validators.required],
  });
  constructor(public dialogRef: MatDialogRef<NewStoreComponent>, private formBuilder: FormBuilder) { }

  ngOnInit(): void {
  }

  onSubmit() {
    if (this.newStoreForm.invalid) {
      return;
    }

    const store: Store = { ...this.newStoreForm.value };
    this.dialogRef.close(store);
  }

}
