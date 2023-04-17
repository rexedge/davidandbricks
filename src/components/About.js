import { ArrowCircleRight, ArrowRight } from '@mui/icons-material'
import Image from 'next/image'
import React from 'react'
import Section from './layout/Section'
import SectionHeader from './SectionHeader'

const ABOUT_US = [
     {
          idx: 0,
          image: '/images/iyen.png',
          title: 'IYEN NUMA – DIRECTOR (B.SC, MBA, ACA, ACIT)',
          description: "Iyen is one of the co-founders of David & Brics Travels Limited and is currently the Managing Director/CEO .Prior to assuming this office, she served as a Relationship Officer at Access Bank Plc under the Corporate & Investment Banking Division and managed major players in the Nigerian aviation/tourism industry before delving into Commercial Banking.Before joining Access Bank, she served with the Institutional Banking Division at GTBank Plc where she efficiently managed the trade and investment operations of FMCG manufacturing companies.She holds an MBA from the University of East London Business School and a Bachelors Degree in Mathematics/Statistics from the prestigious University of Port - harcourt in Rivers State.She is an Associate member of the Institute of Chartered Accountants of Nigeria and The Chartered Institute of Taxation of Nigeria. She is passionate about team building and enjoys watching football, mentoring, reading, and volunteering."
     },
     {
          idx: 1,
          image: '/images/numa.png',
          title: 'OGHENERUKEVBE DANIEL NUMA (B.Sc, ACA, ACIT) ',
          description: "In addition to his current role as Head of Strategy at David & Brics Travels Limited, Oghenerukevbe was one of the founding partners of the company. Presently, he works as a relationship manager at Gtbank Plc, where he is responsible for supervising the Advantium banking customers within his business segment. Prior to his engagement in the retail business unit, he had worked in the Transaction Services Division overseeing branch operations and administration. He holds a Bachelor of Science degree in Accounting from Igbinedion University Okada. He is an Associate Member of the Institute of Chartered Accountants of Nigeria (ICAN) and the  Chartered Institute of Taxation respectively. Oghenerukevbe has been a member of the Board of Directors of the company ever since it was founded, and he contributes in a variety of capacities to the company's efforts to achieve its planned business objectives."
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
                                        <div className='relative max-w-[300px] rounded-lg mb-5 mx-auto max-h-[300px] overflow-hidden hover:scale-[102%] transition duration-200'>
                                             <Image className="h-full w-full object-cover"
                                                  src={person.image}
                                                  alt={person.title}
                                                  height={400}
                                                  width={300}
                                             />
                                        </div>
                                        <div className="max-w-[300px] mx-auto">
                                             <h4 className='bg-primary text-center uppercase py-2 px-5'>{person.title}</h4>
                                             <h4 className='bg-light   text-sm py-5 px-5 text-justify'>{person.description}</h4>
                                        </div>
                                   </div>
                              ))
                         }
                    </div>
               </div>

          </Section>
     )
}
