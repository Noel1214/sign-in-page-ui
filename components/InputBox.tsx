"use client";
import Link from "next/link";
import { Context } from "@/ContextAPI";
import { useContext } from "react";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const router = useRouter();
  const context = useContext(Context);

  if (!context) {
    return <div>Loading...</div>;
  }

  const {
    setname,
    setgmail,
    setpassword,
    name,
    gmail,
    password,
    agreeToTerms,
    setagreeToTerms,
  } = context;
  console.log(agreeToTerms);

  const handleSignUp = () => {
    // if(name === "") return;
    // if(gmail === "") return;
    // if(password === "") return;
    router.push("/home");
  };

  return (
    <div className="flex flex-col items-center justify-center space-y-16 mt-6 px-4 sm:px-6 lg:px-8">
      <div className="w-[91%]">
        <h1 className="text-4xl text-black font-semibold">Get Started Now</h1>
      </div>
      <div className="max-w-md w-full space-y-8">
        <form className="space-y-6">
          <div className="space-y-7">
            <div>
              <label className="block text-sm font-medium text-black">
                Full Name
              </label>
              <input
                type="text"
                className="mt-1 block w-full px-3 py-1 border border-gray-300 rounded-xl focus:outline-none"
                onChange={(e) => setname(e.target.value)}
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-black">
                Email address
              </label>
              <input
                type="text"
                className="mt-1 block w-full px-3 py-1 border border-gray-300 rounded-xl focus:outline-none"
                onChange={(e) => setgmail(e.target.value)}
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-black">
                Password
              </label>
              <input
                type="password"
                autoComplete="current-password"
                className="mt-1 block w-full px-3 py-1 border border-gray-300 rounded-xl focus:outline-none"
                onChange={(e) => setpassword(e.target.value)}
              />
            </div>

            <div className="flex items-center">
              <input
                type="checkbox"
                onChange={(e) => setagreeToTerms(e.target.checked)}
                className="h-4 w-4 text-indigo-600 border-gray-300 rounded"
              />
              <label className="ml-2 block text-sm text-black">
                I agree to the{" "}
                <Link href="/terms" className="underline hover:text-indigo-500">
                  Terms and policy
                </Link>
              </label>
            </div>
          </div>
        </form>
        <div>
          <button
            type="submit"
            className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-green-800 focus:outline-none hover:cursor-pointer"
            onClick={handleSignUp}
          >
            Sign up
          </button>
        </div>
      </div>
    </div>
  );
}
