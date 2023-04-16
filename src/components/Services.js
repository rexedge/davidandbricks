import { Add, AirplanemodeActiveTwoTone, AirplaneTicket, AirplaneTicketTwoTone, CurrencyExchange, Extension, Fastfood, FreeBreakfast, Hotel, KingBed, LocalTaxi, Medication, SupportAgent, Wifi } from '@mui/icons-material'
import React from 'react'
import Card from './layout/Card'
import Grid from './layout/Grid/Grid'
import Section from './layout/Section'
import SectionHeader from './SectionHeader'

export default function Services() {
     return (
          <Section>
               <div className="container" id='service'>
                    <SectionHeader
                         title='Services'
                         description='What We Offer For You'
                    />
                    <div className='mx-auto mb-10 text-[20px] font-light text-dark' style={{
                         maxWidth: '700px',
                    }}>
                         At David & Brics, we offer a wide range of travel services to cater to the unique needs and preferences of our clients and are committed to providing exceptional travel experiences and delivering high-quality services that exceed our clients&apos; expectations. A synopsis of the services we offer includes:
                    </div>

                    <Grid>
                         <Card bg='light'>
                              <div className="flex flex-col md:flex-row gap-5 text-dark p-2 md:p-5">
                                   <AirplanemodeActiveTwoTone sx={{ fontSize: 60 }} />
                                   <div className="">
                                        <h4 className='font-bold text-xl mb-3 uppercase'>Personalized travel planning</h4>
                                        <p>
                                             We work closely with our clients to understand their travel preferences, budget, and requirements, and create customized travel itineraries that meet their unique needs.
                                        </p>
                                   </div>
                              </div>
                         </Card>
                         <Card bg='light'>
                              <div className="flex flex-col md:flex-row gap-5 text-dark  p-3 md:p-5">
                                   <Hotel sx={{ fontSize: 60 }} />
                                   <div className="">
                                        <h4 className='font-bold text-xl mb-3 uppercase'>Visa assistance services</h4>
                                        <p>
                                             We offer a professional assistance on application, documentation, and processing for various visa categories a wide range of immigration processing services to numerous destinations.
                                        </p>
                                   </div>
                              </div>
                         </Card>
                         <Card bg='light'>
                              <div className="flex flex-col md:flex-row gap-5 text-dark  p-3 md:p-5">
                                   <FreeBreakfast sx={{ fontSize: 60 }} />
                                   <div className="">
                                        <h4 className='font-bold text-xl mb-3 uppercase'>Flights and accommodation</h4>
                                        <p>
                                             We offer a comprehensive range of flights and accommodation options, from budget-friendly to luxury, to ensure that our clients have a comfortable and enjoyable travel experience.
                                        </p>
                                   </div>
                              </div>
                         </Card>
                         <Card bg='light'>
                              <div className="flex flex-col md:flex-row gap-5 text-dark  p-3 md:p-5">
                                   <CurrencyExchange sx={{ fontSize: 60 }} />
                                   <div className="">
                                        <h4 className='font-bold text-xl mb-3 uppercase'>Tours and activities</h4>
                                        <p>
                                             We provide a variety of tours and activities that cater to different interests and preferences, from cultural tours and adventure activities to food and wine experiences.
                                        </p>
                                   </div>
                              </div>
                         </Card>
                         <Card bg='light'>
                              <div className="flex flex-col md:flex-row gap-5 text-dark  p-3 md:p-5">
                                   <AirplanemodeActiveTwoTone sx={{ fontSize: 60 }} />
                                   <div className="">
                                        <h4 className='font-bold text-xl mb-3 uppercase'>Transportation</h4>
                                        <p>
                                             We arrange for convenient and reliable transportation options, such as private transfers, car rentals, and train tickets, to ensure that our clients can travel comfortably and hassle-free.
                                        </p>
                                   </div>
                              </div>
                         </Card>
                         <Card bg='light'>
                              <div className="flex flex-col md:flex-row gap-5 text-dark  p-3 md:p-5">
                                   <AirplaneTicket sx={{ fontSize: 60 }} />
                                   <div className="">
                                        <h4 className='font-bold text-xl mb-3 uppercase'>Travel insurance</h4>
                                        <p>
                                             We offer travel insurance options to provide our clients with peace of mind and protection in case of unforeseen events during their travel.
                                        </p>
                                   </div>
                              </div>
                         </Card>
                         <Card bg='light'>
                              <div className="flex flex-col md:flex-row gap-5 text-dark  p-3 md:p-5">
                                   <Hotel sx={{ fontSize: 60 }} />
                                   <div className="">
                                        <h4 className='font-bold text-xl mb-3 uppercase'>Corporate travel services</h4>
                                        <p>
                                             We provide specialized travel solutions for businesses and organizations, including group travel, meetings and events, and incentive travel programs.
                                        </p>
                                   </div>
                              </div>
                         </Card>
                         <Card bg='light'>
                              <div className="flex flex-col md:flex-row gap-5 text-dark  p-3 md:p-5">
                                   <FreeBreakfast sx={{ fontSize: 60 }} />
                                   <div className="">
                                        <h4 className='font-bold text-xl mb-3 uppercase'>General travel advisory</h4>
                                        <p>
                                             We offer counselling and guidance to travelers regarding various aspects of travel, such as visa requirements, health and safety issues, cultural norms and practices, and transportation options.
                                        </p>
                                   </div>
                              </div>
                         </Card>
                    </Grid>
               </div>
          </Section>
     )
}
