import Support from "~/assets/images/support.svg";
import Price from "~/assets/images/price.svg";
import Puzzle from "~/assets/images/puzzle.svg";
import Star from "~/assets/images/star.svg";
import Company from "~/assets/images/company.png";

export function OurService() {
    return (
        <div className="relative bg-[#EBF0F8]">
            <div className="pl-20 pr-10 py-20 w-1/2">
                <div className="space-y-[24px]">
                    <p className="text-[#515151]">OUR SERVICE</p>
                    <p className="text-[#3562A6] font-serif font-normal text-5xl">What you can expect from us</p>
                </div>
                <div className="grid grid-cols-2 grid-rows-2 gap-x-6 gap-y-[32px] pt-20">
                    <div className="space-y-4">
                        <img src={Support} alt="" />
                        <p className="text-xl font-semibold">24/7 Support</p>
                        <p className="font-normal text-lg">Always ready to support whenever you need to ensure a seamless and
                            colorful experience.</p>
                    </div>
                    <div className="space-y-4">
                        <img src={Price} alt="" />
                        <p className="text-xl font-semibold">Best Price</p>
                        <p className="font-normal text-lg">Whatever your style, enjoy a flawless trip with excellent
                            accommodations at competitive prices.</p>
                    </div>
                    <div className="space-y-4">
                        <img src={Star} alt="" />
                        <p className="text-xl font-semibold">Service Quality</p>
                        <p className="font-normal text-lg">Prioritize our services and stay updated with trends to enhance
                            quality. Trust us for a satisfying trip!</p>
                    </div>
                    <div className="space-y-4">
                        <img src={Puzzle} alt="" />
                        <p className="text-xl font-semibold">Flexible Service</p>
                        <p className="font-normal text-lg">Personalizing your trip to fit your budget and desires has never been
                            easier!</p>
                    </div>
                </div>
            </div>
            <div className="absolute top-0 right-0">
                <img src={Company} alt="" className="w-full" />
            </div>
        </div>
    );
}