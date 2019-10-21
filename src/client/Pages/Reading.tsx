import * as React from 'react';
// import { useState, useEffect } from 'react';
import { ICard } from '../utils/interfaces';
// import { json } from '../utils/api';

export interface ReadingProps { }
export interface ReadingState {
    cards: ICard[]
}

// const Reading: React.SFC<ReadingProps> = () => {

//     const [cards, setCards] = useState([]);
//     // const [oneCard, setOneCard] = useState()

//     //LODASH SHUFFLE!!!! https://lodash.com/docs/4.17.15#shuffle

//     useEffect(() => {
//         (async () => {
//             try {
//                 let res = await json('/api/cards')
//                 let cards = await res.json();
//                 console.log(res);
//                 setCards(cards);

//             } catch (e) {
//                 console.log(e)
//             }
//         })()
//     }, []);

//     // async handleShuffle(e: React.MouseEvent<HTMLButtonElement>) {
//     // }

class Reading extends React.Component<ReadingProps, ReadingState> {
    constructor(props: ReadingProps) {
        super(props);
        this.state = {
            cards: []
        }
    }
    async componentDidMount() {
        try {
            let cards: any = await fetch('/api/cards')
            this.setState(cards);
            console.log(cards);
        } catch (e) {
            console.log(e)
        }
    }

    render() {
        return (
            <main className="container my-5" >
                <section className="col">
                    <h1 className="text-primary text-center">Your Reading</h1>
                    <button>Shuffle Cards</button>
                    <button>Pull a Card</button>
                    <div>
                    {this.state.cards.map(card => (
                        <div>
                            <h1>{card.name}</h1>
                            <img src="https://tarotreaderapp.s3.us-east-2.amazonaws.com/KC.jpg" alt="tarot_card" />
                            <img src="s3://tarotreaderapp/KC.jpg" alt="tarot_card" />

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
}


export default Reading;