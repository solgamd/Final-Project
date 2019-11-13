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
        <div className="card card-2 mx-auto bg-white text-center">
            <h5 className="start-text text-dark mx-2 mt-3">SELECT YOUR CARD</h5>
            <h5 className="start-text text-dark">TO SEE YOUR READING</h5>
            {cards.map(card => {
                return <InterpretLinks key={`interpret-${card.id}`} card={card} />
            })}
        </div>
    );
}

export default FinishPanel;