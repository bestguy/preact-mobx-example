import React, { Component } from 'react';
import { observer } from 'mobx-react';
import QlockStore from './QlockStore.js';
import styles from './Qlock.css';

const On = ({ children, when }) => <span className={when ? styles.on : ''}>{children}</span>;
On.defaultProps = {
  when: false
};
On.propTypes = {
  children: React.PropTypes.node.isRequired,
  when: React.PropTypes.bool
};

@observer
class Qlock extends Component {
  time = new QlockStore();

  render() {
    const time = this.time;
    return (<pre className={styles.qlock}>
<span className={styles.on}>IT</span>L<span className={styles.on}>IS</span>BFAMPM<br />
<On when={time.quarter}>A</On>C<On when={time.quarter}>QUARTER</On>DC<br />
<On when={time.twentyMinutes}>TWENTY</On>X<On when={time.fiveMinutes}>FIVE</On><br />
<On when={time.half}>HALF</On>B<On when={time.tenMinutes}>TEN</On>F<On when={time.to}>TO</On><br />
<On when={time.past}>PAST</On>ERU<On when={time.h === 9}>NINE</On><br />
<On when={time.h === 1}>ONE</On><On when={time.h === 6}>SIX</On><On when={time.h === 3}>THREE</On><br />
<On when={time.h === 4}>FOUR</On><On when={time.h === 5}>FIVE</On><On when={time.h === 2}>TWO</On><br />
<On when={time.h === 8}>EIGHT</On><On when={time.h === 11}>ELEVEN</On><br />
<On when={time.h === 7}>SEVEN</On><On when={time.h === 0}>TWELVE</On><br />
<On when={time.h === 10}>TEN</On>SE<On when={time.oclock}>OCLOCK</On><br />
<On when={time.oneMinute}>.</On>  <On when={time.twoMinutes}>.</On>  <On when={time.threeMinutes}>.</On>  <On when={time.fourMinutes}>.</On>
</pre>);
  }
}

export default Qlock;
