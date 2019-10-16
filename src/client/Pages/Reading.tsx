import * as React from 'react';
import { useState, useEffect } from 'react';
// import { json } from '../utils/api';

export interface ReadingProps { }
export interface ReadingState { }

const Reading: React.SFC<ReadingProps> = () => {

    const [cards, setCards] = useState([]);
    // const [oneCard, setOneCard] = useState()

    useEffect(() => {
        (async () => {
            try {
                let res: any = await fetch('/api/cards');
                let cards = await res.json();
                setCards(cards);
            } catch (e) {
                console.log(e)
            }
        })()
    })

    // async handleShuffle(e: React.MouseEvent<HTMLButtonElement>) {

    // }


    return (

        <main className="container my-5" >
            <section className="col">
                <h1 className="text-primary text-center">Your Reading</h1>
                <button>Shuffle Cards</button>
                <button>Pull a Card</button>
                <div>
                    {cards.map(card => (
                        <div>
                            <h1>{card.name}</h1>
                            <img src={card.source} alt="tarot_card"/>
                        </div>
                    ))}
                </div>

            </section>

            {/* <button onClick={handleShuffle} >Shuffle Cards</button> */}
            {/* <button onClick={handlePull}>Pull a Card</button> */}
            {/* <img src="https://tarotreaderapp.s3.us-east-2.amazonaws.com/KC.jpg" alt="KC"/> */}
        </main>

    );
}


export default Reading;