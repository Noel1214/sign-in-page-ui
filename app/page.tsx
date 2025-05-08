import InputBox from "@/components/InputBox";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex">
      <div className="">
        <Image
          src="/flowers.jpg"
          alt="Image"
          className="h-screen w-[50vw]"
          width={800}
          height={500}
        />
      </div>
      <div className="w-[50vw] flex flex-col">
        <InputBox />
        {/* or between input box and other sign in methods  */}
        <div className="mt-10 px-10 flex items-center gap-1 bg-blu e-500">
          <hr className="border-2 rounded-2xl border-zinc-300 w-[50%]" />
          <p className="-translate-y-0.5">or</p>
          <hr className="border-2 rounded-2xl border-zinc-300 w-[50%]" />
        </div>
        {/* Google and Apple sign in  */}
        <div className="mt-10 flex justify-evenly">
          <button className="w-[20vw] flex items-center justify-center border-2 border-zinc-200 rounded-xl">
            <Image
              src="/google.svg"
              alt="google"
              className="h-9"
              height={50}
              width={50}
            />
            <h1>Sign in with Google</h1>
          </button>
          <button className="w-[20vw] flex items-center justify-center border-2 border-zinc-200 rounded-xl">
            <Image
              src="/apple.svg"
              alt="google"
              className="h-8"
              height={40}
              width={40}
            />
            <h1>Sign in with Apple</h1>
          </button>
        </div>
        <div className="mt-4 flex justify-center font-semibold gap-1.5">
          <h1>Have an account?</h1>
          <h1 className="text-blue-800">Sign In</h1>
        </div>
      </div>
    </div>
  );
}
