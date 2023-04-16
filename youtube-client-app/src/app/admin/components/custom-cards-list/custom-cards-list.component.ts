import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { getCustomCards } from 'src/app/redux/selectors/app.selectors';

@Component({
  selector: 'app-custom-cards-list',
  templateUrl: './custom-cards-list.component.html',
  styleUrls: ['./custom-cards-list.component.scss'],
})
export default class CustomCardsListComponent {
  cards$ = this.store.select(getCustomCards);

  constructor(private store: Store) {}
}
