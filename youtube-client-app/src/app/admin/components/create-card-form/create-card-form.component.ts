import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-create-card-form',
  templateUrl: './create-card-form.component.html',
  styleUrls: ['./create-card-form.component.scss'],
})
export default class CreateCardFormComponent {
  createCardForm!: FormGroup;

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit() {
    this.createCardForm = this.formBuilder.group({
      title: [
        '',
        {
          validators: [Validators.required, Validators.minLength(3), Validators.maxLength(20)],
        },
      ],
      description: ['', Validators.maxLength(255)],
      imageLink: ['', Validators.required],
      videoLink: ['', Validators.required],
      creationDate: ['', Validators.required],
    });
  }

  // eslint-disable-next-line class-methods-use-this
  submitCreateCardForm(): void {
    if (this.createCardForm.valid) {
      console.log('Card submitted successfully');
    }
  }
}
