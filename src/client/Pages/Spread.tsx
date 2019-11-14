import * as React from 'react';

export interface SpreadProps { }

const Spread: React.SFC<SpreadProps> = () => {
    return (
        <div className="row justify-content-center">
            <h3>The Court Arcana Spread</h3>
            <p>This is the only reading specifically geared to: Who, What, Where, When.
                The interpretation takes only one card and is the easiest, most precise way to answer
                        questions about personality, time frame, and vocation.</p>
            <div className="col">
                <ul>For example:</ul>
                <li>What type of person would be best for me?</li>
                <li>What of person will I marry?</li>
                <li>What work am I best suited to do?</li>
                <li>What work will I do?</li>
                <li>When would be the best time to sart this enterprise?</li>
                <li>What type of career will bring the most succcess?</li>
                <hr />
                <h4>Procedure</h4>
                <p>1. This tarot deck consists only of the 12 astrological Court Arcana cards: the King, Queen, and Page of each suit.</p>
                <p>2. Think about your question while shuffling, then pull one card.</p>
                <p>3. The answer to your question is found in the qualities and time frame embodied in the astrological sign of the card.</p>
            </div>
        </div>
    );
}

export default Spread;