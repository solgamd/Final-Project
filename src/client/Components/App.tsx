import * as React from 'react';
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';
import Home from '../Pages/Home';
import Reading from '../Pages/Reading';


export interface AppProps { }
export interface AppState { }

class App extends React.Component<AppProps, AppState> {

    render() {
        return (
            <BrowserRouter>
                <nav>
                    <Link className="m-2" to="/">Home</Link>
                    <Link className="m-2" to="/reading">Reading</Link>

                </nav>
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route exact path="/reading" component={Reading} />

                </Switch>
            </BrowserRouter>
        )
    }
}

export default App;