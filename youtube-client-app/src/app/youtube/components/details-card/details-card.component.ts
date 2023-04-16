import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import * as appActions from 'src/app/redux/actions/app.actions';
import { Store } from '@ngrx/store';
import { getVideoById } from 'src/app/redux/selectors/app.selectors';

@Component({
  selector: 'app-details-card',
  templateUrl: './details-card.component.html',
  styleUrls: ['./details-card.component.scss'],
})
export default class DetailsCardComponent implements OnInit, OnDestroy {
  searchItem$ = this.store.select(getVideoById);

  private id = '';

  private subscription?: Subscription;

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private store: Store,
  ) {}

  ngOnInit(): void {
    this.id = this.activatedRoute.snapshot.params['id'];
    this.store.dispatch(appActions.requestVideoById({ value: this.id }));

    if (!this.searchItem$) {
      this.router.navigate(['**']);
    }
  }

  ngOnDestroy(): void {
    this.subscription?.unsubscribe();
  }

  returnToMainPage(): void {
    this.router.navigate(['youtube']);
  }
}
