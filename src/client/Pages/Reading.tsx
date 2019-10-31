import * as React from 'react';
import { ICard } from '../utils/interfaces';
import { json } from '../utils/api';
import Spinner from 'react-bootstrap/Spinner';
import InterpretLinks from '../Components/InterpretLinks';

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

    async handleNewQuestion(e: React.MouseEvent<HTMLButtonElement>) {
        this.setState({ pulledCard: 0 });
    }

    render() {
        return (
            <main className="container">
                <div className="row justify-content-center">
                    <h3 className="text-dark tarot-title">Tarot Reading</h3>
                </div>
                <div className="row">
                    <div className="col-10 rounded justify-content-around bg-secondary">
                        <div className="row">
                            <div className="col-sm-4">
                                <div className="card justify-content-center">
                                    {this.state.pulledCard === 0 ? <img className="image rounded" src={`images/00.jpg`} alt={`tarot_card_0`} /> : <img className="image" src={`images/${this.state.pulledCard}.jpg`} alt={`tarot_card_${this.state.pulledCard}`} />}
                                </div>
                            </div>
                            <div className="col-sm-4 bg-secondary">
                                <div className="card bg-secondary">
                                    <h3 className="card-text">Think about your question as you click SHUFFLE. Make sure you shuffle well!</h3>
                                    <h3 className="card-text">When you're ready, PULL A CARD.</h3>
                                </div>
                                <div className="row justify-content-center">
                                    <div className="spinner m-1">
                                        {this.state.shuffle == true ? <Spinner animation="grow" variant="success"><span className="sr-only">Loading...</span></Spinner> : null}
                                    </div>
                                    {this.state.shuffle == true ? <h4 className="text-dark">Shuffling...</h4> : null}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row justify-content-center">
                    <button className="btn btn-secondary mx-2" onClick={(e: React.MouseEvent<HTMLButtonElement>) => this.handleShuffle(e)}>Shuffle Cards</button>
                    <button className="btn btn-secondary mx-2" onClick={(e: React.MouseEvent<HTMLButtonElement>) => this.handlePullCard(e)}>Pull A Card</button>
                    <button className="btn btn-warning mx-2" onClick={(e: React.MouseEvent<HTMLButtonElement>) => this.handleNewQuestion(e)}>Ask New Question</button>
                </div>
                {/* <div className="row justify-content-center">
                    <h3 className="text-dark">Tarot Reading</h3>
                </div>
                <div className="row justify-content-center">
                    {this.state.pulledCard === 0 ? <img className="image" src={`images/0.jpg`} alt={`tarot_card_0`} /> : <img className="image" src={`images/${this.state.pulledCard}.jpg`} alt={`tarot_card_${this.state.pulledCard}`} />}
                </div> */}
                {/* <div className="row justify-content-center">
                    <div className="spinner m-1">
                        {this.state.shuffle == true ? <Spinner animation="grow" variant="success"><span className="sr-only">Loading...</span></Spinner> : null}
                    </div>
                    {this.state.shuffle == true ? <h4 className="text-dark">Shuffling...</h4> : null}
                </div> */}
                {/* <div className="row justify-content-center">
                    <button className="btn btn-secondary mx-2" onClick={(e: React.MouseEvent<HTMLButtonElement>) => this.handleShuffle(e)}>Shuffle Cards</button>
                    <button className="btn btn-secondary mx-2" onClick={(e: React.MouseEvent<HTMLButtonElement>) => this.handlePullCard(e)}>Pull A Card</button>
                </div>
                <div className="row justify-content-center">
                    <button className="btn btn-secondary mx-2" onClick={(e: React.MouseEvent<HTMLButtonElement>) => this.handleNewQuestion(e)}>Ask New Question</button>
                </div> */}
                <div className="row justify-content-center">
                    <InterpretLinks />
                </div>
            </main>
        );
    }
}

export default Reading;