import React from 'react'
import AnxietyForm from './AnxietyForm'
import DailyGraph from './DailyGraph'

const DashBoard = (props) => {
  
  return (
    <div>
      <AnxietyForm user={props.user}/>
      <DailyGraph user={props.user}/>
    </div>
  )

}

export default DashBoard;
