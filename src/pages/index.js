import Head from 'next/head'
import { Inter } from 'next/font/google'
import Navbar from '@/components/Navbar';
import Carousel from '@/components/Carousel';
import Why from '@/components/Why';
import Destinations from '@/components/Destinations';
import Services from '@/components/Services';
import Gallery from '@/components/Gallery';
import Footer from '@/components/Footer';
import Contact from '@/components/Contact';
import About from '@/components/About';
import styles from '../styles/quote.module.css'

const inter = Inter({ subsets: ['latin'] })
const navLinks = [
  { title: "Home", url: "#top" },
  { title: "Service", url: "#service" },
  { title: "About", url: "#about" },
  { title: "Places", url: "#places" },
  { title: "Gallery", url: "#gallery" },
  { title: "Contact", url: "#contact" },
];

// const navButtons = [
//   {
//     title: "Sign In",
//     url: "#signin",
//   },
//   {
//     title: "Sign Up",
//     url: "#signup",
//   },
// ];

export default function Home() {
  return (
    <>
      <Head>
        <title>David And brics Travels</title>
        <meta
          name="description"
          content="The world is a big place and to ensure you always have the trusted David & Brics Travels hospitality wherever you go, we have spread a great network of professional ou its to help you enjoy the best destinations across the world."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/images/logo.svg" />
      </Head>
      <main className={'font-tahoma'}>
        <Navbar
          title={'David and Brick Travels'}
          navLinks={navLinks}
          // callToAction={navButtons}
          variant="light"
        />
        <Carousel />


        <div className="w-full md:w-2/3 mx-auto text-2xl italic text-center px-5 mt-12">
          <div className={styles.quoteContainer}>
            <p>&quot;The world is a big place and to ensure you always have the trusted David & Brics Travels hospitality wherever you go, we have spread a great network of professional outfits to help you enjoy the best destinations across the world.&quot;</p>
          </div>
        </div>
        <Why />
        <Destinations />
        <Services />
        <About />
        <Gallery />
        <Contact />
        <Footer />
      </main>
    </>
  )
}
