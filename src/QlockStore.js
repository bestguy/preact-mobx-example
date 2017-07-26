import { computed, observable } from 'mobx';

const between = (t, min, max) => t >= min && t < max;

export default class Qlock {
  constructor() {
    setInterval(() => this.now = new Date(), 3000);
  }

  @observable now = new Date();

  @computed get m() {
    return this.now.getMinutes();
  }
  @computed get h() {
    return (this.now.getHours() + (this.m >= 35 ? 1 : 0)) % 12;
  }

  @computed get past() {
    return between(this.m, 5, 35);
  }

  @computed get to() {
    return this.m >= 35;
  }

  @computed get oclock() {
    return between(this.m, 0, 5);
  }

  @computed get oneMinute() {
    return this.m % 5 >= 1;
  }

  @computed get twoMinutes() {
    return this.m % 5 >= 2;
  }

  @computed get threeMinutes() {
    return this.m % 5 >= 3;
  }

  @computed get fourMinutes() {
    return this.m % 5 >= 4;
  }

  @computed get fiveMinutes() {
    return between(this.m, 5, 10) ||
           (this.m >= 55) ||
           between(this.m, 25, 30) ||
           between(this.m, 35, 40);
  }

  @computed get tenMinutes() {
    return between(this.m, 10, 15) ||
           between(this.m, 50, 55);
  }

  @computed get quarter() {
    return between(this.m, 15, 20) ||
           between(this.m, 45, 50);
  }

  @computed get twentyMinutes() {
    return between(this.m, 20, 30) ||
           between(this.m, 35, 45);
  }

  @computed get half() {
    return between(this.m, 30, 35);
  }
}
