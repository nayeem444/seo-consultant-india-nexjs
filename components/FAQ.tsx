import React, { useState } from "react";

const Accordion = () => {
  return (
    <section className="font-montserrat relative z-20 overflow-hidden bg-white pb-12  dark:bg-dark ">
      <div className="container mx-auto">
        <div className="-mx-4 flex flex-wrap">
          <div className="w-full px-4">
            <div className="mx-auto mb-[60px] max-w-[520px] text-center lg:mb-20">
              <span className="mb-2 block text-lg font-semibold text-primary">
                FAQ
              </span>
              <h2 className="mb-4 text-3xl font-bold text-dark-600  sm:text-[40px]/[48px]">
                Any Questions? Look Here
              </h2>
            
            </div>
          </div>
        </div>

        <div className="-mx-4 flex flex-wrap">
          <div className="w-full px-4 lg:w-1/2">
            <AccordionItem
              header="Why Hire an SEO Expert for Your Business?"
              text="In today’s competitive business landscape, a strong online presence is crucial for reaching customers. Hiring an SEO expert offers these key benefits:

              - Boost Brand Awareness: Improve website visibility and build trust with potential customers.
              - Generate More Leads: SEO generates organic leads, leading to increased sales and revenue.
              - Increase Sales: Higher search engine rankings attract active customers, boosting sales.
              - Stay Ahead of Competitors: In a competitive market, staying ahead with effective SEO is essential."
            />
            <AccordionItem
              header="How long we deliver your first blog post?"
              text="Shahid Shahmiri, the best SEO expert in India, has left an indelible mark by partnering with prestigious brands such as Unacademy, BeconStac, LeadGen App, and other industry giants. Shahid has successfully scaled their marketing and SEO effort. When you work with Shahid, you can be confident in achieving remarkable growth and outshining the competition. "
            />
            <AccordionItem
              header="Who is the best SEO Expert in India?
              "
              text="Shahid Shahmiri, the best SEO expert in India, has left an indelible mark by partnering with prestigious brands such as Unacademy, BeconStac, LeadGen App, and other industry giants. Shahid has successfully scaled their marketing and SEO effort. When you work with Shahid, you can be confident in achieving remarkable growth and outshining the competition."
            />
              <AccordionItem
              header="How much SEO charges in India?

              "
              text="SEO charges in India vary depending on the project complexity, duration, and expertise required. On average, hourly rates range from ₹3,000 to ₹8,000, while monthly retainers start around ₹60,000. It’s important to discuss specific requirements and negotiate with SEO professionals and consultants for accurate pricing."
            />
          </div>
          <div className="w-full px-4 lg:w-1/2">
            <AccordionItem
              header="Benefits of Hiring an SEO Expert ?"
              text="Hiring an SEO expert for your business offers:

              - Cost-Effective Online Promotion
              - Precise Audience Tracking
              - Organic Lead Generation
              - High Conversion Rates
              - Increased Brand Visibility"
            />
            <AccordionItem
              header="What are benefits of choosing my SEO services?"
              text="Here are some benefits of choosing my SEO expert services:

              Up-to-Date with Latest Google Algorithms: I always stay updated with the latest Google algorithms while implementing SEO strategies, keeping your website ahead of the competition.
              
              Generate a Large Number of Leads: My approach as an SEO Consultant in India attracts user traffic to your website, resulting in a high number of leads for your business.
              
              Increased Sales: By achieving a high ranking on Google, your website will attract a large number of consumers looking for products or services similar to yours, increasing your sales potential.
              
              Online Reputation Management: In addition to optimizing your website for SEO, I also strive to maintain your business’s online reputation at a high level."
            />
            <AccordionItem
              header="Can the assistance of SEO experts be beneficial?
              "
              text="SEO experts play a vital role in achieving brand recognition for a website. Their dedication and expertise help to establish trust in a company, elevating its identity to the highest level. Thanks to the efforts of these professionals, a company’s brand can be enhanced significantly."
            />

<AccordionItem
              header="How much does it cost to hire an SEO consultant?
              "
              text="The cost to hire an SEO consultant varies based on factors like scope, industry, and expertise. Hourly rates can range from $100 to $300+, while project-based fees start around $1,000. Let’s discuss your needs for an accurate quote. Remember, investing in an SEO consultant brings long-term benefits for online visibility and business growth."
            />
          
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 right-0 z-[-1]">
        <svg
          width="1440"
          height="600"
          viewBox="0 0 1440 886"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            opacity="0.5"
            d="M193.307 -273.321L1480.87 1014.24L1121.85 1373.26C1121.85 1373.26 731.745 983.231 478.513 729.927C225.976 477.317 -165.714 85.6993 -165.714 85.6993L193.307 -273.321Z"
            fill="url(#paint0_linear)"
          />
          <defs>
            <linearGradient
              id="paint0_linear"
              x1="1308.65"
              y1="1142.58"
              x2="602.827"
              y2="-418.681"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#3056D3" stop-opacity="0.36" />
              <stop offset="1" stop-color="#F5F2FD" stop-opacity="0" />
              <stop offset="1" stop-color="#F5F2FD" stop-opacity="0.096144" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    </section>
  );
};

export default Accordion;

const AccordionItem = ({ header, text }) => {
  const [active, setActive] = useState(false);

  const handleToggle = () => {
    event.preventDefault();
    setActive(!active);
  };
  return (
    <div className="mb-8 w-full rounded-lg bg-white p-4 shadow-[0px_20px_95px_0px_rgba(201,203,204,0.30)] dark:bg-dark-2 dark:shadow-[0px_20px_95px_0px_rgba(0,0,0,0.30)] sm:p-8 lg:px-6 xl:px-8">
      <button
        className={`faq-btn flex w-full text-left`}
        onClick={() => handleToggle()}
      >
        <div className="mr-5 flex h-10 w-full max-w-[40px] items-center justify-center rounded-lg bg-primary/5 text-primary dark:bg-white/5">
          <svg
            className={`fill-primary stroke-primary duration-200 ease-in-out ${
              active ? "rotate-180" : ""
            }`}
            width="17"
            height="10"
            viewBox="0 0 17 10"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M7.28687 8.43257L7.28679 8.43265L7.29496 8.43985C7.62576 8.73124 8.02464 8.86001 8.41472 8.86001C8.83092 8.86001 9.22376 8.69083 9.53447 8.41713L9.53454 8.41721L9.54184 8.41052L15.7631 2.70784L15.7691 2.70231L15.7749 2.69659C16.0981 2.38028 16.1985 1.80579 15.7981 1.41393C15.4803 1.1028 14.9167 1.00854 14.5249 1.38489L8.41472 7.00806L2.29995 1.38063L2.29151 1.37286L2.28271 1.36548C1.93092 1.07036 1.38469 1.06804 1.03129 1.41393L1.01755 1.42738L1.00488 1.44184C0.69687 1.79355 0.695778 2.34549 1.0545 2.69659L1.05999 2.70196L1.06565 2.70717L7.28687 8.43257Z"
              fill=""
              stroke=""
            />
          </svg>
        </div>

        <div className="w-full">
          <h4 className="mt-1 text-lg font-semibold text-dark dark:text-dark">
            {header}
          </h4>
        </div>
      </button>

      <div
        className={`pl-[62px] duration-200 ease-in-out ${
          active ? "block" : "hidden"
        }`}
      >
        <p className="py-3 text-base leading-relaxed text-body-color dark:text-dark-6">
          {text}
        </p>
      </div>
    </div>
  );
};
