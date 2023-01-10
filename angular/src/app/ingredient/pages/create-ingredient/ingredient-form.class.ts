


import { AbstractControl, FormBuilder, FormGroup } from '@angular/forms';
import { FormlyFieldConfig } from '@ngx-formly/core';


export class IngredientForm {
  submitting = false;
  model = {};
  private fb: FormBuilder = new FormBuilder();
  form: FormGroup = this.fb.group({});
  fields: FormlyFieldConfig[] = [
    {
      key: 'name',
      type: 'input',
      props: {
        label: 'Name',
        placeholder: '',
        required: true,
      },
    },
  ];

  get name(): AbstractControl {
    return this.getControlByName('name');
  }

  get validatedForm(): boolean {
    return (
      this.form.dirty && this.form.valid && !this.submitting
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
