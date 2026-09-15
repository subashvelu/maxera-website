"use client";

import { motion } from "framer-motion";

const testimonials = [
  {
    name: "Arya",
    role: "Happy Customer",
    quote: "The premium products feel high quality and make purchasing easy. The whole experience was smooth from checkout to delivery.",
    rating: 5,
  },
  {
    name: "Rhea",
    role: "Busy Professional",
    quote: "The transformation formula is clean, motivating, and easy to follow on mobile.",
    rating: 5,
  },
  {
    name: "Kian",
    role: "Gym Newcomer",
    quote: "Every workout felt intentional. The premium energy is real and the results showed fast.",
    rating: 5,
  },
];

export default function TestimonialsSection() {
  return (
    <section className="mx-auto max-w-7xl px-6 pb-16 md:px-10" id="transformations">
      <div className="mb-10 text-center">
        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-slate-500">Transformations</p>
        <h2 className="mt-4 text-4xl font-black text-black sm:text-5xl">Discipline Creates The Future You.</h2>
      </div>

      <div className="relative overflow-hidden rounded-[40px] border border-black/5 bg-gradient-to-br from-purple/10 via-white to-pink/10 px-6 py-10 shadow-soft">
        <div className="absolute right-8 top-8 h-28 w-28 rounded-full bg-[#FF6EC7]/20 blur-3xl" />
        <div className="absolute left-8 bottom-10 h-28 w-28 rounded-full bg-[#6A00FF]/20 blur-3xl" />

        <div className="grid gap-6 xl:grid-cols-3">
          {testimonials.map((person, index) => (
            <motion.div
              key={person.name}
              className="glass-card rounded-[32px] border border-black/5 p-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: index * 0.12 }}
            >
              <div className="mb-6 flex items-center gap-4">
                <div className="h-14 w-14 rounded-3xl bg-gradient-to-br from-purple to-pink" />
                <div>
                  <h3 className="font-semibold text-black">{person.name}</h3>
                  <p className="text-sm text-slate-500">{person.role}</p>
                </div>
              </div>
              <p className="text-slate-700">“{person.quote}”</p>
              <div className="mt-6 flex gap-1 text-yellow-500">
                {Array.from({ length: person.rating }).map((_, index) => (
                  <span key={index}>★</span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
