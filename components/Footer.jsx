"use client";

export default function Footer() {
  return (
    <footer className="border-t border-black/5 bg-white/90 py-12">
      <div className="mx-auto flex max-w-7xl flex-col gap-10 px-6 md:px-10 lg:flex-row lg:items-start lg:justify-between">
        <div className="max-w-xl">
          <div className="mb-6 flex items-center gap-3">
            <img src="/logo.png" alt="Premium Goods logo" className="h-11 w-11 rounded-3xl object-cover" />
            <span className="text-xl font-semibold tracking-[0.24em] text-black">MaxEra</span>
          </div>
          <p className="max-w-md text-sm leading-7 text-slate-600">
            Curated premium products for people who want quality, clarity, and a clean shopping experience.
          </p>
          <ul className="mt-5 space-y-3 text-sm text-slate-600">
            <li><a href="/#home" className="transition hover:text-black">Home</a></li>
            <li><a href="/products" className="transition hover:text-black">Products</a></li>
            <li><a href="/#about" className="transition hover:text-black">About</a></li>
          </ul>
        </div>
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-slate-500">Contact</p>
          <ul className="mt-5 space-y-3 text-sm text-slate-600">
            <li><a href="mailto:maxdm.ai.solutions@gmail.com" className="transition hover:text-black">maxdm.ai.solutions@gmail.com</a></li>
          </ul>
        </div>
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-slate-500">Social</p>
          <ul className="mt-5 space-y-3 text-sm text-slate-600">
            <li><a href="https://www.instagram.com/premiumgoods" target="_blank" rel="noreferrer" className="transition hover:text-black">@premiumgoods</a></li>
            <li><a href="https://www.facebook.com/premiumgoods" target="_blank" rel="noreferrer" className="transition hover:text-black">Premium Goods</a></li>
            <li><a href="https://wa.me/18001234567" target="_blank" rel="noreferrer" className="transition hover:text-black">WhatsApp</a></li>
          </ul>
        </div>
      </div>
      <div className="mx-auto mt-10 max-w-7xl px-6 text-center text-sm text-slate-500 md:px-10">
        © 2026 MaxEra. Curated for premium lifestyle and simple shopping.
      </div>
    </footer>
  );
}
