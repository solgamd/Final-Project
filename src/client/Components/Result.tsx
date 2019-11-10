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
                    <h2 className="m-4">{result.cardname} of {result.cardsuit}</h2>
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
                <div className="row">
                    <Link to="reading" className="btn btn-secondary">Do Another Reading</Link>
                </div>
            </section>
        </>
    );
}

export default Result;