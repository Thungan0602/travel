import LogoCompany from "~/assets/images/logo-company.png";

export function About() {
    return (
    <div className="lg:flex lg:flex-row flex-col">
                <img src={LogoCompany} alt="" className="lg:w-1/2 lg:block hidden" />
                <div className="bg-[#EBF0F8] space-y-8 lg:py-[82px] lg:px-[80px] px-5 py-[52px] lg:w-1/2 w-full">
                    <h1 className="text-[#3562A6] font-serif font-normal lg:text-5xl text-3xl">About Travel Buddy</h1>
                    <p className="text-[#515151] font-normal lg:text-base text-sm">Travel Buddy is a young and dynamic DMC in Vietnam
                        founded in September 2023, primarily operating in international and domestic travel and tourism
                        services.</p>
                    <p className="text-[#515151] font-normal lg:text-base text-sm"> We possess a young, sensitive workforce with current
                        trends and high expertise, so we are
                        poised to offer more engaging and fulfilling travel experiences than ever.</p>
                    <div className="flex lg:gap-[52px] gap-8">
                        <div className="space-y-[6px]">
                            <p className="font-bold lg:text-5xl text-3xl text-[#203B64]">25+</p>
                            <p className="italic">Destinations</p>
                        </div>
                        <div className="space-y-[6px]">
                            <p className="font-bold lg:text-5xl text-3xl text-[#203B64]">2500+</p>
                            <p className="italic">Tourists per year</p>
                        </div>
                        <div className="space-y-[6px]">
                            <p className="font-bold lg:text-5xl text-3xl text-[#203B64]">120+</p>
                            <p className="italic">Partners</p>
                        </div>
                    </div>
                    <button className="bg-[#3562A6] flex text-white lg:py-[19.5px] lg:pl-8 lg:pr-4 py-4 px-8 gap-[10px] w-fit">
                        <p className="font-normal">Read now</p>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                            stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                            className="lucide lucide-arrow-right">
                            <path d="M5 12h14" />
                            <path d="m12 5 7 7-7 7" />
                        </svg>
                    </button>
                </div>
                <img src={LogoCompany} alt="" className="lg:w-1/2 block lg:hidden" />
            </div>
            );
}