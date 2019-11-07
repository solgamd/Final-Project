import * as React from 'react';

export interface ResultQPProps {

}

const ResultQP: React.SFC<ResultQPProps> = () => {
    return (
        <section className="container justify-content-center">
            <div className="row">
                <h1>Queen of Pentacles</h1>
            </div>
            <div className="row">
                <img src="images/pentacles.png" className="icon" alt="Queen of Pentacles icon"></img>
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

export default ResultQP;