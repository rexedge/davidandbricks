import { ArrowCircleRight, ArrowRight } from '@mui/icons-material'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import Card from './layout/Card'
import Grid from './layout/Grid/Grid'
import Section from './layout/Section'
import SectionHeader from './SectionHeader'

export default function Contact() {
     return (
          <Section>

               <div className="container" id="contact" >

                    <SectionHeader
                         bgtitle='Contact'
                         title='Contact Us'
                         description="If You Have any Question, Drop a Message"
                    />

                    <Grid>
                         <Card p='0'>
                              <div className='relative h-72 '>
                                   <Image className="absolute h-full w-full object-cover"
                                        src={'/images/img1.webp'}
                                        alt={'img 1'}
                                        layout="fill"
                                        objectFit="cover"
                                   />
                                   <Link href="/images/img1.webp" className=""><ArrowCircleRight sx={{ fontSize: 40 }} /></Link>
                                   <h4>Eiffel Tower, France</h4>
                              </div>
                         </Card>
                    </Grid>
               </div>

          </Section>
     )
}
