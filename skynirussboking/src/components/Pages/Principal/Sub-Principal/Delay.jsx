export function Delay({currentDelay}) {

  currentDelay === "" ? currentDelay = "NaN" : currentDelay

  console.log(currentDelay)

  return (
    <div className="size-full flex flex-col justify-center section-status-2 p-2.5 gap-3">
      <h1 className="text-3xl">Retraso</h1>
      <p>{currentDelay}</p>
    </div>
  )
}

