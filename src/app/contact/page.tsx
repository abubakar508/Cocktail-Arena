import React from 'react';

const Contact = () => {
  return (
    <div className="bg-primary min-h-screen flex justify-center items-center">
      <div className="max-w-md p-8 bg-secondary rounded-lg shadow-lg">
        <h1 className="text-4xl font-bold text-white mb-6 font-dancing">Contact Us</h1>
        <form className="space-y-4">
          <div>
            <label htmlFor="name" className="block text-white mb-1 font-montserrat">Name:</label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Enter your name"
              className="w-full px-4 py-2 rounded-md bg-tertiary text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-accent"
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-white mb-1 font-montserrat">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Enter your email"
              className="w-full px-4 py-2 rounded-md bg-tertiary text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-accent"
            />
          </div>
          <div>
            <label htmlFor="message" className="block text-white mb-1 font-montserrat">Message:</label>
            <textarea
              id="message"
              name="message"
              placeholder="Type your message"
              rows={4}
              className="w-full px-4 py-2 rounded-md bg-tertiary text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-accent"
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full py-2 bg-accent text-robust rounded-md hover:bg-accent.hover focus:outline-none focus:ring-2 focus:ring-accent font-dancing"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
