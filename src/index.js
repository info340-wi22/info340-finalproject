import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import 'normalize.css';
import 'bootstrap/dist/css/bootstrap.css';
import './index.css';

import App from './App';

const goalsArray = [
    { type: "fitness_center", title: "Push Up", desc: "Have you completed 100 push ups?" },
    { type: "water_drop", title: "Drink Water", desc: "Have you drank 60oz of water?" },
    { type: "bed", title: "Sleep", desc: "Have you rested for 8 hours?"}
]

ReactDOM.render(<BrowserRouter><App data={goalsArray}/></BrowserRouter>, document.getElementById('root'));
