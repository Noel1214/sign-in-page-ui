import ProductCard from "@/components/ProductCard";
import React from "react";
import Image from "next/image";

const page = () => {
  return (
    <div className="flex">
      <div>
        <Image
          src="/flowers.avif"
          alt="Image"
          className="h-screen w-[50vw]"
          width={1000}
          height={1000}
          loading="eager"
        />
      </div>
      <div>
        <h1 className="font-semibold text-5xl mt-7 ml-12">Products</h1>
        <div className="mt-12 ml-12 flex flex-col gap-4">
          <ProductCard
            name="Mesh sneakers"
            source="/shoe 1.png"
            discount="61%"
            realPrice="999"
            discountPrice="555"
          />
          <ProductCard
            name="Canvas sneakers"
            source="/shoe 2.png"
            discount="24%"
            realPrice="999"
            discountPrice="555"
          />
        </div>
      </div>
    </div>
  );
};

export default page;
