import { useContext } from "../../../../hooks/UseContext";
import { PageContext } from "../../../../context/ContextPageProvider";

export function Delay() {
  return (
    <div className="size-full flex flex-col justify-center section-status-2 p-2.5 gap-3">
      <h1 className="text-3xl">Retraso</h1>
      <p>15 horas</p>
    </div>
  )
}

