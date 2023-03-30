import { AirplanemodeActiveTwoTone, AirplaneTicket, AirplaneTicketTwoTone, Fastfood, Hotel, KingBed, LocalTaxi, Medication, SupportAgent, Wifi } from '@mui/icons-material'
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
                              <div className="flex flex-row gap-3 text-dark">
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
                              <div className="flex flex-row gap-3 text-dark">
                                   <AirplaneTicket sx={{ fontSize: 60 }} />
                                   <div className="">
                                        <h4 className='font-bold text-xl mb-3'>VISA ASSISTANCE SERVICES</h4>
                                        <p>
                                             Driven by our desire to make traveling a fruitful and enjoyable experience and to
                                             address the needs of the inbound business industry and growing business
                                             community, we created a visa assistance service to cater for visa and
                                             immigration processing services for tourist and student permits to the following
                                             countries: United Kingdom, United States of America, Ireland, Kenya, United
                                             Arab Emirates, South Africa, Canada and Schengen na
                                             ons.
                                        </p>
                                   </div>
                              </div>
                         </Card>
                         <Card bg='light'>
                              <div className="flex flex-row gap-3 text-dark">
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
                         <Card>
                              <div className="flex flex-row gap-3">
                                   <Wifi sx={{ fontSize: 60 }} />
                                   <div className="">
                                        <h4 className='font-bold text-xl mb-3'>Free WiFi</h4>
                                        <p>
                                             Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fuga veniam similique deserunt veritatis placeat
                                        </p>
                                   </div>
                              </div>
                         </Card>
                         <Card>
                              <div className="flex flex-row gap-3">
                                   <Medication sx={{ fontSize: 60 }} />
                                   <div className="">
                                        <h4 className='font-bold text-xl mb-3'>Free Medication</h4>
                                        <p>
                                             Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fuga veniam similique deserunt veritatis placeat
                                        </p>
                                   </div>
                              </div>
                         </Card>
                         <Card>
                              <div className="flex flex-row gap-3">
                                   <SupportAgent sx={{ fontSize: 60 }} />
                                   <div className="">
                                        <h4 className='font-bold text-xl mb-3'>Tour Guide</h4>
                                        <p>
                                             Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fuga veniam similique deserunt veritatis placeat
                                        </p>
                                   </div>
                              </div>
                         </Card>
                    </Grid>

                    <div className="row text-left">

                    </div>
               </div>
          </Section>
     )
}
