import React from "react";

const CustomerSupport = () => {
  return (
    <div className="justify-center items-center flex min-h-[50px] gap-1 text-lg text-[#FCEDDA] font-normal bg-[#FF5126] mr-[30px] mt-[7px] px-2.5 py-3 rounded-[50px] max-md:mr-2.5">
      <img
        src="https://cdn.builder.io/api/v1/image/assets/cc19c8fb85a142d1a49f6d5b2b38adc8/9ceb0c4b23831a64d445d82e35f1d197bbc03d49?placeholderIfAbsent=true"
        alt="Support Icon"
        className="aspect-[0.95] object-contain w-[21px] self-stretch shrink-0 my-auto"
      />
      <div className="text-[#FCEDDA] self-stretch my-auto">
        Customer Support
      </div>
    </div>
  );
};

export default CustomerSupport;
