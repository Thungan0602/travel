import { Button } from "~/shared/ui/Button";
import { Input } from "~/shared/ui/Input";
import Google from "~/assets/images/Google.svg";
import Facebook from "~/assets/images/Facebook.svg";

export default function Login() {
  return (
    <div className="mt-8 pb-[211px]">
      <h1 className="text-[#294D81] text-5xl">Login to your account</h1>
      <div className="mt-[52px]">
        <p className="font-bold mb-3">Email</p>
        <Input placeholder="Enter your email" />
      </div>
      <div className="mt-6">
        <p className="font-bold mb-3">Password</p>
        <Input placeholder="Enter your password" />
      </div>
      <p className="underline font-bold mt-6 mb-8">Forgot Password</p>
      <Button> Sign In</Button>
      <p className="py-8 font-normal text-center">OR</p>
            <div className="flex gap-4">
                <button className="flex gap-4 px-[42.5px] w-full py-[20.5px] bg-[#FFFFFF] border border-[#E0E0E9] ">
                    <img src={Google} alt="" />
                    <p>Sign up with Google</p>
                </button>
                <button className="flex gap-4 px-[42.5px] w-full py-[20.5px] bg-[#1877F2] text-white">
                    <img src={Facebook} alt="" />
                    <p>Sign up with Google</p>
                </button>
            </div>
            <p className="text-center pt-8 font-normal">Don’t have an account?  <span className="font-bold text-[#3562A6] underline cursor-pointer">Sign In</span></p>
    </div>
  );
}