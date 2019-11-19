import * as React from 'react';
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';
import Home from '../Pages/Home';
import Reading from '../Pages/Reading';
import Result from '../Pages/Result';
import Spread from '../Pages/Spread';
import Suits from './Suits';

export interface AppProps { }
export interface AppState { }

const App: React.SFC<AppProps> = () => {
    return (
        <BrowserRouter>
            <nav className="navbar nav nav-pills nav-fill bg-purple">
                <div className="d-flex justify-content-start">
                    <a href="/" className="logo bg-purple"><img src='/images/logosmall.png' className="logo" alt="logo" /></a>
                </div>
                <div className="d-flex flex-end flex-row">
                    <Link to="/suits" className="m-2 link nav-link btn btn-outline-secondary" aria-pressed="true">The Suits</Link>
                    <Link to="/spread" className="m-2 link nav-link btn btn-outline-secondary" aria-pressed="true">The Spread</Link>
                    <Link to="/reading" className="m-2 link nav-link btn btn-secondary" aria-pressed="true">Do a Reading</Link>
                </div>
            </nav>
            <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/spread" component={Spread} />
                <Route exact path="/reading" component={Reading} />
                <Route exact path="/:id/result" component={Result} />
                <Route exact path="/suits" component={Suits} />
            </Switch>
            <section className="row footer">
                <div className="col-xl-8 col-lg-8 col-md-8 bg-dark pl-5">
                    <div className="d-flex flex-column my-auto">
                        <Link to="/suits" className="my-2 text-danger">The Suits</Link>
                        <Link to="/spread" className="my-2 text-danger">The Spread</Link>
                        <Link to="/reading" className="my-2 text-danger">Do a Reading</Link>
                    </div>
                </div>
                <div className="col-xl-4 col-lg-4 col-md-4 py-3 bg-secondary">
                    <p>Much of the text on this app was borrowed from Nancy Garen's <i>Tarot Made Easy</i>. Check out her book to learn more about tarot.</p>
                </div>
            </section>
        </BrowserRouter>
    )
}
export default App;