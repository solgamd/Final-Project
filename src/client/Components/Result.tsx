import * as React from 'react';
import { RouteComponentProps } from 'react-router';
import { string } from 'prop-types';
import { useState, useEffect } from 'react';
import { json } from '../utils/api';
import { Link } from 'react-router-dom';

export interface ResultProps extends RouteComponentProps<{ id: string }> {
}

const Result: React.SFC<ResultProps> = props => {

    const [result, setResult] = useState({
        id: 0,
        cardname: string,
        cardsuit: string,
        suitid: 0,
        source: string
    });

    useEffect(() => {
        let id = props.match.params.id;
        (async () => {
            try {
                let [result]: any = await json(`/api/cards/${id}`);
                setResult(result);
            } catch (error) {
                console.log(error);
            }
        })()
    }, [props.match.params.id]);

    return (
        <>
            <section className="row justify-content-center d-flex">
                <div className="col text-center">
                    <h1 className="start-text mt-3">{result.cardname} of {result.cardsuit}</h1>
                    <img src={`images/${result.suitid}.png`} className="icon" alt="Result icon"></img>
                </div>
            </section>
            <section className="row">
                <div className="col-sm-5 shadow p-4 m-1">
                    <p><b>1. Focus: </b>Text of interpretation Text of interpretation Text of interpretation Text of interpretation</p>
                    <p><b>2. Desire: </b>Text of interpretation Text of interpretation Text of interpretation Text of interpretation</p>
                    <p><b>3. Romance: </b>Text of interpretation Text of interpretation Text of interpretation Text of interpretation</p>
                    <p><b>4. The Unexpected: </b>Text of interpretation Text of interpretation Text of interpretation Text of interpretation</p>
                    <p><b>5. Others: </b>Text of interpretation Text of interpretation Text of interpretation Text of interpretation</p>
                    <p><b>6. The Home: </b>Text of interpretation Text of interpretation Text of interpretation Text of interpretation</p>
                    <p><b>7. Travel: </b>Text of interpretation Text of interpretation Text of interpretation Text of interpretation</p>
                    <p><b>8. Papers: </b>Text of interpretation Text of interpretation Text of interpretation Text of interpretation</p>
                    <p><b>9. Work/Career: </b>Text of interpretation Text of interpretation Text of interpretation Text of interpretation</p>
                    <p><b>10. Unions: </b>Text of interpretation Text of interpretation Text of interpretation Text of interpretation</p>
                    <p><b>11. Emotional State: </b>Text of interpretation Text of interpretation Text of interpretation Text of interpretation</p>
                    <p><b>12. Pleasure: </b>Text of interpretation Text of interpretation Text of interpretation Text of interpretation</p>
                    <p><b>13. News: </b>Text of interpretation Text of interpretation Text of interpretation Text of interpretation</p>
                    <p><b>14. Family: </b>Text of interpretation Text of interpretation Text of interpretation Text of interpretation</p>
                    <p><b>15. The Physical Body: </b>Text of interpretation Text of interpretation Text of interpretation Text of interpretation</p>
                    <p><b>16. Finances: </b>Text of interpretation Text of interpretation Text of interpretation Text of interpretation</p>
                </div>
                <div className="col-sm-5 shadow p-4 m-1">
                    <p><b>17. Time: </b>Text of interpretation Text of interpretation Text of interpretation Text of interpretation</p>
                    <p><b>18. Friends: </b>Text of interpretation Text of interpretation Text of interpretation Text of interpretation</p>
                    <p><b>19. Visitors/Callers: </b>Text of interpretation Text of interpretation Text of interpretation Text of interpretation</p>
                    <p><b>20. Mail: </b>Text of interpretation Text of interpretation Text of interpretation Text of interpretation</p>
                    <p><b>21. Anxiety: </b>Text of interpretation Text of interpretation Text of interpretation Text of interpretation</p>
                    <p><b>22. Disappointment: </b>Text of interpretation Text of interpretation Text of interpretation Text of interpretation</p>
                    <p><b>23. Endings: </b>Text of interpretation Text of interpretation Text of interpretation Text of interpretation</p>
                    <p><b>24. New Beginnings: </b>Text of interpretation Text of interpretation Text of interpretation Text of interpretation</p>
                    <p><b>25. Inheritance: </b>Text of interpretation Text of interpretation Text of interpretation Text of interpretation</p>
                    <p><b>26. Rewards/Gifts: </b>Text of interpretation Text of interpretation Text of interpretation Text of interpretation</p>
                    <p><b>27. Succes: </b>Text of interpretation Text of interpretation Text of interpretation Text of interpretation</p>
                    <p><b>28. Fortune: </b>Text of interpretation Text of interpretation Text of interpretation Text of interpretation</p>
                    <p><b>29. Blessings: </b>Text of interpretation Text of interpretation Text of interpretation Text of interpretation</p>
                    <p><b>30. Special Guidance: </b>Text of interpretation Text of interpretation Text of interpretation Text of interpretation</p>
                    <p><b>31. Best Course of Action: </b>Text of interpretation Text of interpretation Text of interpretation Text of interpretation</p>
                    <p><b>32. Outcome: </b>Text of interpretation Text of interpretation Text of interpretation Text of interpretation</p>
                </div>
            </section>
            <div className="row">
                <Link to="reading" className="btn btn-secondary mb-5">Do Another Reading</Link>
            </div>
        </>
    );
}

export default Result;