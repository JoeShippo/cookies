import React from 'react';

// Sample FAQ data
const faqs = [
  {
    question: "What services do you offer?",
    answer: "We offer a wide range of mobile car services, including brake repair, battery replacement, engine diagnostics, and more.",
  },
  {
    question: "Do you serve my area?",
    answer: "We currently serve Olney and surrounding areas, including Milton Keynes, Newport Pagnell, and Bedford. Contact us to see if we can come to your location.",
  },
  {
    question: "How can I book an appointment?",
    answer: "Simply submit an enquiry or contact us directly on 07123 456789 and we'll be in touch with a quotation and availability.",
  },
  {
    question: "What payment methods do you accept?",
    answer: "We accept various payment methods, including credit cards, debit cards, and cash.",
  },
];

const AboutAndFAQs = () => (
  <section id="about-faqs" className="py-16 bg-gray-100">
    <div className="container mx-auto px-6 flex flex-col md:flex-row gap-12">
      
      {/* Left Column - About Section */}
      <div className="md:w-1/2">
        <h2 className="text-3xl font-bold mb-4">About Cookie's Auto</h2>
        <p className="text-gray-700 mb-6">
          Cookie's Auto is your trusted mobile mechanic service, bringing professional car repair and maintenance to your doorstep. 
          We understand the importance of convenience and reliability, which is why we offer on-site services that allow you to avoid the hassle of traditional garages.
        </p>
        <p className="text-gray-700 mb-6">
          With years of experience , Simon is equipped with the latest tools to handle a variety of automotive needs. 
          Whether it's routine maintenance, diagnostics, or emergency repairs, we’re committed to keeping you on the road with minimal interruption.
        </p>
        <p className="text-gray-700">
          We currently serve Olney and a wide range of surrounding areas, including Milton Keynes, Newport Pagnell, Bedford, Northampton, Woburn Sands, Stony Stratford, Cranfield, Lavendon, Emberton, Harrold, Sherington, Turvey, Sharnbrook, Wolverton, Bromham, Kempston, Great Linford, Bletchley, Marston Moretaine, and Buckingham. Contact us to see if we can come to your location.
        </p>
      </div>

      {/* Right Column - FAQs Section with DaisyUI Accordion */}
      <div className="md:w-1/2">
        <h2 className="text-3xl font-bold mb-4">Frequently Asked Questions</h2>
        <div className="join join-vertical w-full">
          {faqs.map((faq, index) => (
            <div key={index} className="collapse collapse-arrow join-item border border-base-300">
              <input type="radio" name="faq-accordion" defaultChecked={index === 0} />
              <div className="collapse-title text-lg font-medium">{faq.question}</div>
              <div className="collapse-content">
                <p className="text-gray-600">{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default AboutAndFAQs;