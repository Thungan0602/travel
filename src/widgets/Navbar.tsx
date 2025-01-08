import { Link } from "react-router";

import SearchIcon from "~/assets/images/search.svg";
import Shop from "~/assets/images/shop.svg";
import User from "~/assets/images/user.svg";
import List from "~/assets/images/list.svg";

const NAV_ITEMS = [
    {
        title: "Home",
        link: "/",
    },
    {
        title: "Tours",
        link: "/tours",
    },
    {
        title: "Service",
        link: "/services",
    },
    {
        title: "MICE",
        link: "/mice",
    },
    {
        title: "Blog",
        link: "/blogs",
    },
    {
        title: "About Us",
        link: "/about-us",
    },
    {
        title: "Membership",
        link: "/membership",
    },
];

export function Navbar() {
    return (
        <nav className="flex">
            <ul className="lg:flex hidden gap-6 pr-6">
                {NAV_ITEMS.map((item) => (
                    <Link key={item.link} to={item.link} className="cursor-pointer">
                        {item.title}
                    </Link>
                ))}
            </ul>
            <div className="flex gap-6 lg:border-l-2 lg:border-black pl-6">
                <img src={SearchIcon} alt="" className="lg:hidden" />
                <img src={Shop} alt="" />
                <div className="flex gap-2 border border-black rounded-full px-1 py-1">
                    <img src={User} alt="" />
                    <img src={List} alt="" />
                </div>
            </div>
        </nav>
    );
}
