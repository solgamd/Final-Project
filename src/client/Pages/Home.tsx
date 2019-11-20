import * as React from 'react';
import { Link } from 'react-router-dom';

export interface HomeProps { }
export interface HomeState { }

const Home: React.SFC<HomeProps> = () => {

    return (
        <>
            <section className="row justify-content-center mt-3">
                <div className="gold-col col col-md-6 col-lg-6 col-xl-6 bg-secondary">
                    <div className="col mt-5 ml-4">
                        <h1 className="title-text" >The Court</h1>
                        <h1 className="title-text" >Arcana</h1>
                    </div>
                    <div className="row mt-5 ml-5 justify-content-start">
                        <h3>A Tarot Reader</h3>
                    </div>
                </div>
                <div className="moon-col col-md-6 col-lg-5 col-xl-5 bg-secondary">
                    <div className="card flex-circle"></div>
                    <div className="moon-text">
                        <p className="text-danger">The cards are not "magical", "occult", or "evil"...</p>
                        <p className="text-danger"><b>You</b> empower them with your beliefs, attitudes, and personality and by your level of growth or understanding at the time you choose them.</p>
                        <p className="d-flex justify-content-end text-danger">- Nancy Garen, tarot expert & psychic</p>
                    </div>
                </div>
            </section>
            <section className="container col-10 p-3 mt-3">
                <h5 className="text-subtitle">In tarot there are many types of readings. The one you use depends on the type of reading you want or how detailed you'd like to get. Our reading uses the Court Arcana Spread created by Nancy Garen, a tarot expert.</h5> 
                <h5 className="text-subtitle"></h5>
                <div>
                    <h5 className="text-subtitle mt-4">Before you do your reading, learn about the Court Arcana Spread and instructions for using it.</h5>
                    <div className="text-center mt-4">
                    <Link to="/spread" className="btn btn-secondary shadow text-center text-white">The Court Arcana Spread</Link>
                    </div>
             </div>
            </section>
        </>
    )
}

export default Home;