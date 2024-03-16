
import AvatarCircleButton from "../button/AvatarCircleButton";
import { IcOutlineSearch } from "../icons/IcOutlineSearch";
import NavLinks from "./NavLinks";

const Header = () => {
  return (
    <>
    <div className="navbar bg-base-100">
  <div className="navbar-start">
    <div className="dropdown">
    <div tabIndex="0" role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </div>
      <ul  className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
        <NavLinks></NavLinks>
      </ul>
    </div>
    <a className=" text-xl">Recipe Calories</a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
    <NavLinks></NavLinks>
    </ul>
  </div>
  <div className="navbar-end gap-4 ">
  <label className="input input-bordered flex items-center gap-2 rounded-3xl w-4/5 md:w-auto">
 <IcOutlineSearch   ></IcOutlineSearch>
  <input type="text" className="grow outline-none rounded-3xl px-1 " placeholder="Search" />
</label>
<AvatarCircleButton></AvatarCircleButton>
  </div>
</div>
    </>
  );
};

export default Header;