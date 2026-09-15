"use client";

import { motion } from "framer-motion";

const navItems = [
  { label: "Home", href: "/#home" },
  { label: "Products", href: "/products" },
  { label: "About", href: "/#about" },
  { label: "Admin", href: "/admin" },
];

export default function Navbar() {
  return (
    <motion.header
      className="fixed inset-x-0 top-0 z-50 mx-auto w-full border-b border-black/5 bg-white/90 backdrop-blur-xl shadow-sm"
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 md:px-10">
        <a href="/" className="flex items-center gap-3 text-base font-semibold text-black">
          <img src="/logo.png" alt="Premium Goods logo" className="h-11 w-11 rounded-3xl object-cover shadow-glow" />
          <span className="bg-gradient-to-r from-purple via-neon to-pink bg-clip-text text-transparent">
            MaxEra
          </span>
        </a>

        <nav className="hidden items-center gap-10 md:flex">
          {navItems.map((item) => (
            <a key={item.label} href={item.href} className="text-sm font-medium text-slate-700 transition hover:text-black">
              {item.label}
            </a>
          ))}
        </nav>

        <a
          href="/products"
          className="inline-flex items-center justify-center rounded-full border border-black/10 bg-black px-6 py-3 text-sm font-semibold text-white shadow-soft transition duration-300 hover:-translate-y-0.5 hover:bg-[#4a00ff]"
        >
          Shop Now
        </a>
      </div>
    </motion.header>
  );
}
