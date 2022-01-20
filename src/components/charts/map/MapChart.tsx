import {  MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import 'leaflet/dist/leaflet.css';

export function MapChart() {
  const position = [51.505, -0.09]
  const change = (e: any) => {
    // setFetching(true)
    // fetchAndSet(e.target.value)
}
  return(
<div className="results">
            <select onChange={change}>
                {['topics', 'persons', 'locations', 'platforms', 'datasources'].map(d => <option key={d}>{d}</option>)}
            </select>
    <MapContainer center={[42.755229, 43.304470]} zoom={7} scrollWheelZoom={false}>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
      {/* <Marker position={position}>
        
      </Marker> */}
    </MapContainer>
      </div>
  )
}