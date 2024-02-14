import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import { css } from '@emotion/react';
import { CircleLoader } from 'react-spinners';

// const override = css`
//   display: block;
//   margin: 0 auto;
//   border-color: red;
// `;

const Form = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [submissionStatus, setSubmissionStatus] = useState(null);
  const [loading, setLoading] = useState(false);

  const [nameValid, setNameValid] = useState(true);
  const [emailValid, setEmailValid] = useState(true);
  const [messageValid, setMessageValid] = useState(true);

  const validateInputs = () => {
    setNameValid(!!name);
    setEmailValid(!!email);
   
    setMessageValid(!!message);

    return name && email && message;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateInputs()) {
      return;
    }

    setLoading(true);

    const templateParams = {
      name,
      email,
      message,
    };

    try {
      await emailjs.send(
        'service_4vvzs8s',
        'template_sj37i4q',
        templateParams,
        '2KVJi6pnykS-hRjpk'
      );

      console.log('Email sent successfully');
      setSubmissionStatus('success');
    } catch (error) {
      console.error('Error sending email:', error);
      setSubmissionStatus('error');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div  className='-mt-4' >
      <div>
        <form  method="POST"  >

          
            <div className="mb-5">
            <label
              htmlFor="name"
              className="mb-3 block text-base font-medium text-[#07074D]"
            >
              Full Name
            </label>
            <input
              type="text"
              name="name"
              id="name"
              placeholder="Full Name"
              className={`w-full rounded-md border ${
                nameValid ? 'border-[#e0e0e0]' : 'border-red-500'
              } bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md`}
              onChange={(e) => {
                setName(e.target.value);
                setNameValid(true);
              }}
            />
            {!nameValid && (
              <div className="text-red-500 mt-2">Name is required</div>
            )}
          </div>

          <div className="mb-5">
            <label
              htmlFor="email"
              className="mb-3 block text-base font-medium text-[#07074D]"
            >
              Email Address
            </label>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="example@domain.com"
              className={`w-full rounded-md border ${
                emailValid ? 'border-[#e0e0e0]' : 'border-red-500'
              } bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md`}
              onChange={(e) => {
                setEmail(e.target.value);
                setEmailValid(true);
              }}
            />
            {!emailValid && (
              <div className="text-red-500 mt-2">Email is required</div>
            )}
          </div>

       

          <div className="mb-5">
            <label
              htmlFor="message"
              className="mb-3 block text-base font-medium text-[#07074D]"
            >
              Message
            </label>
            <textarea
              rows={4}
              name="message"
              id="message"
              placeholder="Type your message"
              className={`w-full resize-none rounded-md border ${
                messageValid ? 'border-[#e0e0e0]' : 'border-red-500'
              } bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md`}
              onChange={(e) => {
                setMessage(e.target.value);
                setMessageValid(true);
              }}
            ></textarea>
            {!messageValid && (
              <div className="text-red-500 mt-2">Message is required</div>
            )}
          </div>

         <div className="relative">
            <button
              className="hover:shadow-form rounded-md bg-[#6A64F1] py-3 px-8 text-base font-semibold text-white outline-none"
              onClick={(e) => handleSubmit(e)}
              disabled={loading}
            >
              {loading ?  <CircleLoader
              color={'#ffffff'}
              loading={loading}
              // css={override}
              size={20}
             
              
            /> : 'Submit'}
            </button>
           
            {submissionStatus === 'success' && (
              <div className="text-green-600 font-semibold mt-5">
                Thank you for your submission!
              </div>
            )}
            {submissionStatus === 'error' && (
              <div className="text-red-600 font-semibold mt-5">
                Oops! Something went wrong. Please try again later.
              </div>
            )}
          </div>
        </form>
      </div>
    </div>
  );
};

export default Form;
