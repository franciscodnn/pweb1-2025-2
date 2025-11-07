import { Component, inject, input, output, model } from '@angular/core';

import { FormBuilder, ReactiveFormsModule, FormGroup, FormControl } from '@angular/forms';
import { DataApi } from '../core/services/data-api';

import { JsonPipe } from '@angular/common';

import { Validators } from '@angular/forms';

@Component({
  selector: 'app-form-modal',
  imports: [ReactiveFormsModule, JsonPipe],
  templateUrl: './form-modal.html',
  styleUrl: './form-modal.css',
})
export class FormModal {
  dataApi = inject(DataApi);
  formBuilder = inject(FormBuilder);
  showModal = input(false);
  outputModal = output<boolean>();

  modelModal = model(false);

  // form = new FormGroup({
  //   title: new FormControl('', Validators.required),
  //   due: new FormControl('', Validators.required),
  //   level: new FormControl('', Validators.required),
  //   desc: new FormControl('', Validators.required)
  // });

  form = this.formBuilder.group({
    title: ['', Validators.required],
    due: ['', Validators.required],
    level: ['', Validators.required],
    desc: ['', Validators.required]
  });

  get title() { return this.form.get('title'); }

  closeModal() {
    // this.showModal.set(false);
    this.modelModal.set(false);
    
    this.outputModal.emit(false);
  }

  handleSubmit() {
    // console.log('Submissão realizada!');
    console.log(this.form.value);
    console.log();
    
    this.dataApi.insert(
      this.form.get('title')?.value as string, 
      this.form.get('due')?.value as string,
      this.form.get('level')?.value as string,
      this.form.get('desc')?.value as string
    );

    this.closeModal();
  }
}
