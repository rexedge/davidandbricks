import { LocalActivity, LocationOn, Route, SettingsAccessibility, SlowMotionVideo } from '@mui/icons-material'
import Image from 'next/image'
import React from 'react'
import Section from './layout/Section'
import SectionHeader from './SectionHeader'
import VideoPlayer from './ui/VideoPlayer'

export default function Why() {
     return (
          <Section>
               <div className='container mx-auto'>
                    <SectionHeader
                         title='Who We Are?'
                         description='Why choose us?'
                         bgtitle='WHO?'
                    />
                    <div className="flex flex-wrap">
                         {/* <div className="w-full lg:w-1/2 grid grid-cols-1 md:grid-cols-2 gap-4">
                              <div className="">
                                   <div className="p-3">
                                        <div className="single_choose mrb40">
                                             <LocalActivity
                                                  sx={{ fontSize: 60 }}
                                                  className='mb-2'
                                             />
                                             <h3 className='mb-3 text-xl font-bold'>Activities</h3>
                                             <p className='mb-5'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fuga veniam similique deserunt veritatis placeat itaque</p>
                                        </div>
                                   </div>
                              </div>
                              <div className="">
                                   <div className="p-3">
                                        <div className="single_choose mrb40">
                                             <Route
                                                  sx={{ fontSize: 60 }}
                                                  className='mb-2'
                                             />
                                             <h3 className='mb-3 text-xl font-bold'>Travel Arrangements</h3>
                                             <p className='mb-5'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fuga veniam similique deserunt veritatis placeat itaque</p>
                                        </div>
                                   </div>
                              </div>
                              <div className="">
                                   <div className="p-3">
                                        <div className="single_choose">
                                             <SettingsAccessibility
                                                  sx={{ fontSize: 60 }}
                                                  className='mb-2'
                                             />
                                             <h3 className='mb-3 text-xl font-bold'>Private Guide</h3>
                                             <p className='mb-5'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fuga veniam similique deserunt veritatis placeat itaque</p>
                                        </div>
                                   </div>
                              </div>
                              <div className="">
                                   <div className="p-3">
                                        <div className="single_choose">
                                             <LocationOn
                                                  sx={{ fontSize: 60 }}
                                                  className='mb-2'
                                             />
                                             <h3 className='mb-3 text-xl font-bold'>Location Manager</h3>
                                             <p className='mb-5'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fuga veniam similique deserunt veritatis placeat itaque</p>
                                        </div>
                                   </div>
                              </div>
                         </div> */}
                         <div className="w-full lg:w-1/2 mb-5">
                              <Image
                                   src={'/images/who.png'}
                                   alt="Choose Image"
                                   height={400}
                                   width={700}
                                   className="rounded-md w-full"
                              />
                         </div>
                         <div className="w-full lg:w-1/2 mb-5 text-dark text-lg md:px-10 text-justify">
                              <p className="pb-6">
                                   <span className="text-5xl font-bold">W</span>e are a bespoke travel management company on a fierce mission to satisfy
                                   the daily retail and corporate travel demands.
                              </p>
                              <p className="pb-6">
                                   Our team is fully serviced to
                                   provide business and leisure customers who require professional, friendly and
                                   efficient organization for their inbound and outbound travel and tourism
                                   needs.
                              </p>
                              <p className="pb-6">
                                   We also assist tour operators, tourism boards, travel houses, resorts
                                   and service providers in destinations around the world to build relationships across various destinations.
                              </p>
                              <p className="pb-6">
                                   Our team is committed to the affairs of existing
                                   and prospective customers which has been the hallmark of our success.
                              </p>
                         </div>
                    </div>
                    <div className="w-full text-2xl font-semibold text-justify mt-10">
                         <div className="text-center">
                              OUR MISSION AND VISION
                         </div>
                         <div className="text-base mt-4">
                              <p className="font-light">
                                   Our mission is to ensure customer satisfaction by providing affordable and reasonable travel packages, continuously improving our services and offers.
                                   Our objective is to provide ease in planning travel for both domestic and international sectors. We have customized travel plans as per your
                                   timings and airline preferences in line with your financial budget.
                              </p>
                              <p className="font-light">
                                   It is our priority to offer an unmatched professionals expertise and sophistication
                                   with a uniquely cultivated business and operations management philosophy
                                   characterized by firm commitment to excellence, creativity, financial stability,
                                   quality control and ultimate flexibility in meeting our clients needs.
                              </p>
                         </div>
                    </div>
               </div>
          </Section>
     )
}
