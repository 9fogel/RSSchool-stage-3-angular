import { Component } from '@angular/core';
import { AbstractControl, FormBuilder, Validators } from '@angular/forms';
import { createDateValidator } from 'src/app/shared/custom-validators';

@Component({
  selector: 'app-create-card-form',
  templateUrl: './create-card-form.component.html',
  styleUrls: ['./create-card-form.component.scss'],
})
export default class CreateCardFormComponent {
  createCardForm = this.formBuilder.group({
    title: [
      '',
      {
        validators: [Validators.required, Validators.minLength(3), Validators.maxLength(20)],
      },
    ],
    description: ['', Validators.maxLength(255)],
    imageLink: [
      '',
      {
        validators: [
          Validators.required,
          Validators.pattern('(https?://)?([\\da-z.-]+)\\.([a-z.]{2,6})[/\\w .-]*/?'),
        ],
      },
    ],
    videoLink: [
      '',
      {
        validators: [
          Validators.required,
          Validators.pattern('(https?://)?([\\da-z.-]+)\\.([a-z.]{2,6})[/\\w .-]*/?'),
        ],
      },
    ],
    creationDate: [
      '',
      {
        validators: [Validators.required, createDateValidator()],
      },
    ],
  });

  constructor(private formBuilder: FormBuilder) {}

  get title(): AbstractControl<string | null> | null {
    return this.createCardForm.get('title');
  }

  get description(): AbstractControl<string | null> | null {
    return this.createCardForm.get('description');
  }

  get imageLink(): AbstractControl<string | null> | null {
    return this.createCardForm.get('imageLink');
  }

  get videoLink(): AbstractControl<string | null> | null {
    return this.createCardForm.get('videoLink');
  }

  get creationDate(): AbstractControl<string | null> | null {
    return this.createCardForm.get('creationDate');
  }

  submitCreateCardForm(): void {
    if (this.createCardForm?.valid) {
      console.log('Card submitted successfully');
    }
  }
}
