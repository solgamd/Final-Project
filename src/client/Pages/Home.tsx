import * as React from 'react';
import { Link } from 'react-router-dom';

export interface HomeProps { }

export interface HomeState { }

const Home: React.SFC<HomeProps> = () => {

    return (

        <main className="container my-5">
            <h1>Welcome to Tarot Reader</h1>
            <Link to="/reading">Do a Reading</Link>
        </main>

    )
}

export default Home;