import React from 'react';

import FavouriteItem from './FavouriteItem';

const FavouritesList = (props) => {

    console.dir(props.favouriteLocations);

    let favouriteLocations = props.favouriteLocations.map(location => {
        console.dir(location);
        let active = props.activeLocationAddress === location.address;
        console.log(active);
        return <FavouriteItem 
            address={location.address}
            key={location.timestamp}
            timestamp={location.timestamp}
            active={active}
            onClick={props.onClick}
        />
    });

    return (
        <React.Fragment>
            {(favouriteLocations.length) ? 
                <div className="list-group col-xs-12 col-md-6 col-md-offset-3">
                    <span className="list-group-item-active">Saved Locations</span>
                    {favouriteLocations}
                </div>
            : false}
        </React.Fragment>
    );
}
 
export default FavouritesList;