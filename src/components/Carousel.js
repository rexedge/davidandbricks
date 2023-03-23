import React from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper';
import Image from 'next/image';
import Button from './ui/Button';


const slides = [
     {
          id: 1,
          src: "/images/img1.webp",
          title: "Explore The World With Ease",
          subtitle: "We are here to make your travel confort"

     },
     {
          id: 2,
          src: "/images/img2.webp",
          title: "Explore The World With Ease",
          subtitle: "We are here to make your travel confort"
     },
     {
          id: 3,
          src: "/images/img4.webp",
          title: "Explore The World With Ease",
          subtitle: "We are here to make your travel confort"
     },
     {
          id: 4,
          src: "/images/img5.webp",
          title: "Explore The World With Ease",
          subtitle: "We are here to make your travel confort"
     },
     {
          id: 5,
          src: "/images/img6.webp",
          title: "Explore The World With Ease",
          subtitle: "We are here to make your travel confort"
     },
     {
          id: 6,
          src: "/images/img7.webp",
          title: "Explore The World With Ease",
          subtitle: "We are here to make your travel confort"
     },
     {
          id: 7,
          src: "/images/img8.webp",
          title: "Explore The World With Ease",
          subtitle: "We are here to make your travel confort"
     },
];


export default function Carousel() {
     return (
          <>
               <Swiper
                    spaceBetween={30}
                    centeredSlides={true}
                    autoplay={{
                         delay: 5000,
                         disableOnInteraction: false,
                    }}
                    pagination={{
                         clickable: true,
                    }}
                    loop={true}
                    modules={[Autoplay, Pagination, Navigation]}
                    className="mySwiper"
               >
                    <div
                         className="relative w-full overflow-hidden after:clear-both after:block after:content-[''] z-10">
                         {slides.map((image) => (
                              <SwiperSlide key={image.id}>
                                   <div
                                        className="relative float-left -mr-[100%] w-full transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none"
                                        data-te-carousel-active
                                        data-te-carousel-item>
                                        <Image
                                             src={image.src}
                                             className="block w-full"
                                             alt={image.title}
                                             height={900}
                                             width={1600}
                                             priority
                                        />
                                        <div
                                             className="absolute left-0 right-0 md:top-1/3 top-1/4 mx-auto flex items-center justify-center text-center text-white">
                                             <div className="">
                                                  <p className='lg:text-[150%] text-base'>
                                                       {image.subtitle}
                                                  </p>
                                                  <h1 className="lg:text-4xl text-2xl mb-3">{image.title}</h1>
                                                  <Button href='#service'>
                                                       Discover
                                                  </Button>
                                                  {/* <button onClick={() => console.log('button clicked')} className='bg-gray-900 lg:py-3 py-2 lg:px-5 px-2 sm:text-base  rounded-lg'>
                                                       Discover
                                                  </button> */}
                                             </div>
                                        </div>
                                   </div>
                              </SwiperSlide>
                         ))}
                    </div>
               </Swiper>
          </>
     );
}
