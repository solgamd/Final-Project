import * as React from 'react';
import { ICard } from '../utils/interfaces';
import { RouteComponentProps } from 'react-router';
import { string } from 'prop-types';
import { useState, useEffect } from 'react';
import { json } from '../utils/api';

export interface ResultProps extends RouteComponentProps<{id: string}> { 
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
        (async () => {
            try {
                let result = await json(`/api/cards/${props.match.params.id}`);
                setResult(result);
                console.log(result.suitid)
            } catch (error) {
                console.log(error);
            }
        })()
    }, [props.match.params.id]);

    return (
        <section className="container justify-content-center">
            <div className="row">
                <h1>Result Page for {result.id}</h1>
            </div>
            <div className="row">
                <img src={`images/${result.suitid}.png`} className="icon" alt="Result icon"></img>
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