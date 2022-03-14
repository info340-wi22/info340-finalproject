import React from 'react';
import { useParams } from 'react-router-dom';
import _ from 'lodash';

export function GoalDetail(props) {
    const goalNameString = useParams();
    console.log(goalNameString);
    const goalArray = props.goals;

    let goal = _.find(goalArray, {name: goalNameString});
    console.log(goal)

    return (
        <div>
          <h2>Goal: {goal.title}</h2>
          <p>Description: {goal.desc}</p>
        </div>
      );
}