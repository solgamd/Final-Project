import * as React from 'react';

export interface ResultKSProps {

}

const ResultKS: React.SFC<ResultKSProps> = () => {
    return (
        <section className="container justify-content-center">
            <div className="row">
                <h1>King of Swords</h1>
            </div>
            <div className="row">
                <img src="images/Swords.png" className="icon" alt="King of Swords icon"></img>
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

export default ResultKS;