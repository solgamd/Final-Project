import * as React from 'react';

export interface SourcesProps {
    
}
 
const Sources: React.SFC<SourcesProps> = () => {
    return (
        <div className="container">
            <div className="row">
                <div className="col-8">
                    <h3 className="tarot-title text-center">Sources</h3>
                    <h5 className="text-secondary mt-5">The work of many artists is featured throughout this app, and they deserve credit.</h5>
                <div>
                    <h6 className="text-secondary mt-5">Tarot information and Court Arcana Spread: Nancy Garen</h6>
                </div>
                <div className="text-secondary mt-3">
                    <h6>Icon of Suits:</h6>
                    <p className="ml-3">• Wands and Cups: Icons made by <a href="https://www.flaticon.com/authors/freepik" title="Freepik" target="_blank">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon" target="_blank">www.flaticon.com</a></p>
                    <p className="ml-3">• Swords and Pentacles: Icons made by <a href="https://www.flaticon.com/authors/smashicons" title="Smashicons" target="_blank">Smashicons</a> from <a href="https://www.flaticon.com/" title="Flaticon" target="_blank">www.flaticon.com</a></p>
                    <p>Gold background image: <a href="https://unsplash.com/@kharp?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText" target="_blank">Katie Harp</a> on <a href="http://www.unsplash.com" target="_blank">Unsplash</a></p>
                    <p>Logo and card cover design: <a href="https://www.freepik.com/free-photos-vectors/background" target="_blank">Background vector created by rawpixel.com - www.freepik.com</a></p>
                </div>
                </div>
            </div>
        </div>
     );
}
 
export default Sources;