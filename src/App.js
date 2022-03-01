import React, { useState } from 'react'; //import React Component
import { Routes, Route } from 'react-router-dom';

import { Header } from './Navigation.js';
import { OverviewHeader, OverviewMain } from './Overview.js';
import { GoalHeader, GoalMain } from './Goals.js'
import { SummaryHeader, SummaryMain } from './Summary.js';
import { SleepHeader, SleepMain } from './Sleep.js';

function App(props) {
  const [currentGoals, setCurrentGoals] = useState(props.data);

  const handleCurrentGoals = (goalTitle) => {
    const newGoals = currentGoals.map((currentObj) => {
      if (currentObj.title === goalTitle) {
        currentObj.completed = true;
      }
      return currentObj;
    });
    setCurrentGoals(newGoals);
  }

  return (
    <div>
      <header>
        <Header />
        <Routes>
          <Route path='/' element={<OverviewHeader />} />
          <Route path='/goals' element={<GoalHeader />} />
          {/* <Route path='/check-in' element={<CheckinHeader />} /> */}
          <Route path='/summary' element={<SummaryHeader />} />
          <Route path='/sleep' element={<SleepHeader />} />
        </Routes>
      </header>
      <Routes>
        <Route path='/' element={<OverviewMain />} />
        <Route path='/goals' element={<GoalMain goals={currentGoals} adoptCallback={handleCurrentGoals} />} />
        {/* <Route path='/check-in' element={<CheckinMain />} /> */}
        <Route path='/summary' element={<SummaryMain />} />
        <Route path='/sleep' element={<SleepMain />} />
      </Routes>
      <footer>
        <div className="footer-copyright text-center py-3">&copy; 2022 Copyright:
          <a href="https://github.com/info340-wi22/INFO340-finalproject"> The Zesty Zeniths</a>
        </div>
      </footer>
    </div>
  );
}

export default App;