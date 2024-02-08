import { SpeedInsights } from "@vercel/speed-insights/next";
import Hero from '../components/hero'
import Header from '../components/Navbar'
import About from '../components/about'
import Contact from '../components/contact'
import Service from '../components/services';
import Testimonials from '../components/testimonials';
import Footer from '../components/footer'
import Courasal  from '../components/CaurosalLogo';
import Timeline from "../components/Timeline";
import Accordion from "../components/FAQ";
import Content from "../components/content";
import Contant2 from "../components/contact2";
import Calan from "../components/popup";
import Contact3 from "../components/Contact3";

export default function Home() {
  return (
   <>
   <SpeedInsights/>
<Header/>
<Hero/>
<Courasal/>
<About/>
<Timeline/>
<Calan/>
<Content/>
<Service/>
<Accordion/>
<Testimonials/>
<Contact3/>
<Footer/>
   </>
  )
}


