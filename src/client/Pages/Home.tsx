import * as React from 'react';
import { Link } from 'react-router-dom';

export interface HomeProps { }
export interface HomeState { }

const Home: React.SFC<HomeProps> = () => {

    return (
        <>
        {/* <main className="container my-5"> */}
            <section className="container p-3 m-4">
                <h5 className="text-primary">The cards are not "magical", "occult", or "evil"...</h5>
                <h5 className="text-primary"><b>You</b> empower them with your beliefs, attitudes, and personality and by your level of growth or understanding at the time you choose them.</h5>
                <h6 className="d-flex justify-content-end text-primary">- Nancy Garen, tarot expert/psychic/teacher</h6>
            </section>
            <div className="row justify-content-center">
                <p className="d-flex justify-content-center mt-5">Welcome to Tarot Reader</p>
                <p>Your reading will be done through The Court Arcana Spread. Be sure to read about The Spread and its instructions before you do your reading.</p>
            </div>
            <div className="col justify-content-center">
                <Link to="/spread" className="btn btn-secondary shadow justify-content-center">The Spread</Link>
            </div>
     {/* </main > */}
        </>
    )
}

export default Home;