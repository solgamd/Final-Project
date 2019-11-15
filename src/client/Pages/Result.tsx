import * as React from 'react';
import { RouteComponentProps } from 'react-router';
import { useState, useEffect } from 'react';
import { json } from '../utils/api';
import { Link } from 'react-router-dom';

export interface ResultProps extends RouteComponentProps<{ id: string }> {
    variant: string;
    animation: string;
}

const Result: React.SFC<ResultProps> = props => {

    const [result, setResult] = useState({
        cardname: '',
        cardsuit: '',
        suitid: 0,
        astro: '',
        typeperson: '',
        typevoc: ''
    });
    const [suitid, setSuitid] = useState<string>('');

    useEffect(() => {
        (async () => {
            try {
                let [result]: any = await json(`/api/cards/${props.match.params.id}`);
                setResult(result);
                setSuitid(result.suitid)
            } catch (error) {
                console.log("Problem in Result UseEffect:", error);
            }
        })()
    }, [props.match.params.id]);

    return (
        <>
            <main className="row justify-content-center d-flex">
                <div className="col text-center">
                    <h1 className="start-text mt-3">{result.cardname} of {result.cardsuit}</h1>
                    <div>
                        <img src={`/images/${suitid}.png`} className="icon" alt={"result_icon"} />

                    </div>
                </div>
            </main>
            <section className="row">
                <div className="col-sm-5 shadow p-4 m-1 justify-content-center">
                    <p><b>Astrological Sign:</b></p>
                    <p>{result.astro}</p>
                </div>
                <div className="col-sm-5 shadow p-4 m-1">
                    <p><b>Type of Person: </b>{result.typeperson}</p>
                    <p><b>Type of Vocation: </b>{result.typevoc}</p>
                </div>
            </section>
            <div className="row">
                <Link to="/reading" className="btn btn-secondary mb-5 shadow">Do Another Reading</Link>
            </div>
        </>
    );
}

export default Result;