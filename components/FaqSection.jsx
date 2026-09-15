"use client";

import { motion } from "framer-motion";

const faqs = [
  {
    question: "How do downloads work?",
    answer: "After purchase, all digital products are available instantly via email and dashboard access. Download once and keep them forever.",
  },
  {
    question: "Is this beginner friendly?",
    answer: "Yes. Every product includes beginner guidance, progress tracking, and step-by-step support for newcomers.",
  },
  {
    question: "Can I access on mobile?",
    answer: "Absolutely. The store is designed for mobile-friendly browsing, checkout, and product updates.",
  },
  {
    question: "Do I get lifetime access?",
    answer: "Many products include digital guides, warranty details, or ongoing support when available.",
  },
  {
    question: "How fast will I receive products?",
    answer: "Products are delivered instantly after checkout, so you can start using them immediately.",
  },
];

export default function FaqSection() {
  return (
    <section className="mx-auto max-w-7xl px-6 pb-16 md:px-10" id="faq">
      <div className="mb-12 text-center">
        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-slate-500">FAQ</p>
        <h2 className="mt-4 text-4xl font-black text-black sm:text-5xl">Frequently asked questions</h2>
      </div>

      <div className="grid gap-4">
        {faqs.map((item, index) => (
          <motion.details
            key={item.question}
            className="group rounded-[28px] border border-black/5 bg-white p-6 shadow-soft"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.35, delay: index * 0.08 }}
          >
            <summary className="cursor-pointer list-none text-lg font-semibold text-black transition-colors group-open:text-purple">
              {item.question}
            </summary>
            <p className="mt-4 text-slate-600 leading-7">{item.answer}</p>
          </motion.details>
        ))}
      </div>
    </section>
  );
}
