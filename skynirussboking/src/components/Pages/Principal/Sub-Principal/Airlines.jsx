import { useContext } from "../../../../hooks/UseContext";
import { PageContext } from "../../../../context/ContextPageProvider";

export function Airlines() {
  return (
    <div className="size-full flex flex-col justify-center section-status rounded-b-2xl p-2.5 gap-3">
      <h1 className="text-3xl">Aerolínea</h1>
      <p>America Airlines</p>
    </div>
  )
}
