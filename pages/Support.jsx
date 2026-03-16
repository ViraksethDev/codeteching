// pages/Support.jsx
import { useState } from 'react';
import { Search, Mail, MessageCircle, BookOpen, ChevronDown, Send } from 'lucide-react';
import ParticlesBackground from '../components/ui/Background'; // from previous

export default function Support() {
  const [openFaq, setOpenFaq] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');

  const faqs = [
    {
      question: "How do I reset my password?",
      answer: "Click 'Forgot password?' on the login page. You'll receive an email with instructions to create a new password securely."
    },
    {
      question: "Can I change my subscription plan?",
      answer: "Yes — go to Settings → Billing in your dashboard. You can upgrade, downgrade, or cancel anytime. Changes take effect at the end of your current billing cycle."
    },
    {
      question: "Is my data secure?",
      answer: "We use end-to-end encryption, SOC 2 Type II compliant infrastructure, regular security audits, and GDPR/CCPA compliance measures to protect your data."
    },
    {
      question: "How do I invite team members?",
      answer: "Navigate to Team → Invite Members in the dashboard. Enter their email and assign a role. They'll receive an invitation to join."
    },
    {
      question: "What payment methods do you accept?",
      answer: "We accept all major credit/debit cards, PayPal, and bank transfers in supported regions."
    },
  ];

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <div className="relative min-h-screen bg-gray-950 text-gray-200 overflow-hidden">
      <ParticlesBackground />

      {/* Subtle gradient overlays */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_rgba(99,102,241,0.08),transparent_70%)] pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_rgba(168,85,247,0.07),transparent_70%)] pointer-events-none" />

      <div className="relative z-10 pt-24 pb-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        {/* Hero */}
        <div className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl font-bold bg-gradient-to-r from-indigo-300 via-purple-300 to-pink-300 bg-clip-text text-transparent">
            We're here to help
          </h1>
          <p className="mt-4 text-xl text-gray-400 max-w-3xl mx-auto">
            Get answers fast or reach out to our team — we're available around the clock.
          </p>
        </div>

        {/* Quick Actions */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {[
            { icon: BookOpen, title: "Browse Docs", desc: "Guides, API reference & tutorials", color: "from-blue-500 to-indigo-600" },
            { icon: MessageCircle, title: "Live Chat", desc: "Talk to us instantly (Mon–Fri 9–18 UTC)", color: "from-purple-500 to-pink-600" },
            { icon: Mail, title: "Email Support", desc: "We'll reply within 4–12 hours", color: "from-emerald-500 to-teal-600" },
          ].map((item, i) => (
            <div
              key={i}
              className="group relative rounded-2xl border border-white/10 bg-gray-900/60 backdrop-blur-xl p-8 shadow-xl transition-all hover:border-white/20 hover:shadow-2xl hover:scale-[1.02]"
            >
              <div className={`inline-flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br ${item.color} mb-6`}>
                <item.icon size={28} className="text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">{item.title}</h3>
              <p className="text-gray-400">{item.desc}</p>
            </div>
          ))}
        </div>

        {/* Search Bar */}
        <div className="max-w-3xl mx-auto mb-16">
          <div className="relative">
            <input
              type="text"
              placeholder="Search our help center..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full rounded-xl border border-white/10 bg-white/5 px-6 py-5 pl-14 text-white placeholder-gray-500 backdrop-blur-sm focus:border-indigo-500/50 focus:outline-none focus:ring-1 focus:ring-indigo-500/30"
            />
            <Search size={20} className="absolute left-5 top-1/2 -translate-y-1/2 text-gray-400" />
          </div>
        </div>

        {/* FAQ Accordion */}
        <div className="max-w-4xl mx-auto mb-20">
          <h2 className="text-3xl font-bold text-center mb-10 bg-gradient-to-r from-indigo-300 to-purple-300 bg-clip-text text-transparent">
            Frequently Asked Questions
          </h2>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="rounded-xl border border-white/10 bg-gray-900/60 backdrop-blur-xl overflow-hidden transition-all hover:border-white/20"
              >
                <button
                  onClick={() => toggleFaq(index)}
                  className="flex w-full items-center justify-between px-6 py-5 text-left"
                >
                  <span className="text-lg font-medium text-white">{faq.question}</span>
                  <ChevronDown
                    size={20}
                    className={`text-gray-400 transition-transform ${openFaq === index ? 'rotate-180' : ''}`}
                  />
                </button>
                <div
                  className={`px-6 pb-5 overflow-hidden transition-all duration-300 ease-in-out ${
                    openFaq === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                  }`}
                >
                  <p className="text-gray-300 leading-relaxed">{faq.answer}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Contact Form */}
        <div className="max-w-2xl mx-auto">
          <div className="rounded-2xl border border-white/10 bg-gray-900/70 backdrop-blur-xl p-8 shadow-2xl">
            <h2 className="text-2xl font-semibold text-white mb-2 text-center">Still need help?</h2>
            <p className="text-gray-400 text-center mb-8">
              Drop us a message — our team typically responds within a few hours.
            </p>

            <form className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Name</label>
                  <input
                    type="text"
                    className="w-full rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-white placeholder-gray-500 focus:border-indigo-500/50 focus:outline-none focus:ring-1 focus:ring-indigo-500/30"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Email</label>
                  <input
                    type="email"
                    className="w-full rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-white placeholder-gray-500 focus:border-indigo-500/50 focus:outline-none focus:ring-1 focus:ring-indigo-500/30"
                    placeholder="you@example.com"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Message</label>
                <textarea
                  rows={5}
                  className="w-full rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-white placeholder-gray-500 focus:border-indigo-500/50 focus:outline-none focus:ring-1 focus:ring-indigo-500/30"
                  placeholder="Describe your issue or question..."
                />
              </div>

              <button
                type="submit"
                className="group relative flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-indigo-600 to-purple-600 px-6 py-3.5 font-medium text-white shadow-lg shadow-indigo-500/20 transition-all hover:scale-[1.02] hover:shadow-indigo-500/30"
              >
                <Send size={18} />
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}