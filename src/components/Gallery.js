import { ArrowCircleRight, ArrowRight } from '@mui/icons-material'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import Section from './layout/Section'
import SectionHeader from './SectionHeader'

const PLACES_VISITED = [
     {
          idx: 0,
          image: '/images/places/london.jpg',
          height: 300,
          width: 400,
          place: 'Eiffel Tower, France',
     },
     {
          idx: 1,
          image: '/images/places/mahe.jpg',
          height: 300,
          width: 400,
          place: 'Machu Picchu, Peru',
     },
     {
          idx: 2,
          image: '/images/places/male.jpg',
          height: 300,
          width: 400,
          place: 'Eiffel Tower, France',
     },
     {
          idx: 3,
          image: '/images/places/mauritius.jpg',
          height: 300,
          width: 400,
          place: 'Eiffel Tower, France',
     },
     {
          idx: 4,
          image: '/images/places/seychelles.jpg',
          height: 300,
          width: 400,
          place: 'Eiffel Tower, France',
     },
     {
          idx: 5,
          image: '/images/places/suncity.jpg',
          height: 300,
          width: 400,
          place: 'Eiffel Tower, France',
     },
     {
          idx: 6,
          image: '/images/2.jpg',
          height: 300,
          width: 400,
          place: 'Eiffel Tower, France',
     },
     {
          idx: 7,
          image: '/images/4.jpg',
          height: 300,
          width: 400,
          place: 'Eiffel Tower, France',
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
