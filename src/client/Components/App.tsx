import * as React from 'react';
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';
import Home from '../Pages/Home';
import Reading from '../Pages/Reading';
import Template from '../Pages/Template';
import Result from './Result';

export interface AppProps { }
export interface AppState { }

class App extends React.Component<AppProps, AppState> {

    render() {
        return (
            <BrowserRouter>
                <nav className="navbar bg-success">
                    <Link className="m-2 link" to="/">Home</Link>
                    <Link className="m-2 link" to="/reading">Do a Reading</Link>
                </nav>
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route exact path="/reading" component={Reading} />
                    <Route exact path="/template" component={Template} />
                    <Route exact path="/:id" component={Result} />

                </Switch>
            </BrowserRouter>
        )
    }
}

export default App;