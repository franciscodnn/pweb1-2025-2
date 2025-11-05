import { Component, signal, inject } from '@angular/core';

import { UpperCasePipe } from '@angular/common';
import { ValorMaskPipe } from './core/pipes/valor-mask-pipe';

import { DataApi, Task } from './core/services/data-api';

import { TaskCard } from './task-card/task-card';

import { AppFormModal } from './new.form-modal/form-modal';


@Component({
  selector: 'app-root',
  imports: [TaskCard, AppFormModal, UpperCasePipe, ValorMaskPipe],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly tasks = inject(DataApi).load();
  protected showModal = signal(false);

  protected teste = "teste";

  protected lista = signal<string[]>(['valor1', 'valor2', 'valor3']);

  constructor() {
    this.teste = "teste2";
  }

  openModal() {
    this.showModal.set(true);
    this.teste = "teste3";
  }

  closeModal() {
    this.showModal.set(false);
  }

  onCardClicked(message: string) {
    console.log('Card clicked with message: ' + message);
  }
}
