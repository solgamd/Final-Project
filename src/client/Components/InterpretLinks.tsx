import * as React from 'react';
import ResultKC from './ResultKC';
import { Link } from 'react-router-dom';

export interface InterpretLinksProps { }
 
const InterpretLinks: React.SFC<InterpretLinksProps> = () => {
    return ( 
        <section className="container justify-content-center">
           <article className="row">
               <div className="col-6 text-center">
                   <Link to="/ResultKC" className="text-success">King of Cups</Link>
               </div>
           </article>
        </section>
     );
}
 
export default InterpretLinks;