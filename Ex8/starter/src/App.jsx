import React, { Component } from 'react';
import FavouritesList from "./FavouritesList";

import CurrentLocation from './CurrentLocation';
import MapContainer from './MapContainer';
import Search from './Search';

let favourites = [];

if(localStorage.favourites) {
	favourites = JSON.parse(localStorage.favourites);
}

class App extends Component {
  	constructor(props) {
		super(props);
		console.dir(favourites);
		this.state = {
			favourites,
			currentAddress: 'QA Manchester',
			mapCoordinates: {
				lat: 53.475586,
				lng: -2.241402
			}
		};

		this.searchForAddress = this.searchForAddress.bind(this);

		this.isAddressInFavourites = currentAddress => {
			if(currentAddress !== `Location not found...`) {
				let favourites = this.state.favourites;
				let found = false;

				favourites.forEach(favourite => {
					if(currentAddress === favourite.address) {
						return found = true;
						
					}
					return found = false;
				});

				return found;
			}
		};

		this.onFavouriteToggle = currentAddress => {
			if(this.isAddressInFavourites(currentAddress)) {
				this.removeFavourite(currentAddress);
			}
			else {
				this.addFavourite(currentAddress);
			}
		};

		this.removeFavourite = address => {
			let favourites = this.state.favourites;
			let index = -1;
			
			for(let i = 0; i < favourites.length; i++) {
				if(favourites[i].address === address) {
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
			if(address !== `Location not found...`) {
				let favourites = this.state.favourites;
				
				favourites.push({
					address: address,
					timeStamp: Date.now()
				});

				this.setState({
					favourites
				});

				localStorage.favourites = JSON.stringify(favourites);
			}
		}
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
		}
		catch(error) {
			currentState.currentAddress = `Location not found...`;
			currentState.mapCoordinates = {lat: 0, lng: 0};
		}

		this.setState({
			currentState
		});
	}

	componentDidUpdate() {
		console.log(`App did update`);
	}

	render() { 
		console.log(`currentAddress in App's render: ${this.state.currentAddress}`);
		return (
		<div>
			<h1>{this.props.title}</h1>
			<Search onSearch={this.searchForAddress} />
			<MapContainer coords={this.state.mapCoordinates} />
			<CurrentLocation 
				address={this.state.currentAddress} 
				favourite={this.isAddressInFavourites(this.state.currentAddress)} 
				onFavouriteToggle={this.onFavouriteToggle}
			/>
			<FavouritesList 
				favouriteLocations={this.state.favourites}
				activeLocationAddress={this.state.currentAddress}
				onClick={this.searchForAddress}
			/>
		</div>
		);
	}
}
 
export default App;