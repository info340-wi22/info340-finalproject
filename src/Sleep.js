import React from 'react';

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
  return (
    <main>
      <h2>On average you slept 7.5 hours.</h2>
      <table>
        <tr>
          <th>Date</th>
          <th>Hours slept</th>
        </tr>
        <tr>
          <td>1 Feb 2022</td>
          <td>8 hours</td>
        </tr>
        <tr>
          <td>2 Feb 2022</td>
          <td>7 hours</td>
        </tr>
        <tr>
          <td>3 Feb 2022</td>
          <td>7.5 hours</td>
        </tr>
      </table>
      <a className="missed-day-link click-here row justify-content-center" href="/summary">Want to go back? Click me.</a>
    </main>
  );
}