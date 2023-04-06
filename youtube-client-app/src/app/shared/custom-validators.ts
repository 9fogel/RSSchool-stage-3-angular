import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

export function createPasswordValidator(): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const PSW_VALUE = control.value;

    if (!PSW_VALUE) {
      return null;
    }

    const HAS_ENOUGH_LENGTH = PSW_VALUE.length >= 8;

    const HAS_UPPERCASE = /[A-Z]+/.test(PSW_VALUE);

    const HAS_LOWERCASE = /[a-z]+/.test(PSW_VALUE);

    const HAS_NUMBERS = /[0-9]+/.test(PSW_VALUE);

    const HAS_SPECIAL_CHARS = /[!@#?\]]/.test(PSW_VALUE);

    const IS_VALID =
      HAS_ENOUGH_LENGTH && HAS_UPPERCASE && HAS_LOWERCASE && HAS_NUMBERS && HAS_SPECIAL_CHARS;

    return IS_VALID ? null : { isPasswordStrong: true };
  };
}

export function createDateValidator(): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const DATE_VALUE = Date.parse(control.value);
    const TODAY = Date.now();

    const IS_VALID = TODAY >= DATE_VALUE;

    return IS_VALID ? null : { isDateValid: true };
  };
}
