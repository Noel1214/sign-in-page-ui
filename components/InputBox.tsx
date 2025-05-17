"use client";
import Link from "next/link";
import { Context } from "@/ContextAPI";
import { useContext } from "react";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const router = useRouter();
  const { setname, setgmail, setpassword, name, gmail, password } = useContext(Context);

  const handleSignUp = () => {
    if(name === "") return;
    if(gmail === "") return;
    if(password === "") return;

    router.push("/home")
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
              <label
                htmlFor="name"
                className="block text-sm font-medium text-black"
              >
                Full Name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                required
                className="mt-1 block w-full px-3 py-1 border border-gray-300 rounded-xl focus:outline-none"
                onChange={(e) => setname(e.target.value)}
              />
            </div>

            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-black"
              >
                Email address
              </label>
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                required
                className="mt-1 block w-full px-3 py-1 border border-gray-300 rounded-xl focus:outline-none"
                onChange={(e) => setgmail(e.target.value)}
              />
            </div>

            <div>
              <label
                htmlFor="password"
                className="block text-sm font-medium text-black"
              >
                Password
              </label>
              <input
                id="password"
                name="password"
                type="password"
                autoComplete="current-password"
                required
                className="mt-1 block w-full px-3 py-1 border border-gray-300 rounded-xl focus:outline-none"
                onChange={(e) => setpassword(e.target.value)}
              />
            </div>

            <div className="flex items-center">
              <input
                id="agreeToTerms"
                name="agreeToTerms"
                type="checkbox"
                required
                className="h-4 w-4 text-indigo-600 border-gray-300 rounded"
              />
              <label
                htmlFor="agreeToTerms"
                className="ml-2 block text-sm text-black"
              >
                I agree to the{" "}
                <Link href="/terms" className="underline hover:text-indigo-500">
                  Terms and policy
                </Link>
              </label>
            </div>
          </div>

          <div>
            <button
              type="submit"
              className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-green-800 focus:outline-none hover:cursor-pointer"
              onClick={handleSignUp}
            >
              Sign up
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
