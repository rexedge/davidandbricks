import { ArrowCircleRight, ArrowRight } from '@mui/icons-material'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import Card from './layout/Card'
import Grid from './layout/Grid/Grid'
import Section from './layout/Section'
import SectionHeader from './SectionHeader'

export default function Gallery() {
     return (
          <Section>

               <div className="container" id="gallery" >

                    <SectionHeader
                         bgtitle='Gallery'
                         title='Tour Gallery'
                         description="Best Tourist' s Shared Photos"
                    />

                    <Grid>
                         <Card p='0'>
                              <div className='relative h-72 '>
                                   <Image className="absolute h-full w-full object-cover"
                                        src={'/images/img1.png'}
                                        alt={'img 1'}
                                        layout="fill"
                                        objectFit="cover"
                                   />
                                   <Link href="/images/img1.png" className=""><ArrowCircleRight sx={{ fontSize: 40 }} /></Link>
                                   <h4>Eiffel Tower, France</h4>
                              </div>
                         </Card>
                         <Card p='0'>
                              <div className='relative h-72 '>
                                   <Image className="absolute h-full w-full object-cover"
                                        src={'/images/img1.png'}
                                        alt={'img 1'}
                                        layout="fill"
                                        objectFit="cover"
                                   />
                                   <Link href="/images/img1.png" className=""><ArrowCircleRight sx={{ fontSize: 40 }} /></Link>
                                   <h4>Machu Picchu, Peru</h4>
                              </div>
                         </Card>
                         <Card p='0'>
                              <div className='relative h-72 '>
                                   <Image className="absolute h-full w-full object-cover"
                                        src={'/images/img1.png'}
                                        alt={'img 1'}
                                        layout="fill"
                                        objectFit="cover"
                                   />
                                   <Link href="/images/img1.png" className=""><ArrowCircleRight sx={{ fontSize: 40 }} /></Link>
                                   <h4>Eiffel Tower, France</h4>
                              </div>
                         </Card>
                         <Card p='0'>
                              <div className='relative h-72 '>
                                   <Image className="absolute h-full w-full object-cover"
                                        src={'/images/img1.png'}
                                        alt={'img 1'}
                                        layout="fill"
                                        objectFit="cover"
                                   />
                                   <Link href="/images/img1.png" className=""><ArrowCircleRight sx={{ fontSize: 40 }} /></Link>
                                   <h4>Eiffel Tower, France</h4>
                              </div>
                         </Card>
                         <Card p='0'>
                              <div className='relative h-72 '>
                                   <Image className="absolute h-full w-full object-cover"
                                        src={'/images/img1.png'}
                                        alt={'img 1'}
                                        layout="fill"
                                        objectFit="cover"
                                   />
                                   <Link href="/images/img1.png" className=""><ArrowCircleRight sx={{ fontSize: 40 }} /></Link>
                                   <h4>Eiffel Tower, France</h4>
                              </div>
                         </Card>
                         <Card p='0'>
                              <div className='relative h-72 '>
                                   <Image className="absolute h-full w-full object-cover"
                                        src={'/images/img1.png'}
                                        alt={'img 1'}
                                        layout="fill"
                                        objectFit="cover"
                                   />
                                   <Link href="/images/img1.png" className=""><ArrowCircleRight sx={{ fontSize: 40 }} /></Link>
                                   <h4>Eiffel Tower, France</h4>
                              </div>
                         </Card>
                    </Grid>
               </div>

          </Section>
     )
}
