import { Tour } from "~/widgets/Tour";

export function BestSellerTour() {
    return (
        <div className="lg:px-[80px] lg:py-[140px] px-5 py-[52px] lg:space-y-[64px] space-y-8 relative">
            <div>
                <div className="space-y-[24px]">
                    <p className="text-[#515151]">BEST SELLER TOURS</p>
                    <p className="text-[#3562A6] font-serif font-normal lg:text-5xl text-3xl">Find your place on the coast, in the
                        <br />Mountain or in the city.
                    </p>
                </div>
                <button
                    className="border border-[#3562A6] flex text-white py-[19.5px] gap-[10px] pl-8 pr-4 w-fit absolute lg:right-[8%] lg:top-[15%]">
                    <p className="font-normal text-[#3562A6]">See more</p>
                    <svg className="text-[#3562A6] lucide lucide-arrow-right" xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                        viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                        stroke-linejoin="round">
                        <path d="M5 12h14" />
                        <path d="m12 5 7 7-7 7" />
                    </svg>
                </button>
            </div>
            <div className="grid lg:grid-cols-4 grid-cols-2 lg:gap-6 gap-4">
                <Tour name="Da Lat" time="1 Weeks" address="Thác Datanla - Thung Lũng Tình Yêu - Cao Nguyên Hoa - Núi Langbiang" />
                <Tour name="Da Nang" time="4 days" address="Bà Nà Hill - Sông Hàn - Bãi Rạn - Cầu Tình Yêu - Bãi biển Sơn Trà" />
                <Tour name="Hoi An" time="1 weeks" address="Đại Nội - Lăng Tự Đức - Chùa Thiên Mụ - Đồi Vọng Cảnh - Núi Bạch Mã"/>
                <Tour name="Hue" time="4 days" address="Chùa Cầu - Phố cổ Hội An - Làng nghề truyền thống - Biển Cửa Đại"/>
            </div>
        </div>

    );
}