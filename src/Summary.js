import React from 'react';

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
                <a className="card-link" href="/sleep">
                  <h3>Sleep</h3>
                  <p>Today you had <b>8 hours</b> of sleep.</p>
                  <p>At your age of 20, it is recommended to sleep <b>7-9 hours</b>.
                    Good Job! Today you've slept enough.</p>
                  <p><em className="click-here">Click me to view your sleep record.</em></p>
                </a>
            </div>
          </div>

          <div className="column">
            <div className="card">
              <h3>Workout</h3>
              <p>Today you did <b>1 hour</b> of physical activity.</p>
              <p>It is recommended for everyone to include at least <b>30 minutes</b> of vigorous
                aerobic activity that build strong muscles and bones daily.
                Good Job! Today you've worked out enough.
              </p>
            </div>
          </div>

          <div className="column">
            <div className="card">
              <h3>Satisfaction</h3>
              <p>You are satisfied with your day.</p>
              <p>You should be! Really good job today. Keep it up!</p>
            </div>
          </div>
        </div>
      </section>
      <section>
        <h2 className="row justify-content-center">Weekly Summary</h2>
        <img className="viz" src="./img/graph.png" alt="sample viz" />
      </section>
    </main>
  );
}