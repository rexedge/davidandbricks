import { ArrowCircleRight, ArrowRight } from '@mui/icons-material'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import Section from './layout/Section'
import SectionHeader from './SectionHeader'

const ABOUT_US = [
     {
          idx: 0,
          image: '/images/iyen.png',
          title: 'Iyen Numa – Director (B.sc, MBA, ACA, ACIT)',
          description: "Iyen is one of the co-founders of David & Brics Travels Limited and is currently the Managing Director/CEO .Prior to assuming this office, she served as a Relationship Officer at Access Bank Plc under the Corporate & Investment Banking Division and managed major players in the Nigerian aviation/tourism industry before delving into Commercial Banking.Before joining Access Bank, she served with the Institutional Banking Division at GTBank Plc where she efficiently managed the trade and investment operations of FMCG manufacturing companies.She holds an MBA from the University of East London Business School and a Bachelors Degree in Mathematics/Statistics from the prestigious University of Port - harcourt in Rivers State.She is an Associate member of the Institute of Chartered Accountants of Nigeria and The Chartered Institute of Taxation of Nigeria. She is passionate about team building and enjoys watching football, mentoring, reading, and volunteering."
     },
     {
          idx: 1,
          image: '/images/numa.png',
          title: 'Oghenerukevbe Numa – Non Executive Director (B.Sc, MBA, ACA, ACIT) ',
          description: "Oghenerukevbe is the founding partner of David & Brics Travels Limited and currently serves as the Head of Strategy. Prior to kickstarting the business, he worked as a Relationship Manager at GTBank Plc overseeing the Advantium customers of his business segment.Before serving in the Retail Banking business, he served under the Transaction Services Division of the bank where he pioneered various projects and products.He holds a B.Sc in Accounting from the Igbinedion University Okada and an MBA from Benson Idahosa University both in Benin City, Edo State.He is an associate of the Instititute of Taxation of Nigeria.Oghenerukevbe has been on the board since inception of the firm and serves in various capacities towards achieving the planned business objectives."
     },
     {
          idx: 2,
          image: '/images/essiet.png',
          title: 'Barr. Edirin Essiet – Company Secretary LLB (Hons)',
          description: "She is the Head, Legal and Company Secretary of David & Brics Group of Companies.Prior to joining David & Brics Group, she was a senior partner at Essiet & Elyon Associates where she offered advisory services on commercial transactions and performed company secretarial functions for clients.Prior to that, she worked with TSUR Oil & Gas Limited where she drafted processes and represented the company on legal and civil matters.Edirin has an LLB(Hons) Commercial Law degree from the University of Benin and was admitted to the Nigerian Bar as Barrister and Solicitor of the Supreme Court of Nigeria."
     },
]

export default function About() {
     return (
          <Section>

               <div className="container" id="about" >

                    <SectionHeader
                         bgtitle='Gallery'
                         title='Tour Gallery'
                         description="Best Tourist' s Shared Photos"
                    />

                    <div className='w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4' >
                         {
                              ABOUT_US.map((person, idx) => (
                                   <div key={idx} className='col-span-1' p='0'>
                                        <div className='relative w-full overflow-hidden hover:scale-[102%] transition duration-200'>
                                             <Image className="h-full w-full object-cover"
                                                  src={person.image}
                                                  alt={person.title}
                                                  height={400}
                                                  width={300}
                                             />
                                             <h4 className='bg-primary text-light text-center uppercase py-2 px-5'>{person.title}</h4>
                                             <h4 className='bg-light text-dark text-sm uppercase py-2 px-5 text-justify'>{person.description}</h4>
                                        </div>
                                   </div>
                              ))
                         }
                    </div>
               </div>

          </Section>
     )
}