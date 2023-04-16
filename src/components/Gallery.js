import { ArrowCircleRight, ArrowRight } from '@mui/icons-material'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import Section from './layout/Section'
import SectionHeader from './SectionHeader'

const PLACES_VISITED = [
     {
          idx: 0,
          image: '/images/venice.png',
          height: 400,
          width: 500,
          place: 'Venice, Italy',
     },
     {
          idx: 1,
          image: '/images/zurich.png',
          height: 400,
          width: 500,
          place: 'Zurich, Switzerland',
     },
     {
          idx: 2,
          image: '/images/peterburg.png',
          height: 400,
          width: 500,
          place: 'St Peterburg, Russia',
     },
     {
          idx: 3,
          image: '/images/paris.png',
          height: 400,
          width: 500,
          place: 'Paris, France',
     },
     {
          idx: 4,
          image: '/images/edinburgh.png',
          height: 400,
          width: 500,
          place: 'Edinburgh, Scotland',
     },
     {
          idx: 5,
          image: '/images/cusco.png',
          height: 400,
          width: 500,
          place: 'Cusco, Peru',
     },
     {
          idx: 6,
          image: '/images/doha.png',
          height: 400,
          width: 500,
          place: 'Doha, Qatar',
     },
     {
          idx: 7,
          image: '/images/capetown.png',
          height: 400,
          width: 500,
          place: 'Cape Town, South Africa',
     },
     {
          idx: 8,
          image: '/images/bergen.png',
          height: 400,
          width: 500,
          place: 'Bergen, Norway',
     },
     {
          idx: 9,
          image: '/images/beijing.png',
          height: 400,
          width: 500,
          place: 'Beijing, China',
     },
     {
          idx: 10,
          image: '/images/amsterdam.png',
          height: 400,
          width: 500,
          place: 'Amsterdam, Netherland',
     },
     {
          idx: 11,
          image: '/images/dubai.png',
          height: 400,
          width: 500,
          place: 'Dubai United Arab Emirates',
     },
     {
          idx: 12,
          image: '/images/quebec.png',
          height: 400,
          width: 500,
          place: 'Quebec City, Canada',
     },
     {
          idx: 13,
          image: '/images/sanfranciso.png',
          height: 400,
          width: 500,
          place: 'San Francisco, California',
     },
]

export default function Gallery() {
     return (
          <Section>

               <div className="container" id="gallery" >

                    <SectionHeader
                         bgtitle='Gallery'
                         title='Tour Gallery'
                         description="Best Tourist' s Shared Photos"
                    />

                    <div className='w-full grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4' >
                         {
                              PLACES_VISITED.map((place, idx) => (
                                   <div key={idx} className='col-span-1' p='0'>
                                        <div className='relative h-72 overflow-hidden hover:scale-[102%] transition duration-200'>
                                             <Image className="absolute h-full w-full object-cover"
                                                  src={place.image}
                                                  alt={place.place}
                                                  height={300}
                                                  width={400}
                                             />
                                             <Link href={place.image} className="absolute right-3 top-3 hover:scale-150 transition duration-300 text-light"><ArrowCircleRight sx={{ fontSize: 40 }} /></Link>
                                             <h4 className='absolute bottom-0 left-0 right-0 bg-primary text-light text-center uppercase p-2'>{place.place}</h4>
                                        </div>
                                   </div>
                              ))
                         }
                    </div>
               </div>

          </Section>
     )
}
