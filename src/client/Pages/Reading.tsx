import * as React from 'react';
import { ICard } from '../utils/interfaces';
import { json } from '../utils/api';
import Images from '../Components/Images';

export interface ReadingProps { }
export interface ReadingState {
    cards: ICard[]
}

class Reading extends React.Component<ReadingProps, ReadingState> {
    constructor(props: ReadingProps) {
        super(props);
        this.state = {
            cards: []
        }
    }
    async componentDidMount() {
        try {
            let cards: any = await json('/api/cards')
            this.setState(cards);
            console.log(cards);
        } catch (e) {
            console.log(e)
        }
    }

    async handleShuffle(e: React.MouseEvent<HTMLButtonElement>) {
        e.preventDefault();

    }

    async handlePullCard(e: React.MouseEvent<HTMLButtonElement>) {
        const drawCard = Math.floor(Math.random() * (12 - 1) + 1);
        const pulledCard = <img className="image" src={`images/${drawCard}.jpg`} alt={`tarot_card_${drawCard}`} />;

    }

    render() {
       
        return (
            <main className="container my-5" >
                <section className="col">
                    <h1 className="text-primary text-center">Your Reading</h1>
                    <button onClick={(e: React.MouseEvent<HTMLButtonElement>) => this.handleShuffle(e)} >Shuffle Cards</button>
                    <button onClick={(e: React.MouseEvent<HTMLButtonElement>) => this.handlePullCard(e)}>Pull a Card</button>
                    <div>
                        {this.state.cards.map(card => (
                            <div key={card.id}>
                                <h1>{card.name}</h1>
                            </div>
                        ))}
                    </div>
                    <div>
                        {/* {pulledCard} */}
                        <Images />
                    </div>
                </section>

            </main>
        );
    }
}

export default Reading;