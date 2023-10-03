import Image from "next/image";
import React from "react";

function Footer() {
  return (
    <footer class="block bg-black">
      <div class="px-5 md:px-10">
        <div class="mx-auto w-full max-w-7xl">
          <div class="py-16 md:py-24 lg:py-32">
            <div class="flex flex-row justify-between max-[767px]:flex-col max-[767px]:items-start">
              <div class="w-full max-w-[560px] max-[991px]:mr-4 max-[991px]:flex-initial max-[767px]:mr-0">
                <h2 class="mb-4 font-extrabold text-white text-3xl md:text-5xl">
                  <span class="text-[#c9fd02]">Hashcoder:</span> Making
                  Development Easy.
                </h2>
              </div>
              <div class="max-[991px]:ml-4 max-[991px]:flex-none max-[767px]:ml-0 max-[767px]:mt-8">
                <div class="mb-4 flex max-w-[272px] items-start justify-start">
                  <Image
                    src="https://assets.website-files.com/646f65e37fe0275cfb808405/646f68133fc5cb4e29ed28fe_MapPin.svg"
                    height={50}
                    width={50}
                    alt=""
                    class="inline-block max-w-full mr-3"
                  />
                  <p class="text-white">
                    Daragoan Tadong, Gangtok Sikkim 737102 India
                  </p>
                </div>
                <div class="mb-4 flex max-w-[272px] items-start justify-start">
                  <Image
                    src="https://assets.website-files.com/646f65e37fe0275cfb808405/646f68133fc5cb4e29ed28ff_sms.svg"
                    height={50}
                    width={30}
                    alt=""
                    class="inline-block max-w-full mr-3"
                  />
                  <p class="text-white">info@hashcoder.com</p>
                </div>
              </div>
            </div>
            <div class="mb-20 mt-20 w-full border-[0.5px] border-solid border-[#101010]"></div>
            <div class="flex flex-row justify-between max-[991px]:items-center max-[767px]:flex-col max-[767px]:items-start max-[479px]:flex-col-reverse">
              <div class="font-semibold max-[991px]:ml-0 max-[991px]:mr-0 max-[479px]:mb-4 max-[991px]:py-1 text-center sm:text-center">
                <a
                  href="#"
                  class="inline-block font-normal text-[#636262] transition hover:text-white sm:pr-6 lg:pr-12 py-1.5 sm:py-2 pl-0 pr-6"
                >
                  About
                </a>
                <a
                  href="#"
                  class="inline-block font-normal text-[#636262] transition hover:text-white sm:pr-6 lg:pr-12 py-1.5 sm:py-2 pl-0 pr-6"
                >
                  Features
                </a>
                <a
                  href="#"
                  class="inline-block font-normal text-[#636262] transition hover:text-white sm:pr-6 lg:pr-12 py-1.5 sm:py-2 pl-0 pr-6"
                >
                  Works
                </a>
                <a
                  href="#"
                  class="inline-block font-normal text-[#636262] transition hover:text-white sm:pr-6 lg:pr-12 py-1.5 sm:py-2 pl-0 pr-6"
                >
                  Support
                </a>
                <a
                  href="#"
                  class="inline-block font-normal text-[#636262] transition hover:text-white sm:pr-6 lg:pr-12 py-1.5 sm:py-2 pl-0 pr-6"
                >
                  Help
                </a>
              </div>
              <div class="max-[991px]:flex-none">
                <p class="text-[#636262]">
                  © Copyright 2023 Hashcoder. All rights reserved.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
