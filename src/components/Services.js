import React from 'react';
import ServiceCard from './ServiceCard';

// Array of service data
const serviceData = [
  {
    heading: 'Mobile Car Servicing & Maintenance',
    description: 'Convenient and comprehensive car servicing, ensuring your vehicle’s health without needing to visit a garage.',
    image: '/assets/services/car-servicing.jpg',
  },
  {
    heading: 'Brake Repair & Replacement',
    description: 'On-the-go brake repairs, inspections, and replacements to ensure your car’s safety and performance on UK roads.',
    image: '/assets/services/brake-repair.jpg',
  },
  {
    heading: 'Battery Testing & Replacement',
    description: 'Fast and reliable mobile battery testing and replacement, ensuring your vehicle starts every time.',
    image: '/assets/services/battery-testing.jpg',
  },
  {
    heading: 'Diagnostics & Fault Finding',
    description: 'Advanced mobile diagnostics to quickly identify and resolve engine faults, eliminating unexpected issues.',
    image: '/assets/services/engine-diagnostics.jpg',
  },
  {
    heading: 'Suspension & Steering Repairs',
    description: 'Mobile suspension and steering services to ensure smooth handling, reducing wear on tires and improving comfort.',
    image: '/assets/services/suspension-repairs.jpg',
  },
  {
    heading: 'Exhaust Repairs & Replacement',
    description: 'Convenient exhaust repairs and replacements, helping your car meet emissions standards and run quietly.',
    image: '/assets/services/exhaust-repair.jpg',
  },
  {
    heading: 'Pre-Purchase Vehicle Inspection',
    description: 'Comprehensive mobile inspections for used cars, giving you confidence with a detailed assessment.',
    image: '/assets/services/pre-purchase-inspection.jpg',
  },
  {
    heading: 'Cooling Repairs',
    description: 'Mobile cooling system repairs, including radiator inspections and flushes, to prevent engine overheating.',
    image: '/assets/services/cooling-system.jpg',
  },
  {
    heading: 'Transmission Services',
    description: 'Mobile transmission inspections, fluid changes, & repairs, helping you avoid costly transmission replacements.',
    image: '/assets/services/transmission.jpg',
  },
];

const Services = () => (
  <section id="services" className="py-16 bg-gray-100">
    <div className="container mx-auto px-6">
      <h2 className="text-3xl font-bold text-center mb-12">Services</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {serviceData.map((service, index) => (
          <ServiceCard
            key={index}
            heading={service.heading}
            description={service.description}
            image={service.image}
          />
        ))}
      </div>
    </div>
  </section>
);

export default Services;