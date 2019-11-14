import * as React from 'react';
import { Link } from 'react-router-dom';

export interface HomeProps { }
export interface HomeState { }

const Home: React.SFC<HomeProps> = () => {

    return (
        <main className="container my-5">
            <section>
                <div className="row">
                    <h1 className="tarot-title text-primary"></h1>
                </div>
                <h5 className="text-success">"The cards are not "magical", "occult", or "evil...</h5>
                <h5 className="text-success"><b>You</b> empower them with your beliefs, attitudes, and personality and by your level of growth or understanding at the time you choose them."</h5>
                <h6 className="d-flex justify-content-end text-success">- Nancy Garen, tarot expert/psychic/teacher</h6>
                <div className="col">
                    <p className="d-flex justify-content-center mt-5">Welcome to Tarot Reader</p>
                    <p>Your reading will be done through The Court Arcana Spread. Read more about The Spread and its instructions before you do your reading.</p>
                </div>
                <div className="row">
      
                    <Link to="/spread" className="btn btn-secondary justify-content-center">The Spread</Link>
                   
                </div>
            </section>
        </main>
    )
}

export default Home;