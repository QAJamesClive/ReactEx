import React from 'react';
import { Route } from 'react-router-dom';

import FilmDescription from './FilmDescription';
import FilmLinks from './FilmLinks';
// import './Films.css';

const Films = (props) => {
    return (
        <div className="films">
            <h2>A long time ago in a galaxy far, far way...</h2>
            <FilmLinks match={props.match}/>
            <div>
                <Route path={`${props.match.url}/:filmId`} component={FilmDescription} />
                <Route exact path={`${props.match.url}`} render = {() => (
                    <h6>Please select a film to see its details</h6>
                )}/>
            </div>
        </div>
    );
}

export default Films;
