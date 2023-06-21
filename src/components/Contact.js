import { LocationOn, Mail, Phone, Send } from '@mui/icons-material'
import React, { useRef, useState } from 'react'
import Section from './layout/Section'
import SectionHeader from './SectionHeader'
import emailjs from '@emailjs/browser'

export default function Contact() {
     const form = useRef();
     const [isSending, setIsSending] = useState(false)
     const [showModal, setShowModal] = useState(false)

     const sendEmail = (e) => {
          e.preventDefault();
          setIsSending(true);

          emailjs.sendForm('davidsandbricsservice001', 'davidsandbricstemplate01', form.current, 'aHt_jTeO824HGeBUB')
               .then((result) => {
                    console.log(result.text);
               }, (error) => {
                    console.log(error.text);
               });
          emailjs.sendForm('davidsandbricsservice001', 'davidsandbricstemplate02', form.current, 'aHt_jTeO824HGeBUB')
               .then((result) => {
                    console.log(result.text);
                    setShowModal(true)
               }, (error) => {
                    console.log(error.text);
               });
          setIsSending(false)
     };

     return (
          <Section>

               <div className="container bg-dark text-white pt-10 rounded-lg" id="contact" >

                    <SectionHeader
                         bgtitle='Contact'
                         title='Contact Us'
                         description="Send a message if you have any questions"
                    />

                    <div className="max-w-7xl mx-auto">
                         <div className='w-full grid grid-cols-3 gap-10 p-5'>
                              <div className='md:col-span-1 col-span-3'>
                                   <div className='border-b-primary text-2xl font-bold'>
                                        Contact Infomation
                                   </div>
                                   <div className='flex mt-5 gap-x-3'>
                                        <LocationOn sx={{ fontSize: 40 }} />
                                        <div className=''>
                                             <div className='font-bold'>
                                                  Head Office Address
                                             </div>
                                             <div className=''>
                                                  1, Funmilayo Street
                                                  <br />Off Country-Home Road,
                                                  <br />Benin City, Edo, Nigeria.
                                             </div>
                                        </div>
                                   </div>
                                   <div className='flex mt-5 gap-x-3'>
                                        <Phone sx={{ fontSize: 40 }} />
                                        <div className=''>
                                             <div className='font-bold'>Phone</div>
                                             <div className=''>
                                                  +234 808 077 6586
                                                  <br />+234 706 611 9546
                                             </div>
                                        </div>
                                   </div>
                                   <div className='flex mt-5 gap-x-3'>
                                        <Mail sx={{ fontSize: 40 }} />
                                        <div className=''>
                                             <div className='font-bold'>
                                                  Email Address
                                             </div>
                                             <div className=''>
                                                  admin@davidandbricstravels.com
                                             </div>
                                        </div>
                                   </div>
                              </div>
                              <div className='md:col-span-2 col-span-3'>
                                   <div className='border-b-light text-2xl font-bold'>
                                        Contact Us
                                   </div>
                                   <form ref={form} onSubmit={sendEmail}>
                                        <div className=''>
                                             <div className='mt-5 grid grid-cols-2 gap-5'>
                                                  <div className='col-span-2 md:col-span-1'>
                                                       <label
                                                            htmlFor='user_name'
                                                            className='text-lg uppercase font-semibold'
                                                       >
                                                            Your Name
                                                       </label>
                                                       <div className='mt-2'>
                                                            <input
                                                                 type='text'
                                                                 name='user_name'
                                                                 placeholder='Name'
                                                                 className='text-black w-full bg-light border-spacing-1 rounded-lg p-2'
                                                            // value={formData.name}
                                                            // onChange={handleChange}
                                                            />
                                                       </div>
                                                  </div>

                                                  <div className='col-span-2 md:col-span-1'>
                                                       <label
                                                            htmlFor='user_email'
                                                            className='text-lg uppercase font-semibold'
                                                       >
                                                            Email Address
                                                       </label>
                                                       <div className='mt-2'>
                                                            <input
                                                                 id='email'
                                                                 name='user_email'
                                                                 type='email'
                                                                 placeholder='Enter Email'
                                                                 autoComplete='email'
                                                                 className='text-black w-full bg-light border-spacing-1 rounded-lg p-2'
                                                            // value={formData.email}
                                                            // onChange={handleChange}
                                                            />
                                                       </div>
                                                  </div>
                                             </div>
                                             <div className='mt-5'>
                                                  <label
                                                       htmlFor='subject'
                                                       className='text-lg uppercase font-semibold'
                                                  >
                                                       Subject
                                                  </label>
                                                  <div className='mt-2'>
                                                       <input
                                                            id='subject'
                                                            name='subject'
                                                            type='subject'
                                                            placeholder='Enter subject'
                                                            autoComplete='subject'
                                                            className='text-black w-full bg-light border-spacing-1 rounded-lg p-2'
                                                       // value={formData.subject}
                                                       // onChange={handleChange}
                                                       />
                                                  </div>
                                             </div>
                                             <div className='mt-5'>
                                                  <label
                                                       htmlFor='message'
                                                       className='text-lg uppercase font-semibold'
                                                  >
                                                       Message
                                                  </label>
                                                  <div className='mt-2'>
                                                       <textarea
                                                            id='message'
                                                            name='message'
                                                            rows={3}
                                                            className='text-black w-full bg-light border-spacing-1 rounded-lg p-2'
                                                            placeholder='Write a few sentences.'
                                                       // value={formData.message}
                                                       // onChange={handleChange}
                                                       />
                                                  </div>
                                             </div>
                                        </div>

                                        <div className='mt-6 flex items-center justify-start gap-x-6'>
                                             <button
                                                  type='submit'
                                                  disabled={isSending}
                                                  className='rounded-md bg-primary px-10 py-2 uppercase font-semibold text-white shadow-sm hover:bg-secondary focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-light'
                                             >
                                                  <Send /> Send
                                             </button>
                                        </div>
                                   </form>
                              </div>
                         </div>
                    </div>
               </div>
               {
                    showModal && (
                         <div className='fixed top-0 left-0 overflow-hidden h-screen w-screen flex justify-center items-center backdrop-blur-md bg-opacity-60 z-[1000]'>
                              <div className='h-[100px] w-[300px] bg-white flex flex-col justify-center items-center rounded-3xl'>
                                   <div className="mb-3">
                                        Mail sent successfully!!!
                                   </div>
                                   <button className='text-sm uppercase px-2 py-1 bg-secondary/80 rounded' onClick={() => setShowModal(false)}>Close</button>
                              </div>
                         </div>
                    )
               }

          </Section>
     )
}
