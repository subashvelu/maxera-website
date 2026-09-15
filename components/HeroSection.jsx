"use client";

import { motion } from "framer-motion";

export default function HeroSection() {
  return (
    <section className="relative mx-auto flex max-w-7xl flex-col gap-12 px-6 py-16 md:px-10 lg:py-24" id="home">
      <div className="absolute inset-x-0 top-0 -z-10 h-[520px] rounded-b-[80px] bg-gradient-to-b from-purple/10 to-transparent" />
      <div className="absolute left-0 top-24 -z-10 h-72 w-72 rounded-full bg-purple/20 blur-3xl" />
      <div className="absolute right-0 top-28 -z-10 h-80 w-80 rounded-full bg-pink/20 blur-3xl" />

      <div className="grid gap-12 xl:grid-cols-[1.05fr_0.95fr] xl:items-center">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
          <h1 className="mt-8 max-w-3xl text-5xl font-black leading-[0.95] text-slate-950 sm:text-6xl lg:text-7xl">
            <span className="block">Shop premium goods with effortless style.</span>
            <span className="block bg-gradient-to-r from-purple via-neon to-pink bg-clip-text text-transparent">
              Curated for quality, built for real life.
            </span>
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-700 sm:text-xl">
            Browse a premium collection of carefully selected products with fast shipping and a clean shopping experience.
          </p>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <a
              href="#products"
              className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-purple to-pink px-8 py-4 text-sm font-semibold text-white shadow-glow transition duration-300 hover:-translate-y-1"
            >
              Shop Collection
            </a>
            <a
              href="#newsletter"
              className="inline-flex items-center justify-center rounded-full border border-slate-200 bg-white px-8 py-4 text-sm font-semibold text-slate-900 shadow-soft transition duration-300 hover:-translate-y-1 hover:border-black"
            >
              View Products
            </a>
          </div>
        </motion.div>

        <motion.div
          className="relative overflow-hidden rounded-[40px] border border-black/5 bg-white p-6 shadow-soft"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.15 }}
        >
          <div className="absolute right-6 top-6 h-20 w-20 rounded-full bg-gradient-to-br from-purple to-pink opacity-30 blur-3xl" />
          <div className="absolute left-6 bottom-8 h-20 w-20 rounded-full bg-[#6A00FF]/20 blur-3xl" />
          <div className="relative rounded-[32px] border border-white/10 bg-slate-950 p-6 text-white shadow-soft">
            <div className="mb-6 flex items-center justify-between rounded-3xl bg-white/10 p-4 text-sm text-slate-200">
              <div>
                <p className="font-semibold">Featured collection</p>
                <p className="text-xs uppercase tracking-[0.3em] text-slate-400">Curated products</p>
              </div>
              <span className="rounded-full bg-gradient-to-r from-purple to-pink px-3 py-1 text-xs uppercase tracking-[0.24em] text-white">Ready now</span>
            </div>

            <div className="relative overflow-hidden rounded-[32px] border border-white/10 bg-gradient-to-br from-slate-950 via-slate-900 to-black p-6">
              <div className="absolute inset-x-0 top-0 h-28 bg-gradient-to-b from-white/10 to-transparent" />
              <div className="flex items-end gap-4">
                <div className="h-40 w-40 rounded-3xl bg-gradient-to-br from-purple to-pink shadow-glow" />
                <div className="flex-1 space-y-4">
                  <div className="h-4 w-3/4 rounded-full bg-white/15" />
                  <div className="h-4 rounded-full bg-white/15" />
                  <div className="h-4 w-5/6 rounded-full bg-white/15" />
                </div>
              </div>
            </div>

            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              <div className="rounded-3xl border border-white/10 bg-white/5 p-4">
                <p className="text-sm text-slate-300">Smart routines</p>
                <p className="mt-2 text-lg font-semibold text-white">Personalized flow</p>
              </div>
              <div className="rounded-3xl border border-white/10 bg-white/5 p-4">
                <p className="text-sm text-slate-300">Recovery focused</p>
                <p className="mt-2 text-lg font-semibold text-white">Feel stronger</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
