import React, { Component } from 'react';
import CurrentLocation from './CurrentLocation.jsx';
import MapContainer from './MapContainer.jsx';

export default class App extends Component{
    constructor(props){
        super(props);
        console.log('App constructor');

        this.state = {
            currentAddress : "5th Floor Anchorage 1, Anchorage Quay, Salford Quays, Manchester, M50 3YJ",
            mapCoordinates : {
                lat : 53.474600,
                lng : -2.286290
            }
        }
    }
    componentDidMount(){
        console.log('App componentDidMount');

    }

    componentDidUpdate(){
        console.log('App componentDidUpdate');

    }
    
    static getDerivedStateFromProps(props, state){
        console.log('App getDerivedStateFromProps');
        console.dir({props});
        console.dir({state});
    }

    getSnapshotBeforeUpdate(prevProps, prevState){
        console.log('App getSnapshotBeforeUpdate');
        console.dir({prevProps});
        console.dir({prevState});
    }

    shouldComponentUpdate(nextProps, nextState){
        console.log('App shouldComponentUpdate');
        console.dir({nextProps});
        console.dir({nextState});

        return !(JSON.stringify(nextProps) === JSON.stringify(this.props) && JSON.stringify(nextState) === JSON.stringify(this.state));
    }

    componentWillUnmount(){
        console.log('App componentWillUnmount');
    }
    render(){
        console.log('App render');
        return(
            <div>
                <h1>{this.props.title}</h1>
                <MapContainer coords={this.state.mapCoordinates} />
                <CurrentLocation address ={this.state.currentAddress}/>

            </div>
        )
    }

}