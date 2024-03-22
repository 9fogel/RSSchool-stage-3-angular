import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { createDateValidator } from 'src/app/shared/custom-validators';
import { Store } from '@ngrx/store';
import * as appActions from 'src/app/redux/actions/app.actions';
import { Router } from '@angular/router';

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
    description: [
      '',
      {
        validators: [Validators.required, Validators.maxLength(255)],
      },
    ],
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

  constructor(private formBuilder: FormBuilder, private store: Store, private router: Router) {}

  submitCreateCardForm(): void {
    if (this.createCardForm?.valid) {
      if (
        this.createCardForm.value.title &&
        this.createCardForm.value.description &&
        this.createCardForm.value.imageLink &&
        this.createCardForm.value.videoLink &&
        this.createCardForm.value.creationDate
      ) {
        const formValue = {
          title: this.createCardForm.value.title,
          description: this.createCardForm.value.description,
          imageLink: this.createCardForm.value.imageLink,
          videoLink: this.createCardForm.value.videoLink,
          creationDate: this.createCardForm.value.creationDate,
        };
        this.store.dispatch(appActions.createCard({ customCard: formValue }));
        this.router.navigateByUrl('/admin/cards');
      }
    }
  }
}
