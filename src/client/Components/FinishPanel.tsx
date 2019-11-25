import * as React from 'react';
import { ICard } from '../utils/interfaces';
import { useState, useEffect } from 'react';
import { json } from '../utils/api';
import InterpretLinks from './InterpretLinks';

export interface FinishPanelProps {
    cards: ICard[];
}

const FinishPanel: React.SFC<FinishPanelProps> = () => {

    const [cards, setCards] = useState<ICard[]>([]);

    useEffect(() => {
        (async () => {
            try {
                let cards = await json('/api/cards');
                setCards(cards);
            } catch (error) {
                console.log("Problem in FinishPanel UseEffect:", error);
            }
        })()
    }, []);

    return (
        <div className="card card-2 mx-auto bg-grey">
            <h5 className="text-dark text-center mx-2 mt-3 font-weight-bold">SELECT YOUR CARD <br />TO SEE YOUR READING</h5>
            <div className="ml-5">
                {cards.map(card => {
                    return <InterpretLinks key={`interpret-${card.id}`} card={card} />
                })}
            </div>
        </div>
    );
}

export default FinishPanel;