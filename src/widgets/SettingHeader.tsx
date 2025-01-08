import Email from "~/assets/images/email.svg";
import Facebook from "~/assets/images/facebook.svg";    
import Instagram from "~/assets/images/instagram.svg";
import Map from "~/assets/images/map.svg";
import Globe from "~/assets/images/globe.svg";
import Phone from "~/assets/images/phone.svg";

export function SettingHeader() {
  return (
    <div className="flex justify-between bg-[#203B64] lg:px-20 lg:py-4 px-5 py-3">
        <div className="lg:flex  gap-4 hidden">
          <div className="flex gap-2 text-white">
            <img src={Email} alt="" />
            <p className="border-r-2 border-white pr-4">info@travelbuddyvn.com</p>
          </div>
          <div className="flex gap-2 text-white">
            <img src={Phone} alt="" />
            <p>(+84) 934 993 667</p>
          </div>
        </div>
        <div className="flex lg:gap-8 gap-4">
          <div className="flex gap-2 text-white">
            <img src={Facebook} alt="" />
            <p className="lg:block hidden">Facebook</p>
          </div>
          <div className="flex gap-2 text-white">
            <img src={Instagram} alt="" />
            <p className="lg:block hidden">Instagram</p>
          </div>
          <div className="flex gap-2 text-white lg:pr-8 pr-[136px]">
            <img src={Map} alt="" />
            <p className="lg:block hidden lg:border-r-2 lg:border-white lg:pr-8">Google Map</p>
          </div>
          <div className="flex gap-2 text-white">
            <img src={Globe} alt="" />
            <p>English/USD</p>
          </div>
        </div>
      </div>
  );
}