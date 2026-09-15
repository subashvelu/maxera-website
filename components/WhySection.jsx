"use client";

import { motion } from "framer-motion";

const points = [
  "Curated premium products",
  "Fast shipping options",
  "Easy returns and support",
  "Mobile-friendly checkout",
  "Handpicked supplier quality",
  "Clean, polished shopping",
];

export default function WhySection() {
  return (
    <section className="mx-auto max-w-7xl px-6 pb-16 md:px-10" id="about">
      <div className="grid gap-12 xl:grid-cols-[0.9fr_1.1fr] xl:items-center">
        <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }}>
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-slate-500">Why choose us</p>
          <h2 className="mt-4 text-4xl font-black text-black sm:text-5xl">Simple premium products, no startup hype.</h2>
          <p className="mt-6 max-w-2xl text-base leading-8 text-slate-600">
            We curate high-quality products from trusted suppliers and package them in a clean shopping experience that feels premium without the noise.
          </p>

          <div className="mt-10 grid gap-4 sm:grid-cols-2">
            {points.map((point) => (
              <div key={point} className="rounded-[28px] border border-black/5 bg-white/70 p-5 shadow-soft">
                <p className="font-semibold text-black">{point}</p>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          className="relative rounded-[40px] border border-black/5 bg-gradient-to-br from-white to-slate-100 p-6 shadow-soft"
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
        >
          <div className="absolute -left-10 top-10 h-24 w-24 rounded-full bg-purple/20 blur-3xl" />
          <div className="absolute -right-10 bottom-14 h-20 w-20 rounded-full bg-pink/20 blur-3xl" />
          <div className="relative overflow-hidden rounded-[32px] bg-black/5 p-6">
            <div className="mb-6 flex items-center justify-between rounded-3xl bg-white/90 p-5">
              <div>
                <p className="text-sm uppercase tracking-[0.3em] text-slate-600">Sourcing</p>
                <h3 className="mt-3 text-2xl font-bold text-black">Trusted quality</h3>
              </div>
              <span className="rounded-full bg-gradient-to-r from-purple to-pink px-4 py-2 text-xs font-semibold text-white">
                Fast shipping
              </span>
            </div>
            <div className="grid gap-4">
              <div className="rounded-3xl bg-white p-4 shadow-soft">
                <p className="text-sm font-semibold text-black">Mobile-first dashboards</p>
                <p className="mt-2 text-sm text-slate-600">Track your product experience on any device with crisp, minimal design.</p>
              </div>
              <div className="rounded-3xl bg-white p-4 shadow-soft">
                <p className="text-sm font-semibold text-black">Scientifically designed products</p>
                <p className="mt-2 text-sm text-slate-600">Every product is backed by efficient progress models and premium habit engineering.</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
