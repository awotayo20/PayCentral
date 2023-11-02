import React from "react";

export default function Subscribe() {
  return (
    <div className="w-[430px] py-6 px-4 bg-[#F1F3F4] flex flex-col gap-4">
      <div className="w-8 h-8 bg-[#D9D9D9]"></div>

      <div>
        <h2 className="text-xl font-[500] text-[#000]">
          Subscribe for updates
        </h2>
        <p className="text-sm font-[500] text-[#464646]">
          Lorem ipsum dolor sit amet consectetur. Donec quam donec vitae lectus
          adipiscing.
        </p>
      </div>

      <form>
        <input type="Email" placeholder="Enter email" className="p-2 w-full" />
        <button className="p-2 w-full text-white bg-[#434445] mt-2">
          Subscribe
        </button>
      </form>
    </div>
  );
}
