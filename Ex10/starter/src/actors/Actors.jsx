import React from 'react';

import './Actors.css';
import ActorDetails from './ActorDetails';

const Actors = () => {
    return (
        <div className="actors">
            <h3>"When 900 years old, you reach...look as good, you'll not..."</h3>
            <ActorDetails />
        </div>
    );
}

export default Actors;
