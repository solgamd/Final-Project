import * as React from 'react';
import { Link } from 'react-router-dom';
import { ICard } from '../utils/interfaces';

export interface InterpretLinksProps {
    card: ICard
}

const InterpretLinks: React.SFC<InterpretLinksProps> = ({ card }) => {

    return (
        <div className="col">
            <Link to={`/${card.id}/result`} className="text-dark int-link">✧ {card.cardname} of {card.cardsuit}</Link>
        </div>
    );
}

export default InterpretLinks;