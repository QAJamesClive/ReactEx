import React from 'react';
import { Route } from 'react-router-dom';

// import './Actors.css';
import ActorDetails from './ActorDetails';
import ActorLinks from './ActorLinks';

const Actors = (props) => {
    return (
        <div className="actors">
            <h3>"When 900 years old, you reach...look as good, you'll not..."</h3>
            <ActorLinks match={props.match} />
            <div>
                <Route path={`${props.match.url}/:actorId`} component={ActorDetails} />
                <Route exact path={`${props.match.url}`} render={() => (
                    <h6>Please select an actor to see their details</h6>
                )}/>
            </div>
        </div>
    );
}

export default Actors;
