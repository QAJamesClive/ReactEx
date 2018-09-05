import React, { Component } from 'react';

class CurrentLocation extends Component {
    constructor(props) {
        super(props);

        this.toggleFavourite = () => {
            this.props.onFavouriteToggle(this.props.address);
        }
    }

    componentDidUpdate() {
        console.log(`CurrentLocation did update`);
    }

    render() {

        let favouriteClassName = ``;
        
        if(this.props.currentAddress !== 'Location not found...') {
            if(this.props.favourite) {
                favouriteClassName = `glyphicon glyphicon-star`;
            }
            else {
                favouriteClassName = `glyphicon glyphicon-star-empty`;
            }
        }

        return (
            <div className="col-xs-12 col-md-6 col-md-offset-3 current-location">
                <h4 id="save-location">{this.props.address}</h4>
                {this.props.address === `Location not found...` ? false : 
                <span className={favouriteClassName} onClick={this.toggleFavourite} aria-hidden="true"></span>}
            </div>
        );
    }
}
 
export default CurrentLocation;