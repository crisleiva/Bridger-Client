import React from 'react'
import AnxietyForm from './AnxietyForm'
import DailyGraph from './DailyGraph'

const DashBoard = (props) => {
<<<<<<< HEAD

=======
  console.log(props, 'dash')
>>>>>>> seann
  return (
    <div>
      <AnxietyForm user={props.user}/>
      <DailyGraph user={props.user}/>
    </div>
  )

}

export default DashBoard;
