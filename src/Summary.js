import React from 'react';
import { Link } from 'react-router-dom';

export function SummaryHeader() {
  return (
    <div className="jumbo-bg jumbotron jumbotron-fluid bg-dark text-white">
      <div className="container">
        <h1>Welcome!</h1>
        <p className="h5">Want to know how you've been doing?</p>
            <p className="lead">Take a look at your summary for this week below.</p>
      </div>
    </div>
  );
}

export function SummaryMain() {
  return (
    <main>
      <section>
        <h2 className="row justify-content-center">Today's Summary</h2>
        <div className="row">
          <div className="column">
            <div className="card">
                <a className="card-link" href='/sleep'><Link to='/sleep'>
                  <h3>Sleep</h3>
                  <p>Today you had <b>8 hours</b> of sleep.</p>
                  <p>For the average person, it is recommended to sleep <b>7-9 hours</b>.
                   </p>
                  <p><em className="click-here">Click me to view your sleep record.</em></p></Link>
                </a>
            </div>
          </div>

          <div className="column">
            <div className="card">
              <h3>Workout</h3>
              <p>Today you did <b>1 hour</b> of physical activity.</p>
              <p>It is recommended for everyone to include at least <b>30 minutes</b> of vigorous
                aerobic activity to build muscle and improve/maintain cardiovascular wellbeing.
                
              </p>
            </div>
          </div>

          <div className="column">
            <div className="card">
              <h3>Satisfaction</h3>
              <p>You should be feeling satisfied with your day.</p>
              <p>Really good job today. Keep it up!</p>
            </div>
          </div>
        </div>
      </section>
      <section>
        <h2 className="row justify-content-center">Weekly Summary</h2>
        <a href='/'><Link to='/' /><img className="viz" src="./img/graph.png" alt="template visualization with empty charts." /></a>
        <cite><a className="src" href="https://pixabay.com/vectors/gui-interface-internet-program-2311261/">Image
            Source</a></cite>
      </section>
    </main>
  );
}