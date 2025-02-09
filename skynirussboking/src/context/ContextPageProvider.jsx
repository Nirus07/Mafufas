import { Marker, TileLayer } from 'react-leaflet';
import { createContext } from '../hooks/UseContext'
import { MapContainer} from '../hooks/UseMap'
import { flight as flights} from '../Flight'
import { useState } from '../hooks/UseState'

export const PageContext = createContext();

export function PageContextProvider(props){

  const [valueInput,setValueInput] = useState('');
  const [currentIndex, setCurrentIndex] = useState('');
  const [currentStatus, setCurrentStatus] = useState(true);
  const [currentHour, setCurrentHour] = useState('');
  const [currentGate, setCurrentGate] = useState('');
  const [currentDelay, setCurrentDelay] = useState('');
  const [currentAirline, setCurrentAirline] = useState('');


  function handleSubmit(e){
    e.preventDefault();

    flightCurrent();

    setValueInput('');
    setCurrentIndex('');
  }

  function flightCurrent(){
    const [flightFilter] = flights.filter(flight=> flight.id === currentIndex);
    setCurrentStatus(flightFilter.Status);
    setCurrentHour(flightFilter.Hour);
    setCurrentGate(flightFilter.Gate);
    setCurrentDelay(flightFilter.Delay);
    setCurrentAirline(flightFilter.Airline);
  }

  return(
    <PageContext.Provider 
      value={{
        MapContainer,
        TileLayer,
        Marker,
        flights,
        setCurrentIndex,
        setValueInput,
        valueInput,
        currentIndex,
        handleSubmit,
        currentStatus,
        currentHour,
        currentGate,
        currentDelay,
        currentAirline
      }}
    >
      {props.children}
    </PageContext.Provider>
    
  )
}