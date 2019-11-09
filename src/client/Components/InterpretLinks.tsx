import * as React from 'react';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ICard } from '../utils/interfaces';
import { json } from '../utils/api';

export interface InterpretLinksProps {
    card: ICard
}

export interface InterpretLinksState {
    card: []
}

const InterpretLinks: React.SFC<InterpretLinksProps> = ({ card }) => {

    const [links, setLinks] = useState<ICard[]>([]);

    useEffect(() => {
        (async () => {
            try {
                let links = await json('/api/cards');
                setLinks(links);
            } catch (error) {
                console.log(error);
            }
        })
    })

    return (
        <div className="col-md-4 d-flex flex-column">
            <Link to={`/${card.id}`} className="text-success">{card.cardname} of {card.cardsuit}</Link>
        </div>
    );
}

export default InterpretLinks;