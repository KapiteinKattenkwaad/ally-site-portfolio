'use client';
import MotionSection from './MotionSection';
import { useState } from 'react';

export default function Contact() {
  const [status, setStatus] = useState('');

  return (
    <MotionSection delay={0.4} >
    <section id="contact" className="py-20 bg-gray-50 text-center" >
      <h2 className="text-4xl font-bold mb-6 text-gray-900">Contact</h2>
      <p className="text-gray-600 mb-10">Send me a message and I’ll get back to you soon.</p>

      <form
        action="https://formspree.io/f/mqaqvvgb"
        method="GET"
        className="max-w-xl mx-auto space-y-6 text-left"
        onSubmit={() => setStatus('Thanks! I’ll be in touch soon.')}
      >
        <div>
          <label htmlFor="name" className="block font-semibold mb-1 text-sm">Name</label>
          <input
            type="text"
            name="name"
            required
            className="w-full border border-gray-300 rounded-xl p-3"
          />
        </div>

        <div>
          <label htmlFor="email" className="block font-semibold mb-1 text-sm">Email</label>
          <input
            type="email"
            name="email"
            required
            className="w-full border border-gray-300 rounded-xl p-3"
          />
        </div>

        <div>
          <label htmlFor="message" className="block font-semibold mb-1 text-sm">Message</label>
          <textarea
            name="message"
            rows={5}
            required
            className="w-full border border-gray-300 rounded-xl p-3"
          />
        </div>

        <button
          type="submit"
          className="px-6 py-3 bg-black text-white rounded-xl hover:bg-gray-800 transition"
        >
          Send Message
        </button>

        {status && <p className="text-green-600 mt-4">{status}</p>}
      </form>
    </section>
    </MotionSection>
  );
}
