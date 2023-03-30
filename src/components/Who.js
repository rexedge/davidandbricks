import { LocalActivity, LocationOn, Route, SettingsAccessibility, SlowMotionVideo } from '@mui/icons-material'
import React from 'react'
import Section from './layout/Section'
import SectionHeader from './SectionHeader'
import VideoPlayer from './ui/VideoPlayer'

export default function Whos() {
     return (
          <Section>
               <div className='container mx-auto'>
                    <SectionHeader
                         title='Who are We?'
                         description='Why choose us?'
                         bgtitle='WHO?'
                    />

                    <div className="flex flex-wrap">
                         <div className="w-full md:w-1/3">
                              The world is a big place and to ensure you always have the
                              trusted David & Brics Travels hospitality wherever you go, we
                              have spread a great network of professional outfits to help you enjoy the best destinations across the world.
                         </div>
                         <div className="w-full lg:w-1/2 grid grid-cols-1 md:grid-cols-2 gap-4">
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
                         </div>
                         <div className="w-full lg:w-1/2">
                              <VideoPlayer
                                   videoUrl={'https://www.youtube.com/watch?v=OVMuvfxbT1o'}
                                   imageUrl={'/images/img3.webp'}
                              />
                         </div>
                    </div>
               </div>
          </Section>
     )
}
