import * as React from 'react';

export interface ResultKPProps {

}

const ResultKP: React.SFC<ResultKPProps> = () => {
    return (
        <section className="container justify-content-center">
            <div className="row">
                <h1>King of Pentacles</h1>
            </div>
            <div className="row">
                <img src="images/pentacles.png" className="icon" alt="King of Pentacles icon"></img>
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

export default ResultKP;