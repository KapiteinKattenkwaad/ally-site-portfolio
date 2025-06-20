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
        setStatus("Thanks! I'll be in touch soon.");
      } else {
        setStatus("Oops! Something went wrong.");
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
      <section id="contact" className="py-20 section-bg-5 text-center">
        <h2 className="text-4xl font-bold mb-6 text-[var(--colorText)]">Contact</h2>

        {status === "Thanks! I'll be in touch soon." ? (
          <p className="text-green-600 text-lg success-message">{status}</p>
        ) : (
          <form onSubmit={handleSubmit} className="max-w-xl mx-auto space-y-6 text-left">
            <p className="text-[var(--colorText)]/70 mb-10">Send me a message and I will get back to you soon.</p>
            <div>
              <label htmlFor="name" className="block font-semibold mb-1 text-sm text-[var(--colorText)]">Name</label>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                required
                className="w-full border border-[var(--accent)] rounded-xl p-3 bg-white/80 text-[var(--colorText)]"
              />
            </div>

            <div>
              <label htmlFor="email" className="block font-semibold mb-1 text-sm text-[var(--colorText)]">Email</label>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                required
                className="w-full border border-[var(--accent)] rounded-xl p-3 bg-white/80 text-[var(--colorText)]"
              />
            </div>

            <div>
              <label htmlFor="message" className="block font-semibold mb-1 text-sm text-[var(--colorText)]">Message</label>
              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                rows={5}
                required
                className="w-full border border-[var(--accent)] rounded-xl p-3 bg-white/80 text-[var(--colorText)]"
              />
            </div>

            <button
              type="submit"
              className="cursor-pointer text-white bg-[var(--accent)] hover:bg-[var(--colorText)] focus:outline-none focus:ring-4 focus:ring-[var(--accent)]/30 font-semibold rounded-full text-base px-6 py-3 mb-2 transition-colors"
            >
              {loading ? 'Sending...' : 'Send message'}
            </button>

            {status && status !== "Thanks! I'll be in touch soon." && (
              <p className="text-red-600 mt-4">{status}</p>
            )}
          </form>
        )}
      </section>
    </MotionSection>
  );
}
