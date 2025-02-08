import { StatusFlight } from "./Sub-Principal/StatusFlight";
import { HourEstimate } from "./Sub-Principal/HourEstimate";
import { Gate } from "./Sub-Principal/Gate";
import { Delay } from "./Sub-Principal/Delay";
import { Airlines } from "./Sub-Principal/Airlines";
import { Leaflet } from "./Sub-Principal/Map";
import { Form } from "./Sub-Principal/Form";
import { PageContext } from '../../../context/ContextPageProvider'
import { useContext } from '../../../hooks/UseContext'


function Main() {

  return (
    <main className="flex justify-center items-center min-w-fit min-h-215 bg-blue-950">
      <section className="flex flex-col gap-25">
        <Form />
        <div className="grid grid-cols-4 w-auto mx-auto justify-items-center content-end">
          <section className="col-span-3">
            <Leaflet />
          </section>
          <section className="grid border rounded-2xl w-fit h-145 text-white items-center">
            <StatusFlight />
            <HourEstimate />
            <Gate />
            <Delay />
            <Airlines />
          </section>
        </div>
      </section>
    </main>
  );
}

export default Main;
