import * as React from 'react';

export interface StartPanelProps { }

const StartPanel: React.SFC<StartPanelProps> = () => {
  return (
    <div className="card card-2 mx-auto bg-primary text-center inner-outline">
      <h3 className="m-3 mt-5">TO DO A READING</h3>
      <h5 className="mx-3">Think of your question while you <b className="text-success">SHUFFLE</b> the cards—</h5>
      <h5 className="mx-3">Be sure to shuffle well!</h5>
      <h5 className="m-3">When you're ready, <b className="text-success">PULL A CARD</b>.</h5>
      <hr className="mx-5 color-dark"/>
      <h5 className="m-3">If you'd like to ask another question, click <b className="text-warning text-outline-black">ASK A NEW QUESTION</b>.</h5>
    </div>
  );
}

export default StartPanel;