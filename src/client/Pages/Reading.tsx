import * as React from 'react';
import { ICard } from '../utils/interfaces';
import { json } from '../utils/api';
import Spinner from 'react-bootstrap/Spinner';
import InterpretLinks from '../Components/InterpretLinks';
import LoadingOverlay from 'react-loading-overlay';
import { useState, useEffect } from 'react';

export interface ReadingProps {
    cards: ICard
}

export interface ReadingState {
    cards: ICard,
    pulledCard: number,
    shuffle: boolean
}

const Reading: React.SFC<ReadingProps> = () => {

    const [cards, setCards] = useState<ICard[]>([]);
    const [shuffle, setShuffle] = useState(false);
    const [pullCard, setPullCard] = useState(0);

    useEffect(() => {
        (async () => {
            try {
                let cards = await json('/api/cards');
                setCards(cards);
            } catch (error) {
                console.log(error);
            }
        })()
    }, []);

    const handleShuffle = async (e: React.MouseEvent<HTMLButtonElement>) => {
        setShuffle(true);
        setTimeout(() => {
            setShuffle(false);
        }, 1500);
        return clearTimeout();
    }

    const handlePullCard = async (e: React.MouseEvent<HTMLButtonElement>) => {
        const drawCard = Math.floor(Math.random() * (12 - 1) + 1);
        setPullCard(drawCard);
    }

    const handleNewQuestion = async (e: React.MouseEvent<HTMLButtonElement>) => {
        let pullCard = 0;
        setPullCard(pullCard);
    }

    return (
        <main className="container">
            <div className="row justify-content-center">
                <h3 className="text-dark tarot-title">TAROT READER</h3>
            </div>
            <div className="row">
                <div className="col-sm-8 rounded justify-content-around shadow">

                    <div className="row justify-content-around">
                        <div className="col align-items-stretch">
                            <div className="card mx-auto">
                                <LoadingOverlay
                                    active={shuffle}
                                    spinner={<div>
                                        <Spinner animation="grow" variant="success"><span className="sr-only">Loading...</span></Spinner>
                                        <h5 className="text-white">Shuffling...</h5>
                                    </div>}>
                                    {pullCard === 0 ? <img className="image rounded" src={`images/00.jpg`} alt={`tarot_card_0`} /> : <img className="image" src={`images/${pullCard}.jpg`} alt={`tarot_card_${pullCard}`} />}
                                </LoadingOverlay>
                            </div>
                        </div>
                        <div className="col pt-2">
                            <div>
                                <h5 className="card-text">Think about your question as you SHUFFLE the cards.</h5>
                                <h5 className="card-text">Make sure you shuffle well!</h5>
                                <button className="btn btn-success shadow" onClick={(e: React.MouseEvent<HTMLButtonElement>) => handleShuffle(e)}>Shuffle</button>
                                <h5 className="card-text mt-3">When you're ready, PULL A CARD.</h5>
                                <button className="btn btn-success shadow" onClick={(e: React.MouseEvent<HTMLButtonElement>) => handlePullCard(e)}>Pull A Card</button>
                            </div>
                            <h5 className="card-text mt-3">Find your INTERPRETATION below.</h5>
                            <hr />
                            <div className="justify-content-baseline">
                                <button className="btn btn-warning shadow" onClick={(e: React.MouseEvent<HTMLButtonElement>) => handleNewQuestion(e)}>Ask New Question</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row text-center">
                <div className="text-center">
                    <h3>Interpretations</h3>
                    <h6 className="font-italic">Click on your card.</h6>
                    {cards.map(card => {
                        return (<InterpretLinks key={`interpret-${card.id}`} card={card} />);
                    })}
                </div>

            </div>
        </main>
    );
}

export default Reading;