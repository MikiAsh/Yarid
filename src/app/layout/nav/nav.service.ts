import { Injectable } from '@angular/core';
import { MenuEntry } from '@models/menu-entry';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NavService {
  menu$ = new BehaviorSubject<MenuEntry[]>(null);
  constructor() { }
}
