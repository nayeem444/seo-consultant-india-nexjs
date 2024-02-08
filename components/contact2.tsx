import React from 'react'
import Calendly from '../components/calendly'
import Form from '../components/form';

const contact2 = () => {
  return (
    <section className="bg-white   " id="contact">
    <div className="mx-auto shadow w-2/4 min-h-96 mb-48 flex justify-center flex-col py-12 px-12  ">
        <div className="mb-4 ">
            <div className="mb-6  max-w-3xl text-center sm:text-center md:mx-auto md:mb-12">
                <h2
                    className="font-heading mb-4 font-bold tracking-tight text-dark text-3xl sm:text-5xl pb-12">
                   Book A Free 30 Min SEO Consultation Call!​

                </h2>
               
            </div>
        </div>
        <div className="flex items-stretch justify-center">
            <div className="grid md:grid-cols-2">
                <Calendly/>
               
                <div className="card h-fit max-w-6xl p-5 md:p-12" id="form">
                  <Form/>
                </div>
            </div>
        </div>
    </div>
</section>
  )
}

export default contact2