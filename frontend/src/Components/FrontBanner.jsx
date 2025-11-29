import React, { useState } from 'react'
import banner from "../../src/bookim.webp"
const FrontBanner = () => {
  const [message, setMessage] = useState("");

  const handleSendEmail = () => {
    const email = "souviksaha.200318@gmail.com";
    const subject = "Message from BookDekho";
    const body = encodeURIComponent(message);
    window.location.href = `mailto:${email}?subject=${subject}&body=${body}`;
  };
  return (
    <>
      <div className='max-w-screen-2xl container mx-auto md:px-20 px-4 flex flex-col md:flex-row my-10'>
        <div className="w-full md:w-1/2  mt-12 md:mt-32 order-2 md:order-1">
          <div className='space-y-12'>
            <h1 className=' text-4xl font-bold'>
              Master Every Tech Subject, One Comprehensive <span className=' font-bold text-red-500'>Note at a Time! 🚀</span>
            </h1>
            <p className='font-bold'>Welcome to <i>BookDekho</i>, the one-stop destination for every tech enthusiast, student, and professional seeking well-structured, comprehensive notes on a wide range of technology subjects. Whether you're diving into programming, networking, AI, cybersecurity, or any other tech domain, we provide clear, concise, and in-depth study materials to help you grasp complex concepts with ease.

              Stay ahead in the ever-evolving world of technology—master every subject, one comprehensive note at a time! 🚀</p>
            <label className="input input-bordered flex items-center gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70"><path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" /><path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" /></svg>
              {/* <input type="text" className="grow" placeholder="Email" /> */}

              <input
                type="text"
                className="grow"
                placeholder="Enter your message so that we can provide you high quality notes"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              />
            </label>

          </div>
          <button onClick={handleSendEmail}>
            <img
              src="send.png"
              alt="Send Message"
              className="w-12 h-12 hover:opacity-80 transition duration-300 cursor-pointer"
            />
          </button>

        </div>
        <div className=' order-1 w-full md:w-1/2 mt-6'>
          <img src={banner} alt="" />

        </div>
      </div>
    </>
  )
}

export default FrontBanner
//54:29
