import React from 'react';

export function OverviewHeader() {
  return (
    <div className="jumbo-bg jumbotron jumbotron-fluid bg-dark text-white">
      <div className="container">
        <h1>Welcome to WorkWell </h1>
        <p className="h5">A tool to help hold yourself accountable and build healthy habits in and around your busy lifestyle.</p>
        <p className="lead">Complete your <a class="lead" href="check-in.html"> daily check-ins</a> to begin forming a
          visualization based off your habits.</p>
        {/* <cite><a className="src"
            href="https://pixabay.com/illustrations/triangles-shapes-the-geometry-of-the-3322776/"><br>Image
            Source</br></a></cite> */}
      </div>

    </div>
  );
}

export function OverviewMain() {
  return (
    <main>
      <section>
        <img className="viz" src="./img/graph.png" alt="template visualization with empty charts." />
        {/* <cite><a className="src" href="https://pixabay.com/vectors/gui-interface-internet-program-2311261/"><br>Image
            Source</br></a></cite> */}
      </section>
      <div className="row d-flex justify-content-center align-content-center">
        <button className="btn btn-primary" href="index.html"> Daily Check-in </button>
      </div>
      <div className="sustainability-pledge">
        <img className="fit-picture" src="./img/heart.png" alt="minimalist leaf icon" />
        <lead className="motto">WorkWell is a student led organization attributed to bettering human wellbeing.</lead>
        {/* <cite><a className="src"
            href="https://www.flaticon.com/premium-icon/heart_5451167?term=leaf%20heart&page=1&position=4&page=1&position=4&related_id=5451167&origin=search"><br>Image
            Source</br></a></cite> */}
      </div>
    </main>
  );
}