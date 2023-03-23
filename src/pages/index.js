import Head from 'next/head'
import { Inter } from 'next/font/google'
import Navbar from '@/components/Navbar';
import Carousel from '@/components/Carousel';
import Why from '@/components/Why';
import Destinations from '@/components/Destinations';
import Services from '@/components/Services';
import Gallery from '@/components/Gallery';
import Footer from '@/components/Footer';

const inter = Inter({ subsets: ['latin'] })
const navLinks = [
  { title: "Home", url: "/" },
  { title: "Service", url: "#service" },
  { title: "Top Deals", url: "#deals" },
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
        <title>David And Bricks Travels</title>
        <meta
          name="description"
          content="The world is a big place and to ensure you always have the trusted David & Brics Travels hospitality wherever you go, we have spread a great network of professional ou its to help you enjoy the best destinations across the world."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={''}>
        <Navbar
          title={'David and Bricks Travels'}
          logo="/favicon.ico"
          navLinks={navLinks}
          // callToAction={navButtons}
          variant="light"
        />
        <Carousel />
        <Why />
        <Destinations />
        <Services />
        <Gallery />
        <Footer />
      </main>
    </>
  )
}
