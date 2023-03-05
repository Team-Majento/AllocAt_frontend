import { NgForm } from '@angular/forms';

export abstract class FormControlUtil {
  protected isFormValid(formControl: NgForm): boolean {
    formControl.form.markAsDirty();
    formControl.form.markAsTouched();
    Object.keys(formControl.controls).forEach((key) => {
      formControl.controls[key].markAsDirty();
      formControl.controls[key].markAsTouched();
      formControl.controls[key].updateValueAndValidity();
    });
    formControl.form.updateValueAndValidity();
    return formControl.valid ?? false;
  }
}
