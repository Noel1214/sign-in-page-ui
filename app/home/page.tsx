"use client";
import { Context } from "@/ContextAPI";
import Image from "next/image";
import Link from "next/link";
import React, { useContext } from "react";
import { GoChevronRight } from "react-icons/go";

const page = () => {
  const context = useContext(Context);

  if (!context) {
    return <div>Loading...</div>;
  }

  const { name, gmail } = context;

  return (
    <div className="flex relative">
      <div className="absolute top-53 right-30">
        <Link href="/products">
          <button className="h-10 px-5 rounded-lg bg-green-500 text-white hover:scale-105 transition-all ease-in-out duration-200">Show Products</button>
        </Link>
      </div>
      <div className="">
        <Image
          src="/flowers.avif"
          alt="Image"
          className="h-screen w-[50vw]"
          width={1000}
          height={1000}
          loading="eager"
        />
      </div>
      <div className="w-[50vw] mt-6 flex flex-col items-center">
        <div className="w-[36rem] flex items-start">
          <h1 className="text-6xl">Hello!</h1>
        </div>
        <div className="w-[36rem] h-[23rem] mt-6 shadow-lg rounded-lg">
          <div className="flex items-center gap-5 m-4">
            <div className="h-24 w-24 text-3xl bg-blue-400 rounded-full grid items-center justify-center">
              Y
            </div>
            <div>
              <div className="text-xl">{name}</div>
              <div>{gmail}</div>
            </div>
          </div>
          <hr className="border-2 ml-3 rounded-2xl border-zinc-300 w-[53%]" />
          <div className="space-y-3 mt-3 ml-3">
            <div className="h-10 w-[19rem] p-1 flex items-center justify-between">
              <h1>My Profile</h1>
              <GoChevronRight size={21} className="translate-y-0.5" />
            </div>
            <div className=" h-10 w-[19rem] p-1 flex items-center justify-between">
              <h1>Settings</h1>
              <GoChevronRight size={21} className="translate-y-0.5" />
            </div>
            <div className=" h-10 w-[19rem] p-1 flex items-center justify-between">
              <h1>Notification</h1>
              <h1>Allow</h1>
            </div>
            <div className=" h-10 w-[19rem] p-1 flex items-center justify-between">
              <h1>Log Out</h1>
            </div>
          </div>
        </div>
        <div className="w-[36rem] h-[9rem] mt-5 flex flex-col items-center justify-center gap-1 rounded-lg shadow-xl">
          <div className="h-10 w-[19rem] p-1 flex items-center justify-between">
            <h1 className="text-lg">Settings</h1>
            <GoChevronRight size={21} className="translate-y-0.5" />
          </div>
          <hr className="border-2 rounded-2xl border-zinc-300 w-[50%]" />
          <div className="">
            <div className="h-8 w-[19rem] p-1 flex items-center justify-between">
              <h1>Theme</h1>
              <div className="flex gap-2">
                <h1 className="text-sm">Light</h1>
                <GoChevronRight
                  size={21}
                  className="translate-y-0.5 rotate-90"
                />
              </div>
            </div>
            <div className=" h-8 w-[19rem] p-1 flex items-center justify-between">
              <h1>Language</h1>
              <div className="flex gap-2">
                <h1 className="text-sm">Eng</h1>
                <GoChevronRight
                  size={21}
                  className="translate-y-0.5 rotate-90"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
