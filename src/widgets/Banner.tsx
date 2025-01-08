import MainBackground from "~/assets/images/main-background.png";
import Chat from "~/assets/images/chat.svg";
import Party from "~/assets/images/party.svg";
export function Banner() {
    return (
    <div className="relative">
        <img src={MainBackground} alt="" className="w-full h-screen object-cover " />
        <div className="lg:px-20 px-5 text-white absolute lg:bottom-[10%] lg:left-0 bottom-[30%]">
          <p className="font-serif lg:text-6xl text-3xl leading-tight lg:pb-[52px] pb-8">A colorful experience <br /> us in Vietnam
          </p>
          <button className="bg-[#3562A6] flex  text-white lg:py-[19.5px] py-4 lg:pl-8 lg:pr-4 px-[100px] gap-[10px] w-fit">
            <p className="font-normal">Book now</p>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
              stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
              className="lucide lucide-arrow-right">
              <path d="M5 12h14" />
              <path d="m12 5 7 7-7 7" />
            </svg>
          </button>
        </div>
        <div className="space-y-[13px] absolute lg:bottom-[6%] -bottom-[30%] right-[32px]">
          <div
            className="bg-[#09873E] round rounded-full lg:flex px-4 py-4 lg:gap-2 w-fit absolute -top-[80%]">
            <img src={Chat} alt="" />
            <p className="text-white hidden lg:block">Contact us</p>
          </div>
          <div className="bg-[#3562A6] round rounded-full flex px-4 py-4 gap-2 w-fit">
            <img src={Party} alt="" />
            <p className="text-white hidden lg:block">Promotional Tours</p>
          </div>
        </div>
      </div>
      );
    }