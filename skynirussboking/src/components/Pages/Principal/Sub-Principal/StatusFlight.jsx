import { PageContext } from "../../../../context/ContextPageProvider";
import { useContext } from "../../../../hooks/UseContext";

export function StatusFlight({isActive}){

  console.log()
  
  const text = isActive ? 'Activo' : 'Inactivo'

  return (
    <div className="size-full flex flex-col justify-center section-status rounded-t-2xl p-2.5 gap-3">
      <h1 className="text-3xl">Estado de Vuelo</h1>
      <p>{text}</p>
    </div>
  );
}

