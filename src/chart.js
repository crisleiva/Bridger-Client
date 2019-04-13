import React, {Component} from "react"

class Chart extends Component{
  render(){
    return(
      <dl class="chart">

        <dt class="date">2000</dt>
        <dd class="bar" style="--start: 56;">
          <span class="value">45%</span>
        </dd>

      </dl>
    )
  }
}

export default Chart
