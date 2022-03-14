import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import { getDatabase, ref, set as firebaseSet, push as firebasePush, onValue } from 'firebase/database';
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

function DailyGoalCard(props) {
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
                <h3 className="goal-title">{props.goal.title}</h3>
                <p className="card-text">{props.goal.desc} </p>
                <Link to={"/goals/"+props.goal.title} className="btn"> More Info </Link>
                <b>{status ? 'COMPLETED' : 'INCOMPLETE'}</b>
                <div className="button">
                    <button className="yesno-btn" type="button" onClick={handleYes}>YES</button>
                    <button className="yesno-btn" type="button" onClick={handleNo}>NO</button>
                </div>
            </div>
        </div>
    )
}

function NewGoalCard(props) {
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
            <div className="goal-content">
                <p className="card-text">{props.goal} </p>
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
    const goalArrayObj = props.goals.map((goalObject) => {
        return <DailyGoalCard key={goalObject.title} goal={goalObject} adoptCallback={props.adoptCallback} />
    })

    const [userInput, setUserInput] = useState("");
    const [goalArray, setGoalArray] = useState([]);

    const db = getDatabase();

    useEffect(() => {
        const allDescRef = ref(db, "allDesc");
        const offFunction = onValue(allDescRef, (snapshot) => {
            const allDescObject = snapshot.val();
            const descKeyArray = Object.keys(allDescObject);
            const allDescArray = descKeyArray.map((keyString) => {
                const whichObject= allDescObject[keyString];
                return whichObject;
            })
            setGoalArray(allDescArray);
        })
        function cleanup() {
            offFunction();
        }
        return cleanup;
    }, [])

    const handleSubmit = (event) => {
        const allDescRef = ref(db, "allDesc");
        firebasePush(allDescRef, userInput);
        setUserInput("");
    }

    const handleChange = (event) => {
        const inputValue = event.target.value;
        setUserInput(inputValue);
    }

    const newGoalObj = goalArray.map((goalObject) => {
        return <NewGoalCard key={goalObject} goal={goalObject} adoptCallback={props.adoptCallback} />
    })

    return (
        <main>
            <h2>Daily Goals</h2>
            <div className='goal-container'>
                {goalArrayObj}
            </div>

            <h2>Personal Goals</h2>
            <div>
                {newGoalObj}
            </div>
            <div className="form">
                <div className="form-group mb-1">
                    <input type="text" id="task-input" className="form-control" placeholder="Add personal goals?" onChange={handleChange} value={userInput}/>
                </div>
                <div className="form-group">
                    <button type="button" id="add-task-button" className="btn btn-primary" onClick={handleSubmit}>Add goal to list</button>
                </div>
            </div>
        </main>
    )
}