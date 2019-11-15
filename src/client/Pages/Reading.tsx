import * as React from 'react';
import { ICard } from '../utils/interfaces';
import { json } from '../utils/api';
import Spinner from 'react-bootstrap/Spinner';
import LoadingOverlay from 'react-loading-overlay';
import { useState, useEffect } from 'react';
import StartPanel from '../Components/StartPanel';
import FinishPanel from '../Components/FinishPanel';
import { RouteComponentProps } from 'react-router';

export interface ReadingProps extends RouteComponentProps{
   cards: ICard;
}

const Reading: React.SFC<ReadingProps> = () => {

    const [cards, setCards] = useState<ICard[]>([]);
    const [shuffle, setShuffle] = useState<boolean>(false);
    const [pullCard, setPullCard] = useState<number>(0);

    useEffect(() => {
        (async () => {
            try {
                let cards = await json('/api/cards');
                setCards(cards);
            } catch (error) {
                console.log("Problem in Reading UseEffect:", error);
            }
        })()
    }, []);

    const handleShuffle = async (e: React.MouseEvent<HTMLButtonElement>) => {
        try {
            setShuffle(true);
            setTimeout(() => {
                setShuffle(false);
            }, 1500);
            return clearTimeout();
        } catch (error) {
            console.log(error);
        }
    };

    const handlePullCard = async (e: React.MouseEvent<HTMLButtonElement>) => {
        try {
            const drawCard = Math.floor(Math.random() * (12 - 1) + 1);
            setPullCard(drawCard);
        } catch (error) {
            console.log("Error from handlePullCard:", error);
        }
    };

    const handleNewQuestion = async (e: React.MouseEvent<HTMLButtonElement>) => {
        try {
            setPullCard(0);
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <main className="container">
            <div className="row">
                <div className="col-sm-8 rounded justify-content-between shadow">
                    <div className="row justify-content-around">
                        <div className="col pt-2">
                            <div className="card card-1 mx-auto inner-outline">
                                <LoadingOverlay
                                    active={shuffle}
                                    spinner={<div>
                                        <Spinner animation="grow" variant="success"><span className="sr-only">Loading...</span></Spinner>
                                        <h5 className="text-white font-weight-bolder">Shuffling...</h5>
                                    </div>}>
                                    {pullCard == 0 ? <img className="image rounded" src={`images/00.jpg`} alt={`tarot_card_0`} /> : <img className="image" src={`images/${pullCard}.jpg`} alt={`tarot_card_${pullCard}`} />}
                                </LoadingOverlay>
                            </div>
                            <div className="text-center mt-3 justify-content-around">
                                <button className="btn btn-success shadow mx-2" onClick={(e: React.MouseEvent<HTMLButtonElement>) => handleShuffle(e)}>Shuffle</button>
                                <button className="btn btn-success shadow mx-2" onClick={(e: React.MouseEvent<HTMLButtonElement>) => handlePullCard(e)}>Pull A Card</button>
                            </div>
                        </div>
                        <div className="col pt-2">
                        {pullCard == 0 ? <StartPanel /> : <FinishPanel cards={cards} />}
                            <div className="text-center mt-3">
                                <button className="btn btn-warning shadow" onClick={(e: React.MouseEvent<HTMLButtonElement>) => handleNewQuestion(e)}>Ask New Question</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}

export default Reading;