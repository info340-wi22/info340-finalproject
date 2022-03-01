import React from 'react';

export function CheckinHeader() {
    return (
        <div className="jumbo-bg jumbotron jumbotron-fluid bg-dark text-white">

            <div className="container">
                <h1>Daily Check-in</h1>
                <p className="h5">Today's date is 02/03/22</p>
                {/* <!-- static for now ^ will use JS to make automated for final --> */}
                <p className="lead">Please answer the below to complete your daily check-in.</p>
            </div>
        </div>
    );
}
export function CheckinMain() {
    return (
        <main>
            <form>
                <div className="form-group">
                    <label for="WorkoutSelect">How many hours did you workout today?</label>
                    <select className="form-control" id="WorkoutSelect">
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                        <option>5</option>
                        <option>6</option>
                        <option>7</option>
                        <option>8</option>
                        <option>9</option>
                        <option>10</option>
                        <option>11</option>
                        <option>12</option>
                    </select>
                </div>
                <div className="form-group">
                    <label for="HappinessSelect">What would you rate your level of happiness and satisfaction at today?
                        <br />(zero being the worst, and ten as the best)</label>
                    <select className="form-control" id="HappinessSelect">
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                        <option>5</option>
                        <option>6</option>
                        <option>7</option>
                        <option>8</option>
                        <option>9</option>
                        <option>10</option>
                    </select>
                </div>
                <button type="submit" className="submit-btn btn btn-primary">Submit</button>
                <br />
            </form>
            <a classNameName="missed-day-link" href="missed-day.html">Missed a day?</a>
            <p></p>
        </main>
    );
}

