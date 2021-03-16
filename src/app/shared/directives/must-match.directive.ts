import { Directive, Input } from '@angular/core';
import { AbstractControl, FormGroup, NG_VALIDATORS, ValidationErrors, Validator } from '@angular/forms';

@Directive({
  selector: '[mustMatch]',
  providers:[
    {provide:NG_VALIDATORS, useExisting:MustMatchDirective, multi:true }
  ]
})
export class MustMatchDirective implements Validator {

  @Input("mustMatch") mustMatch: string[] = [];

  constructor() { }
  validate(formGroup: FormGroup): ValidationErrors {
    let c1 = formGroup.controls[this.mustMatch[0]];
    let c2 = formGroup.controls[this.mustMatch[1]];
    if (!c1 || !c2) {
      return null;
    }

    if (c2.errors && !c2.errors.match) {
      return null;
    }

    if (c1.value !== c2.value) {
      c2.setErrors({ match: true });
    } else {
      c2.setErrors(null);
    }
  }

}
