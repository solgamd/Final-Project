import * as React from 'react';
import { Link } from 'react-router-dom';

export interface StartPanelProps { }

const StartPanel: React.SFC<StartPanelProps> = () => {
  return (
    <div className="card card-2 mx-auto text-center inner-outline">
      <h3 className="mx-3 mt-5 mb-3">TO DO A READING</h3>
      <p className="mx-3 my-0">Think of your question while</p>
      <p className="my-0">you <b className="text-white">SHUFFLE</b> the cards—</p>
      <p className="mx-3">Be sure to shuffle well!</p>
      <p className="mx-3 my-0">When you're ready,</p>
      <p><b className="text-white">PULL A CARD</b>.</p>
      <hr className="mx-5 color-dark"/>
      <Link to="/spread" className="btn btn-sm btn-outline-info mx-5">Refer Back to<br /> Question Examples</Link>
      {/* <p className="mx-3 my-0">If you'd like to ask another question, click</p>
      <p><b className="text-red">ASK A NEW QUESTION</b>.</p> */}
    </div>
  );
}

export default StartPanel;