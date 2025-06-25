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
        setStatus("Thanks! I will be in touch soon.");
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
        <h2 className="text-4xl font-bold mb-6 text-[var(--colorText)]">Let&apos;s work together</h2>

        {status === "Thanks! I will be in touch soon." ? (
          <p className="text-green-600 text-lg success-message">{status.replace("'", "&apos;")}</p>
        ) : (
          <>
            <form onSubmit={handleSubmit} className="max-w-xl mx-auto space-y-6 text-left">
              <p className="text-[var(--colorText)]/70 mb-10 max-w-8/12 text-center mx-auto">Send me a message with a few details about your challenge. I&apos;ll get in touch to chat about how I can help.</p>
              <div>
                <label htmlFor="name" className="block font-semibold mb-1 text-sm text-[var(--colorText)]">Name</label>
                <input
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  required
                  className="w-full border-b-1 p-3 border-[var(--accent)] bg-white/80 text-[var(--colorText)]"
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
                  className="w-full border-b-1 border-[var(--accent)] p-3 bg-white/80 text-[var(--colorText)]"
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
                  className="w-full border-b-1 border-[var(--accent)] p-3 bg-white/80 text-[var(--colorText)]"
                />
              </div>

              <button
                type="submit"
                className="cursor-pointer text-white bg-[var(--accent)] hover:bg-[var(--colorText)] focus:outline-none focus:ring-4 focus:ring-[var(--accent)]/30 font-semibold text-base px-6 py-3 mb-2 transition-all "
              >
                {loading ? 'Sending...' : 'Send message'}
              </button>

              {status && status !== "Thanks! I'll be in touch soon." && (
                <p className="text-red-600 mt-4">{status}</p>
              )}
            </form>
            <div className="flex justify-center mt-8">
              <a
                href="https://www.linkedin.com/in/alexandra-sutton/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="inline-flex items-center text-[var(--colorText)] hover:text-[var(--accent)] transition-colors text-lg"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24">
                  <rect width="24" height="24" rx="4" fill="none"/>
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.327-.027-3.037-1.849-3.037-1.851 0-2.132 1.445-2.132 2.939v5.667h-3.554v-11.5h3.414v1.569h.049c.476-.899 1.637-1.849 3.369-1.849 3.602 0 4.267 2.368 4.267 5.455v6.325zm-14.693-13.452c-1.144 0-2.072-.928-2.072-2.072 0-1.143.928-2.071 2.072-2.071s2.072.928 2.072 2.071c0 1.144-.928 2.072-2.072 2.072zm1.777 13.452h-3.554v-11.5h3.554v11.5z" fill="currentColor"/>
                </svg>
              </a>
            </div>
          </>
        )}
      </section>
    </MotionSection>
  );
}
