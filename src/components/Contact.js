import { LocationOn, Mail, Phone, Send } from '@mui/icons-material'
import React, { useState } from 'react'
import Section from './layout/Section'
import SectionHeader from './SectionHeader'

export default function Contact() {

     const [formData, setFormData] = useState({
          name: '',
          email: '',
          subject: '',
          message: '',
     });

     const handleSubmit = (event) => {
          event.preventDefault(); // prevent the form from submitting
          alert('Email sent successfully!');

          // send email using SendGrid API
          // fetch('https://api.sendgrid.com/v3/mail/send', {
          //      method: 'POST',
          //      headers: {
          //           'Content-Type': 'application/json',
          //           Authorization: 'Bearer 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', // replace with your API key
          //      },
          //      body: JSON.stringify({
          //           personalizations: [
          //                {
          //                     to: [
          //                          {
          //                               email: 'ap.oyeniran@gmail.com', // replace with recipient email
          //                          },
          //                     ],
          //                     subject: formData.subject,
          //                },
          //           ],
          //           from: {
          //                email: formData.email,
          //                name: formData.name,
          //           },
          //           content: [
          //                {
          //                     type: 'text/plain',
          //                     value: formData.message,
          //                },
          //           ],
          //      }),
          // })
          //      .then((response) => response.json())
          //      .then((data) => {
          //           console.log(data);
          //           alert('Email sent successfully!');
          //      })
          //      .catch((error) => {
          //           console.error(error);
          //           alert('An error occurred while sending the email.');
          //      });
     };


     const handleChange = (event) => {
          setFormData({
               ...formData,
               [event.target.name]: event.target.value,
          });
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
                                   <form onSubmit={handleSubmit}>
                                        <div className=''>
                                             <div className='mt-5 grid grid-cols-2 gap-5'>
                                                  <div className='col-span-2 md:col-span-1'>
                                                       <label
                                                            htmlFor='first-name'
                                                            className='text-lg uppercase font-semibold'
                                                       >
                                                            Your Name
                                                       </label>
                                                       <div className='mt-2'>
                                                            <input
                                                                 type='text'
                                                                 name='name'
                                                                 placeholder='Name'
                                                                 className='text-black w-full bg-light border-spacing-1 rounded-lg p-2'
                                                                 value={formData.name}
                                                                 onChange={handleChange}
                                                            />
                                                       </div>
                                                  </div>

                                                  <div className='col-span-2 md:col-span-1'>
                                                       <label
                                                            htmlFor='email'
                                                            className='text-lg uppercase font-semibold'
                                                       >
                                                            Email Address
                                                       </label>
                                                       <div className='mt-2'>
                                                            <input
                                                                 id='email'
                                                                 name='email'
                                                                 type='email'
                                                                 placeholder='Enter Email'
                                                                 autoComplete='email'
                                                                 className='text-black w-full bg-light border-spacing-1 rounded-lg p-2'
                                                                 value={formData.email}
                                                                 onChange={handleChange}
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
                                                            value={formData.subject}
                                                            onChange={handleChange}
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
                                                            value={formData.message}
                                                            onChange={handleChange}
                                                       />
                                                  </div>
                                             </div>
                                        </div>

                                        <div className='mt-6 flex items-center justify-start gap-x-6'>
                                             <button
                                                  type='submit'
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

          </Section>
     )
}
