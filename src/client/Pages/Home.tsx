import * as React from 'react';
import { Link } from 'react-router-dom';

export interface HomeProps { }
export interface HomeState { }

const Home: React.SFC<HomeProps> = () => {

    return (
        <>
            <section className="container-fluid bg-purple justify-content-center p-3">
                <h1 className="tarot-title text-center">Tarot Reader</h1>
                <h2 className="tarot-title text-center">The Court Arcana</h2>
            </section>
            <section className="container col-9 justify-content-center p-3">
                <div className="card p-3 gold-card">
                    <p className="text-dark">The cards are not "magical", "occult", or "evil"...</p>
                    <p className="text-dark"><b>You</b> empower them with your beliefs, attitudes, and personality and by your level of growth or understanding at the time you choose them.</p>
                    <p className="d-flex justify-content-end text-dark">- Nancy Garen, tarot expert/psychic/teacher</p>
                </div>
            </section>
            <section className="container col-9 justify-content-center p-3">
                <h5 className="text-subtitle">In tarot there are many types of readings. The one you use depends on the type of reading you want or how detailed you'd like to get.</h5> 
                <h5 className="text-subtitle">Ou readings use the Court Arcana Spread.</h5>

                <div className="text-center">
                    <h5 className="text-subtitle">Before you do your reading...</h5>
                    <Link to="/spread" className="btn btn-secondary shadow text-center text-white">Learn about the Court Arcana Spread</Link>
                </div>
            </section>
        </>
    )
}

export default Home;