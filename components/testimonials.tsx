import React from 'react'
import Image from 'next/image'
import img1 from '../public/favicon/WhatsApp-Image-2023-04-25-at-4.23.38-PM.jpeg'
import img2 from '../public/favicon/Arusik-Ghambaryan-SEO-TCF-min.jpeg'
import img3 from '../public/favicon/pic-1.jpg'


const testimonials = () => {
  return (
    <section className="font-montserrat bg-white py-12 text-blue-900 sm:py-16 lg:py-20">
  <div className="mx-auto max-w-screen-lg px-4 sm:px-6 lg:px-8">
    <div className="flex flex-col items-center">
      <div className="text-center">
        <p className="text-lg font-medium text-black">As An SEO Consultant My Competence Speaks For Itself - But My Clients Can Vouch For Me Too!</p>
        <h2 className="mt-4 text-3xl font-bold text-blue-900 sm:text-4xl xl:text-5xl">Client Testimonials</h2>
      </div>

    

      <div className="relative mx-auto mt-20 grid max-w-lg grid-cols-1 gap-6 md:max-w-none md:grid-cols-3 lg:gap-10">
        <div className="flex flex-col rounded-xl border border-blue-600 text-center shadow-xl shadow-blue-200">
          <div className="relative flex flex-1 flex-col justify-between p-6 lg:py-7 lg:px-5">
            <span className="absolute -left-5 -top-6 rounded-full border border-blue-600 bg-white  text-5xl">
                 <Image
          className="rounded-full"
          width={50}
          height={50}
          src={img1}
          alt="image"
           />
            </span>
            <div className="flex-1">
              <p className="border-blue-500 px-10 text-xl font-black">Absolutely recommended!</p>

              <blockquote className="mt-8 flex-1">
                <p className="leading-relaxed text-blue-900">Shahid provided exceptional link building services and helped increase our domain ranking significantly. His expertise professionalism and clear communication made the process seamless and his efforts have established our brand as a reputable authority in our industry. We highly recommend Shahid for his outstanding service.</p>
              </blockquote>
            </div>

            <div className="-mx-5 mt-8 px-8 py-1">
              <div className="">
                <p className="text-base font-bold">Jeremiah O Brian Emerge</p>
                <p className="mt-0.5 text-sm">Founder Emerge Global</p>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col rounded-xl border border-blue-600 text-center shadow-xl shadow-blue-200">
          <div className="relative flex flex-1 flex-col justify-between p-6 lg:py-7 lg:px-5">
            <span className="absolute -left-5 -top-6 rounded-full border border-blue-600 bg-white  text-5xl">
                 <Image
          className="rounded-full"
          width={50}
          height={50}
          src={img2}
          alt="image"
           />
            </span>
            <div className="flex-1">
              <p className="border-blue-500 px-10 text-xl font-black">Service was amazing!</p>

              <blockquote className="mt-8 flex-1">
                <p className="leading-relaxed text-blue-900">Shahid have a deep knowledge of SEO and content marketing. Its been a complete pleasure working with him. He is proactive contributors who would make a great addition to any business. Communications are clear & frequent.</p>
              </blockquote>
            </div>

            <div className="-mx-5 mt-8 px-8 py-1">
              <div className="">
                <p className="text-base font-bold">Arusik Ghambaryan</p>
                <p className="text-blue-90 mt-0.5 text-sm">Marketer at Crowdfunding</p>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col rounded-xl border border-blue-600 text-center shadow-xl shadow-blue-200">
          <div className="relative flex flex-1 flex-col justify-between p-6 lg:py-7 lg:px-5">
            <span className="absolute -left-5 -top-6 rounded-full border border-blue-600 bg-white  text-5xl">
                 <Image
          className="rounded-full"
          width={50}
          height={50}
          src={img3}
          alt="image"
           />
            </span>
            <div className="flex-1">
              <p className="border-blue-500 px-10 text-xl font-black">Saved me 1000s of hours</p>

              <blockquote className="mt-8 flex-1">
                <p className="leading-relaxed text-blue-900">Shahid has been a pleasure to work with! He provide quality high DR websites within our niche. Never low quality spammy sites or news sites which publish countless topics and have zero SEO value. His prices are also quite reasonable for what you are getting</p>
              </blockquote>
            </div>

            <div className="-mx-5 mt-8 px-8 py-1">
              <div className="">
                <p className="text-base font-bold">	
                
Justin Lubomirsky</p>
                <p className="text-blue-90 mt-0.5 text-sm">SEO Expert at INFUSEmedia</p>
              </div>
              
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
  )
}

export default testimonials