import { Outlet } from "react-router";
import AuthenticationBackground from "~/assets/images/Background.svg";
import Logo from "~/assets/images/Logo.svg";

export default function Home() {
    return (
        <div className="flex h-screen w-full">
            <div className="w-1/2 px-20 pt-[104px]">
            <img src={Logo} alt=""  className="mx-auto"/>
                <Outlet />

            </div>
            <img src={AuthenticationBackground} alt="" className="w-1/2 block" />
        </div>
    );
}