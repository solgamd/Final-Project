import * as React from 'react';
import { ICard } from '../utils/interfaces';
import { RouteComponentProps } from 'react-router';

export interface ResultProps {
    card: ICard
}

const Result: React.SFC<ResultProps> = ({card}) => {

    console.log(card);
    return (
        <section className="container justify-content-center">
            <div className="row">
                <h1>Result Page {card.cardname}</h1>
            </div>
            <div className="row">
                <img src="images/pentacles.png" className="icon" alt="Result icon"></img>
            </div>
            <div className="row">
                <div className="col-sm-6 text-center">
                    <p><b>Category: </b>Text of interpretation</p>
                    <p><b>Category: </b>Text of interpretation</p>
                    <p><b>Category: </b>Text of interpretation</p>
                    <p><b>Category: </b>Text of interpretation</p>
                </div>
                <div className="col-sm-6 text-center">
                    <p><b>Category: </b>Text of interpretation</p>
                    <p><b>Category: </b>Text of interpretation</p>
                    <p><b>Category: </b>Text of interpretation</p>
                    <p><b>Category: </b>Text of interpretation</p>
                </div>
            </div>
        </section>
    );
}

export default Result;