import { Component, signal, computed, effect, untracked, WritableSignal, Signal } from '@angular/core';

@Component({
  selector: 'app-root',
  imports: [],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('app-task-manager');
  protected count: WritableSignal<number> = signal(0);

  protected cpf = signal('11122233300');

  protected mascaraCPFNovo = this.cpf.asReadonly();  

  constructor(){
    this.cpf.set('44422233300');
    this.cpf.update( valor => valor.replace('222', '***'));
    // this.mascaraCPFNovo.set('123');

    // efeito de log de mudança do signal cpf
    effect(
      () => console.log(
        `mudança de cpf. Novo valor:${this.cpf()}. mudança de count(). Novo valor: ${untracked(this.count)}`
      ));

    effect(
      () => console.log(
        `mudança de count(). Novo valor:${this.count()}`
      ));
  }

  /*
  protected mascaraCPF = computed(
    () => {
      const cpf = this.cpf();

      return cpf.replace(
        /^(\d{3})(\d{3})(\d{3})(\d{2})$/, 
        "$1.$2.$3-$4"
      );
    }
  );
  */
  

  protected mascara: Signal<string> = computed(
    () => `Mascara ${this.cpf()}`
  );
}
