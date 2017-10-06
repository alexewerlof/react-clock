import React, { Component } from 'react';
import Face from './Face';
import HourHand from './HourHand';
import MinuteHand from './MinuteHand';
import SecondHand from './SecondHand';
import { perc } from '../util';

const margin = 20;

export default class Clock extends Component {

  constructor(props) {
    super(props);
    this.state = {
      hour: 0,
      minute: 0,
      second: 0
    };
  }

  updateTime() {
    const now = new Date();
    const second = now.getSeconds() + now.getMilliseconds() / 1000;
    const minute = now.getMinutes() + second / 60;
    const hour = now.getHours() + minute / 60;
    this.setState({ hour, minute, second });
  }

  tick() {
    this.intervalId = requestAnimationFrame(() => {
      this.updateTime();
      this.tick();
    });
  }

  componentDidMount() {
    this.tick();
  }

  componentWillUnmount() {
    this.clearInterval(this.intervalId);
  }
  
  render() {
    const width = document.body.clientWidth - margin * 2;
    const height = document.body.clientHeight - margin * 2;
    const cx = width / 2;
    const cy = height / 2;
    const r = Math.min(width, height) / 2;
    return <svg width={width} height={height} style={ {margin: margin}}>
      <defs>
        <filter id='hourShadow' x='-50%' y='-50%' width='200%' height='200%' filterUnits='userSpaceOnUse'>
          <feDropShadow dx='0' dy={perc(r, 1)} stdDeviation='3' floodColor={this.props.shadowColor} floodOpacity='0.5' />
        </filter>
        <filter id='minuteShadow' x='-50%' y='-50%' width='200%' height='200%' filterUnits='userSpaceOnUse'>
          <feDropShadow dx='0' dy={perc(r, 2)} stdDeviation='3' floodColor={this.props.shadowColor} floodOpacity='0.5' />
        </filter>
        <filter id='secondShadow' x='-50%' y='-50%' width='200%' height='200%' filterUnits='userSpaceOnUse'>
          <feDropShadow dx='0' dy={perc(r, 4)} stdDeviation='3' floodColor={this.props.shadowColor} floodOpacity='0.5' />
        </filter>
      </defs>
      <Face cx={cx} cy={cy} r={r} />
      <HourHand cx={cx} cy={cy} r={r} value={this.state.hour} filter='url(#hourShadow)' />
      <MinuteHand cx={cx} cy={cy} r={r} value={this.state.minute} filter='url(#minuteShadow)' />
      <SecondHand cx={cx} cy={cy} r={r} value={this.state.second} filter='url(#secondShadow)' />
    </svg>;
  }

}
