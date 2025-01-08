

import { Banner } from "~/widgets/Banner"
import { About } from "~/widgets/About"
import { BestSellerTour } from "~/widgets/BestSellerTour";
import { OurService } from "~/widgets/OurService";

export function Travel() {
    return (
        <div>
            <Banner />
            <About />
            <BestSellerTour />
            <OurService />
        </div>
    );
}