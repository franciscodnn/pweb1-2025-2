import { Component, signal, computed, inject } from '@angular/core';
import { CliquesSignal } from '../services/cliques-signal/cliques-signal';

// <botao></botao>
@Component({
  selector: 'botao',
  imports: [],
  templateUrl: './botao.html',
  styleUrl: './botao.css'
})
export class Botao {
  protected cliquesSignal: CliquesSignal = inject(CliquesSignal);
  // protected cliques = signal<number>(0);

  protected dblCliques = computed(
    () => this.cliquesSignal.cliques() * 2
  );

  public incrementar() {
    // this.cliques.set( this.cliques() + 1);
    this.cliquesSignal.cliques.update( valor => valor + 1);
  }

}
