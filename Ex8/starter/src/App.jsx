import React, { Component } from 'react';

import CurrentLocation from './CurrentLocation';
import MapContainer from './MapContainer';
import Search from './Search';

let favourites = [];

class App extends Component {
  	constructor(props) {
		super(props);

		console.log('App constructor');

		this.state = {
			currentAddress: 'QA Manchester',
			mapCoordinates: {
				lat: 53.475586,
				lng: -2.241402
			}
		}

		this.searchForAddress = this.searchForAddress.bind(this);

		this.isAddressInFavourites = currentAddress => {
			if(currentAddress != "Location not found..."){
				let favourites = this.state.favourites;
				let found = false;

				favourites.forEach(favorite => {
					if(currentAddress == favorite.address){
						return found = true;
					}
					return found = false;
				});
				return found;				
			}
		}

		this.removeFavourite = address => {
			let favourites = this.state.favourites;
			let index = -1;
			for(let i = 0; i < favourites.length; i++){
				if(favourites[i].address == address){
					index = i;
					break;
				}
			}

			if(index > -1) {
				favourites.splice(index, 1);
			}

			this.setState({
				favourites
			});

			localStorage.favourites = JSON.stringify(favourites);

		}

		this.addFavourite = address => {
			let favourite = this.state.favourites;

			favourites.push({
				address:address,
				timeStamp:Date.now()
			});

			this.setState({
				favourites
			})

			localStorage.favourites = JSON.stringify(favourites);
		}
	}

	componentDidMount() {
		console.log('App componentDidMount');
	}

	componentDidUpdate() {
		console.log('App componentDidUpdate');
	}

	static getDerivedStateFromProps(props, state) {
		console.log('App getDerivedStateFromProps');
		console.dir(props);
		console.dir(state);
		return state;
	}

	getSnapshotBeforeUpdate(prevProps, prevState) {
		console.log('App getSnapshotBeforeUpdate');
		console.dir(prevProps);
		console.dir(prevState);
		return prevState;
	}

	shouldComponentUpdate(nextProps, nextState) {
		console.log('App shouldComponentUpdate');
		console.dir(nextProps);
		console.dir(nextState);
		console.log(`should App update: ${!(JSON.stringify(nextProps) === JSON.stringify(this.props) && JSON.stringify(nextState) === JSON.stringify(this.state))}`);
		return !(JSON.stringify(nextProps) === JSON.stringify(this.props) && JSON.stringify(nextState) === JSON.stringify(this.state));
	}

	componentWillUnmount() {
		console.log('App componentWillUnmount');
	}


	async searchForAddress(address) {
		const concatAddress = address.replace(' ', '+');
		let currentState = this.state;
		currentState.currentAddress = address;  
		try {
			const url = `https://maps.googleapis.com/maps/api/geocode/json?address=${concatAddress}`;
				let response = await fetch(url);
				let responseJSON = await response.json();
				currentState.mapCoordinates = await responseJSON.results[0].geometry.location;
				console.log(currentState.mapCoordinates);
		}
		catch(error) {
			currentState.currentAddress = `Location not found...`;
			currentState.mapCoordinates = {lat: 0, lng: 0};
		}

		this.setState({
			currentState
		});
	}

	render() { 
		console.log('App render');

		return (
		<div>
			<h1>{this.props.title}</h1>
			<Search onSearch={this.searchForAddress} />
			<MapContainer coords={this.state.mapCoordinates} />
			<CurrentLocation address={this.state.currentAddress} onFavouriteToggle={this.onFavouriteToggle}/>
		</div>
		);
	}
}
 
export default App;