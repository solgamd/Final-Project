import * as React from 'react';
import { Link } from 'react-router-dom';

export interface HomeProps { }
export interface HomeState { }

const Home: React.SFC<HomeProps> = () => {

    return (
        <>
            <section className="container-fluid bg-purple justify-content-center p-3">
                <h1 className="tarot-title text-center">The Court Arcana</h1>
                <h4 className="tarot-title text-center">A Tarot Reader</h4>
            </section>
            <section className="container col-9 p-3">
                <h6 className="text-subtitle">In tarot there are many types of readings. The one you use depends on the type of reading you want or how detailed you'd like to get.</h6> 
                <h6 className="text-subtitle">Our reading uses the Court Arcana Spread created by Nancy Garen, a tarot expert and psychic.</h6>
                <div>
                    <h6 className="text-subtitle mt-4">Before you do your reading, learn about the Court Arcana Spread and instructions for using it.</h6>
                    <div className="text-center mt-4">
                    <Link to="/spread" className="btn btn-secondary shadow text-center text-white">The Court Arcana Spread</Link>
                    </div>
             </div>
            </section>
            <section className="container col-9 justify-content-center p-3">
                <div className="card p-3 gold-card">
                    <p className="text-dark">The cards are not "magical", "occult", or "evil"...</p>
                    <p className="text-dark"><b>You</b> empower them with your beliefs, attitudes, and personality and by your level of growth or understanding at the time you choose them.</p>
                    <p className="d-flex justify-content-end text-dark">- Nancy Garen, tarot expert & psychic</p>
                </div>
            </section>
        </>
    )
}

export default Home;