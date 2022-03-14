import React from 'react';
import { useState } from 'react';
import { Bar } from 'react-chartjs-2';
import { CheckinData } from './Data'
import { Chart as ChartJS } from 'chart.js/auto'

export function OverviewHeader() {
  return (
    <div className="jumbo-bg jumbotron jumbotron-fluid bg-dark text-white">
      <div className="container">
        <h1>Welcome to WorkWell </h1>
        <p className="h5">A tool to help hold yourself accountable and build healthy habits in and around your busy lifestyle.</p>
        <p className="lead">Complete your <a className="lead" href="check-in.html"> daily check-ins</a> to begin forming a
          visualization based off your habits.</p>
        <cite><a className="src"
          href="https://pixabay.com/illustrations/triangles-shapes-the-geometry-of-the-3322776/">Image
          Source</a></cite>
      </div>

    </div>
  );
}

export function OverviewMain() {
  const [happinessData, setData] = useState({
    labels: CheckinData.map((data) => data.date),
    datasets: [{
      label: "Happiness Levels By Date",
      data: CheckinData.map((data) => data.happinessLevel),
      backgroundColor: ['#566177'],
      borderColor: 'white',
      borderWidth: '2'
    }, {
      label: "Hours of Sleep By Date",
      data: CheckinData.map((data) => data.hoursSlept),
      backgroundColor: ['#465177'],
      borderColor: 'white',
      borderWidth: '2'
    }]
  });

  const chartOptions = {
    scales: {
      xAxes: [{
        stacked: true
      }],
      yAxes: [{
        stacked: true
      }]
    },
    plugins: {
      legend: {
        display: true
      },
    },
  };

  return (
    <main>
      <section>
        {/* <img className="viz" src="./img/graph.png" alt="template visualization with empty charts." />
        <cite><a className="src" href="https://pixabay.com/vectors/gui-interface-internet-program-2311261/">Image
            Source</a></cite> */}
        <div className="d-flex justify-content-center align-content-center">
          <a className="btn btn-primary" href="/check-in"> Daily Check-in </a>
        </div>
        <div className='row align-content-center justify-content-center'>Weekly Overview</div>
        <div className='row align-content-center justify-content-center'><OverviewChart chartData={happinessData} options={chartOptions} /></div>

      </section>

      <div className="sustainability-pledge">
        <img className="fit-picture" src="./img/heart.png" alt="minimalist leaf icon" />
        <p className="motto">WorkWell is a student led organization attributed to bettering human wellbeing.</p>
        <cite><a className="src"
          href="https://www.flaticon.com/premium-icon/heart_5451167?term=leaf%20heart&page=1&position=4&page=1&position=4&related_id=5451167&origin=search">Image
          Source</a></cite>
      </div>
    </main>
  );
}

export function OverviewChart({ chartData, options }) {
  return (
    <div className='chartjs'>
      <Bar data={chartData} options={options} />
    </div>
  );
}