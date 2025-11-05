import { Component, input, model, output } from '@angular/core';

@Component({
  selector: 'app-form-modal',
  imports: [],
  templateUrl: './form-modal.html',
  styleUrl: './form-modal.css',
})
export class AppFormModal {
  statusModal = input(false);
  modalClose = output<boolean>();

  modal = model(false);

  closeModal() {
    this.modalClose.emit(false);
  }

  close() {
    this.modal.set(false);
  }

}
