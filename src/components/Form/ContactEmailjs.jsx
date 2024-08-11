import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

const YOUR_SERVICE_ID = process.env.YOUR_SERVICE_ID;
const YOUR_TEMPLATE_ID = process.env.YOUR_TEMPLATE_ID;
const YOUR_PUBLIC_ID = process.env.YOUR_PUBLIC_ID;


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
    <div className="bg-amber-200 min-h-screen flex items-center justify-center">
      <form
        ref={form}
        onSubmit={sendEmail}
        className="bg-white rounded-lg shadow-lg p-8 w-full max-w-lg"
      >
        <h2 className="text-2xl font-bold text-center mb-6 text-orange-800">Contact Us</h2>

        <div className="mb-4">
          <label className="block text-orange-800 text-lg mb-2" htmlFor="from_name">
            Name
          </label>
          <input
            type="text"
            name="from_name"
            id="from_name"
            required
            className="w-full px-3 py-2 border border-orange-400 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
          />
        </div>

        <div className="mb-4">
          <label className="block text-orange-800 text-lg mb-2" htmlFor="email">
            Email
          </label>
          <input
            type="email"
            name="email"
            id="email"
            required
            className="w-full px-3 py-2 border border-orange-400 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
          />
        </div>

        <div className="mb-6">
          <label
            className="block text-orange-800 text-lg mb-2"
            htmlFor="message"
          >
            Message
          </label>
          <textarea
            name="message"
            id="message"
            required
            rows="4"
            className="w-full px-3 py-2 border border-orange-400 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
          />
        </div>

        <div className="text-center">
          <input
            type="submit"
            value="Send"
            className="bg-orange-500 text-white text-lg font-semibold px-6 py-3 rounded-md hover:bg-orange-600 cursor-pointer"
          />
        </div>
      </form>
    </div>
  );
};
