export default function DelaySlider({ delayFilter, setDelayFilter }) {
    return (
      <div className="flex flex-col items-center mb-4">
        <label className="text-white text-lg">Filtrar por retraso: {delayFilter} min</label>
        <input
          type="range"
          min="0"
          max="60"
          step="5"
          value={delayFilter}
          onChange={(e) => setDelayFilter(Number(e.target.value))}
          className="w-full mt-2 cursor-pointer"
        />
      </div>
    );
  }