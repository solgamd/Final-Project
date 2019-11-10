import * as React from 'react';
import { Link } from 'react-router-dom';

export interface HomeProps { }

export interface HomeState { }

const Home: React.SFC<HomeProps> = () => {

    return (

        <main className="container my-5">
            <section>
                <div className="row">
                    <h1 className="tarot-title">Tarot Reader</h1>
                </div>
                <div className="row">
                    <Link to="/reading" className="btn btn-secondary">Do a Reading</Link>
                </div>
            </section>
        </main>

    )
}

export default Home;