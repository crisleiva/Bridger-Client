import React from 'react'

class DailyGraph extends React.Component {
  state = {
    anxieties: [],
    displayedChart: ""
  }
  //displayedChart correctly renders the value of the option form which will be an anxiety from anxieties
  componentDidMount(){
    this.setState({
      anxieties: []
    }, () => console.log(this.props, 'graph'))
  }

  renderChart = (e) => {
    this.setState({
      displayedChart: e.target.value
    }, () => console.log(this.state))
  }

  render(){
    let anxieties = this.state.anxieties.map(anxiety => {
      return <option name={anxiety}>{anxiety}</option>
    })
    //this select form works!!! grabs each anxiety from state and renders an option on the form
    return ( <div>
      {this.state.anxieties.length !== 0 ? <div>
        <h3>Select your anxiety</h3>
        <select onChange={this.renderChart}>
          {anxieties}
        </select>
      </div> : "No anxieties listed yet"}
      </div>
    )
  }
}

export default DailyGraph;
