import React from 'react';

export default function FlightCard({ flight, onSelect, delayFilter, maxDelay }) {
  const delay = flight.departure.delay;
  let ratio = 1;
  // Diferencia para relacion (retraso/filtro)
  if (maxDelay > delayFilter) {
    ratio = (delay - delayFilter) / (maxDelay - delayFilter);
    ratio = Math.min(Math.max(ratio, 0), 1);
  }

  // Asignacion de color: 0 => verde, 1 => rojo
  const red = Math.round(255 * ratio);
  const green = Math.round(255 * (1 - ratio));
  const backgroundColor = `rgb(${red}, ${green}, 0)`;

  return (
    <div 
      className="p-4 rounded shadow cursor-pointer transition transform hover:scale-105"
      style={{ backgroundColor }}
      onClick={onSelect}
    >
      <h3 className="text-white font-bold">
        Vuelo {flight.flight.number} - {flight.airline.name}
      </h3>
      <p className="text-white">Retraso: {delay} min</p>
      <p className="text-white">Salida: {flight.departure.airport}</p>
      <p className="text-white">Llegada: {flight.arrival.airport}</p>
      <div className="mt-2 flex justify-center">
        <button 
          className="bg-gray-200 text-black px-4 py-2 rounded hover:bg-gray-300"
          onClick={(e) => {
            e.stopPropagation();
            onSelect();
          }}
        >
          Ver detalles
        </button>
      </div>
    </div>
  );
}