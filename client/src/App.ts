import Component from 'src/lib/component';
import { getState } from 'src/lib/observer';

import Header from 'src/components/Header';

import { pageState, isLoggedInState } from 'src/store/page';
import { router } from '..';
import { authorizedRoutes, unauthorizedRoutes } from './configs/routes';

type objType = {
  [key: string]: any;
};

type StateType = {};

export default class App extends Component<StateType, void> {
  constructor() {
    super();
    this.addClass('app');
    this.keys = [pageState, isLoggedInState];
    this.subscribe();
  }

  setTemplate(): string {
    const isLoggedIn = getState(isLoggedInState);
    return `
      ${isLoggedIn ? `<div id="app_header"></div>` : ''}
      <div id="page"></div>
    `;
  }

  setComponents(): objType {
    const { Page } = getState(pageState);
    const isLoggedIn = getState(isLoggedInState);

    if (isLoggedIn) router.setRoutes(authorizedRoutes);
    else router.setRoutes(unauthorizedRoutes);

    return {
      page: new Page(),
      app_header: new Header(),
    };
  }
}

customElements.define('app-drawer', App);
