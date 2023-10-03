import React from "react";

function WebFeat() {
  return (
    <div class="bg-black mt-[-90px] px-5 md:px-10">
      <div class="mx-auto w-full max-w-7xl">
        <div class="py-16 md:py-24 lg:py-32">
          <div class="grid grid-cols-1 items-center gap-8 max-[991px]:justify-items-start sm:gap-20 lg:grid-cols-2">
            <div class="max-[991px]:[grid-area:2/1/3/2]">
              <img
                src="https://i.ibb.co/LdZw7WL/hashcoder-feat1.png"
                alt=""
                class="mx-auto inline-block h-full w-full max-w-[640px] rounded-2xl object-cover"
              />
            </div>
            <div class="max-[991px]:max-w-[720px]">
              <h1 class="mb-6 pb-4 text-4xl font-bold text-white md:text-6xl">
                <span class="text-[#c9fd02]">Comprehensive</span> Web Services
              </h1>
              <div class="mb-6 max-w-[528px] md:mb-10 lg:mb-12">
                <p class="text-[#aeaeae]">
                  Our all-inclusive web services package offers a dynamic blend
                  of responsive design, SEO optimization, e-commerce
                  integration, content management, robust security, speed
                  optimization, 24/7 support, custom development, analytics
                  integration, and scalability to empower your digital success.
                </p>
              </div>
              <div class="mb-6 flex items-center md:mb-10 lg:mb-12">
                <a href="#" class="flex max-w-full flex-row p-0 font-bold">
                  <img
                    src="https://uploads-ssl.webflow.com/646f65e37fe0275cfb808405/646f68133fc5cb4e29ed28f3_CaretRight.svg"
                    alt=""
                    class="mr-2 inline-block w-5 max-w-full"
                  />
                  <p class="text-white">Read Full Review</p>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WebFeat;
