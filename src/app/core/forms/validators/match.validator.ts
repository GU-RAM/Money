import {
  AbstractControl,
  FormGroup,
  ValidationErrors,
  ValidatorFn,
} from '@angular/forms';

export function matchValidator(field: string, matchField: string): ValidatorFn {
  return (formGroup: AbstractControl): ValidationErrors | null => {
    const fieldValue = (formGroup as FormGroup).controls[field].value;
    const matchFieldValue = (formGroup as FormGroup).controls[matchField].value;

    if (!fieldValue || !matchFieldValue) {
      return null;
    }

    return fieldValue !== matchFieldValue ? { notMatch: true } : null;
  };
}
