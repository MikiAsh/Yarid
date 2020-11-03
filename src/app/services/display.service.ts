import { Injectable } from '@angular/core';
import { MenuEntry } from '@models/menu-entry';
import { BehaviorSubject } from 'rxjs';
import { Store } from '@models/store';

@Injectable({
  providedIn: 'root'
})
export class DisplayService {
  menu$ = new BehaviorSubject<MenuEntry[]>(null);
  banner$ = new BehaviorSubject<Store>(null);
  constructor() { }
}
