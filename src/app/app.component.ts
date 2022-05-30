import { Component } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { ConfigActions } from './store/actions/config.actions';
import { UserActions } from './store/actions/user.actions';
import { selectConfig } from './store/selectors/config.selectors';
import { IAppState } from './store/state/app.state';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'angular-ngrx';
  config$ = this.store.pipe(select(selectConfig));
  user$ = this.store.pipe(select(selectConfig));
  constructor(private store: Store<IAppState>) {}

  ngOnInit() {
    this.store.dispatch(ConfigActions.getConfig());
    this.store.dispatch(UserActions.getUsers());
  }
}
