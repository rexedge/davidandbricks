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

                    <Grid>
                         <Card bg='light'>
                              <div className="flex flex-col md:flex-row gap-5 text-dark p-2 md:p-5">
                                   <AirplanemodeActiveTwoTone sx={{ fontSize: 60 }} />
                                   <div className="">
                                        <h4 className='font-bold text-xl mb-3'>FLIGHT RESERVATIONS</h4>
                                        <p>
                                             We are here to assist in hassle-free domestic and international flight bookings
                                             for business and leisure trips.
                                        </p>
                                        <p>
                                             Using the global distribution system and world
                                             reservations system, we partner with various airline companies to ensure the
                                             best deals on local and international flight tickets.
                                        </p>
                                   </div>
                              </div>
                         </Card>
                         <Card bg='light'>
                              <div className="flex flex-col md:flex-row gap-5 text-dark  p-3 md:p-5">
                                   <AirplaneTicket sx={{ fontSize: 60 }} />
                                   <div className="">
                                        <h4 className='font-bold text-xl mb-3'>VISA ASSISTANCE SERVICES</h4>
                                        <p>
                                             Driven by our desire to make traveling a fruitful and enjoyable experience and to
                                             address the needs of the inbound business industry and growing business
                                             community, we created a visa assistance service to cater for visa and
                                             immigration processing services for tourist and student permits to the following
                                             countries: United Kingdom, United States of America, Ireland, Kenya, United
                                             Arab Emirates, South Africa, Canada and Schengen nations.
                                        </p>
                                   </div>
                              </div>
                         </Card>
                         <Card bg='light'>
                              <div className="flex flex-col md:flex-row gap-5 text-dark  p-3 md:p-5">
                                   <Hotel sx={{ fontSize: 60 }} />
                                   <div className="">
                                        <h4 className='font-bold text-xl mb-3'>HOTEL & RESORT RESERVATIONS</h4>
                                        <p>
                                             We are available to handle your accommodation needs and requirements. We
                                             maximize our partnership with reputable hotels around the globe to guarantee
                                             that you will get value-for-money and world-class accommodations for your trip.
                                        </p>
                                   </div>
                              </div>
                         </Card>
                         <Card bg='light'>
                              <div className="flex flex-col md:flex-row gap-5 text-dark  p-3 md:p-5">
                                   <FreeBreakfast sx={{ fontSize: 60 }} />
                                   <div className="">
                                        <h4 className='font-bold text-xl mb-3'>LEISURE ACTIVITIES</h4>
                                        <p>
                                             Whether by land, by air, or by sea, we have tour packages waiting for you.

                                             Experience a relaxing and unforgettable vacation at some of the best

                                             destinations and locations in the world.
                                        </p>
                                   </div>
                              </div>
                         </Card>
                         <Card bg='light'>
                              <div className="flex flex-col md:flex-row gap-5 text-dark  p-3 md:p-5">
                                   <CurrencyExchange sx={{ fontSize: 60 }} />
                                   <div className="">
                                        <h4 className='font-bold text-xl mb-3'>TRAVEL INSURANCE PREMIUMS</h4>
                                        <p>
                                             Have a worry-free trip by availing travel insurance for you and your loved ones.
                                             David & Brics has partnered with reputable insurance providers to make sure
                                             our clients are insured and protected from unforeseen circumstances.
                                        </p>
                                   </div>
                              </div>
                         </Card>
                         <Card bg='light'>
                              <div className="flex flex-col md:flex-row gap-5 text-dark  p-3 md:p-5">
                                   <Add sx={{ fontSize: 60 }} />
                                   <div className="">
                                        <h4 className='font-bold text-xl mb-3'>OTHER SEVICES</h4>
                                        <ul className='list-disc pl-4'>
                                             <li>Group tour bookings</li>
                                             <li>Airport transportation</li>
                                             <li>Covid19 test bookings</li>
                                             <li>Travel advisory services</li>
                                        </ul>
                                   </div>
                              </div>
                         </Card>
                    </Grid>
                    <Card bg='light mt-5'>
                         <div className="flex flex-col md:flex-row gap-5 text-dark  p-3 md:p-5">
                              <Extension sx={{ fontSize: 60 }} />
                              <div className="">
                                   <h4 className='font-bold text-xl mb-3'>OUR VALUED ADDED SERVICES</h4>
                                   <ul className='list-disc pl-4'>
                                        <li>Detailed knowledge of African, Arabian, Asian and Western cultures</li>
                                        <li>Extensive track record of delivering travel and service excellence to the
                                             most discerning global travelers</li>
                                        <li>Exceptional worldwide reputation based on client satisfaction, trust, and hospitality.</li>
                                        <li>Competitive prices combined with the highest quality services resulting invalue for money across all our services and products.</li>
                                        <li>Diversity and expertise in tourism quotations, reservations, operations and accounting.</li>
                                        <li>Experience in public relations and a renowned reputation in the tourism market.</li>
                                        <li>Operating with the latest state of the art information and communication technology.</li>
                                        <li>Problem solving and focus on solution-oriented methods for all customer requests and requirements</li>
                                   </ul>
                              </div>
                         </div>
                    </Card>
               </div>
          </Section>
     )
}
