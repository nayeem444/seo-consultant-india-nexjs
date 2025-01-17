
import React from 'react';
import Image from 'next/image';
import img1 from '../public/IMG_3627-min-1536x1104.jpg';

const Timeline = () => {
  return (
    <div className=" font-montserrat py-10 container mx-auto px-4 sm:px-6 lg:px-8 mt-24">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="relative">
          <div className="border-r-4 border-blue-600 absolute h-full top-0" style={{ left: '10px', transform: 'translateX(-50%)' }}></div>

       
          <ul className="list-none m-0 p-0">
                    <li className="mb-5  ">
                        <div className="flex group items-center ">
                            <div className="bg-blue-600 group-hover:bg-red-700 z-10 rounded-full border-4 border-black  h-5 w-5">
                                <div className="bg-blue-600 h-1 w-6 items-center  ml-4 mt-1"></div>
                            </div>
                            <div className="flex-1 ml-4 z-10 font-medium w-full">
                                <div className="order-1 space-y-2 bg-blue-600 rounded-lg shadow-only transition-ease px-6 py-4">
                                    <h3 className="mb-3 font-bold text-white text-2xl">Aqua Chill Systems</h3>
                                    <p className="pb-4 text-sm text-gray-100">(2017-2018)</p>
                                    <hr />
                                    <p className="text-sm font-medium leading-snug tracking-wide text-white text-opacity-100">Marketing Executive at Aqua Chill Systems Started my Marketing Journey.</p>
                                </div>
                            </div>
                        </div>
                    </li>
                    <li className="mb-5  ">
                        <div className="flex group items-center ">
                            <div className="bg-blue-600 group-hover:bg-red-700 z-10 rounded-full border-4 border-black  h-5 w-5">
                                <div className="bg-blue-600 h-1 w-6 items-center  ml-4 mt-1"></div>
                            </div>
                            <div className="flex-1 ml-4 z-10 font-medium">
                                <div className="order-1 space-y-2 bg-blue-600 rounded-lg shadow-only transition-ease  px-6 py-4">
                                    <h3 className="mb-3 font-bold text-white text-2xl">Digital Marketer at Leadcube Media.</h3>
                                    <p className="pb-4 text-sm text-gray-100">(2018 - 2019)</p>
                                    <hr />
                                    <p className="text-sm font-medium leading-snug tracking-wide text-white text-opacity-100">Worked with many clients like AMEX GBT, LeadGen App, IEC Abroad to improve their SEO performance and lead generation.</p>
                                </div>
                            </div>
                            
                        </div>
                    </li>
                    <li className="mb-5  ">
                        <div className="flex group items-center ">
                            <div className="bg-blue-600 group-hover:bg-red-700 z-10 rounded-full border-4 border-black  h-5 w-5">
                                <div className="bg-blue-600 h-1 w-6 items-center  ml-4 mt-1"></div>
                            </div>
                            <div className="flex-1 ml-4 z-10 font-medium">
                                <div className="order-1 space-y-2 bg-blue-600 rounded-lg shadow-only transition-ease px-6 py-4">
                                    <h3 className="mb-3 font-bold text-white text-2xl">Digital Marketer at LeadGen App.</h3>
                                    <p className="pb-4 text-sm text-gray-100">(2019 - 2020)</p>
                                    <hr />
                                    <p className="text-sm font-medium leading-snug tracking-wide text-white text-opacity-100">Collaborated with LeadGen App to improve their search engine ranking, clicks, and online presence, and continue to work towards advancing their SEO performance. Later onboarded them as my client.</p>
                                </div>
                            </div>
                            
                        </div>
                    </li>
                    <li className="mb-5  ">
                        <div className="flex group items-center ">
                            <div className="bg-blue-600 group-hover:bg-red-700 z-10 rounded-full border-4 border-black  h-5 w-5">
                                <div className="bg-blue-600 h-1 w-6 items-center  ml-4 mt-1"></div>
                            </div>
                            <div className="flex-1 ml-4 z-10 font-medium">
                                <div className="order-1 space-y-2 bg-blue-600 rounded-lg shadow-only transition-ease px-6 py-4">
                                    <h3 className="mb-3 font-bold text-white text-2xl">Marketing Specialist at Unacademy.</h3>
                                    <p className="pb-4 text-sm text-gray-100">(2020 - 2021)</p>
                                    <hr />
                                    <p className="text-sm font-medium leading-snug tracking-wide text-white text-opacity-100">Worked with Unacademy - India's Largest Edtech platform to improve their YouTube SEO and subscriptions. Hosted many episodes on CTwT Show.</p>
                                </div>
                            </div>
                            
                        </div>
                    </li>

                    <li className="mb-5  ">
                        <div className="flex group items-center ">
                            <div className="bg-blue-600 group-hover:bg-red-700 z-10 rounded-full border-4 border-black  h-5 w-5">
                                <div className="bg-blue-600 h-1 w-6 items-center  ml-4 mt-1"></div>
                            </div>
                            <div className="flex-1 ml-4 z-10 font-medium">
                                <div className="order-1 space-y-2 bg-blue-600 rounded-lg shadow-only transition-ease  px-6 py-4">
                                    <h3 className="mb-3 font-bold text-white text-2xl">SEO Manager at Taxmann Group.</h3>
                                    <p className="pb-4 text-sm text-gray-100"> (2021 - 2022)</p>
                                    <hr />
                                    <p className="text-sm font-medium leading-snug tracking-wide text-white text-opacity-100">Developed and implemented effective search engine optimization (SEO) strategies.

Helped in coordinating content, design, social media, pay-per-click (PPC) marketing and other activities</p>
                                </div>
                            </div>
                            
                        </div>
                    </li>
                    <li className="mb-5  ">
                        <div className="flex group items-center ">
                            <div className="bg-blue-600 group-hover:bg-red-700 z-10 rounded-full border-4 border-black  h-5 w-5">
                                <div className="bg-blue-600 h-1 w-6 items-center  ml-4 mt-1"></div>
                            </div>
                            <div className="flex-1 ml-4 z-10 font-medium">
                                <div className="order-1 space-y-2 bg-blue-600 rounded-lg shadow-only transition-ease px-6 py-4">
                                    <h3 className="mb-3 font-bold text-white text-2xl">Founder of Marketing Lad.</h3>
                                    <p className="pb-4 text-sm text-gray-100">(Currently)</p>
                                    <hr />
                                    <p className="text-sm font-medium leading-snug tracking-wide text-white text-opacity-100">Team management, research, KPI analysis, SEO planning, networking.

Workspace Owner at Slack Community (ML-Slack)
SEO Consultant at Zoomifier

Key Achievements:
Pioneered result-oriented SEO campaigns, increasing organic traffic by 200% for a diverse clientele.
Spearheaded link-building initiatives, securing high-authority backlinks, and elevating domain authority for clients across industries.
Launched industry-leading SEO and link-building packages, fueling sustainable business expansion.
Cultivated a collaborative work culture, attracting top talent and fostering professional development within the team.</p>
                                </div>
                            </div>
                            
                        </div>
                    </li>

                </ul>



        </div>

        <div className="max-w-screen-xl mx-auto bg-white border border-gray-100 rounded-lg shadow dark:bg-white dark:border-gray-700 w-full mb-24">
    <a href="#">
        <img className="rounded-t-lg" src="/docs/images/blog/image-1.jpg" alt="" />
    </a>
    <div className="p-5">
       
            <h5 className="mb-2 mt-12 text-2xl font-bold tracking-tight text-gray-900 text-dark">My Expertise As The SEO Consultant<br/><br/></h5>
      
        <p className="mb-3 font-normal text-gray-700 text-dark">I have worked with  number of high-profile clients, including BeaconStac, Unacademy, LeadGen App, fullfeel, Taxmann, CustomShow and Apexure. <br/><br/>

With a deep understanding of search engine algorithms and a passion for driving organic traffic, I have mastered the skills in optimising websites for higher visibility and better performance in search results. <br/><br/>

I have a track record of success in improving domain ratings, increasing organic traffic, and boosting organic rankings for a wide range of clients.<br/><br/>

In the world of SEO, my story began in 2016 while I was pursuing my MBA. Eager to put theory into practice, I launched my very first website, shahmiris.com. However, it was far from a roaring success. In fact, I failed quite miserably.<br/><br/>

But here’s the thing about failure – it’s often the best teacher. Those initial missteps taught me invaluable lessons about the complex world of SEO. <br/><br/>

As time passed, my side hustle, Marketing Lad, began to gain traction. Within just a few short years, I found myself making ten times more than what my day job was paying me. It was a realisation that turned everything on its head. Marketing Lad was no longer just a side gig.<br/><br/>

I also discovered a deep love for SEO consulting. It’s a joy to share the knowledge I’ve gathered over the years – not just the wins, but the failures too – with my clients.</p>
     
    </div>
    <div className=" flex justify-center ">
    <Image src={img1} alt="image" width={600} height={700}/>
    </div>
    
</div>
      </div>
    </div>
  );
};

export default Timeline;
