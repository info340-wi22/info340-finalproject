import React from 'react';

export function MissedCheckinHeader() {
    return (
        <div className="jumbo-bg jumbotron jumbotron-fluid bg-dark text-white">

            <div className="container">
                <h1>Missed a Day?</h1>
                <p className="h5">Choose the appropriate date</p>
                {/* <!-- static for now ^ will use JS to make automated for final --> */}
                <p className="lead">After answering below, click submit to update your information for the chosen day.
                </p>
            </div>
        </div>
    );
}

export function MissedCheckinMain() {
    return (
        <main>
            <form>
                <div className="form-group" id="datepicker">
                    <label htmlFor="WorkoutLabel">What day did you miss and want to correct?</label>
                    <div><input className="date-picker" type="date" id="WorkoutLabel" name="workout-date" /></div>
                </div>

                <div className="form-group">
                    <label htmlFor="WorkoutLabel">How many hours did you workout today?</label>
                    <select className="form-control form-width" id="WorkoutSelect">
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
                    <label htmlFor="HappinessLabel">What would you rate your level of happiness and satisfaction at today?
                        <br />(zero being the worst, and ten as the best)</label>
                    <select className="form-control form-width" id="HappinessSelect">
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
                <button type="submit" className="btn btn-primary">Submit</button>
                <br />
            </form>
        </main>
    );
}