import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

const YOUR_SERVICE_ID = import.meta.env.VITE_YOUR_SERVICE_ID;
const YOUR_TEMPLATE_ID = import.meta.env.VITE_YOUR_TEMPLATE_ID;
const YOUR_PUBLIC_ID = import.meta.env.VITE_YOUR_PUBLIC_ID;

export const ContactUs = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(YOUR_SERVICE_ID, YOUR_TEMPLATE_ID, form.current, YOUR_PUBLIC_ID)
      .then(
        () => {
          alert('Message sent successfully!');
          form.current.reset();
        },
        (error) => {                  
          console.log('Failed!', error.text);
        },
      );
  };

  return (
    <div className="flex items-center justify-center">
      <form
        ref={form}
        onSubmit={sendEmail}
        className="rounded-lg shadow-lg w-full max-w-lg bg-[#003049]"
      >

        <div className="mb-4">
          <label className="block text-lg mb-2 text-[#FDF0D5]" htmlFor="from_name">
            Name
          </label>
          <input
            type="text"
            name="from_name"
            id="from_name"
            required
            className="w-full px-3 py-2 border border-sky-700 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
          />
        </div>

        <div className="mb-4">
          <label className="block text-[#FDF0D5] text-lg mb-2" htmlFor="email">
            Email
          </label>
          <input
            type="email"
            name="email"
            id="email"
            required
            className="w-full px-3 py-2 border border-sky-700 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
          />
        </div>

        <div className="mb-6">
          <label
            className="block text-[#FDF0D5] text-lg mb-2"
            htmlFor="message"
          >
            Message
          </label>
          <textarea
            name="message"
            id="message"
            required
            rows="4"
            className="w-full px-3 py-2 border border-sky-700 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
          />
        </div>

        <div className="text-center">
          <input
            type="submit"
            value="Send"
            className="bg-[#003049] text-white text-lg font-semibold px-6 py-3 rounded-md hover:bg-sky-700 cursor-pointer"
          />
        </div>
      </form>
    </div>
  );
};
