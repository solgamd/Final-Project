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

    render() {
        return (
            <main className="container my-5" >
                <section className="col">
                    <h1 className="text-primary text-center">Your Reading</h1>
                    <button>Shuffle Cards</button>
                    <button>Pull a Card</button>
                    <div>
                        {this.state.cards.map(card => (
                            <div key={card.id}>
                                <h1>{card.name}</h1>
                                {/* <img src="https://tarotreaderapp.s3.us-east-2.amazonaws.com/KC.jpg" alt="tarot_card" />
                                    <img src="s3://tarotreaderapp/KC.jpg" alt="tarot_card" /> */}
                            </div>
                        ))}
                    </div>
                    <div>
                        <Images />
                    </div>
                </section>
                {/* <button onClick={handleShuffle} >Shuffle Cards</button> */}
                {/* <button onClick={handlePull}>Pull a Card</button> */}
            </main>
        );
    }
}

export default Reading;