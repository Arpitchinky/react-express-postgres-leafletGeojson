import React, { Component } from 'react';
import L from 'leaflet';


// center of the map
var center = [18.4339230205526, 77.3208450000667];

function Map_geojson() {
  var map = L.map("map").setView(center,3);
  L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
    attribution:
      '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
  }).addTo(map);

  var myLines = [{
    "type": "LineString",
    "coordinates": [[-100, 40], [-105, 45], [-110, 55]]
}, {
    "type": "LineString",
    "coordinates": [[-105, 40], [-110, 45], [-115, 55]]
}];

var myStyle = {
    "color": "#ff7800",
    "weight": 5,
    "opacity": 0.65
};

L.geoJSON(myLines, {
    style: myStyle
}).addTo(map);
}

class NavbarApp  extends Component {

    componentDidMount() {
       
      Map_geojson();

      }
    
    render() { 
        return ( 
        <div>
          <h2> Welcome to leaflet map</h2>
          <div id="map">xxx</div>  
            

        </div>
         );
    }
}
 
export default NavbarApp ;