import * as React from 'react';
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';
import Home from '../Pages/Home';
import Reading from '../Pages/Reading';
import ResultKC from './ResultKC';
import ResultQC from './ResultQC';


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
                    <Route exact path="/resultKC" component={ResultKC} />
                    <Route exact path="/resultQC" component={ResultQC} />


                </Switch>
            </BrowserRouter>
        )
    }
}

export default App;