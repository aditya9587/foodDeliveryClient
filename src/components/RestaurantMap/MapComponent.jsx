import React,{ useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup, useMapEvents } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';


import markerIcon from 'leaflet/dist/images/marker-icon.png';
import markerIconRetina from 'leaflet/dist/images/marker-icon-2x.png';
import markerShadow from 'leaflet/dist/images/marker-shadow.png';

const DefaultIcon = L.icon({
  iconUrl: markerIcon,
  iconRetinaUrl: markerIconRetina,
  shadowUrl: markerShadow,
  iconSize: [25, 41], 
  iconAnchor: [12, 41], 
});
L.Marker.prototype.options.icon = DefaultIcon;


function LocationPins({ setPins }) {
  useMapEvents({
    click: (e) => {
      const { lat, lng } = e.latlng;
      setPins((prevPins) => [...prevPins, { lat, lng }]);
    },
  });
  return null;
}

const MapComponent = () => {
  const [pins, setPins] = useState([{ lat: 28.208822, lng: 76.844597 }]); 

  return (
    <MapContainer
      center={[pins[0].lat, pins[0].lng]} 
      zoom={13}
      style={{ height: '50vh', width: '100%' }}
      scrollWheelZoom={true} 
    >

      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution="&copy; <a href='https://www.openstreetmap.org/copyright'>OpenStreetMap</a> contributors"
      />

    
      {pins.map((pin, index) => (
        <Marker key={index} position={[pin.lat, pin.lng]}>
          <Popup>
            Pinned at: {pin.lat.toFixed(5)}, {pin.lng.toFixed(5)}
          </Popup>
        </Marker>
      ))}

   
      <LocationPins setPins={setPins} />
    </MapContainer>
  );
};

export default MapComponent;
