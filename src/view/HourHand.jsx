import React, { Component } from 'react';
import { computeXY, hour2deg, perc } from '../util';
import { color } from '../settings';

export default class HourHand extends Component {

  render (vnode) {
    const { cx, cy, r, filter } = this.props;
    const rotation = hour2deg(this.props.value);
    const start = computeXY(cx, cy, perc(r, -20), rotation);
    const end = computeXY(cx, cy, perc(r, 67), rotation);
    return <line
      x1={start.x}
      y1={start.y}
      x2={end.x}
      y2={end.y}
      filter={filter}
      stroke={color.hour}
      strokeWidth={perc(r, 10)} />;
  }

}
