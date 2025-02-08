export function HourEstimate({currentHour}) {

   currentHour === "" ? currentHour = "NaN" : currentHour

  return (
    <div className="size-full flex flex-col justify-center section-status-2 p-2.5 gap-3">
      <h1 className="text-3xl">Hora Estimada</h1>
      <p>{currentHour}</p>
    </div>
  )
}
