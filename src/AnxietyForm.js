import React from 'react'

class AnxietyForm extends React.Component {
  state = {
    content: '',
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

handleSubmit = (e, obj, user) => {
  const newEvent = {...obj, user_id: user.id}
  e.preventDefault()

  fetch('http://localhost:3001/events', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    },
    body: JSON.stringify({event: newEvent})
    })
    .then(res => res.json())
    .then(data => {
    debugger
    // CONNECT TO GRAPH HERE!
  })
}

  render(){
    return (
      <div>
        <form onSubmit={(e) => this.handleSubmit(e, this.state, this.props.user)}>
        <h3>What was your biggest cause of anxiety today?</h3>
        <input type="text" name="content" placeholder="Anxiety" onChange={this.dailyChangeHandler} value={this.state.anxietyType}/>
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
