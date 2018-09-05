import React, { Component } from 'react';

import Map from './Map';

class MapContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return (
            <div className="map-overlay">
                <div id="map">
                    <Map 
                    isMarkerShown
                    googleMapURL="https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places"
                    loadingElement={<div style={{ height: `100%` }} />}
                    containerElement={<div style={{ height: `350px` }} />}
                    mapElement={<div style={{ height: `100%`, maxWidth: `500px`, margin: `auto 0` }} />}
                    coords={this.props.coords}
                    />
                </div>
            </div>
        );
    }
}

export default MapContainer;