import React, { Component } from 'react';
import { GOOGLE_API_KEY } from "../../config";
import axios from 'axios';
import { BsGeoAlt, BsDot, BsSearch } from "react-icons/bs";

export default class BicycleStores extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            stores: []
        };
    }

    createStoreList = async (position) => {
        const apiAddress = 'https://cors-anywhere.herokuapp.com/https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=';
        const radius = 20000
        try {
            const { data } = await axios.get(`${apiAddress}${position.coords.latitude},${position.coords.longitude}&radius=${radius}&key=${GOOGLE_API_KEY}&type=bicycle_store`);
            console.log(data.results);

            this.setState({
                stores: data.results,
                isLoaded: true
            });
        }
        catch (err) {
            console.log(err);
            //this.props.history.push('/customer_dashboard');
        }
    }

    getLocation = () => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(this.createStoreList);
        } else {
            console.log('Geolocation is not supported by this browser.');
        }
    }

    async componentDidMount() {
        this.getLocation();
    }

    render() {
        const { error, isLoaded, items } = this.state;
        if (error) {
            return <div>Error: {error.message}</div>;
        } else if (!isLoaded) {
            return <div>Loading...</div>;
        } else {
            return this.state.stores.map((store,idx) => (
                <ul key={idx} className="card-text shop-list-style">
                    <img src="images/thumbnail.png" width="30px" alt="" className="shop-location-icon thumbnail-image-style" />
                    <li className="card-text card-sub-text location-icon-shop"><b>{store.name}</b> Currently: {(store.open_now ? 'Open' : 'Closed')}</li>
                    <li className="card-text card-sub-text location-icon-shop"><BsGeoAlt className="shop-location-icon " />{store.vicinity} </li>
                    <div className='h-divider'></div>
                </ul>
            ))
        }
    }
}

