import * as React from 'react';

export interface ImagesProps { }
export interface ImagesState {
    images: {
        id: number,
        src: string
    }
}

class Images extends React.Component<ImagesProps, ImagesState> {
    // constructor(props: ImagesProps) {
    //     super(props);
    //     this.state = {
    //         images: {
    //             id: 0,
    //             src: ''
    //         }
    //     }
    // }

    render() {
        const images = [
            { id: 1, src:'images/KC.jpg'},
            { id: 2, src:'images/QC.jpg'},
            { id: 3, src:'images/PC.jpg'},
            { id: 4, src:'images/KP.jpg'},
            { id: 5, src:'images/QP.jpg'},
            { id: 6, src:'images/PP.jpg'},
            { id: 7, src:'images/KS.jpg'},
            { id: 8, src:'images/QS.jpg'},
            { id: 9, src:'images/PS.jpg'},
            { id: 10, src:'images/KW.jpg'},
            { id: 11, src:'images/QW.jpg'},
            { id: 12, src:'images/PW.jpg'},
        ];

        return (
            <div>
                {images.map(image => (
                    <img key={image.id} src={image.src} alt="tarot_card" />
                ))}
            </div>
        )
    }
}

export default Images;