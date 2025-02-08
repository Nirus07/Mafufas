import { LuGrip } from "react-icons/lu";

function Header() {
  return (
    <header>
      <nav className="bg-gray-300 text-blue-950 flex justify-between min-h-15 items-center">
        <div className="flex gap-5 ml-2 items-center">
          <LuGrip 
            className="text-2xl font-bold cursor-pointer"
          />
          <h1 className="font-bold text-3xl m-0">SkyNirussBoking</h1>
        </div>
        <i className="mr-2">Logo</i>
      </nav>
    </header>
  );
}

export default Header;
