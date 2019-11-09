import * as React from 'react';
import { Link } from 'react-router-dom';
import { ICard } from '../utils/interfaces';

export interface InterpretLinksProps {
    card: ICard
}


const InterpretLinks: React.SFC<InterpretLinksProps> = ({card}) => {
    return (
        <div className="col-md-4 d-flex flex-column">
            <Link to="/1" className="text-success">{card.cardname} of {card.cardsuit}</Link>
            <Link to="/ResultQC" className="text-success"></Link>
            <Link to="/ResultPC" className="text-success">Page of Cups</Link>
            <Link to="/ResultKP" className="text-success">King of Pentacles</Link>
            <Link to="/ResultQP" className="text-success">Queen of Pentacles</Link>
            <Link to="/ResultPP" className="text-success">Page of Pentacles</Link>
            <Link to="/ResultKS" className="text-success">King of Swords</Link>
            <Link to="/ResultQS" className="text-success">Queen of Swords</Link>
            <Link to="/ResultPS" className="text-success">Page of Swords</Link>

        </div>
    );
}

export default InterpretLinks;