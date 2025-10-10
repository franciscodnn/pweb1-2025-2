import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CliquesSignal {
  public cliques = signal<number>(0);
}
