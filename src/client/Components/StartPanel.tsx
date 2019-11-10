import * as React from 'react';

export interface StartPanelProps {

}

const StartPanel: React.SFC<StartPanelProps> = () => {
  return (
    <div className="bg-secondary rounded">
      <h3>How to Do Your Reading</h3>
      <h6 className="font-italic">Example text</h6>
      <h6 className="font-italic">Example text</h6>
      <h6 className="font-italic">Example text</h6>
      <h6 className="font-italic">Example text</h6>
    </div>
  );
}

export default StartPanel;