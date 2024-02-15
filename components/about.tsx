
import React from "react";
import Image from "next/image";
import img2 from '../public/Screenshot-2024-02-06-at-12.06.25 PM-1-2048x843.webp';
import img3 from '../public/Screenshot-2024-02-06-at-12.04.00 PM-2048x804.webp';

const About = () => {
  return (
    <>
      <section id="about" className="font-montserrat overflow-hidden pt-20 pb-4 lg:pt-[120px] lg:pb-[10px] bg-white dark:bg-dark">
        <div className="container mx-auto">
          <div className="flex flex-col lg:flex-row items-center justify-between">
            {/* Images Section - Full width on mobile, adjust on larger screens */}
            <div className="w-full lg:w-1/2 px-4">
              <div className="py-3 sm:py-4">
                <Image
                  layout="responsive"
                  width={800}
                  height={800}
                  src={img2}
                  alt="image"
                />
              </div>
              <div className="py-3 sm:py-4">
                <Image
                  layout="responsive"
                  width={800}
                  height={800}
                  src={img3}
                  alt="image"
                />
              </div>
            </div>
            
            {/* Text Section - Full width on mobile, adjust on larger screens */}
            <div className="w-full lg:w-1/2 px-4">
              <div className="text-center lg:text-left">
                <span className="flex mb-4 text-lg font-semibold text-primary text-black justify-center lg:justify-start">
                  About Me
                </span>
                <h2 className="mb-5 text-3xl font-bold sm:text-4xl text-black leading-tight">
                  Best SEO Consultant In India
                </h2>
                <p className="mb-5 text-base text-body-color dark:text-dark-6 text-black">
                  As an experienced SEO consultant from India, I am specialized in driving organic growth and visibility for businesses of all sizes. With a focus on ethical SEO practices, I help businesses thrive online through sustainable and long-term strategies. I am readily available to address any questions or concerns you may have. Let me help your business succeed online.
                </p>
                <p className="mb-8 text-base text-body-color dark:text-dark-6 text-black">
                  I regularly provide recommendations and advice to some of the biggest SEO communities, groups, and social media platforms to keep up with the highly competitive search ecosystem and the latest SEO strategies. I also share many of these insights on my blog in great detail to ensure that my readers don’t miss out on anything important.
                </p>
                <a className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" href="/#contact">
                  Get in Touch
                  <svg className="rtl:rotate-180 w-3.5 h-3.5 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
