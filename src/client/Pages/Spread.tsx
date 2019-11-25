import * as React from 'react';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';

export interface SpreadProps { }

const Spread: React.SFC<SpreadProps> = () => {

    useEffect(() => {
        (async () => {
            window.scrollTo(0, 0)
        })()
    }, []);
    
    return (
        <>
            <main className="container spread-cont">
                <div className="row">
                    <h3 className="m-3 tarot-title">The Court Arcana Spread</h3>
                    <div className="col-10 bg-home">
                        <div className="text-grey mt-3">
                            <p>This reading is specifically geared towards:</p>
                            <ul>
                                <li>Who</li>
                                <li>What</li>
                                <li>Where</li>
                                <li>When</li>
                            </ul>
                            <p>This deck consists only of the 12 astrological Court Arcana cards: the King, Queen, and Page of each suit.</p>
                            <p>The interpretation takes only <b className="text-danger">one card</b> and answers questions about:</p>
                            <ul>
                                <li>personality</li>
                                <li>time frame</li>
                                <li>vocation</li>
                            </ul>
                        </div>
                        <div>
                            <h5 className="mt-1">For example:</h5>
                            <ul className="list-group ml-5">
                                <li>What type of person would be best for me?</li>
                                <li>What type of person will I marry?</li>
                                <li>What work am I best suited to do?</li>
                                <li>What work will I do?</li>
                                <li>When would be the best time to start this enterprise?</li>
                                <li>What type of career will bring the most succcess?</li>
                            </ul>
                            <hr />
                            <h5>Procedure</h5>
                            <ol className="list-group ml-5">
                                <li>Think about your question while shuffling, then pull a card. </li>
                                <li>The answer to your question is found in the qualities and time frame embodied in the astrological sign of the card.</li>
                                <li>When asking about "when" in your question, refer to the astrological sign of the card.</li>
                                <p className="ml-3 font-italic">- e.g. the Page of Cups is Pisces (February 19–March 20)</p>
                            </ol>
                            <div className="col ml-3 mt-1">
                            <p>Example from tarot expert Nancy Garen:</p>
                                <p className="ml-3 mt-2 font-weight-bold"><i>I once asked what area would bring me the most satisfaction and prosperity. The card I drew was the King of Wands (Aries) which read:</i></p>
                                <p className="ml-5 text-danger">TYPE OF VOCATION: Any area where leadership qualities are desired because you can work alone.</p>
                                <p className="ml-3 font-weight-bold"><i>I then asked what area would I specialize in, and drew the Queen of Cups (Scorpio) which read:</i></p>
                                <p className="ml-5 text-danger">TYPE OF PERSON: Spiritual, psychic, clairvoyant...  TYPE OF VOCATION: Occult work, counselor...</p>
                                <p className="mt-3 text-center">When you're ready, try doing a reading.</p>
                            </div>
                        </div>
                        <div className="d-flex justify-content-center">
                            <Link to="/reading" className="btn btn-secondary shadow mt-3">Do a Reading</Link>
                        </div>
                    </div>
                </div>
            </main>
        </>
    );
}

export default Spread;