import * as React from 'react';

export interface ResultKCProps {

}

const ResultKC: React.SFC<ResultKCProps> = () => {
    return (
        <section className="container">
            <div className="row">
                <h1>Title of Interpretation</h1>
            </div>
            <div className="row">
                <p><b>Category:</b>Text of interpretation</p>
            </div>
        </section>
    );
}

export default ResultKC;