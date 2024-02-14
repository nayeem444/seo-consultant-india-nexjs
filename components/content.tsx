import React from 'react'
import Image from 'next/image'
import img1 from '../public/favicon/content.jpg';

const content = () => {
  return (
    <section className=" bg-blueGray-200 -mt-12 mb-12">
  <div className="container mx-auto px-4">
    <div className="flex flex-wrap">
      <div className="lg:pt-12 pt-6 w-full md:w-4/12 px-4 text-center">
        <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-1 shadow-lg rounded-lg">
          <div className="px-4 flex-auto">
          </div>
        </div>
      </div>
    </div>
    <div className="flex flex-wrap items-center mt-16">
      <div className="w-full md:w-5/12 px-4 mr-auto ml-auto">
        
        <h3 className="text-3xl mb-2 font-semibold leading-normal">
        Trusted SEO Consultant in India
        </h3>
        <p className="text-lg font-light leading-relaxed mt-4 mb-4 text-blueGray-600">
        As an SEO specialist, I understand that it can be difficult to trust someone on the internet claiming to be an expert. However, I have a proven track record of helping businesses develop successful digital strategies that increase rankings, drive quality traffic, and generate revenue.
        </p>
        <p className="text-lg font-light leading-relaxed mt-0 mb-4 text-blueGray-600">
        My understanding of evolving search intent and data-driven approach helps me avoid penalties from core updates. I actively participate in industry events, webinars, and podcasts to share my knowledge and stay up-to-date on the latest SEO techniques and insights.
        </p>
      </div>
      <div className="w-full md:w-4/12 px-4 mr-auto ml-auto">
        <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-2 shadow-lg rounded-lg bg-pink-500">
          <Image alt="..." src={img1} className="w-full align-middle rounded-t-lg" width={200} height={200}/>
       
        </div>
      </div>
    </div>
  </div>
  <footer className="relative pt-8 pb-6 mt-8">
    <div className="container mx-auto px-4">
      <div className="flex flex-wrap items-center md:justify-between justify-center">
        <div className="w-full md:w-6/12 px-4 mx-auto text-center">
          <div className="text-sm text-blueGray-500 font-semibold py-1">
          </div>
        </div>
      </div>
    </div>
  </footer>
</section>
  )
}

export default content