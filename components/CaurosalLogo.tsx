import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Image from 'next/image';

import img1 from '../public/logos/Apexure (2).webp';
import img2 from '../public/logos/Beaconstac (1).webp';
import img3 from '../public/logos/DOOR3 (2).webp';
import img4 from '../public/logos/Infuse-Media (2).webp';
import img5 from '../public/logos/LeadGen-App (2).webp';
import img6 from '../public/logos/Taxmann (2).webp';
import img7 from '../public/logos/Untitled-1-1.png';

const CustomNextArrow = (props) => (
  <div {...props} className="slick-arrow next-arrow">
    <i className="fas fa-chevron-right"></i>
  </div>
);

const CustomPrevArrow = (props) => (
  <div {...props} className="slick-arrow prev-arrow">
    <i className="fas fa-chevron-left"></i>
  </div>
);

const CaurosalLogo = () => {
  const logos = [img1, img2, img3, img4, img5, img6, img7];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    centerMode: true,
    nextArrow: <CustomNextArrow />,
    prevArrow: <CustomPrevArrow />,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
        },
      },
    ],
  };

  return (
    <section>
      <div>
        <h2 className="font-montserrat mb-8 lg:mb-16 text-3xl font-extrabold tracking-tight leading-tight text-center text-gray-900 dark:text-dark md:text-4xl   ">
        Associated And Featured In:

        </h2>
        <Slider {...settings} className="slick-slider md:h-48">
          {logos.map((logo, index) => (
            <div key={index} className="flex justify-center items-center">
              <div className="flex">
                {[0, 1, 2, 3].map((i) => (
                  <div key={i} className="mr-4">
                    <Image
                      src={logos[(index + i) % logos.length]}
                      alt={`logo-${i}`}
                      width={400}
                      height={400}
                    />
                  </div>
                ))}
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default CaurosalLogo;
