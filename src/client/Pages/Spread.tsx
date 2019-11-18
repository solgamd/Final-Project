import * as React from 'react';
import { Link } from 'react-router-dom';

export interface SpreadProps { }

const Spread: React.SFC<SpreadProps> = () => {
    return (
        <>
            <main className="container spread-cont">
                <div className="row">
                    <h3 className="m-3 tarot-title">The Court Arcana Spread</h3>
                    <div className="col-10 bg-home">
                        <div className="text-grey mt-3">
                            <p>This is the only reading specifically geared to: Who, What, Where, When.</p>
                            <p>This deck consists only of the 12 astrological Court Arcana cards: the King, Queen, and Page of each suit.</p>
                            <p>The interpretation takes only one card and is the easiest, most precise way to answer
                                questions about personality, time frame, and vocation.</p>
                        </div>
                        <div>
                            <h5 className="mt-1">For example</h5>
                            <ul className="list-group ml-5">
                                <li>What type of person would be best for me?</li>
                                <li>What of person will I marry?</li>
                                <li>What work am I best suited to do?</li>
                                <li>What work will I do?</li>
                                <li>When would be the best time to sart this enterprise?</li>
                                <li>What type of career will bring the most succcess?</li>
                            </ul>
                            <hr />
                            <h5>Procedure</h5>
                            <ol className="list-group ml-5">
                                <li>Think about your question while shuffling, then pull one card. [AN EXAMPLE OF A QUESTION IS]</li>
                                <li>The answer to your question is found in the qualities and time frame embodied in the astrological sign of the card.</li>
                                <li>When you're ready:</li>
                            </ol>
                        </div>
                        <div className="d-flex justify-content-center">
                            <Link to="/reading" className="btn btn-secondary shadow mt-3">Do a Reading</Link>
                        </div>
                    </div>
                </div>
                <div className="footer">
                    <p className="font-small">Text taken from Tarot Made Easy by Nancy Garen.</p>
                </div>
            </main>
        </>
    );
}

export default Spread;