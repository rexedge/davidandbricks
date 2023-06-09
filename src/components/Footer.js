import { Email, Facebook, Instagram, LinkedIn, LocationOn, Phone, Pinterest, Twitter, YouTube } from '@mui/icons-material'
import classNames from 'classnames'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import Classes from '../styles/footer.module.css'

export default function Footer() {
     return (
          <div className={classNames(Classes.footer, 'bg-dark')}>
               <div className="container mx-auto text-light">
                    <div className="pt-6 px-5">
                         <div className="grid grid-cols-12">
                              <div className="col-span-12 lg:col-span-4 mb-8">
                                   <div className="flex flex-col justify-center">
                                        <div className="flex">
                                             <Image src="/images/logo.png" className="foot-logo" alt="footer logo" height={70} width={70} />
                                             <span className='font-bold text-2xl ml-4'>David & Brics</span>
                                        </div>

                                        <div className="mt-5">
                                             <p className='mb-3 flex flex-row gap-10'>
                                                  <Phone />
                                                  <span>
                                                       <span className="">+234 808 077 6586</span>
                                                       <br />
                                                       <span className="">+234 706 611 9546</span>
                                                  </span>
                                             </p>

                                             <p className='mb-3 flex flex-row gap-10'>
                                                  <Email />
                                                  <span>admin@davidandbricstravels.com</span>
                                             </p>

                                             <p className='mb-3 flex flex-row gap-10'>
                                                  <LocationOn />
                                                  <span>
                                                       1, Funmilayo Street
                                                       <br />Off Country-Home Road,
                                                       <br />Benin City, Edo, Nigeria.
                                                  </span>
                                             </p>
                                        </div>
                                   </div>
                              </div>

                              <div className="col-span-6 lg:col-span-2 mb-8">
                                   <div className="">
                                        <h3 className="text-xl font-bold ">About Us</h3>
                                        <ul className='mt-5'>
                                             <li className='mb-3'><a href="#">Our Story</a></li>
                                             <li className='mb-3'><a href="#">Travel Blog &amp; Tips</a></li>
                                             <li className='mb-3'><a href="#">Gallerying With Us</a></li>
                                             <li className='mb-3'><a href="#">Tour Guid</a></li>
                                             <li className='mb-3'><a href="#">Be Our Partner</a></li>
                                        </ul>
                                   </div>
                              </div>

                              <div className="col-span-6 lg:col-span-2 ">
                                   <div className="">
                                        <h3 className="text-xl font-bold ">Support</h3>
                                        <ul className='mt-5'>
                                             <li className='mb-3'><a href="#">Customer Support</a></li>
                                             <li className='mb-3'><a href="#">Privacy &amp; Policy</a></li>
                                             <li className='mb-3'><a href="#">Terms &amp; Condition</a></li>
                                             <li className='mb-3'><a href="#">Forum</a></li>
                                             <li className='mb-3'><a href="#">Tour Guid</a></li>
                                        </ul>
                                   </div>
                              </div>

                              <div className="col-span-12 lg:col-span-4 mb-8">
                                   <div className="">
                                        <h3 className="text-xl font-bold ">Subscribe Newsletter</h3>
                                        <p className='mt-5 '>
                                             By subscribing to our mailing list you will always be updated
                                        </p>
                                        <form className="w-full flex flex-wrap my-5">
                                             <input type="text" className="rounded-none flex-1 px-2 placeholder:text-primary py-2 font-medium" name="email" placeholder="Enter Your Email" />

                                             <button className="flex-2 text-light bg-primary font-semibold px-3" type="submit">Subscribe</button>
                                        </form>
                                        <div className="">
                                             <span className="">
                                                  <Link href="#"><Twitter />{` @davidbricstrav1`}</Link>
                                             </span>
                                             <span className="ml-5">
                                                  <Link href="#"><Instagram />{` @davidbricstravels`}</Link>
                                             </span>
                                        </div>
                                   </div>
                              </div>
                         </div>
                    </div>

                    <div className="border-t mt-4 pt-4 px-4 text-center">
                         <p className="mb-5">
                              Copyright @ 2023 <Link href="#" className='font-bold'>David & Brics</Link> all right reserved.
                         </p>
                         <ul className="flex flex-row justify-center gap-3">
                              <li className=''><Link href="#"><Facebook /></Link></li>
                              <li className=''><Link href="#"><Twitter /></Link></li>
                              <li className=''><Link href="#"><Pinterest /></Link></li>
                              <li className=''><Link href="#"><LinkedIn /></Link></li>
                              <li className=''><Link href="#"><YouTube /></Link></li>
                         </ul>
                    </div>
               </div>
          </div >
     )
}
