import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import Section from './layout/Section'
import SectionHeader from './SectionHeader'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper';
import { LocationOn, Timer } from '@mui/icons-material'

const destinations = [
     {
          id: '1',
          image: '/images/img1.png',
          location: 'This is location 1',
          duration: '1 day',
     },
     {
          id: '2',
          image: '/images/img2.png',
          location: 'This is location 2',
          duration: '2 day',
     },
     {
          id: '3',
          image: '/images/img3.png',
          location: 'This is location 3',
          duration: '3 day',
     },
     {
          id: '4',
          image: '/images/img4.png',
          location: 'This is location 4',
          duration: '4 day',
     },
     {
          id: '5',
          image: '/images/img5.png',
          location: 'This is location 5',
          duration: '5 day',
     },
     {
          id: '6',
          image: '/images/img6.png',
          location: 'This is location 6',
          duration: '6 day',
     },
     {
          id: '7',
          image: '/images/img7.png',
          location: 'This is location 7',
          duration: '7 day',
     },
     {
          id: '8',
          image: '/images/img8.png',
          location: 'This is location 8',
          duration: '8 day',
     },
];

export default function Destinations() {
     return (
          <Section>
               <div className="">
                    <SectionHeader
                         bgtitle='Places'
                         title='Destination'
                         description='Travel Most Popular Place'
                    />

                    <Swiper
                         centeredSlides={true}
                         autoplay={{
                              delay: 2000,
                              disableOnInteraction: false,
                         }}
                         breakpoints={{
                              640: {
                                   slidesPerView: 1,
                                   spaceBetween: 20,
                              },
                              768: {
                                   slidesPerView: 2,
                                   spaceBetween: 40,
                              },
                              1024: {
                                   slidesPerView: 3,
                                   spaceBetween: 50,
                              },
                         }}
                         // navigation
                         loop={true}
                         modules={[Autoplay, Pagination, Navigation]}
                         className="mySwiper "
                    >
                         <div
                              className="relative w-full overflow-hidden after:clear-both after:block after:content-[''] z-10 ">
                              {destinations.map((destination) => (
                                   <SwiperSlide key={destination.id}>
                                        <Link href={`/${destination.image}`}>
                                             <div className="bg-white rounded-lg overflow-hidden shadow-md m-2">
                                                  <div className="relative h-72 w-full rounded-lg">
                                                       <Image className="absolute h-full w-full object-cover"
                                                            src={destination.image}
                                                            alt={destination.location}
                                                            layout="fill"
                                                            objectFit="cover"
                                                       />
                                                  </div>
                                                  <div className="p-6">
                                                       <h2 className='text-xl font-bold'>{destination.location}</h2>
                                                       <p className='font-light text-lg'><Timer /> {destination.duration}</p>
                                                  </div>
                                             </div>
                                        </Link>
                                   </SwiperSlide>
                              ))}
                         </div>
                    </Swiper>
               </div>
          </Section>
     )
}
