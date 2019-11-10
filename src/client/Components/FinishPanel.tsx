import * as React from 'react';
import { ICard } from '../utils/interfaces';
import { useState, useEffect} from 'react';
import { json } from '../utils/api';
import InterpretLinks from './InterpretLinks';

export interface FinishPanelProps {
    cards: ICard[]
}

const FinishPanel: React.SFC<FinishPanelProps> = () => {

    const [cards, setCards] = useState<ICard[]>([]);

    useEffect(() => {
        (async () => {
            try {
                let cards = await json('/api/cards');
                setCards(cards);
            } catch (error) {
                console.log(error);
            }
        })()
    },[]);

    return (
        <div>
            <h3>Interpretations</h3>
            <h6 className="font-italic">Click on your card.</h6>
            {cards.map(card => {
                return (<InterpretLinks key={`interpret-${card.id}`} card={card} />);
            })}
        </div>
    );
}

export default FinishPanel;