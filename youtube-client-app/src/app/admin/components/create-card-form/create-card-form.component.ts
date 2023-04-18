import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { createDateValidator } from 'src/app/shared/custom-validators';
import { Store } from '@ngrx/store';
import * as appActions from 'src/app/redux/actions/app.actions';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-card-form',
  templateUrl: './create-card-form.component.html',
  styleUrls: ['./create-card-form.component.scss'],
})
export default class CreateCardFormComponent implements OnInit {
  createCardForm?: FormGroup;

  constructor(private formBuilder: FormBuilder, private store: Store, private router: Router) {}

  ngOnInit() {
    this.createCardForm = this.formBuilder.group({
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
  }

  submitCreateCardForm(): void {
    if (this.createCardForm?.valid) {
      this.store.dispatch(appActions.createCard({ customCard: this.createCardForm.value }));
      this.router.navigateByUrl('/admin/cards');
    }
  }
}
