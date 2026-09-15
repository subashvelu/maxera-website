"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { useState } from "react";
import { useStore } from "../../context/StoreContext";
import SiteFooter from "../layout/SiteFooter";
import SiteHeader from "../layout/SiteHeader";
import ProductCard from "../shop/ProductCard";
import { ArrowRightIcon, BoltIcon, SparklesIcon, TargetIcon, UsersIcon } from "../shared/Icons";

const communityValues = [
  {
    title: "Discipline",
    description: "Systems, routines, and products that make follow-through easier than excuses.",
    icon: TargetIcon,
  },
  {
    title: "Growth",
    description: "Tools for mental sharpness, training consistency, and a higher-performance identity.",
    icon: BoltIcon,
  },
  {
    title: "Community",
    description: "A tribe-first brand voice that feels ambitious, motivating, and accountable.",
    icon: UsersIcon,
  },
];

export default function HomePageClient() {
  const { products, submitNewsletter } = useStore();
  const featuredProducts = products.filter((product) => product.featured).slice(0, 4);
  const [email, setEmail] = useState("");
  const [newsletterMessage, setNewsletterMessage] = useState("");

  function handleNewsletterSubmit(event) {
    event.preventDefault();
    const result = submitNewsletter(email);
    setNewsletterMessage(result.message);
    if (result.ok) {
      setEmail("");
    }
  }

  return (
    <div className="min-h-screen bg-[#050505] text-white">
      <SiteHeader />

      <main>
        <section className="relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(217,70,239,0.24),transparent_32%),radial-gradient(circle_at_bottom_right,rgba(79,70,229,0.2),transparent_28%)]" />
          <div className="mx-auto grid max-w-7xl gap-10 px-5 py-16 sm:px-6 lg:grid-cols-[1.1fr_0.9fr] lg:px-8 lg:py-24">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="relative z-10"
            >
              <div className="inline-flex items-center gap-2 rounded-full border border-fuchsia-400/30 bg-fuchsia-400/10 px-4 py-2 text-xs uppercase tracking-[0.35em] text-fuchsia-200">
                <SparklesIcon className="h-4 w-4" />
                Motivation. Growth. Gear.
              </div>

              <h1 className="mt-8 max-w-3xl text-5xl font-semibold leading-[1.02] text-white sm:text-6xl lg:text-7xl">
                Build a harder mind and a sharper body with MaxEra.
              </h1>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-white/68">
                High-energy products for people who want better habits, stronger training blocks, and a community that pushes
                them forward.
              </p>

              <div className="mt-10 flex flex-col gap-4 sm:flex-row">
                <Link
                  href="/shop"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-6 py-4 text-sm font-semibold text-zinc-950 transition hover:bg-fuchsia-100"
                >
                  Explore Shop
                  <ArrowRightIcon className="h-4 w-4" />
                </Link>
              </div>

              <div className="mt-12 grid gap-4 sm:grid-cols-3">
                {[
                  { label: "Products live", value: `${products.length}+` },
                  { label: "Weekly tribe rituals", value: "7/7" },
                ].map((item) => (
                  <div key={item.label} className="rounded-[1.75rem] border border-white/10 bg-white/[0.04] p-5 backdrop-blur">
                    <p className="text-xs uppercase tracking-[0.3em] text-white/38">{item.label}</p>
                    <p className="mt-3 text-3xl font-semibold text-white">{item.value}</p>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.15 }}
              className="relative z-10 rounded-[2.5rem] border border-white/10 bg-white/[0.04] p-5 shadow-[0_30px_120px_rgba(0,0,0,0.28)] backdrop-blur"
            >
              <div className="rounded-[2rem] bg-[linear-gradient(135deg,#d946ef_0%,#7c3aed_48%,#1d4ed8_100%)] p-8">
                <p className="text-xs uppercase tracking-[0.35em] text-white/70">This week&apos;s edge</p>
                <h2 className="mt-4 max-w-sm text-4xl font-semibold leading-tight text-white">Discipline isn&apos;t a mood. It&apos;s a system.</h2>
                <p className="mt-5 max-w-md text-sm leading-7 text-white/72">
                  Stack the products that keep your training, planning, and mindset aligned whether you are in the gym, at your desk, or on the move.
                </p>
              </div>
              <div className="mt-5 grid gap-4 sm:grid-cols-2">
                {featuredProducts.slice(0, 2).map((product) => (
                  <div key={product.id} className="rounded-[1.75rem] border border-white/10 bg-black/25 p-5">
                    <p className="text-xs uppercase tracking-[0.3em] text-fuchsia-200">{product.category}</p>
                    <h3 className="mt-3 text-xl font-semibold text-white">{product.name}</h3>
                    <p className="mt-2 text-sm leading-7 text-white/62">{product.shortDescription}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-5 py-16 sm:px-6 lg:px-8">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-sm uppercase tracking-[0.35em] text-fuchsia-300">Featured products</p>
              <h2 className="mt-3 text-4xl font-semibold text-white">Top-selling drops for disciplined people.</h2>
            </div>
            <Link href="/shop" className="text-sm font-medium text-white/72 transition hover:text-white">
              Browse the full shop
            </Link>
          </div>

          <div className="mt-10 grid gap-6 lg:grid-cols-2">
            {featuredProducts.map((product, index) => (
              <ProductCard key={product.id} product={product} index={index} />
            ))}
          </div>
        </section>

        <section className="border-y border-white/10 bg-white/[0.02]">
          <div className="mx-auto max-w-7xl px-5 py-16 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <p className="text-sm uppercase tracking-[0.35em] text-fuchsia-300">Why MaxEra community</p>
              <h2 className="mt-3 text-4xl font-semibold text-white">Everything is designed to help you stay in the work.</h2>
            </div>

            <div className="mt-10 grid gap-6 lg:grid-cols-3">
              {communityValues.map((value, index) => {
                const Icon = value.icon;

                return (
                  <motion.article
                    key={value.title}
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.5, delay: index * 0.08 }}
                    className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-7"
                  >
                    <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-fuchsia-400/12 text-fuchsia-200">
                      <Icon className="h-5 w-5" />
                    </div>
                    <h3 className="mt-5 text-2xl font-semibold text-white">{value.title}</h3>
                    <p className="mt-3 text-sm leading-7 text-white/62">{value.description}</p>
                  </motion.article>
                );
              })}
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-5 py-16 sm:px-6 lg:px-8">
          <div className="grid gap-8 rounded-[2.5rem] border border-white/10 bg-[linear-gradient(135deg,rgba(217,70,239,0.18),rgba(255,255,255,0.03),rgba(79,70,229,0.16))] p-8 lg:grid-cols-[1fr_0.85fr] lg:p-10">
            <div>
              <p className="text-sm uppercase tracking-[0.35em] text-fuchsia-200">Newsletter signup</p>
              <h2 className="mt-4 text-4xl font-semibold text-white">Join the tribe and get first access to product drops.</h2>
              <p className="mt-4 max-w-xl text-sm leading-7 text-white/70">
                New launches, challenge prompts, self-improvement notes, and gym-ready product updates land here first.
              </p>
            </div>

            <form onSubmit={handleNewsletterSubmit} className="flex flex-col gap-4 rounded-[2rem] border border-white/10 bg-black/25 p-6">
              <label className="text-sm font-medium text-white/75" htmlFor="newsletter-email">
                Email address
              </label>
              <input
                id="newsletter-email"
                type="email"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                placeholder="you@maxera.in"
                className="rounded-full border border-white/10 bg-white/[0.06] px-5 py-4 text-sm text-white outline-none placeholder:text-white/30 focus:border-fuchsia-300"
                required
              />
              <button className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-5 py-4 text-sm font-semibold text-zinc-950 transition hover:bg-fuchsia-100">
                Join the Tribe
                <ArrowRightIcon className="h-4 w-4" />
              </button>
              {newsletterMessage ? <p className="text-sm text-fuchsia-100">{newsletterMessage}</p> : null}
            </form>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}
