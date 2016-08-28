import Qlock from './qlock.js';
import QlockStore from './qlock_store.js';
import React from 'react';
import { render } from 'react-dom';

import './main.css';

const store = new QlockStore();

render(<Qlock time={store} />, document.getElementById('main'));

if (module.hot) {
  module.hot.accept();
}
