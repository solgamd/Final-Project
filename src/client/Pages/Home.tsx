import * as React from 'react';
import { Link } from 'react-router-dom';

export interface HomeProps { }
export interface HomeState { }

const Home: React.SFC<HomeProps> = () => {

    return (
        <main className="container my-5">
            <section>
                <div className="row">
                    <h1 className="tarot-title text-primary">Get Witchy</h1>
                </div>
                <div className="col">
                    <h3>Welcome to Tarot Reader</h3>
                    <h5>This app focused on the spread of The Court Arcana. This requires asking the deck specific types of questions, 
                        and you can read more about it to ensure you're using it correctly.</h5>
                    <Link to="/CourtArcana" className="btn btn-secondary">The Court Arcana</Link>
                </div>
                
                <p>As written by the tarot expert/psychic/teacher, Nancy Garen: "The cards are not "magical", "occult", or "evil"...
                   <i>You</i> empower them with your beliefs, attitudes, and personality and by your level of growth or understanding at the time you choose them.
               </p>
                <div className="row">
                    <Link to="/Reading" className="btn btn-secondary">Do a Reading</Link>
                </div>
            </section>
        </main>
    )
}

export default Home;