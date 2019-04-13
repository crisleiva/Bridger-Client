import React from 'react'

class AnxietyForm extends React.Component {
  state = {
    anxietyType: '',
    anxietyRating: '',
    sleep: '',
    diet: '',
    socialActivity: ''
  }

dailyChangeHandler = (e) => {
  this.setState({
    [e.target.name]: e.target.value
  })
}

handleSubmit = (obj, e) => {
  e.preventDefault()
  fetch('http://localhost:3001/events', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    },
    body: JSON.stringify({
      events: obj
    })
    .then(res => res.json())
    .then(data => console.log(data))
  })
}

  render(){
    return (
      <div>
        <form onSubmit={(e) => this.handleSubmit(this.state, e)}>
        <h3>What was your biggest cause of anxiety today?</h3>
        <input type="text" name="anxietyType" placeholder="Anxiety" onChange={this.dailyChangeHandler} value={this.state.anxietyType}/>
        <h3>On a scale of 1-10 how bad was it today?</h3>
        <input type="text" name="anxietyRating" placeholder="1-10" onChange={this.dailyChangeHandler} value={this.state.anxietyRating}/>
        <h3>On a scale of 1-10 how content are you with the amount of sleep you got last night?</h3>
        <input type="text" name="sleep" placeholder="1-10" onChange={this.dailyChangeHandler} value={this.state.sleep}/>
        <h3>On a scale of 1-10 how content are you with your diet today?</h3>
        <input type="text" name="diet" placeholder="1-10" onChange={this.dailyChangeHandler} value={this.state.diet}/>
        <h3>On a scale of 1-10 how much social activity did you have today?</h3>
        <input type="text" name="socialActivity" placeholder="1-10" onChange={this.dailyChangeHandler} value={this.state.socialActivity}/>
        <input type="submit" value="Submit your daily data"/>
        </form>
      </div>
    )
  }
}

export default AnxietyForm;
