import * as React from 'react';
import { ICard } from '../utils/interfaces';
import { RouteComponentProps } from 'react-router';
import { string } from 'prop-types';
import { useState, useEffect } from 'react';
import { json } from '../utils/api';

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
                {/* <h1>Reading</h1> */}
                <h3>{result.cardname} of {result.cardsuit}</h3>
                <img src={`images/${result.suitid}.png`} className="icon" alt="Result icon"></img>
            </div>
        </section>
        <section className="row">
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
        </section>
        </>
    );
}

export default Result;