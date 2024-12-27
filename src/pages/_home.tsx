import { Outlet } from "react-router";
import { Header } from "../widgets/Header";
import Facebook from "~/assets/images/Facebook.svg";
import Instagram from "~/assets/images/instagram.svg";
import Map from "~/assets/images/Map.svg";
import Globe from "~/assets/images/Globe.svg";
import Email from "~/assets/images/Email.svg";
import Phone from "~/assets/images/Phone.svg";
export default function Home() {
  return (
    <div>
      
      <Header />
      <Outlet />
    </div>
  );
}
