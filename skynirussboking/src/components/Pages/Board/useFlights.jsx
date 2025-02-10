import { useEffect, useState } from "react";

const mockFlights = [
  {
    id: 1,
    flightNumber: "AA123",
    airline: "American Airlines",
    scheduledTime: "14:30",
    status: "En horario",
    delay: 0,
    dep_iata: "JFK",
    arr_iata: "LAX",
  },
  {
    id: 2,
    flightNumber: "DL456",
    airline: "Delta",
    scheduledTime: "15:00",
    status: "Retrasado",
    delay: 45,
    dep_iata: "JFK",
    arr_iata: "ATL",
  },
];

const useFlights = (airportCode, filterType) => {
  const [flights, setFlights] = useState([]);

  useEffect(() => {
    const filteredFlights = mockFlights.filter(
      (flight) => flight[filterType] === airportCode
    );
    setFlights(filteredFlights);
  }, [airportCode, filterType]);

  return flights;
};

export default useFlights;
