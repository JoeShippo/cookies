import React from 'react';
import Navbar from './Navbar';
import LogoSlider from './LogoSlider';

const Hero = () => {
  return (
    <section className="relative w-full pt-8 pb-16">
            {/* Navigation Bar */}
            <Navbar />

      {/* Background Layers */}
      <div className="absolute inset-0 h-full bg-blue-800" style={{ clipPath: "polygon(0% 0%, 100% 0%, 100% 50%, 0% 50%" }}></div>

      {/* Hero Content */}
      <div className="relative z-10 flex items-center justify-center py-20">
        <div className="flex w-full max-w-5xl bg-blue-600 rounded-lg shadow-lg overflow-hidden">
          
          {/* Left Side - Image with Booking Form */}
          <div className="relative hidden md:block md:w-3/5 flex items-center justify-center bg-gray-100">
            <img
              src={`${process.env.PUBLIC_URL}/assets/hero.png`}
              alt="Mechanic with tools"
              className="w-full h-full object-cover"
            />
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 w-11/12 bg-white bg-opacity-90 p-4 rounded-lg shadow-md">
              <form className="flex flex-col gap-4">
                <div className="flex gap-4">
                  <input
                    type="text"
                    placeholder="Name"
                    className="input input-bordered w-1/2"
                  />
                  <input
                    type="email"
                    placeholder="Email"
                    className="input input-bordered w-1/2"
                  />
                </div>
                <div className="flex gap-4">
                <select className="select select-bordered w-full" defaultValue="">
                  <option value="" disabled>Select a Service</option>
                  <option value="Repairs">Repairs</option>
                  <option value="Diagnostics">Diagnostics</option>
                  <option value="Servicing & MOTs">Servicing & MOTs</option>
                  <option value="Tyres">Tyres</option>
                  <option value="Pre-Purchase Inspection">Pre-Purchase Inspection</option>
                  <option value="Something Else">Something Else</option>
                </select>
                  <button type="submit" className="btn btn-warning w-2/5">
                    Enquire
                  </button>
                </div>
              </form>
            </div>
          </div>

          {/* Right Side - Text Content */}
          <div className="w-full md:w-2/5 p-8 flex flex-col justify-center bg-blue-600 text-white">
            <p className="mb-6" style={{ color: "#FFDE59" }}>
              Welcome to Cookie's Auto
            </p>
            <h1 className="text-4xl font-bold mb-4">
              Highly skilled certified mechanics guaranteed.
            </h1>
            <p className="mb-6 text-gray-200">
              Your reliable mobile mechanic looking after Olney &amp; surrounding areas.
            </p>
            <a href="#services" className="btn btn-white mb-6">View Services</a>

            {/* Contact Info */}
            <div className="flex items-center space-x-4 mt-6">
              <img
                src={`${process.env.PUBLIC_URL}/assets/cookie-placeholder.png`}
                alt="Simon Cook - Cookies Auto - Mobile Mechanic"
                className="rounded-full w-12 h-12 border-2 border-white"
              />
              <p className="text-gray-300">
                Got a question about our services? <br />
                Call us: <a href="tel:07123456789">07123 456789</a>
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Logo Slider Section */}
      <LogoSlider />
    </section>
  );
};

export default Hero;