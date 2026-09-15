"use client";

import { motion } from "framer-motion";

const products = [
  {
    title: "Prime Performance Pack",
    description: "A premium collection of routines, recovery tools, and guided assets for high-impact transformation.",
    price: "₹299",
    accent: "from-purple to-pink",
  },
  {
    title: "Recovery Ritual Kit",
    description: "Restorative resources, mobility protocols, and premium recovery guidance for sustained results.",
    price: "₹399",
    accent: "from-neon to-purple",
  },
  {
    title: "Modern Strength Set",
    description: "A curated fitness bundle built for strength, speed, and sculpted performance.",
    price: "₹349",
    accent: "from-pink to-neon",
  },
  {
    title: "AI Support Bundle",
    description: "Smart tracking, adaptive coaching tools, and performance insights for next-level consistency.",
    price: "₹599",
    accent: "from-purple to-neon",
  },
  {
    title: "Discipline Journal",
    description: "Daily habit prompts, premium accountability templates, and mindset clarity for lasting change.",
    price: "₹249",
    accent: "from-neon to-pink",
  },
];

export default function ProductsSection() {
  return (
    <section className="mx-auto max-w-7xl px-6 pb-16 md:px-10" id="products">
      <div className="mb-12 max-w-3xl">
        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-slate-500">Featured Products</p>
        <h2 className="mt-4 text-4xl font-black text-black sm:text-5xl">Premium products designed to sell with clarity and confidence.</h2>
        <p className="mt-4 max-w-2xl text-base leading-8 text-slate-600">
          Clean, modern fitness goods with luxurious delivery, compelling presentation, and premium value built in.
        </p>
      </div>

      <div className="grid gap-6 xl:grid-cols-2">
        {products.map((product) => (
          <motion.div
            key={product.title}
            className="glass-card rounded-[36px] border border-black/5 p-8"
            whileHover={{ y: -10 }}
            transition={{ duration: 0.3 }}
          >
            <div className={`mb-5 inline-flex items-center justify-center rounded-3xl bg-gradient-to-r ${product.accent} px-4 py-3 text-sm font-semibold text-white shadow-glow`}>
              {product.title.split(" ")[0]}
            </div>
            <h3 className="text-2xl font-bold text-black">{product.title}</h3>
            <p className="mt-4 text-slate-600">{product.description}</p>
            <div className="mt-6 flex items-center justify-between gap-4">
              <span className="text-xl font-semibold text-black">{product.price}</span>
              <a
                href="#newsletter"
                className="rounded-full bg-black px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#3900c4]"
              >
                Buy Now
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
