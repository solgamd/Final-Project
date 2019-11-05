import * as React from 'react';
import { ICard } from '../utils/interfaces';
import { json } from '../utils/api';
import Spinner from 'react-bootstrap/Spinner';
import InterpretLinks from '../Components/InterpretLinks';
import LoadingOverlay from 'react-loading-overlay';

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
                    <h3 className="text-dark tarot-title">TAROT READER</h3>
                </div>
                <div className="row">
                    <div className="col-sm-8 rounded justify-content-around bg-secondary shadow">

                        <div className="row justify-content-around">
                            <div className="col">
                                <div className="card mx-auto">
                                    <LoadingOverlay
                                        className="bg-secondary"
                                        active={this.state.shuffle}
                                        spinner={<div>
                                            <Spinner animation="grow" variant="success"><span className="sr-only">Loading...</span></Spinner>
                                            <h5 className="text-white">Shuffling...</h5>
                                        </div>}>

                                        {/* <div className="card mx-auto"> */}
                                        {this.state.pulledCard === 0 ? <img className="image rounded" src={`images/00.jpg`} alt={`tarot_card_0`} /> : <img className="image" src={`images/${this.state.pulledCard}.jpg`} alt={`tarot_card_${this.state.pulledCard}`} />}
                                        {/* </div> */}
                                    </LoadingOverlay>
                                </div>
                            </div>
                            <div className="col text-center bg-secondary pt-2">
                                <div className="bg-secondary">
                                    <h5 className="card-text">Think about your question as you SHUFFLE.</h5>
                                    <h5 className="card-text">Make sure you shuffle well!</h5>
                                    <button className="btn btn-success mx-2 shadow" onClick={(e: React.MouseEvent<HTMLButtonElement>) => this.handleShuffle(e)}>Shuffle Cards</button>
                                    <h5 className="card-text mt-3">When you're ready, PULL A CARD.</h5>
                                    <button className="btn btn-success mx-2 shadow" onClick={(e: React.MouseEvent<HTMLButtonElement>) => this.handlePullCard(e)}>Pull A Card</button>
                                </div>
                                <h5 className="card-text mt-3">Find your INTERPRETATION below.</h5>
                                <hr />
                                <div className="mt-3">
                                    <button className="btn btn-warning mt-3 shadow" onClick={(e: React.MouseEvent<HTMLButtonElement>) => this.handleNewQuestion(e)}>Ask New Question</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row justify-content-center">
                    {/* <button className="btn btn-secondary mx-2 shadow" onClick={(e: React.MouseEvent<HTMLButtonElement>) => this.handleShuffle(e)}>Shuffle Cards</button>
                    <button className="btn btn-secondary mx-2 shadow" onClick={(e: React.MouseEvent<HTMLButtonElement>) => this.handlePullCard(e)}>Pull A Card</button>
                    <button className="btn btn-warning mx-2 shadow" onClick={(e: React.MouseEvent<HTMLButtonElement>) => this.handleNewQuestion(e)}>Ask New Question</button> */}
                </div>
                <div className="row justify-content-center">
                    <InterpretLinks />
                </div>
            </main>
        );
    }
}

export default Reading;