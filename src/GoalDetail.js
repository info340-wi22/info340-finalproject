import { React, useState } from 'react';
import { useParams, Outlet } from 'react-router-dom';
import _ from 'lodash';

export function GoalDetail(props) {
  
    
    const goalDetail = Object.values(useParams()); 
    console.log(goalDetail);
    < Outlet />
    const goalArray = props.goals;

    let goal = _.find(goalArray, {name: goalDetail});
    console.log(goal);

   
    return (
        <div>
          <h2>Information </h2>
          <p className='p-3'>Tracking your '{goalDetail}' goal can help you hold yourself more accountable and become more aware of your habits! </p>
        </div>
      );
}