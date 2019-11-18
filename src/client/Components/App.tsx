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
        </BrowserRouter>
    )
}
export default App;