import { Component, Input } from '@angular/core';
import { INewCard } from 'src/app/redux/state.models';

@Component({
  selector: 'app-custom-card',
  templateUrl: './custom-card.component.html',
  styleUrls: ['./custom-card.component.scss'],
})
export default class CustomCardComponent {
  @Input() customCard: INewCard = {} as INewCard;
}
