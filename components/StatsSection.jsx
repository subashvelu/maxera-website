"use client";

import { motion } from "framer-motion";

const stats = [
  { value: "10K+", label: "Transformations" },
  { value: "50K+", label: "Community Members" },
  { value: "100+", label: "Workout Systems" },
  { value: "1M+", label: "Motivation Views" },
];

export default function StatsSection() {
  return (
    <section className="mx-auto max-w-7xl px-6 pb-16 md:px-10" id="transformations">
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat) => (
          <motion.div
            key={stat.label}
            className="glass-card rounded-[32px] p-8 text-center"
            whileHover={{ y: -8 }}
            transition={{ duration: 0.3 }}
          >
            <p className="text-4xl font-black text-black sm:text-5xl">{stat.value}</p>
            <p className="mt-3 text-sm font-medium uppercase tracking-[0.22em] text-slate-500">{stat.label}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
