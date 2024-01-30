import { IoMoonOutline } from "react-icons/io5";



function Header() {
  return (
    <>
      <div className="flex mx-20 my-5 justify-between">
        <div>
          <p className="font-bold text-lg">Where in the world?</p>
        </div>
        <div className="flex align-middle cursor-pointer">
        <IoMoonOutline className="flex align-middle"/>

          <p className="ml-2 align-middle text-sm">Dark Mode</p>
        </div>
      </div>
    </>
  );
}

export default Header;
