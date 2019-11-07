import * as React from 'react';
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';
import Home from '../Pages/Home';
import Reading from '../Pages/Reading';
import ResultKC from './ResultKC';
import ResultQC from './ResultQC';
import ResultPC from './ResultPC';
import ResultKP from './ResultKP';
import ResultQP from './ResultQP';
import ResultPP from './Result';
import Template from '../Pages/Template';
import Result from './Result';
// import ResultQS from './Template';
// import ResultPS from './ResultPS';

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
                    <Route exact path="/resultPC" component={ResultPC} />
                    <Route exact path="/resultKP" component={ResultKP} />
                    <Route exact path="/resultQP" component={ResultQP} />
                    <Route exact path="/resultPP" component={ResultPP} />
                    <Route exact path="/template" component={Template} />
                    <Route exact path="/result" component={Result} />
                    {/* <Route exact path="/resultPS" component={ResultPS} /> */}



                </Switch>
            </BrowserRouter>
        )
    }
}

export default App;