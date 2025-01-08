

import SearchIcon from "~/assets/images/search.svg";
export function Search() { 
    return (
    <div className="lg:flex hidden rounded-full bg-[#E9E9E9] pl-6 pr-46 gap-10 items-center">
    <img src={SearchIcon} alt="" />
    <input type="text" placeholder="Search" className="bg-[#E9E9E9] w-full outline-none"/>
  </div>
    );
}