import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

export function valueLengthValidator(valueLength: number): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const value = control.value;

    if (!value) {
      return null;
    }

    const valuedValid = value.length === valueLength;

    return !valuedValid ? { incorrectLength: { ka: `საჭიროა ${valueLength} სიმბოლო` } } : null;
  };
}
