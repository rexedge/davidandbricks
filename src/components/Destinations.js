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
          image: '/images/places/male.jpg',
          location: 'MALE ISLAND, MALDIVES',
          duration: '1 day',
     },
     {
          id: '2',
          image: '/images/places/mahe.jpg',
          location: 'MAHE ISLAND, SEYCHELLES',
          duration: '2 day',
     },
     {
          id: '3',
          image: '/images/places/london.jpg',
          location: 'LONDON, UK',
          duration: '3 day',
     },
     {
          id: '4',
          image: '/images/places/mauritius.jpg',
          location: 'MAURITIUS',
          duration: '4 day',
     },
     {
          id: '5',
          image: '/images/places/seychelles.jpg',
          location: 'BRUSSEL',
          duration: '5 day',
     },
     {
          id: '6',
          image: '/images/places/suncity.jpg',
          location: 'SUNCITY, SA',
          duration: '6 day',
     },
];

export default function Destinations() {
     return (
          <Section>
               <div id='places' className="">
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
                                                            height={300}
                                                            width={300}
                                                       />
                                                  </div>
                                                  <div className="p-2 flex text-center items-center">
                                                       <LocationOn /> <span className='ml-2 text-xl font-bold'>{destination.location}</span>                                       {/* <p className='font-light text-lg'><Timer /> {destination.duration}</p> */}
                                                  </div>
                                             </div>
                                        </Link>
                                   </SwiperSlide>
                              ))}
                         </div>
                    </Swiper>
               </div>

               <div className="container px-5 mt-10">
                    <Image src={'/images/map.png'} className={'w-full'} alt={'map'} height={600} width={1200} />
               </div>
          </Section>
     )
}
