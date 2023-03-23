import { Fastfood, KingBed, LocalTaxi, Medication, SupportAgent, Wifi } from '@mui/icons-material'
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
                         <Card>
                              <div className="flex flex-row gap-3">
                                   <KingBed sx={{ fontSize: 60 }} />
                                   <div className="">
                                        <h4 className='font-bold text-xl mb-3'>Delux Room</h4>
                                        <p>
                                             Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fuga veniam similique deserunt veritatis placeat
                                        </p>
                                   </div>
                              </div>
                         </Card>
                         <Card>
                              <div className="flex flex-row gap-3">
                                   <Fastfood sx={{ fontSize: 60 }} />
                                   <div className="">
                                        <h4 className='font-bold text-xl mb-3'>Delicoius Food</h4>
                                        <p>
                                             Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fuga veniam similique deserunt veritatis placeat
                                        </p>
                                   </div>
                              </div>
                         </Card>
                         <Card>
                              <div className="flex flex-row gap-3">
                                   <LocalTaxi sx={{ fontSize: 60 }} />
                                   <div className="">
                                        <h4 className='font-bold text-xl mb-3'>Airport Taxi</h4>
                                        <p>
                                             Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fuga veniam similique deserunt veritatis placeat
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
