import { Component, inject, input, output, model } from '@angular/core';

import { FormBuilder, ReactiveFormsModule, FormGroup, FormControl } from '@angular/forms';
import { DataApi } from '../core/services/data-api';

import { Validators, ValidatorFn, ValidationErrors, AbstractControl } from '@angular/forms';
import { ApiRest } from '../core/services/api-rest-supabase/api-rest';

import { Task } from '../core/services/data-api';

import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-form-modal',
  imports: [ReactiveFormsModule],
  templateUrl: './form-modal.html',
  styleUrl: './form-modal.css',
})
export class FormModal {
  dataApi = inject(DataApi);
  formBuilder = inject(FormBuilder);
  outputModal = output<boolean>();

  modelModal = model(false);

  private route = inject(ActivatedRoute);
  private router = inject(Router);

  constructor(private apiRest: ApiRest) {
    this.route.queryParams.subscribe(
      params => {
        if(params['showmodal'] && 
          params['showmodal'] === 'true'){
            this.modelModal.set(true);
            return;
          }
        this.modelModal.set(false);
        // this.router.navigate(['/tasks']);
        console.log(params)
      }
    );
  }

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
    description: ['', [onlyNumbersValidator(), Validators.required, Validators.minLength(5)]]
  });

  get title() { return this.form.get('title'); }
  get due() { return this.form.get('due'); }
  get level() { return this.form.get('level'); }
  get desc() { return this.form.get('desc'); }

  closeModal() {
    // this.showModal.set(false);
    this.modelModal.set(false);
    
    this.outputModal.emit(!this.outputModal);

    this.router.navigate(['/tasks']);
  }

  handleSubmit() {
    // console.log('Submissão realizada!');
    console.log(this.form.value);
    console.log();

    const task: Task = {
      title: this.form.get('title')?.value as string,
      due: this.form.get('due')?.value as string,
      level: this.form.get('level')?.value as 'low' | 'medium' | 'high',
      description: this.form.get('description')?.value as string,
      status: 'todo'
    };

    this.apiRest.createTask(task).subscribe({
      next: data => console.log('Task cadastrada'),
      error: error => console.log(error)
    });
    /*
    this.dataApi.insert(
      this.form.get('title')?.value as string, 
      this.form.get('due')?.value as string,
      this.form.get('level')?.value as string,
      this.form.get('desc')?.value as string
    );
    */
    this.closeModal();
  }
}

export function onlyNumbersValidator(): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const descValue = control.value;
    if (!descValue) return null;
    
    // Lógica simplificada de validação de CPF
    const regex = /[a-zA-Z]/;
    // 123abc5
    const valid = regex.test(descValue);
    
    return valid ? null : { onlyNumbers: true };
  };
}