import DaLat from "~/assets/images/da-lat.png";
import Clock from "~/assets/images/clock.svg";
import Timeline from "~/assets/images/timeline.svg";

interface TourProps {
    name: string;
    time: string;
    address: string;
}
export function Tour({name, time, address}: TourProps) {
    return (
        <div className="relative">
            <div className="flex gap-[6px] absolute lg:top-3 lg:right-7 top-1 right-[2%]">
                <div className="bg-[#09873E] round rounded-full text-white lg:px-3 lg:py-2 px-2 py-1 w-fit font-extralight text-sm">
                    Daily tour</div>
                <div className="bg-[#F07132] round rounded-full text-white lg:px-3 lg:py-2 px-2 py-1 w-fit font-extralight text-sm">
                    Promotion</div>
            </div>
            <img src={DaLat} alt="" />
            <div className="lg:py-6 py-[16px] lg:space-y-3 space-y-2">
                <p className="text-[#000000] font-semibold lg:text-2xl text-xl">{name}</p>
                <div className="flex gap-2">
                    <img src={Clock} alt="" />
                    <p className="text-[#262626] lg:text-base text-sm font-normal">{time}</p>
                </div>
                <div className="flex gap-2">
                    <img src={Timeline} alt="" />
                    <p className="text-[#262626] lg:text-base text-sm font-normal">{address}</p>
                </div>
                <p className="font-normal text-[#9B9B9B] lg:text-lg text-base line-through">$100</p>
                <p className="text-[#FF4141] font-bold lg:text-3xl text-2xl">$40
                    <span className="text-[#101010] font-normal lg:text-lg text-base">/pax</span>
                </p>
            </div>
            <div className="flex gap-2">
                <p className="font-medium text-base	">More detail</p>
                <svg className="mt-1" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24"
                    fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                    stroke-linejoin="round">
                    <path d="M5 12h14" />
                    <path d="m12 5 7 7-7 7" />
                </svg>
            </div>
        </div>
    );
}