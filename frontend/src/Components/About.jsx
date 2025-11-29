import React from "react";
import { Link } from "react-router-dom"; 
import Navbar from "./Navbar";

const About = () => {
  return (
    <>
    <Navbar/>
    <div className="h-screen flex flex-col items-center justify-center bg-red-50 px-4">
      {/* Content Wrapper: Inner Div + Image */}
      <div className="flex flex-col md:flex-row items-center justify-center gap-6">
        {/* Text Box */}
        <div className="bg-red-700 w-full md:w-1/2 p-6 text-white rounded-lg shadow-lg text-center flex items-center justify-center">
          <p>
            Hi, I’m <strong>Souvik Saha</strong>, a 4th-year Computer Science and Engineering student from Bengal Institute Of Technology under MAKAUT.  
            I specialize in the <strong>MERN stack</strong> and have built this website to help students with last-minute exam preparation.
            <br />
            <br />
            Here, I share the <strong>handwritten notes</strong> that I followed throughout my engineering journey, including <strong>GATE preparation materials</strong>.  
            My goal is to provide concise and valuable resources to make studying easier.
            <br />
            <br />
            Feel free to connect with me for any queries!
            <br />
            📞 <strong>Contact:</strong> 6289161641  
          </p>
        </div>

        <img 
          src="channew.png" 
          alt="Souvik Saha"
          className="w-40 h-40 "
        />
      </div>

      {/* Button Below Inner Div & Image */}
      <div className="mt-6">
       <Link to='/'><button className="btn btn-warning" >Back to home</button></Link>  
      </div>
    </div>

    </>
  );
};

export default About;
