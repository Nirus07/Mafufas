import React from 'react';

export default function FlightDetailsModal({ flight, onClose }) {
  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      {/* Fondo oscuro para simular la superposición del modal */}
      <div 
        className="absolute inset-0 bg-black opacity-50" 
        onClick={onClose}
      ></div>
      <div className="relative bg-white rounded-lg shadow-lg p-6 max-w-lg w-full z-10">
        <h3 className="text-2xl font-bold mb-4">
          Detalles del vuelo {flight.flight.number}
        </h3>
        <ul className="mb-4 text-gray-700">
          <li><strong>Fecha:</strong> {flight.flight_date}</li>
          <li><strong>Estado:</strong> {flight.flight_status}</li>
          <li><strong>Aerolínea:</strong> {flight.airline.name}</li>
          <li>
            <strong>Salida:</strong> {flight.departure.airport} 
            {flight.departure.delay && ` - Retraso: ${flight.departure.delay} min`}
          </li>
          <li><strong>Llegada:</strong> {flight.arrival.airport}</li>
          <li><strong>Motivo del retraso:</strong> {flight.reason || 'No disponible'}</li>
        </ul>
        <div className="flex justify-end">
          <button 
            onClick={onClose} 
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
          >
            Cerrar
          </button>
        </div>
      </div>
    </div>
  );
}