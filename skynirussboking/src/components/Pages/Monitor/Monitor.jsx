import { useState } from "react";
import DelaySlider from "./DelaySlider";
import FlightCard from "./FlightCard";
import FlightDetailsModal from "./FlightDetailsModal";

// Modelo de datos simulado del API
const mockFlights = [
  {
    id: 1,
    flight_date: "2024-02-09",
    flight_status: "delayed",
    departure: { airport: "JFK", delay: 45 },
    arrival: { airport: "LAX" },
    airline: { name: "Delta" },
    flight: { number: "DL105" },
    reason: "Mal tiempo"
  },
  {
    id: 2,
    flight_date: "2024-02-09",
    flight_status: "delayed",
    departure: { airport: "LAX", delay: 20 },
    arrival: { airport: "ORD" },
    airline: { name: "American Airlines" },
    flight: { number: "AA250" },
    reason: "Problemas técnicos"
  }
];

export default function Monitor() {
  const [delayFilter, setDelayFilter] = useState(15);
  const [selectedFlight, setSelectedFlight] = useState(null);

  // Filtrar vuelos según el retraso mínimo
  const filteredFlights = mockFlights.filter(flight =>
    flight.departure.delay >= delayFilter
  );

  // Calculo de retraso par aasignacion de colores por interpolado
  const maxDelay = Math.max(...mockFlights.map(f => f.departure.delay));

  return (
    <div className="min-h-screen bg-[#1E293B] flex justify-center items-center p-4">
      <div className="bg-[#313C4C] rounded-lg shadow-lg p-6 w-full max-w-4xl">
        <h2 className="text-white text-2xl font-bold mb-4 text-center">
          Monitor de Vuelos Retrasados
        </h2>
        
        <DelaySlider delayFilter={delayFilter} setDelayFilter={setDelayFilter} />
        
        <div className="mt-4 grid gap-4">
          {filteredFlights.map(flight => (
            <FlightCard 
              key={flight.id} 
              flight={flight} 
              onSelect={() => setSelectedFlight(flight)} 
              delayFilter={delayFilter}
              maxDelay={maxDelay}
            />
          ))}
        </div>
      </div>
      
      {selectedFlight && (
        <FlightDetailsModal 
          flight={selectedFlight} 
          onClose={() => setSelectedFlight(null)} 
        />
      )}
    </div>
  );
}
