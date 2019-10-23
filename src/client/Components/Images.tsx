import * as React from 'react';

export interface ImagesProps<> { }
export interface ImagesState {
    imageArray: []
}

class Images extends React.Component<ImagesProps, ImagesState> {
    constructor(props: ImagesProps) {
        super(props);
        this.state = {
            imageArray: []
        }
    }

    render() {

        // let drawCard = Math.floor(Math.random() * (12 - 1) + 1);

        return (
            <div>
              
            </div>
        )
    }
}

export default Images;