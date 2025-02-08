import { Marker, TileLayer } from 'react-leaflet';
import { createContext } from '../hooks/UseContext'
import { MapContainer} from '../hooks/UseMap'
import { flight as flights} from '../Flight'
import { useState } from '../hooks/UseState'
import { StatusFlight } from '../components/Pages/Principal/Sub-Principal/StatusFlight';
import { map } from 'leaflet';

export const PageContext = createContext();

export function PageContextProvider(props){

  const [valueInput,setValueInput] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);

  const mapFlights = flights.map(flight=> flight)


  function handleChange(e){
    setCurrentIndex(parseInt(e.target.value))
    setValueInput(e.target.value)
  }

  function handleSubmit(e){    
    e.preventDefault();

    filterFlight()

    setValueInput('')
    setCurrentIndex('')
  }

  function filterFlight(){
    const [flightFilter] = mapFlights.filter(flight=> flight.id === currentIndex)
    console.log(flightFilter)
  }

  return(
    <PageContext.Provider 
      value={{
        MapContainer,
        TileLayer,
        mapFlights,
        handleChange,
        handleSubmit,
        valueInput,
      }}
    >
      {props.children}
    </PageContext.Provider>
    
  )
}