import * as React from 'react';
import { ICard } from '../utils/interfaces';
import { json } from '../utils/api';
import Spinner from 'react-bootstrap/Spinner';

export interface ReadingProps { }
export interface ReadingState {
    cards: ICard[],
    pulledCard: number,
    shuffle: boolean
}

class Reading extends React.Component<ReadingProps, ReadingState> {
    constructor(props: ReadingProps) {
        super(props);
        this.state = {
            cards: [],
            pulledCard: 0,
            shuffle: false
        }
    }
    async componentDidMount() {
        try {
            let cards: any = await json('/api/cards');
            this.setState({ cards });
        } catch (e) {
            console.log(e);
        }
    }

    async handleShuffle(e: React.MouseEvent<HTMLButtonElement>) {
        this.setState({ shuffle: true });
        setTimeout(() => {
            this.setState({ shuffle: false });
        }, 1500);
        return clearTimeout();
    }

    async handlePullCard(e: React.MouseEvent<HTMLButtonElement>) {
        const drawCard = Math.floor(Math.random() * (12 - 1) + 1);
        this.setState({ pulledCard: drawCard });
    }

    render() {
        return (
            <main className="container my-5" >
                <section className="col">
                    <h1 className="text-primary text-center">Your Reading</h1>
                    <button className="btn btn-success mx-2" onClick={(e: React.MouseEvent<HTMLButtonElement>) => this.handleShuffle(e)}>Shuffle Cards</button>
                    <button className="btn btn-success mx-2" onClick={(e: React.MouseEvent<HTMLButtonElement>) => this.handlePullCard(e)}>Pull a Card</button>
                    <div>
                        {this.state.shuffle == true ? <Spinner animation="grow" variant="success"><span className="sr-only">Loading...</span></Spinner> : null}
                        {this.state.shuffle == true ? <h4>Shuffling...</h4> : null}
                    </div>
                    
                </section>
                <section>
                    <div>
                        {this.state.pulledCard === 0 ? null : <img className="image" src={`images/${this.state.pulledCard}.jpg`} alt={`tarot_card_${this.state.pulledCard}`} />}
                    </div>
                </section>

            </main>
        );
    }
}

export default Reading;