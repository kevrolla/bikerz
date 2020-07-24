import React, { Component } from 'react';
import { Map, GoogleApiWrapper, Marker } from 'google-map-react';
import { GOOGLE_API_KEY_MAP, GOOGLE_API_KEY } from "../../config";
import axios from 'axios';

class StoreMap extends Component {
    constructor(props) {
      super(props);
  
      this.state = {
        stores: [],
        lat: 37.804363, 
        lng: -122.271111
                // [{lat: 47.49855629475769, lng: -122.14184416996333},
                // {latitude: 47.359423, longitude: -122.021071},
                // {latitude: 47.2052192687988, longitude: -121.988426208496},
                // {latitude: 47.6307081, longitude: -122.1434325},
                // {latitude: 47.3084488, longitude: -122.2140121},
                // {latitude: 47.5524695, longitude: -122.0425407}]
      }
    }
  
    // createMarker = (place, markerNumber) => {
    //     const image = {
    //         url: place.icon,
    //         scaledSize: new google.maps.Size(20, 20)
    //     };
    //     const marker = new google.maps.Marker({
    //         map: map,
    //         position: place.geometry.location,
    //         icon: image
    //     });
    //     google.maps.event.addListener(marker, 'click', function() {
    //         infowindow.setContent(`${markerNumber}: Name: ${place.name} Address: ${place.vicinity}`);
    //         infowindow.open(map, this);
    //     });
    //     markerArray.push(marker);
    // }

    // addSeviceItem = (place, i) => {
    //     const markerNumber = i + 1;
    //     createMarker(place, markerNumber);
    //     markerPlaces.push(place);
    // }

    createStoreList = async (position) => {
        const apiAddress = 'https://cors-anywhere.herokuapp.com/https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=';
        const radius = 20000
        try {
            //const { data } = await axios.get(`${apiAddress}${position.coords.latitude},${position.coords.longitude}&radius=${radius}&key=${GOOGLE_API_KEY}&type=bicycle_store`);
            //console.log(data.results);
            // for (let i = 0; i < data.results.length; i++) {
            //     addSeviceItem(data.results[i], i);
            // };
            this.setState({
                //stores: data.results,
                lat: position.coords.latitude,
                lng: position.coords.longitude,
                isLoaded: true
            });
        }
        catch (err) {
            console.log(err);
        }
    }

    getLocation = () => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(this.createStoreList);
        } else {
            console.log('Geolocation is not supported by this browser.');
        }
    }

    displayMarkers = () => {
      return this.state.stores.map((store, index) => {
        return <Marker key={index} id={index} position={{
         lat: store.geometry.location.lat,
         lng: store.geometry.location.lng
       }}
       onClick={() => console.log("You clicked me!")} />
      })
    }
  
    

    render() {

        const mapStyles = {
            width: "100%",
            height: "100%",
          };
          
      return (
          
          <Map
            google={this.props.google}
            zoom={8}
            style={mapStyles}
            initialCenter={{ lat: this.state.lat, lng: this.state.lng}}
          >
            //{this.displayMarkers()}
          </Map>
      );
    }
  }

  export default StoreMap;