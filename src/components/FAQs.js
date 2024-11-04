import React from 'react';

const FAQs = () => (
  <section className="py-16 bg-gray-100">
    <h2 className="text-3xl font-bold text-center mb-12">FAQs</h2>
    <div className="px-4 space-y-4">
      <details className="bg-white shadow-md rounded-lg p-4">
        <summary className="font-semibold">What areas do you serve?</summary>
        <p className="mt-2">We cover the entire local area.</p>
      </details>
      <details className="bg-white shadow-md rounded-lg p-4">
        <summary className="font-semibold">What types of vehicles do you work on?</summary>
        <p className="mt-2">We service most car makes and models.</p>
      </details>
    </div>
  </section>
);

export default FAQs;