
import React, { Component } from 'react';
import Chart from './chart'




class Chart extends Component {
  render() {
    return (
      <div >
        <dl className="chart">

        <dt className="date">2000</dt>
        <dd className="bar" style={{"--start": 56}}>
        <span className="value">45%</span>

        </dd>

        </dl>
      </div>
    );
  }
}

export default Chart;
