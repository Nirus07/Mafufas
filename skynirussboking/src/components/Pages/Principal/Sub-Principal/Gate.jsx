export function Gate({currentGate}) {

  currentGate === "" ? currentGate = 'NaN' : currentGate

  return (
    <div className="size-full flex flex-col justify-center section-status p-2.5 gap-3">
      <h1 className="text-3xl">Puerta</h1>
      <p>{currentGate}</p>
    </div>
  )
}
