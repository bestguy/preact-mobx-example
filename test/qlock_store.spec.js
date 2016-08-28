/* eslint-env mocha */

import assert from 'assert';
import QlockStore from '../src/qlock_store.js';

describe('QlockStore', () => {
  const store = new QlockStore();
  const now = new Date(2016, 8, 15, 3 /*hours*/, 15 /*min*/);

  it('should be same time as the Date set', () => {
    store.now = now;
    assert.equal(now, store.now);
    assert.equal(store.h, now.getHours());
    assert.equal(store.m, now.getMinutes());
  });

  it('should show correct quarter', () => {
    for (let minutes = 0; minutes < 60; minutes++) {
      store.now = new Date(2016, 8, 15, 3 /*hours*/, minutes /*min*/);
      assert.equal(store.quarter,
                   (minutes >= 15 && minutes < 20) || (minutes >= 45 && minutes < 50));
    }
  });

  it('should show correct half', () => {
    for (let minutes = 0; minutes < 60; minutes++) {
      store.now = new Date(2016, 8, 15, 3 /*hours*/, minutes /*min*/);
      assert.equal(store.half, minutes >= 30 && minutes < 35);
    }
  });

  it('should show correct minutes', () => {
    for (let minutes = 0; minutes < 60; minutes++) {
      store.now = new Date(2016, 8, 15, 3 /*hours*/, minutes /*min*/);
      assert.equal(store.oneMinute, minutes % 5 >= 1);
      assert.equal(store.twoMinutes, minutes % 5 >= 2);
      assert.equal(store.threeMinutes, minutes % 5 >= 3);
      assert.equal(store.fourMinutes, minutes % 5 >= 4);
    }
  });

  it('should show correct hours', () => {
    for (let hours = 0; hours < 24; hours++) {
      store.now = new Date(2016, 8, 15, hours /*hours*/, 15 /*min*/);
      assert.equal(store.h, hours % 12);
    }
  });
});
