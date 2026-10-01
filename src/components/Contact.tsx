import { useState, type FormEvent } from 'react';
import { Mail, Phone, Linkedin, Github, MapPin, Send, CheckCircle2, AlertCircle } from 'lucide-react';
import { personal } from '@/data/portfolio';
import ScrollReveal from './ScrollReveal';
import SectionHeading from './SectionHeading';

interface FormErrors {
  name?: string;
  email?: string;
  message?: string;
}

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [errors, setErrors] = useState<FormErrors>({});
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');

  const validate = (): boolean => {
    const newErrors: FormErrors = {};
    if (!form.name.trim()) newErrors.name = 'Please enter your name';
    if (!form.email.trim()) {
      newErrors.email = 'Please enter your email';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      newErrors.email = 'Please enter a valid email address';
    }
    if (!form.message.trim()) {
      newErrors.message = 'Please enter a message';
    } else if (form.message.trim().length < 10) {
      newErrors.message = 'Message should be at least 10 characters';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setStatus('sending');
    const subject = encodeURIComponent(`Portfolio Contact from ${form.name}`);
    const body = encodeURIComponent(`${form.message}\n\n— ${form.name}\n${form.email}`);
    window.location.href = `mailto:${personal.email}?subject=${subject}&body=${body}`;

    setTimeout(() => {
      setStatus('success');
      setForm({ name: '', email: '', message: '' });
      setTimeout(() => setStatus('idle'), 4000);
    }, 1000);
  };

  const contactItems = [
    {
      icon: Mail,
      label: 'Email',
      value: personal.email,
      href: `mailto:${personal.email}`,
    },
    {
      icon: Phone,
      label: 'Phone',
      value: personal.phone,
      href: `tel:${personal.phone.replace(/\s/g, '')}`,
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      value: 'Connect on LinkedIn',
      href: personal.linkedin,
    },
    {
      icon: Github,
      label: 'GitHub',
      value: 'View GitHub Profile',
      href: personal.github,
    },
  ];

  return (
    <section id="contact" className="relative py-24 sm:py-32">
      <div className="absolute inset-0 bg-gradient-to-b from-ink-950 via-ink-900/50 to-ink-950 pointer-events-none" />
      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <SectionHeading
            eyebrow="Contact"
            title="Let's Build Something Intelligent"
            description="Interested in AI, Machine Learning, Generative AI, or Cloud Engineering? I'd love to connect."
          />
        </ScrollReveal>

        <div className="grid lg:grid-cols-2 gap-8">
          <ScrollReveal delay={100}>
            <div className="glass rounded-2xl p-8 h-full">
              <h3 className="text-lg font-semibold text-gray-100 mb-2">Get in Touch</h3>
              <p className="text-sm text-gray-400 mb-6">
                Whether you're hiring for an AI, ML, or Cloud Engineering role — or just want
                to discuss technology, I'm always open to a conversation.
              </p>

              <div className="space-y-3">
                {contactItems.map((item) => {
                  const Icon = item.icon;
                  return (
                    <a
                      key={item.label}
                      href={item.href}
                      target={item.href.startsWith('http') ? '_blank' : undefined}
                      rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                      className="flex items-center gap-4 p-3 rounded-xl bg-ink-800/40 border border-ink-700/40 hover:border-accent-500/40 hover:bg-accent-500/5 transition-all group"
                    >
                      <div className="w-10 h-10 rounded-lg bg-accent-500/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                        <Icon size={18} className="text-accent-300" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-xs text-gray-500 uppercase tracking-wider">
                          {item.label}
                        </p>
                        <p className="text-sm text-gray-200 truncate">{item.value}</p>
                      </div>
                    </a>
                  );
                })}
              </div>

              <div className="mt-6 flex items-center gap-2 text-sm text-gray-500">
                <MapPin size={14} className="text-accent-400" />
                {personal.location}
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={200}>
            <form onSubmit={handleSubmit} className="glass rounded-2xl p-8 space-y-5" noValidate>
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-1.5">
                  Name
                </label>
                <input
                  id="name"
                  type="text"
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className={`w-full px-4 py-3 rounded-xl bg-ink-900/60 border text-gray-100 placeholder-gray-600 focus:outline-none focus:ring-2 transition-all ${
                    errors.name
                      ? 'border-red-500/50 focus:ring-red-500/20'
                      : 'border-ink-700/50 focus:ring-accent-500/30 focus:border-accent-500/50'
                  }`}
                  placeholder="Your name"
                />
                {errors.name && (
                  <p className="mt-1.5 text-xs text-red-400 flex items-center gap-1">
                    <AlertCircle size={12} /> {errors.name}
                  </p>
                )}
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1.5">
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  className={`w-full px-4 py-3 rounded-xl bg-ink-900/60 border text-gray-100 placeholder-gray-600 focus:outline-none focus:ring-2 transition-all ${
                    errors.email
                      ? 'border-red-500/50 focus:ring-red-500/20'
                      : 'border-ink-700/50 focus:ring-accent-500/30 focus:border-accent-500/50'
                  }`}
                  placeholder="you@example.com"
                />
                {errors.email && (
                  <p className="mt-1.5 text-xs text-red-400 flex items-center gap-1">
                    <AlertCircle size={12} /> {errors.email}
                  </p>
                )}
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-1.5">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={5}
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  className={`w-full px-4 py-3 rounded-xl bg-ink-900/60 border text-gray-100 placeholder-gray-600 focus:outline-none focus:ring-2 transition-all resize-none ${
                    errors.message
                      ? 'border-red-500/50 focus:ring-red-500/20'
                      : 'border-ink-700/50 focus:ring-accent-500/30 focus:border-accent-500/50'
                  }`}
                  placeholder="Tell me about the opportunity or just say hello..."
                />
                {errors.message && (
                  <p className="mt-1.5 text-xs text-red-400 flex items-center gap-1">
                    <AlertCircle size={12} /> {errors.message}
                  </p>
                )}
              </div>

              <button
                type="submit"
                disabled={status === 'sending'}
                className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-gradient-to-r from-accent-500 to-accent-600 text-white font-medium hover:from-accent-400 hover:to-accent-500 transition-all hover:glow-accent disabled:opacity-50"
              >
                {status === 'sending' ? (
                  'Sending...'
                ) : status === 'success' ? (
                  <>
                    <CheckCircle2 size={18} /> Message Ready!
                  </>
                ) : (
                  <>
                    <Send size={17} /> Send Message
                  </>
                )}
              </button>

              {status === 'success' && (
                <p className="text-sm text-accent-400 text-center flex items-center justify-center gap-1.5">
                  <CheckCircle2 size={14} />
                  Your email client should now be open with the message ready to send.
                </p>
              )}
            </form>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
