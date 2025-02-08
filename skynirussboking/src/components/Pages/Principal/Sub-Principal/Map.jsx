import { PageContext } from '../../../../context/ContextPageProvider'
import { useContext } from '../../../../hooks/UseContext'
import "leaflet/dist/leaflet.css"


export function Leaflet(){

  const { MapContainer, TileLayer } = useContext(PageContext)
  
  const position = [9.999587791805968, -83.033425038633];
  return(
      <MapContainer center={position} zoom={13} scrollWheelZoom={false}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributor'
          url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png' 
          className='rounded-10xl'
        />
      </MapContainer >
  )
}
