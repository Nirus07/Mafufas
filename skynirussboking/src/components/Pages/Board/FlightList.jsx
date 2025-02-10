import useFlights from "../../../hooks/UseFlight";
import FlightCard from "./FlightCard";

const FlightList = ({ airportCode, filterType }) => {
  const flights = useFlights(airportCode, filterType);

  return (
    <div className="space-y-4">
      {flights.length > 0 ? (
        flights.map((flight) => <FlightCard key={flight.id} flight={flight} />)
      ) : (
        <p className="text-center text-gray-300">No hay vuelos disponibles.</p>
      )}
    </div>
  );
};

export default FlightList;
