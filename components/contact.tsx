
import React from "react";
import Calendly from "./calendly";
import Form from './form'

const Contact = () => {


  return (
   
<div id="contact">
  <h1 className=" bg-white text-black text-center text-[32px] font-bold pb-16 mt-16" >Book A Free 30 Min SEO Consultation Call!​</h1>
  <div className="bg-white columns-2">
    <div className="mx-24 mt-0 shadow" ><Calendly/></div>
    <div><Form/></div>




  </div>
  </div>
  );
};

export default Contact;