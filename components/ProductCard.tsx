import Image from "next/image";
import React from "react";
import { FaStar } from "react-icons/fa";
import { FaLongArrowAltDown } from "react-icons/fa";

type ProductCardProps = {
  name: string;
  source: string;
  discount: string;
  realPrice: string;
  discountPrice: string;
};

const ProductCard = ({name, source, discount, realPrice, discountPrice} : ProductCardProps) => {
  return (
    <div className="w-[34vw] h-[12rem] flex">
      {/* IMAGE SECTION */}
      <div className="w-[60%] h-full flex items-center">
        <div className="bg-rose-300 p-5 rounded-4xl">
          <Image
            src={source}
            alt="Image"
            width={500}
            height={500}
            loading="eager"
          />
        </div>
      </div>
      {/* DETAILS SECTION  */}
      <div className="h-full w-full flex flex-col justify-center scale-110">
        <div className="ml-12 flex flex-col gap-5">
          <h1 className="font-semibold">{name}</h1>
          <div className="flex gap-2 text-yellow-300">
            <FaStar size={20} />
            <FaStar size={20} />
            <FaStar size={20} />
            <FaStar size={20} />
            <FaStar size={20} />
          </div>
          <div className="flex gap-2">
            <div className="flex items-center text-green-500">
              <FaLongArrowAltDown />
              <h1>{discount}</h1>
            </div>
            <h1 className="line-through">₹{realPrice}</h1>
            <h1>₹{discountPrice}</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
