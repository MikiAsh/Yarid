import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Store } from '@models/store';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class StoresService {
  constructor(private db: AngularFirestore) {}
  
  getStores(): Observable<Store[]> {
    return this.db.collection('stores').valueChanges() as Observable<Store[]>;
  }

  createStore(store: Store) {
    return this.db.collection('stores').add(store).then(result => 
      res => {}, 
      err => console.log('Creating store failed', err)
      );
  }
}
