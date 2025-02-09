import { useParams } from "react-router-dom";
import { useState } from "react";
import FlightFilter from "./FlightFilter";
import FlightList from "./FlightList";

const Board = () => {
  const { airportCode } = useParams();
  const [filterType, setFilterType] = useState("dep_iata");

  return (
    <div className="bg-[#1E293B] min-h-screen flex items-center justify-center p-4">
      <div className="bg-[#333E4F] p-6 rounded-2xl shadow-lg w-full max-w-5xl">
        <h1 className="text-white text-2xl font-bold text-center mb-4">
          Tablero de vuelos para {airportCode}
        </h1>
        <FlightFilter filterType={filterType} setFilterType={setFilterType} />
        <FlightList airportCode={airportCode} filterType={filterType} />
      </div>
    </div>
  );
};

export default Board;
