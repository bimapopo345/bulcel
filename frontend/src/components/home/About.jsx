import React from "react";

const About = () => {
  return (
    <div className="flex items-center justify-between flex-wrap mt-[60px] max-md:max-w-full max-md:mt-10">
      <div className="flex flex-col self-stretch relative min-h-[625px] min-w-60 items-center justify-center w-[589px] my-auto max-md:max-w-full">
        <img
          src="https://cdn.builder.io/api/v1/image/assets/cc19c8fb85a142d1a49f6d5b2b38adc8/7950718139f3a660d1ce5fb2d767acdf9016f780?placeholderIfAbsent=true"
          alt="Background"
          className="absolute h-full w-full object-cover inset-0"
        />
        <img
          src="https://cdn.builder.io/api/v1/image/assets/cc19c8fb85a142d1a49f6d5b2b38adc8/58df4650d56c4d0ad9d681d1c55532bcb5890988?placeholderIfAbsent=true"
          alt="About Image"
          className="aspect-[1.42] object-contain w-[589px] max-w-full relative z-10"
        />
      </div>
      <div className="items-stretch self-stretch flex min-w-60 min-h-[625px] flex-col text-[#F7F7F7] justify-center w-[851px] bg-[#FF5126] my-auto px-[58px] py-[33px] max-md:max-w-full max-md:px-5">
        <div className="w-full max-w-[721px] flex-1 max-md:max-w-full">
          <div className="flex w-full gap-[40px_100px] text-[64px] font-bold whitespace-nowrap justify-between flex-wrap max-md:max-w-full max-md:text-[40px]">
            <div className="flex items-center gap-[15px] max-md:text-[40px]">
              <div className="text-[#F7F7F7] self-stretch gap-2.5 my-auto p-2.5 max-md:text-[40px]">
                ABOUT
              </div>
            </div>
            <img
              src="https://cdn.builder.io/api/v1/image/assets/cc19c8fb85a142d1a49f6d5b2b38adc8/f8d22cd0b9b495f18fd374f75efb2b4bc18fe7a3?placeholderIfAbsent=true"
              alt="Decoration"
              className="aspect-[3] object-contain w-[99px] shrink-0"
            />
          </div>
          <div className="flex w-full gap-[40px_153px] text-lg font-normal flex-1 flex-wrap h-full mt-[170px] max-md:max-w-full max-md:mt-10">
            <div className="min-w-60 leading-7 grow shrink w-[495px] max-md:max-w-full">
              <div className="text-[#F7F7F7] max-md:max-w-full">
                TiketKarya offers an easy and inspiring way to discover creative
                programs, all in one place. With a clean interface and smart
                search tools, users can explore workshops that match their
                interests—from pottery and painting to textile arts and music.
                Signing up is simple, with flexible payment options to make the
                process smooth and accessible.
              </div>
              <div className="text-[#F7F7F7] mt-10 max-md:max-w-full">
                Interactive features like reviews, ratings, and forum
                discussions help users share experiences and discover trusted
                recommendations. TiketKarya opens wider access to the creative
                world, builds an active community, and supports the growth of a
                more inclusive and connected creative industry.
              </div>
            </div>
            <div className="text-[#F7F7F7] underline decoration-solid decoration-auto underline-offset-auto underline grow shrink w-[49px]">
              Explore
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
