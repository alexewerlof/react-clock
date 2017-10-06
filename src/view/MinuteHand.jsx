import React, { Component } from 'react';
import { computeXY, min2deg, perc } from '../util';
import { color } from '../settings';

export default class MinuteHand extends Component {

  render(vnode) {
    const { cx, cy, r, filter } = this.props;
    const rotation = min2deg(this.props.value);
    const start = computeXY(cx, cy, perc(r, -20), rotation);
    const end = computeXY(cx, cy, perc(r, 88), rotation);
    return <line
      x1={start.x}
      y1={start.y}
      x2={end.x}
      y2={end.y}
      filter={filter}
      stroke={color.minute}
      strokeWidth={r/16} />;
  }
}
