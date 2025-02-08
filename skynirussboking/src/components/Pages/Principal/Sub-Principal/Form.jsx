import { LuSearch } from "react-icons/lu";
import { PageContext } from '../../../../context/ContextPageProvider'
import { useContext } from '../../../../hooks/UseContext'

export function Form() {

  const { setValueInput, valueInput, handleSubmit} = useContext(PageContext)

  function handleChange(e){
    setCurrentIndex(parseInt(e.target.value))
    setValueInput(e.target.value)
  }
  
  return (
    <form className="flex justify-center" onSubmit={handleSubmit}>
      <input
        placeholder="Escribe el número del vuelo"
        className="text-black p-2 bg-gray-200 w-80 rounded-l-full outline-0 focus:bg-gray-300"
        autoFocus
        onChange={handleChange}
        value={valueInput}
      ></input>
      <button 
        className="bg-gray-200 p-2 rounded-r-full cursor-pointer hover:bg-gray-300"
      >
        <LuSearch size={30}/>
      </button>
    </form>
  );
}
