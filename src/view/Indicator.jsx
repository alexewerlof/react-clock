import React, { Component } from 'react';
import { computeXY, perc } from '../util';
import { color } from '../settings';

export default class Indicator extends Component {

  render() {
    const { cx, cy, rotation, r, width, length } = this.props;
    const start = computeXY(cx, cy, r - length, rotation);
    const end = computeXY(cx, cy, perc(r, 95), rotation);
    return <line
      x1={start.x}
      y1={start.y}
      x2={end.x}
      y2={end.y}
      stroke={color.indicator}
      strokeWidth={width} />;
    }
}