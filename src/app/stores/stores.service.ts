import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Store } from '@models/store';
import { Observable, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class StoresService {
  selectedStore$ = new BehaviorSubject<Store>(null);

  constructor(private db: AngularFirestore) {}
  
  getStores(): Observable<Store[]> {
    return this.db.collection('stores').valueChanges({ idField: 'id' }) as Observable<Store[]>;
  }

  getStore(id: string): Observable<Store> {
    return this.db.collection('stores').doc(id).valueChanges() as Observable<Store>;
  }

  createStore(store: Store) {
    return this.db.collection('stores').add(store).then(result => 
      res => {}, 
      err => console.log('Creating store failed', err)
      );
  }
}
