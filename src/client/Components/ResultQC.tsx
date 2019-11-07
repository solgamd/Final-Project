import * as React from 'react';

export interface ResultQCProps {

}

const ResultQC: React.SFC<ResultQCProps> = () => {
    return (
        <section className="container justify-content-center">
        <div className="row">
            <h1>Queen of Cups</h1>
        </div>
        <div className="row">
            <img src="images/cups.png" className="icon" alt="Queen of Cups icon"></img>
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

export default ResultQC;