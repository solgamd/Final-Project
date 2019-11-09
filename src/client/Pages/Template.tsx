import * as React from 'react';
import { ICard } from '../utils/interfaces';
import { useState } from 'react';
import { useEffect } from 'react';
import { json } from '../utils/api';
import { RouteComponentProps } from 'react-router';
import Result from '../Components/Result';

export interface TemplateProps extends RouteComponentProps {
}

const Template: React.SFC<TemplateProps> = () => {

    const [cards, setCards] = useState<ICard[]>([]);

    useEffect(() => {
        (async () => {
            try {
                let cards = await json(`/api/cards`);
                setCards(cards);
            } catch (error) {
                console.log(error);
            }
        })()
    }, []);

    return (
        <section className="container justify-content-center">
            <div className="row">
                <h1>Template</h1>
                <div>
                    {cards.map(card => (
                        <div key={`card-${card.id}`}>
                            <Result card={card} />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Template;