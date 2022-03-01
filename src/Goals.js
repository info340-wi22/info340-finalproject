import React, { useState } from 'react';
// Our apps interactivity for the REACT draft can be found below
export function GoalHeader() {
    return (
        <div className="jumbo-bg jumbotron jumbotron-fluid bg-dark text-white">
            <div className="container">
                <h1>Goal Tracker</h1>
                <p className="h5">Today's date is 02/03/22</p>
                <p className="lead">Have you been meeting your goals? </p>
            </div>
        </div>
    )
}

function GoalCard(props) {
    const [status, setStatus] = useState(false);

    const handleYes = (event) => {
        props.adoptCallback(props.goal.title);
        setStatus(true);
    }

    const handleNo = (event) => {
        setStatus(false);
    }

    return (
        <div className={status ? "goal-complete":"goal"}>
            <div className="goal-type">
                <link href="https://fonts.googleapis.com/icon?family=Material+Icons+Outlined" rel="stylesheet"></link>
                <span className="material-icons-outlined">{props.goal.type}</span>
            </div>
            <div className="goal-content">
                <h2 className="goal-title">{props.goal.title}</h2>
                <p className="card-text">{props.goal.desc} </p>
                <b>{status ? 'COMPLETED' : 'INCOMPLETE'}</b>
                <div className="button">
                    <button className="yesno-btn" type="button" onClick={handleYes}>YES</button>
                    <button className="yesno-btn" type="button" onClick={handleNo}>NO</button>
                </div>
            </div>
        </div>
    )
}

export function GoalMain(props) {
    console.log(props.goals);
    const goalArrayObj = props.goals.map((goalObject) => {
        return <GoalCard key={goalObject.title} goal={goalObject} adoptCallback={props.adoptCallback} />
    })

    return (
        <main>
            <div className='goal-container'>
                {goalArrayObj}
            </div>
        </main>
    )
}