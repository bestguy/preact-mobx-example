import { computed, observable } from 'mobx';

export default class Qlock {
  constructor() {
    setInterval(() => this.now = new Date(), 3000);
  }

  @observable now = new Date();

  @computed get m() {
    return this.now.getMinutes();
  }
  @computed get h() {
    return (this.now.getHours() + (this.m >= 40 ? 1 : 0)) % 12;
  }

  @computed get past() {
    return this.m >= 5 && this.m < 35;
  }

  @computed get to() {
    return this.m >= 35;
  }

  @computed get oclock() {
    return this.m >= 0 && this.m < 5;
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
    return (this.m >= 5 && this.m < 10) ||
           (this.m >= 55) ||
           (this.m >= 25 && this.m < 30) ||
           (this.m >= 35 && this.m < 40);
  }

  @computed get tenMinutes() {
    return (this.m >= 10 && this.m < 15) ||
           (this.m >= 50 && this.m < 55);
  }

  @computed get quarter() {
    return (this.m >= 15 && this.m < 20) ||
           (this.m >= 45 && this.m < 50);
  }

  @computed get twentyMinutes() {
    return (this.m >= 20 && this.m < 30) ||
           (this.m >= 35 && this.m < 45);
  }

  @computed get half() {
    return (this.m >= 30 && this.m < 35);
  }
}