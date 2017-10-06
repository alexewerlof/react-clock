import React, { Component } from 'react';
import Indicator from './Indicator';
import { min2deg, perc } from '../util';
import { color } from '../settings';

export default class Face extends Component {

  render() {
    const { cx, cy, r } = this.props;
    const children = [];
    for (let i = 0; i < 60; i++) {
      if (i % 5) {
        // the little ones
        children.push(<Indicator
          key={i}
          cx={cx}
          cy={cy}
          r={r}
          length={perc(r, 12)}
          width={perc(r, 2.7)}
          rotation={min2deg(i)}
        />);
      } else {
        // the big ones
        children.push(<Indicator
          key={i}
          cx={cx}
          cy={cy}
          r={r}
          length={perc(r, 25)}
          width={perc(r, 6)}
          rotation={min2deg(i)}
        />);
      }
    }
    return <g>
      <circle cx={cx} cy={cy} r={r} fill={color.face} />
      {children};
      </g>;
  }
}
