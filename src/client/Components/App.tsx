import * as React from 'react';
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';
import Home from '../Pages/Home';
import Reading from '../Pages/Reading';
import Result from '../Pages/Result';
import Spread from '../Pages/Spread';

export interface AppProps { }
export interface AppState { }

class App extends React.Component<AppProps, AppState> {

    render() {
        return (
            <BrowserRouter>
                <nav className="navbar nav nav-pills nav-fill bg-success">
                    <a href="/" className="logo navbar-brand"><img src="images/logosmall.png" className="logo" alt="logo" /></a>
                    <Link className="m-2 link nav-link btn btn-outline-secondary" to="/">Home</Link>
                    {/* <Link className="m-2 link nav-link btn btn-outline-secondary" to="/spread">The Spread</Link> */}
                    <Link className="m-2 link nav-link btn btn-secondary" to="/reading">Do a Reading</Link>
                </nav>
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route exact path="/:id" component={Result} />
                    {/* <Route exact path="/spread" component={Spread} /> */}
                    <Route exact path="/reading" component={Reading} />
                </Switch>
            </BrowserRouter>
        )
    }
}

export default App;