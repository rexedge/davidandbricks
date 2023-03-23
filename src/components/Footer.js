import React from 'react'
import Classes from '../styles/footer.module.css'

export default function Footer() {
     return (
          <div class={Classes.footer}>
               <div class="container">
                    <div class="footer-top">
                         <div class="row">
                              <div class="col-xl-3 col-lg-4 col-12">
                                   <div class="footer-widget">
                                        <img src="/favicon.ico" class="foot-logo" alt="footer logo" width="150" />

                                        <div class="cont_info">
                                             <p>
                                                  <i class="material-icons">phone</i>
                                                  <span>+956 542 6584</span>
                                             </p>

                                             <p>
                                                  <i class="material-icons">email</i>
                                                  <span>example@example.com</span>
                                             </p>

                                             <p>
                                                  <i class="material-icons">location_on</i>
                                                  <span>203 Fake St. Mountain View, San Francisco, California, USA</span>
                                             </p>
                                        </div>
                                   </div>
                              </div>

                              <div class="col-xl-3 col-lg-4 col-12">
                                   <div class="footer-widget">
                                        <h3 class="fot-title">About Us</h3>
                                        <ul>
                                             <li><a href="#">Our Story</a></li>
                                             <li><a href="#">Travel Blog &amp; Tips</a></li>
                                             <li><a href="#">gallerying With Us</a></li>
                                             <li><a href="#">Tour Guid</a></li>
                                             <li><a href="#">Be Our Partner</a></li>
                                        </ul>
                                   </div>
                              </div>

                              <div class="col-xl-3 col-lg-4 col-12">
                                   <div class="footer-widget">
                                        <h3 class="fot-title">Support</h3>
                                        <ul>
                                             <li><a href="#">Customer Support</a></li>
                                             <li><a href="#">Privacy &amp; Policy</a></li>
                                             <li><a href="#">Terms &amp; Condition</a></li>
                                             <li><a href="#">Forum</a></li>
                                             <li><a href="#">Tour Guid</a></li>
                                        </ul>
                                   </div>
                              </div>

                              <div class="col-xl-3 col-lg-4 col-12">
                                   <div class="footer-widget">
                                        <h3 class="fot-title">Subscribe Newsletter</h3>
                                        <p>
                                             By subscribing to our mailing list you will always be updated
                                        </p>
                                        <form class="subscribe-form mt-3">
                                             <div class="form-group">
                                                  <input type="text" class="form-control form--control" name="email" placeholder="Enter Your Email" />
                                             </div>
                                             <button class="btn-contact-bg" type="submit">Subscribe</button>
                                        </form>
                                   </div>
                              </div>
                         </div>
                    </div>

                    <div class="footer-bottom text-center">
                         <p class="copyright_text">
                              Copyright @ 2021 <a href="#">Nour</a> all right reserved.
                         </p>
                         <ul class="foot_social_link">
                              <li><a href="#"><i class="fab fa-facebook"></i></a></li>
                              <li><a href="#"><i class="fab fa-twitter"></i></a></li>
                              <li><a href="#"><i class="fab fa-pinterest"></i></a></li>
                              <li><a href="#"><i class="fab fa-linkedin"></i></a></li>
                              <li><a href="#"><i class="fab fa-youtube"></i></a></li>
                         </ul>
                    </div>
               </div>
          </div>
     )
}
