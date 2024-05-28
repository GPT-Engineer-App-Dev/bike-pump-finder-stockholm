import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import { useEffect, useState } from 'react';
import { Box, Spinner } from '@chakra-ui/react';

const Map = () => {
  const [stations, setStations] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('https://api.example.com/bike-pump-stations')
      .then(response => response.json())
      .then(data => {
        setStations(data);
        setLoading(false);
      })
      .catch(error => {
        console.error('Error fetching bike pump stations:', error);
        setLoading(false);
      });
  }, []);

  const customIcon = new L.Icon({
    iconUrl: 'https://example.com/bike-pump-icon.png',
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
  });

  return (
    <Box height="100vh" width="100%">
      {loading ? (
        <Spinner size="xl" />
      ) : (
        <MapContainer center={[59.3293, 18.0686]} zoom={13} style={{ height: '100%', width: '100%' }}>
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          />
          {stations.map(station => (
            <Marker key={station.id} position={[station.latitude, station.longitude]} icon={customIcon}>
              <Popup>
                {station.name}
              </Popup>
            </Marker>
          ))}
        </MapContainer>
      )}
    </Box>
  );
};

export default Map;