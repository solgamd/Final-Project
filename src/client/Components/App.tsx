import * as React from 'react';
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';
import Home from '../Pages/Home';
import Reading from '../Pages/Reading';
import Result from '../Pages/Result';
import Spread from '../Pages/Spread';
import Suits from '../Pages/Suits';
import Sources from '../Pages/Sources';

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
                    <Link to="/reading" className="m-2 link nav-link btn btn-outline-danger" aria-pressed="true">Do a Reading</Link>
                </div>
            </nav>
            <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/spread" component={Spread} />
                <Route exact path="/reading" component={Reading} />
                <Route exact path="/:id/result" component={Result} />
                <Route exact path="/suits" component={Suits} />
                <Route exact path="/sources" component={Sources} />
            </Switch>
            <footer className="row footer navbar-static-footer">
                <div className="col-xl-5 col-lg-5 col-md-5 bcol-sm-12 pl-5 g-dark py-3 my-auto justify-content-start">
                    <div className="d-flex flex-column">
                    <Link to="/" className="my-1 text-primary">Home</Link>
                        <Link to="/suits" className="my-1 text-primary">The Suits</Link>
                        <Link to="/spread" className="my-1 text-primary">The Spread</Link>
                        <Link to="/reading" className="my-1 text-primary">Do a Reading</Link>
                    </div>
                </div>
                <div className="col-xl-5 col-lg-5 col-md-5 py-3 pl-5 my-auto bg-dark">
                    <p className="text-secondary mr-5 mt-2">This tarot app is based off of Nancy Garen's <i>Tarot Made Easy</i>. Check out her book to learn more about tarot.</p>
                    <p className="text-secondary mr-5 mt-0">View the <Link to="/sources">sources</Link> of media in this app.</p>
                </div>
            </footer>
        </BrowserRouter>
    )
}
export default App;