import React, { Component } from 'react';
import Map from './Map';

export default class MapContainer extends Component{
    constructor (probs){
        super(probs);
        console.log("Map Constructror");
    }
    componentDidMount(){
        console.log('Map componentDidMount');

    }

    componentDidUpdate(){
        console.log('Map componentDidUpdate');

    }
    
    static getDerivedStateFromProps(props, state){
        console.log('Map getDerivedStateFromProps');
        console.dir({props});
        console.dir({state});
    }

    getSnapshotBeforeUpdate(prevProps, prevState){
        console.log('Map getSnapshotBeforeUpdate');
        console.dir({prevProps});
        console.dir({prevState});
    }

    shouldComponentUpdate(nextProps, nextState){
        console.log('Map shouldComponentUpdate');
        console.dir({nextProps});
        console.dir({nextState});

        return (nextProps.coords.lat !== this.props.coords.lat && nextProps.coords.lng !== this.props.coords.lng);
    }

    componentWillUnmount(){
        console.log('Map componentWillUnmount');
    }
    render(){
        console.log('Map render');
        return(
              <div className = "map-overlay">
                <div id = "map">
                <Map 
                    isMarkerShown
                    googleMapURL = 'https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places'
                    loadingElement={<div style={{ height: `100%` }} />}
                    containerElement={<div style={{ height: `350px` }} />}
                    mapElement={<div style={{ height: `100%`, maxWidth: `500px`,
                    margin: `auto 0` }} />}
                    coords={this.props.coords}
                /> 
                </div>
              </div>
        );
    }

}