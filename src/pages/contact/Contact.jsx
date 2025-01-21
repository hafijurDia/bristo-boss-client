import React from "react";
import { Helmet } from "react-helmet-async";
import PageBanner from "../../shared/pageBanner/PageBanner";
import shopBg from "../../assets/shop/banner2.jpg";

const Contact = () => {
  return (
    <div>
      <Helmet>
        <title>Bistro Boss | Contact Us</title>
      </Helmet>
      <PageBanner
        img={shopBg}
        title={"Contact Us"}
        subTitle={"Feel free to contact us 24/7"}
      ></PageBanner>
      <div className="py-20">
        <div className="container mx-auto px-6 md:px-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {/* Contact Information */}
            <div className="space-y-6">
              <h2 className="text-2xl font-bold text-gray-800">
                Get in Touch
              </h2>
              <p className="text-gray-600">
                We would love to hear from you! Whether you have a question
                about our services, pricing, or anything else, our team is
                ready to answer all your questions.
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <div className="text-xl text-blue-600">
                    <i className="fas fa-phone"></i>
                  </div>
                  <div>
                    <h3 className="font-semibold">Call Us</h3>
                    <p className="text-gray-600">+1 234 567 890</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="text-xl text-blue-600">
                    <i className="fas fa-envelope"></i>
                  </div>
                  <div>
                    <h3 className="font-semibold">Email Us</h3>
                    <p className="text-gray-600">support@bistroboss.com</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="text-xl text-blue-600">
                    <i className="fas fa-map-marker-alt"></i>
                  </div>
                  <div>
                    <h3 className="font-semibold">Visit Us</h3>
                    <p className="text-gray-600">
                      123 Bistro Street, Food City, FC 56789
                    </p>
                  </div>
                </div>
              </div>
            </div>
            {/* Contact Form */}
            <div>
              <h2 className="text-2xl font-bold text-gray-800 mb-6">
                Send Us a Message
              </h2>
              <form className="space-y-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Your Full Name"
                    required
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Your Email Address"
                    required
                  />
                </div>
                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Your Message"
                    rows="5"
                    required
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full py-3 px-6 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
