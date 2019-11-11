import * as React from 'react';
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';
import Home from '../Pages/Home';
import Reading from '../Pages/Reading';
import Result from './Result';
import CourtArcana from './CourtArcana';

export interface AppProps { }
export interface AppState { }

class App extends React.Component<AppProps, AppState> {

    render() {
        return (
            <BrowserRouter>
                <nav className="navbar nav nav-pills nav-fill bg-success">
                    <a href="/" className="logo navbar-brand"><img src="images/logosmall.png" className="logo" alt="logo" /></a>
                    <Link className="m-2 link nav-link btn btn-outline-secondary" to="/">Home</Link>
                    <Link className="m-2 link nav-link btn btn-outline-secondary" to="/CourtArcana">The Court Arcana</Link>
                    <Link className="m-2 link nav-link btn btn-secondary" to="/Reading">Do a Reading</Link>
                </nav>
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route exact path="/Reading" component={Reading} />
                    <Route exact path="/:id" component={Result} />
                    <Route exact path="/CourtArcana" component={CourtArcana} />
                </Switch>
            </BrowserRouter>
        )
    }
}

export default App;