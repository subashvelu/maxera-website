"use client";

import { motion } from "framer-motion";

export default function NewsletterSection() {
  return (
    <section className="mx-auto max-w-7xl px-6 pb-24 md:px-10" id="newsletter">
      <motion.div
        className="rounded-[40px] border border-black/5 bg-gradient-to-br from-purple/8 to-pink/8 p-10 shadow-soft"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6 }}
      >
        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-slate-500">Stay updated</p>
            <h2 className="mt-4 text-4xl font-black text-black sm:text-5xl">Get premium product drops and offers</h2>
            <p className="mt-6 max-w-2xl text-base leading-8 text-slate-600">
              Subscribe for new arrivals, restock alerts, and curated product deals delivered straight to your inbox.
            </p>
          </div>

          <form className="flex flex-col gap-4 sm:flex-row">
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full rounded-3xl border border-black/10 bg-white/90 px-5 py-4 text-sm text-black outline-none transition focus:border-purple focus:ring-4 focus:ring-purple/10"
            />
            <button type="submit" className="rounded-3xl bg-black px-6 py-4 text-sm font-semibold text-white transition hover:bg-[#3000c4]">
              Subscribe
            </button>
          </form>
        </div>
      </motion.div>
    </section>
  );
}
