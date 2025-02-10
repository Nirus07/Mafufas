const FlightCard = ({ flight }) => {
    const isDelayed = flight.delay > 30;
  
    return (
      <div
        className={`p-4 rounded-lg shadow-md ${
          isDelayed ? "bg-red-600 text-white" : "bg-gray-700 text-gray-200"
        }`}
      >
        <h2 className="text-lg font-bold">
          Vuelo {flight.flightNumber} - {flight.airline}
        </h2>
        <p>
          <strong>Hora Programada:</strong> {flight.scheduledTime}
        </p>
        <p>
          <strong>Estado:</strong> {flight.status}
        </p>
        {isDelayed && <p className="font-bold">🚨 Retrasado: {flight.delay} min</p>}
      </div>
    );
  };
  
  export default FlightCard;
  