import React from "react";

export default function CarouselItems() {
  return (
    <div>
      <div className="w-[877px] flex gap-4 items-center">
        <div className="flex gap-4 items-center w-[206px]">
          <div className=" w-16 h-16 bg-[#434445]">{/* image */}</div>
          <div className="w-[126px]">
            <h2 className="text-2xl text-[#000] font-[700]">Bisi Cooper</h2>
            <p className="text-base text-[#595959] font-[400]">
              Travel Blogger
            </p>
          </div>
        </div>

        <p className="text-base text-[#6A6A6A] leading-8 w-[665px]">
          “PayCentral has truly transformed the way I navigate international
          payments. As a frequent traveler, finding the right payment options in
          different countries used to be a challenge. With PayCentral, that
          struggle is a thing of the past.”
        </p>
      </div>
    </div>
  );
}
