import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';

import '../Css/Contact.css';
import ContactImg2 from '../Images/MyContactImg7.jpg';

import { BsLinkedin } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";

const Contact = () => {
  // handle the input of values   
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [msg, setMsg] = useState("");

  // handle the submission of values 
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (!name || !email || !msg) {
        toast.error("Please provide all fields");
        return;
      }
      const res = await axios.post('/api/v1/portfolio/sendEmail', { name, email, msg });
      // validation
      if (res.data.success) {
        toast.success(res.data.message);
      } else {
        toast.error(res.data.message);
      }
    } catch (error) {
      toast.error("An error occurred. Please try again.");
      console.log(error);
    }
  }

  return (
    <>
      <div className="Contact" id='contact'>
        <div className="card Con-card-main border-0 p-2">
          <div className="row Con-card-row-1">
            <div className="col-md-6 col-lg-6 col-sm-12">
              <div className="card Con-Card-Sub1 border-2">
                <div className="row border-line2">
                  <img src={ContactImg2} alt="" />
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-6 col-sm-12">
              <div className="card Con-Card-Sub2 border-0">
                <div className="row Contact-icon-row">
                  <h4 className='ms-2'>
                    Connect with
                    <a href='https://www.linkedin.com/in/harsh-patil-669510208' rel="noreferrer" target='_blank'><BsLinkedin size={37} className='mx-2 Con-icon' color='#1877F2' /></a>
                    <a href='https://github.com/HarshPatiL11' rel="noreferrer" target='_blank'><FaGithub size={35} className='mx-2 Con-icon' color='black' /></a>
                    {/* <FaFacebookSquare size={37} className='mx-2 Con-icon' color="#1877F2" /> */}
                  </h4>
                </div>
                <div className="px-3 mb-3 row">
                  <div className="line" />
                  <small className="or text-center">OR</small>
                  <div className="line" />
                </div>

                <div className="row px-3">
                  <input
                    type="text"
                    name="name"
                    placeholder="Enter your Name"
                    className="mb-3"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>
                <div className="row px-3">
                  <input
                    type="email"
                    name="email"
                    placeholder="Enter Your Email Address"
                    className="mb-3"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <div className="row px-3">
                  <textarea
                    name="msg"
                    placeholder="Write your message"
                    className="mb-3"
                    value={msg}
                    onChange={(e) => setMsg(e.target.value)}
                  />
                </div>

                <div className="row px-3">
                  <button className="Submit-btn" onClick={handleSubmit}>Send Message</button>
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>
      <ToastContainer />
    </>
  );
}

export default Contact;
