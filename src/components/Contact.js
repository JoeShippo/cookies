import React from 'react';

const Contact = () => (
  <section
    id="contact"
    className="py-16 relative"
    style={{
      backgroundImage: `url(${process.env.PUBLIC_URL}/assets/testimonial-image.webp)`,
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover',
    }}
  >
    {/* Color Overlay */}
    <div
      className="absolute inset-0 opacity-50 bg-blue-800"
      style={{
        // backgroundColor: '#FFDE59',
      }}
    ></div>

    {/* Content */}
    <div className="relative z-10 text-white text-center">
      <h2 className="text-4xl font-bold text-center mb-12 text-white">Get in Touch</h2>
      <form className="max-w-2xl mx-auto bg-white shadow-lg rounded-lg p-8 space-y-6">
        {/* Name Fields */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input type="text" placeholder="First Name" className="input input-bordered w-full" />
          <input type="text" placeholder="Last Name" className="input input-bordered w-full" />
        </div>

        {/* Contact Number and Email */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input type="tel" placeholder="Contact Number" className="input input-bordered w-full" />
          <input type="email" placeholder="Email" className="input input-bordered w-full" />
        </div>

        {/* Car Information */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <input type="text" placeholder="Car Registration" className="input input-bordered w-full" />
          <input type="text" placeholder="Car Make" className="input input-bordered w-full" />
          <input type="text" placeholder="Car Model" className="input input-bordered w-full" />
        </div>

        {/* Service Type and Location */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

          <select className="select select-bordered w-full text-gray-800" defaultValue="">
            <option value="" disabled>Select a Service</option>
            <option value="Repairs">Repairs</option>
            <option value="Diagnostics">Diagnostics</option>
            <option value="Servicing & MOTs">Servicing & MOTs</option>
            <option value="Tyres">Tyres</option>
            <option value="Pre-Purchase Inspection">Pre-Purchase Inspection</option>
            <option value="Something Else">Something Else</option>
          </select>
          <input type="text" placeholder="Location" className="input input-bordered w-full" />
        </div>

        {/* Additional Information */}
        <div>
          <textarea placeholder="Any more information (e.g., any noises, driving changes, etc.)" className="textarea textarea-bordered w-full h-24"></textarea>
        </div>

        {/* Submit Button */}
        <button type="submit" className="btn btn-primary w-full">Send Message</button>
      </form>
    </div>
  </section>
);

export default Contact;