import React, { useState, useRef } from 'react';
import Navbar from './Navbar';
import emailjs from '@emailjs/browser';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Footer } from './Footer';

const Input = ({ placeholder, name, type, value, handleChange }) => (
  <input
    placeholder={placeholder}
    type={type}
    value={value || ''}
    onChange={(e) => handleChange(e, name)}
    className="w-full rounded-xl p-2 outline-none bg-gray-600 text-white border-none text-sm white-glassmorphism"
  />
);

export const Contact = () => {
  const [Form, setForm] = useState({});
  const [loading, setLoading] = useState(false);

  const EMAIL_JS_SERVICE_ID = 'service_ro98gte';
  const EMAIL_JS_TEMPLATE_ID = 'template_f1go7ic';
  const EMAIL_JS_PUBLIC_KEY = 'Wsqhr4PIbHbwHVaCL';

  const handleChange = (e, name) => {
    setForm((prev) => ({ ...prev, [name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    // Validation
    if (!Form.name || !Form.email) {
      setLoading(false);
      toast.error('Please fill the required fields.', { position: 'top-right' });
      return;
    }

    const message = Form.message || `Connection request from ${Form.name}`;

    // Sending email via EmailJS
    emailjs
      .send(
        EMAIL_JS_SERVICE_ID,
        EMAIL_JS_TEMPLATE_ID,
        {
          from_name: Form.name,
          from_mail: Form.email,
          to_name: 'Hema Radhika',
          to_email: 'hemaradhikareddy@gmail.com',
          message,
        },
        EMAIL_JS_PUBLIC_KEY
      )
      .then(
        () => {
          setLoading(false);
          toast.success('Message sent successfully!', { position: 'top-right' });
          setForm({}); // Reset form
        },
        (error) => {
          setLoading(false);
          toast.error('Failed to send message. Please try again.', { position: 'top-right' });
          console.error('EmailJS Error:', error);
        }
      );
  };

  return (
    <>
      <Navbar />
      <section className='form'>
    
      <div className="flex justify-center">
        <div className="p-3 sm:w-96 w-full flex flex-col justify-center items-center mt">
          <div className="text-left">Your Name</div>
          <Input
            placeholder="Your Name"
            name="name"
            type="text"
            value={Form.name}
            handleChange={handleChange}
            />
          <div>Your Email</div>
          <Input
            placeholder="Email"
            name="email"
            type="email"
            value={Form.email}
            handleChange={handleChange}
            />
          <div>Your Message</div>
          <textarea
            className="h-1/4 bg-gray-600 rounded-xl p-2 text-white"
            onChange={(e) => handleChange(e, 'message')}
            name="message"
            cols="30"
            rows="10"
            placeholder="Want to say anything?"
            value={Form.message || ''}
            />
          <div className="h-[1px] w-full bg-gray-400 my-2" />
          <button
            type="button"
            onClick={handleSubmit}
            className="w-full mt-2 border-[1px] p-2 border-[#3d4f7c] rounded-full"
            disabled={loading}
            >
            {loading ? 'Sending...' : 'Click to Send'}
          </button>
          <br />
          <div>My email: hemaradhikareddy@gmail.com</div>
          <div>My Phno: +91 93468 86910</div>
          <div className='flex gap-5'>
          <a className='transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg' href="https://github.com/hemaradhika-reddy" target="_blank"><img className="git bg-gray-600 rounded-xl" src="images/github-original.svg" alt="githubImg" /></a>
        <a className='transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg' href="https://www.linkedin.com/in/hema-radhika-reddy-181903230/" target="_blank"><img className="git bg-gray-600 rounded-xl" src="images/LinkedIn_icon.svg" alt="githubImg" /></a>
          </div>
        </div>
      </div>
            </section>
          <Footer/> 
      <ToastContainer />
    </>
  );
};
