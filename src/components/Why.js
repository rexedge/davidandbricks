import Image from 'next/image'
import React from 'react'
import Section from './layout/Section'
import SectionHeader from './SectionHeader'

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
                         <div className="w-full lg:w-1/2 mb-5">
                              <Image
                                   src={'/images/who.jpg'}
                                   alt="Choose Image"
                                   height={400}
                                   width={700}
                                   className="rounded-md w-full"
                              />
                         </div>
                         <div className="w-full lg:w-1/2 mb-5 text-dark text-lg md:px-10 text-justify">
                              <p className="pb-6">
                                   <span className="text-5xl font-bold">W</span>e are a leading travel agency
                                   committed to creating exceptional travel experiences for our clients.
                                   With years of experience and expertise in the travel industry, we provide
                                   personalized and customized travel solutions that cater to the unique needs
                                   and preferences of our clients.
                              </p>
                              <p className="pb-6">
                                   Our team of travel experts is dedicated to delivering high-quality services,
                                   building strong relationships with our clients, and ensuring that every
                                   travel experience is unforgettable.
                              </p>
                              <p className="pb-6">
                                   At David & Brics Travels, we are passionate about responsible and sustainable
                                   travel practices and strive to make a positive impact on the world through
                                   our services. We are your trusted and preferred travel partner, offering
                                   innovative and sustainable travel solutions that exceed expectations.
                              </p>
                         </div>
                    </div>
                    <div className="flex flex-wrap text-dark">
                         <div className="w-full lg:w-1/2 mb-5">
                              <div className="w-full text-2xl font-semibold text-justify mt-10 md:pr-10">
                                   <div className="text-base mt-4">
                                        <h3 className='text-xl'>MISSION STATEMENT</h3>
                                        <p className="font-light mb-3">
                                             Our mission at David & Brics Travels Limited is to provide exceptional travel
                                             experiences for our clients by offering personalized and customized travel
                                             solutions that meet their unique needs and preferences.
                                        </p>
                                        <p className="font-light mb-3">
                                             We strive to deliver high-quality services, build strong relationships with our clients, and create
                                             memorable and enjoyable travel experiences that exceed expectations
                                        </p>
                                   </div>
                              </div>
                         </div>
                         <div className="w-full lg:w-1/2 mb-5">
                              <div className="w-full text-2xl font-semibold text-justify mt-10 md:pr-10">
                                   <div className="text-base mt-4">
                                        <h3 className='text-xl mt-3'>VISION STATEMENT</h3>
                                        <p className="font-light mb-3">
                                             Our vision at David & Brics Travels Limited is to be recognized as a leading
                                             travel agency that offers innovative and sustainable travel solutions that
                                             benefit both our clients and the environment.
                                        </p>
                                        <p className="font-light mb-3">
                                             We aim to continuously improve
                                             our services, expand our reach, and become a trusted and preferred travel partner
                                             for individuals and organizations seeking unforgettable travel experiences.
                                        </p>
                                        <p className="font-light">
                                             We aspire to make a positive impact in the world through responsible and ethical
                                             travel practices and inspire others to do the same.
                                        </p>
                                   </div>
                              </div>
                         </div>
                    </div>
               </div>
          </Section>
     )
}
