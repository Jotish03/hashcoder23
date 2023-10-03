import React from "react";
import Image from "next/image";

function Hero() {
  return (
    <div class="px-5 md:px-10">
      <div class="mx-auto w-full max-w-7xl">
        <div class="py-16 md:py-24 lg:py-32">
          <div class="grid items-center max-[991px]:justify-items-start grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-20">
            <div class="max-[991px]:max-w-[720px]">
              <h1 class="mb-6 font-bold text-4xl md:text-6xl pb-4">
                Web Excellence: Fast, Reliable, Secure
              </h1>
              <div class="max-w-[528px] mb-6 md:mb-10 lg:mb-12">
                <p class="text-[#636262]">
                  Situated in Gangtok, Sikkim, HashCoder comprises a team of
                  tech-savvy Sikkimese youth who initiated their journey with a
                  vision to facilitate and streamline the adoption of
                  cutting-edge technologies for individuals and businesses
                  within our state.
                </p>
              </div>
              <div class="flex items-center mb-5 md:mb-6 lg:mb-8">
                <a
                  href="#"
                  class="inline-block cursor-pointer border border-solid border-[#c9fd02] bg-[#c9fd02] px-6 py-4 text-center font-bold text-black transition hover:border-black hover:bg-white rounded-full mr-5 md:mr-6 lg:mr-8"
                >
                  Get Started
                </a>
              </div>
              <div class="w-full max-w-xs">
                <div class="[border-left:2px_solid_rgb(201,_253,_2)] mb-4 py-1.5 pl-4">
                  <p class="text-sm text-[#636262]">
                    HashCoder's web service exceeded expectations with
                    professionalism, expertise, and a flawless, prompt delivery.
                    Highly recommended for exceptional web development
                  </p>
                </div>
                <div class="flex items-center">
                  <Image
                    src="https://media.licdn.com/dms/image/C4E03AQGpYH0kmavdNQ/profile-displayphoto-shrink_800_800/0/1624443593483?e=2147483647&v=beta&t=sLXIe72kI2cVWKVfhioqAWKQ5DiCiPFW6fLSadB0azI"
                    alt=""
                    height={500}
                    width={500}
                    class="inline-block h-7 w-7 max-w-full mr-2 rounded-full"
                  />
                  <p class="text-sm font-bold">Jotish Sharma</p>
                  <div class="ml-4 mr-4 h-full px-0 [border-right-style:solid] py-3"></div>
                  <Image
                    src="https://uploads-ssl.webflow.com/646f65e37fe0275cfb808405/646f683b1e3793b739a1c347_Vector.svg"
                    alt=""
                    height={500}
                    width={500}
                    class="inline-block max-w-full flex-none mr-1 w-3.5"
                  />
                  <p class="text-sm text-[#636262]">5 stars</p>
                </div>
              </div>
            </div>
            <div class="hidden md:block">
              <Image
                src="https://i.ibb.co/bJD4xkv/hashcoderpng.png"
                alt=""
                class="mx-auto inline-block h-full w-full max-w-[510px] object-cover rounded-2xl"
                height={600}
                width={600}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
