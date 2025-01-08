import { Button } from "~/shared/ui/Button";
import { Input } from "~/shared/ui/Input";
import Google from "~/assets/images/Google.svg";
import Facebook from "~/assets/images/Facebook.svg";
export default function Register() {
    return (
        <div className="mt-8 pb-[211px]">
            <h1 className="text-[#294D81] text-5xl mb-[52px]">Create your account</h1>
            <div className="flex gap-4">
                <div className="space-y-3 font-normal">
                    <p>First Name</p>
                    <Input placeholder="Enter your first name" />
                </div>
                <div className="space-y-3 font-normal">
                    <p>Last Name</p>
                    <Input placeholder="Enter your last name" />
                </div>
            </div>
            <div className="py-6">
                <p className="mb-3 font-normal">Email</p>
                <Input placeholder="Enter your email" />
            </div>
            <div className="pb-8">
                <p className="mb-3 font-normal">Password</p>
                <Input placeholder="Enter your password" />
            </div>
            <Button>Create an account</Button>
            <p className="py-8 font-normal">OR</p>
            <div className="lg:flex gap-4">
                <button className="flex gap-4 px-[42.5px] w-full py-[20.5px] bg-[#FFFFFF] border border-[#E0E0E9] ">
                    <img src={Google} alt="" />
                    <p>Sign up with Google</p>
                </button>
                <button className="flex gap-4 px-[42.5px] w-full py-[20.5px] bg-[#1877F2] text-white">
                    <img src={Facebook} alt="" />
                    <p>Sign up with Google</p>
                </button>
            </div>
            <p className="text-center pt-8 font-normal">Already have an account? <span className="font-bold text-[#3562A6] underline cursor-pointer">Sign In</span></p>
        </div>
    );
}
