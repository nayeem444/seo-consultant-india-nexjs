import { SpeedInsights } from "@vercel/speed-insights/next";
import Hero from '../components/hero'
import Header from '../components/Navbar'
import About from '../components/about'
import Contact from '../components/contact'
import Service from '../components/services';
import Testimonials from '../components/testimonials';
import Footer from '../components/footer'

export default function Home() {
  return (
   <>
   <SpeedInsights/>
<Header/>
<Hero/>
<About/>
<Contact/>
<Service/>
<Testimonials/>
<Footer/>
   </>
  )
}


