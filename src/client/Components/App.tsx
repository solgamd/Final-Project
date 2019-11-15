import * as React from 'react';
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';
import Home from '../Pages/Home';
import Reading from '../Pages/Reading';
import Result from '../Pages/Result';
import Spread from '../Pages/Spread';

export interface AppProps { }
export interface AppState { }

const App: React.SFC<AppProps> = () => {
    return (
        <BrowserRouter>
            <nav className="navbar nav nav-pills nav-fill bg-success">
                <div className="d-flex justify-content-start">
                    <a href="/" className="logo bg-success"><img src='/images/logosmall.png' className="logo" alt="logo" /></a>
                </div>
                <div className="d-flex flex-end flex-row">
                    <Link className="m-2 link nav-link btn btn-outline-secondary" to="/spread">The Spread</Link>
                    <Link className="m-2 link nav-link btn btn-secondary" to="/reading">Do a Reading</Link>
                </div>
            </nav>
            <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/spread" component={Spread} />
                <Route exact path="/reading" component={Reading} />
                <Route exact path="/:id/result" component={Result} />
            </Switch>
        </BrowserRouter>
    )
}
// class App extends React.Component<AppProps, AppState> {

//     render() {
//         return (
//             <BrowserRouter>
//                 <nav className="navbar nav nav-pills nav-fill bg-success">
//                     <div className=" bg-success d-flex justify-content-start">
//                         <a href="/" className="logo"><img src="images/logosmall.png" alt="logo" /></a>
//                     </div>
//                     <div className="d-flex flex-end flex-row">
//                         <Link className="m-2 link nav-link btn btn-outline-secondary" to="/spread">The Spread</Link>
//                         <Link className="m-2 link nav-link btn btn-secondary" to="/reading">Do a Reading</Link>
//                     </div>
//                 </nav>
//                 <Switch>
//                     <Route exact path="/" component={Home} />
//                     <Route exact path="/spread" component={Spread} />
//                     <Route exact path="/reading" component={Reading} />
//                     <Route exact path="/:id/result" component={Result} />
//                 </Switch>
//             </BrowserRouter>
//         )
//     }
// }

export default App;