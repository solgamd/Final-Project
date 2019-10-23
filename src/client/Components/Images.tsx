import * as React from 'react';

export interface ImagesProps { }
export interface ImagesState {

}

class Images extends React.Component<ImagesProps, ImagesState> {
    constructor(props: ImagesProps) {
        super(props);
        this.state = {

        }
    }

    componentDidMount() {
        // const imageArray = [
        //     { id: 1, src:'images/KC.jpg'},
        //     { id: 2, src:'images/QC.jpg'},
        //     { id: 3, src:'images/PC.jpg'},
        //     { id: 4, src:'images/KP.jpg'},
        //     { id: 5, src:'images/QP.jpg'},
        //     { id: 6, src:'images/PP.jpg'},
        //     { id: 7, src:'images/KS.jpg'},
        //     { id: 8, src:'images/QS.jpg'},
        //     { id: 9, src:'images/PS.jpg'},
        //     { id: 10, src:'images/KW.jpg'},
        //     { id: 11, src:'images/QW.jpg'},
        //     { id: 12, src:'images/PW.jpg'},
        // ];
        // let pulledCard = Math.floor(Math.random() * imageArray.length)
    }

    // async handlePullCard() {
    //     let pulledCard = [];

    // }

    render() {

        const imageArray = [
            { id: 1, src: 'images/1.jpg' },
            { id: 2, src: 'images/2.jpg' },
            { id: 3, src: 'images/3.jpg' },
            { id: 4, src: 'images/4.jpg' },
            { id: 5, src: 'images/5.jpg' },
            { id: 6, src: 'images/6.jpg' },
            { id: 7, src: 'images/7.jpg' },
            { id: 8, src: 'images/8.jpg' },
            { id: 9, src: 'images/9.jpg' },
            { id: 10, src: 'images/10.jpg' },
            { id: 11, src: 'images/11.jpg' },
            { id: 12, src: 'images/12.jpg' },
        ];

        let pulledCard = Math.floor(Math.random() * (12 - 1) + 1);

        return (

            <div>
                {imageArray.map(image => (
                    // <img key={`image-${image.id}`} src={`images/${Math.floor(Math.random() * (12 - 1) + 1)}.jpg`} alt="tarot_card" />
                    <img key={`image-${image.id}`} src={`images/${pulledCard}.jpg`} alt="tarot_card" />

                ))}

                {/* <button onClick={this.handlePullCard}>Pull a Card</button>

                {pulledCard} */}
            </div>
        )
    }
}

export default Images;