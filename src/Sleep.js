import React from 'react';
import { Link } from 'react-router-dom';
import { CheckinData } from './Data'

export function SleepHeader() {
  return (
    <div className="jumbo-bg jumbotron jumbotron-fluid bg-dark text-white">
      <div className="container">
        <h1>Your sleep </h1>
        <p className="h5">An overview</p>
      </div>
    </div>
  );
}

export function SleepMain() {
  const dates = CheckinData.map((data) => data.date);
  const hoursSlept = CheckinData.map((data) => data.hoursSlept);
  return (
    <main>
      <h2>On average you slept {((hoursSlept[0] + hoursSlept[1] + hoursSlept[2] + hoursSlept[3] + hoursSlept[4] + hoursSlept[5] + hoursSlept[6])/7).toPrecision(3)} hours.</h2>
      <table>
        <tbody>
          <tr>
            <th>Date</th>
            <th>Hours slept</th>
          </tr>
          <tr>
            <td>{dates[0]}</td>
            <td>{hoursSlept[0]}</td>
          </tr>
          <tr>
            <td>{dates[1]}</td>
            <td>{hoursSlept[1]}</td>
          </tr>
          <tr>
            <td>{dates[2]}</td>
            <td>{hoursSlept[2]}</td>
          </tr>
          <tr>
            <td>{dates[3]}</td>
            <td>{hoursSlept[3]}</td>
          </tr>
          <tr>
            <td>{dates[4]}</td>
            <td>{hoursSlept[4]}</td>
          </tr>
          <tr>
            <td>{dates[5]}</td>
            <td>{hoursSlept[5]}</td>
          </tr>
          <tr>
            <td>{dates[6]}</td>
            <td>{hoursSlept[6]}</td>
          </tr>
        </tbody>
      </table>
      <Link className="missed-day-link click-here row justify-content-center" to='/summary'>Want to go back? Click me.</Link>
    </main>
  );
}