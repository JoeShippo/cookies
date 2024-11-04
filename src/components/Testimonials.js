import React from 'react';
import TestimonialCard from './TestimonialCard';

// Array of testimonials data
const testimonialsData = [
  {
    profileImage: `${process.env.PUBLIC_URL}/assets/jane-doe.webp`,    
    name: 'Jane Doe',
    text: 'Fantastic service! Came out to me on short notice and got my car back on the road in no time. Highly recommend!',
    bgColor: 'bg-blue-800',
    textColor: 'text-white',
  },
  {
    profileImage: `${process.env.PUBLIC_URL}/assets/john-smith.webp`,
    name: 'John Smith',
    text: 'Super convenient and professional! Saved me a trip to the garage, and the price was very fair.',
    bgColor: 'bg-blue-600',
    textColor: 'text-white',
  },
  {
    profileImage: `${process.env.PUBLIC_URL}/assets/sarah-brown.webp`,
    name: 'Sarah Brown',
    text: 'Really pleased with the work done. Professional and thorough, and I didn’t even have to leave my house!',
    bgColor: 'bg-blue-800',
    textColor: 'text-white',
  },
];

const Testimonials = () => (
  <section id="testimonials" className="relative py-16 overflow-hidden">
    {/* Background Image */}
    <div
      className="absolute inset-y-0 right-0 h-full hidden md:block"
      style={{
        backgroundColor: '#FFDE59',
        width: '44%',
      }}
    ></div>

    <div className="relative container mx-auto px-6 flex flex-col md:flex-row items-center justify-between">
      
      {/* Left Side - Text Content */}
      <div className="md:w-2/6 mb-8 md:mb-0 z-10">
        <h2 className="text-3xl font-bold mb-4">Striving for Excellence on&nbsp;Every&nbsp;Job</h2>
        <p className="text-gray-600 mb-6">
          Discover how we've supported customers with real testimonials from satisfied clients.
        </p>
        <button className="btn btn-primary text-white px-6 py-2">
          Get in Touch
        </button>
      </div>

      {/* Right Side - Testimonials Stack */}
      <div className="md:w-1/2 flex flex-col space-y-4 z-10">
        {testimonialsData.map((testimonial, index) => (
          <div
            key={index}
            className={`${
              index % 2 === 0 ? 'self-start' : 'self-end'
            } w-full md:w-3/4`}
          >
            <TestimonialCard
              profileImage={testimonial.profileImage}
              name={testimonial.name}
              text={testimonial.text}
              bgColor={testimonial.bgColor}
              textColor={testimonial.textColor}
            />
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Testimonials;