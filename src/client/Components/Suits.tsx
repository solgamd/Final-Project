import * as React from 'react';

export interface SuitsProps { }

const Suits: React.SFC<SuitsProps> = () => {
    return (
        <section className="container col-10 text-secondary justify-content-center">
            <div className="p-3">
                <h3 className="tarot-title text-center m-3">The Suits</h3>
                <div className="row my-4 flex-row justify-content-center">
                    <div className="col d-flex justify-content-end"><img src="/images/21.png" className="img-suits" /></div>
                    <div className="col d-flex justify-content-start"><img src="/images/23.png" className="img-suits" /></div>
                    <div className="w-100 my-2"></div>
                    <div className="col d-flex justify-content-end"><img src="/images/22.png" className="img-suits" /></div>
                    <div className="col d-flex justify-content-start"><img src="/images/24.png" className="img-suits" /></div>
                </div>
                <p className="text-center">The Suits—Wands, Cups, Swords, and Pentacles—are the esoteric formula or key to manifestation on the earth plane.</p>
                <hr/>
                <p>THE SUIT OF CUPS:</p>
                <p>
                    When you think of Cups, think of emotion, because Cups are the feeling or bridge between the original idea and the next stage, which is action. They are the glue or cohesive factor in the development of manifestation and esoterically signify the marriage of thought and feeling.
                    Their key words are: emotion, desire, inner experience, spirit. When there are many Cups in a reading, it indicates that conditions are felt primarily in the realm of emotion, but not necessarily as an outward manifestation.
                </p>
                <p className="mt-5">
                    THE SUIT OF SWORDS:
                </p>
                <p>
                    When you think of Swords, think of action, because Swords are the act. Esoterically they are like the third part or Holy Ghost in the Christian trinity of The Father, Son, and Holy Ghost. On the mundane level, the Swords oftentimes indicate struggle, because of the difficulties man has to move through in order to turn a thought into a reality on the denser or physical earth plane.
                    Their key words are: action, movement, struggle, keenness. When there are many Swords in a reading, it shows tremendous activity, agitation, or acceleration, because Swords are the last stages of effort before the final result.
                </p>
                <p className="mt-5">
                    THE SUIT OF PENTACLES:
                </p>
                <p>
                    When you think of Pentacles, think of manifestation, because Pentacles are the fruits of one’s labor, the culmination of the first three ingredients, the end result or fruition.
                    Their key words are: manifestation, realization, proof, prosperity. When there are many Pentacles in a reading, it indicates that conditions are taking form, or are in the process of being demonstrated.
                </p>
                <p className="mt-5"> THE SUIT OF WANDS:</p>
                <p>
                    When you think of Wands, think of ideas, because Wands are the conception or seeds through which the tree springs forth. They are the original thought, intention, or primary element of growth.
                 Their key words are: ideas, growth, ambition, expansion. When there are many Wands in a reading, it indicates that conditions are primarily in the realm of thought, or at the very first stages of development.
               </p>
            </div>
        </section >

    );
}

export default Suits;