'use client';
import MotionSection from './MotionSection';
import { useState } from 'react';

export default function Contact() {
  const [status, setStatus] = useState('');
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [loading, setLoading] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true)
    setStatus('');

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });

      if (res.ok) {
        setStatus('Thanks! I’ll be in touch soon.');
      } else {
        setStatus('Oops! Something went wrong.');
      }
    } catch {
      setStatus('Oops! Something went wrong.');
    }
    finally {
      setLoading(false)
    }
  };

  return (
    <MotionSection delay={0.4}>
      <section id="contact" className="py-20 bg-gray-50 section-bg-5 text-center">
        <h2 className="text-4xl font-bold mb-6 text-gray-900">Contact</h2>

        {status === 'Thanks! I’ll be in touch soon.' ? (
          <p className="text-green-600 text-lg success-message">{status}</p>
        ) : (
          <form onSubmit={handleSubmit} className="max-w-xl mx-auto space-y-6 text-left">
            <p className="text-gray-600 mb-10">Send me a message and I’ll get back to you soon.</p>
            <div>
              <label htmlFor="name" className="block font-semibold mb-1 text-sm">Name</label>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                required
                className="w-full border border-gray-300 rounded-xl p-3"
              />
            </div>

            <div>
              <label htmlFor="email" className="block font-semibold mb-1 text-sm">Email</label>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                required
                className="w-full border border-gray-300 rounded-xl p-3"
              />
            </div>

            <div>
              <label htmlFor="message" className="block font-semibold mb-1 text-sm">Message</label>
              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                rows={5}
                required
                className="w-full border border-gray-300 rounded-xl p-3"
              />
            </div>

            <button
              type="submit"
              className="px-6 py-3 bg-black text-white rounded-xl hover:bg-gray-800 transition"
            >
              {loading ? 'Sending...' : 'Send message'}
            </button>

            {status && status !== 'Thanks! I’ll be in touch soon.' && (
              <p className="text-red-600 mt-4">{status}</p>
            )}
          </form>
        )}
      </section>
    </MotionSection>
  );
}
