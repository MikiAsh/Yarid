import { Injectable } from '@angular/core';
import { MenuEntry } from '@models/menu-entry';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DisplayService {
  menu$ = new BehaviorSubject<MenuEntry[]>(null);
  constructor() { }
}
