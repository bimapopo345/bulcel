import React from "react";

const Hero = () => {
  return (
    <div className="flex flex-wrap ml-[26px] mr-[30px] mt-56 max-md:max-w-full max-md:mr-2.5 max-md:mt-10">
      <div className="min-w-60 w-[613px] max-md:max-w-full">
        <div className="flex w-full items-center gap-[-1000px] text-[#FF5126] justify-center flex-wrap max-md:max-w-full">
          <div className="self-stretch flex min-w-60 min-h-[164px] items-center text-[300px] font-normal whitespace-nowrap leading-[0.5] justify-center w-[613px] my-auto max-md:max-w-full max-md:text-[40px]">
            <div className="text-[#FF5126] opacity-50 self-stretch w-[316px] my-auto max-md:text-[40px]">
              TK
            </div>
          </div>
          <div className="text-[#FF5126] self-stretch min-w-60 gap-2.5 text-8xl font-bold flex-1 shrink basis-[0%] my-auto p-2.5 max-md:max-w-full max-md:text-[40px]">
            TIKET KARYA
          </div>
        </div>
        <div className="max-w-full w-[596px] text-lg text-black font-normal mt-[67px] max-md:mt-10">
          <div className="text-black leading-7 max-md:max-w-full">
            Discover creative workshops near you — from hands-on pottery to
            soulful music and textile arts. Join a growing community of makers,
            artists, and curious minds looking to learn, connect, and create
            together. Whether you're trying something new or deepening your
            skills, TiketKarya makes it easy to find, book, and enjoy creative
            experiences that spark inspiration.
          </div>
          <div className="text-black leading-loose mt-[9px] max-md:max-w-full">
            <span className="underline">Find Workshops</span>
          </div>
        </div>
      </div>
      <div className="min-w-60 w-[362px]">
        <img
          src="https://cdn.builder.io/api/v1/image/assets/cc19c8fb85a142d1a49f6d5b2b38adc8/cc2d429b2bc30faada8a05a4ab119dfe6fd1f9b7?placeholderIfAbsent=true"
          alt="Creative Workshop"
          className="aspect-[1.61] object-contain w-full"
        />
      </div>
    </div>
  );
};

export default Hero;
