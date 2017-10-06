import React, { Component } from 'react';
import { computeXY, sec2deg, perc } from '../util';
import { color } from '../settings';

export default class SecondHand extends Component {

  render() {
    const { cx, cy, r, filter } = this.props;
    const rotation = sec2deg(this.props.value);
    const start = computeXY(cx, cy, perc(r, -20), rotation);
    const end = computeXY(cx, cy, perc(r, 95), rotation);
    return <g filter={filter}>
      <line
        x1={start.x}
        y1={start.y}
        x2={end.x}
        y2={end.y}
        stroke={color.second}
        strokeWidth={r/40} />
      <circle
        cx={end.x}
        cy={end.y}
        r={r/15}
        fill={color.second} />
      <circle
        cx={cx}
        cy={cy}
        r={r/20}
        fill={color.second} />
    </g>;
  }
}
