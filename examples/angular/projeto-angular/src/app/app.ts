import { Component, signal, DOCUMENT, inject } from '@angular/core';
import { Botao } from './botao/botao';
import { CliquesSignal } from './services/cliques-signal/cliques-signal';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  imports: [Botao],
  styles: `
    h1 {
      color: red;
    }
  `
  // styleUrl: './app.css'
})
export class App {
  protected cliquesSignal: CliquesSignal = inject(CliquesSignal);

  protected readonly title = signal('projeto-angular');
  private window: Window;
  protected documentRef: Document = inject(DOCUMENT);

  protected aula:number = 1;

  constructor() {
    this.window = this.documentRef.defaultView as Window;
  }

  showWindowDetails() {
    this.window.alert(`
      ${this.window.innerHeight}px x ${this.window.innerWidth}px
      `);    
  }
}
