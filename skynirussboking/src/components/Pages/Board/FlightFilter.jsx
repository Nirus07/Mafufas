const FlightFilter = ({ filterType, setFilterType }) => {
    return (
      <div className="flex justify-center space-x-4 mb-4">
        <button
          className={`px-4 py-2 rounded-lg text-white ${
            filterType === "dep_iata" ? "bg-blue-600" : "bg-gray-500"
          }`}
          onClick={() => setFilterType("dep_iata")}
        >
          Salidas
        </button>
        <button
          className={`px-4 py-2 rounded-lg text-white ${
            filterType === "arr_iata" ? "bg-blue-600" : "bg-gray-500"
          }`}
          onClick={() => setFilterType("arr_iata")}
        >
          Llegadas
        </button>
      </div>
    );
  };
  
  export default FlightFilter;
  