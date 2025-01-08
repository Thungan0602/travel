import Logo from "~/assets/images/logo.svg";

import {Search} from "~/widgets/Search";
import {Navbar} from "~/widgets/Navbar";


export function Header() {
  return (
    <div>
      <div className="flex items-center justify-between lg:px-20 lg:py-2 px-5 py-2">
        <div className="flex">
          <img src={Logo} alt="" />
          <Search />
        </div>
        < Navbar />
      </div>
    </div>
  );
}
