

import {
  AbstractControl,
  FormBuilder,
  FormGroup,
  Validators
} from '@angular/forms';

import { FormlyFieldConfig } from '@ngx-formly/core';


export class CreateMedicineForm {
  submitting = false;

  /* Expiration form. */
  private fb: FormBuilder = new FormBuilder();
  private expirationSkeleton = {
    expirationDate: [null, Validators.required],
  };
  form: FormGroup = this.fb.group(this.expirationSkeleton);
  model = {};
  fields: FormlyFieldConfig[] = [
    {
      key: 'name',
      type: 'input',
      props: {
        label: 'Nombre',
        placeholder: '',
        required: true,
      },
    },
    {
      key: 'posology',
      type: 'input',
      props: {
        label: 'Posología',
        placeholder: '',
        required: true,
      },
    },
    {
      key: 'stock',
      type: 'number',
      props: {
        label: 'Stock',
        placeholder: '',
        required: true,
      },
    },
    /* {
      key: 'select',
      type: 'select',
      props: {
        label: 'Select',
        placeholder: 'Select placeholder',
        required: true,
        options: [
          { label: 'Option 1', value: '1' },
          { label: 'Option 2', value: '2' },
          { label: 'Option 3', value: '3' },
        ],
      },
    }, */
  ];


  get name(): AbstractControl {
    return this.getControlByName('name');
  }

  get posology(): AbstractControl {
    return this.getControlByName('posology');
  }

  get expirationDate(): AbstractControl {
    return this.getControlByName('expirationDate');
  }

  get validatedForm(): boolean {
    return (
      this.form.dirty && this.form.valid && this.expirationDate.value && this.expirationDate.valid && !this.submitting
    );
  }

  getControlByName(controlName: string): AbstractControl {
    let control: any;
    if (controlName && this.form?.controls) {
      control = this.form.get(controlName);
    }
    return control;
  }
}
