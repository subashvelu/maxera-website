"use client";

import { useMemo, useState } from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

const CATEGORIES = [
  "Electronics",
  "Clothing",
  "Books",
  "Home & Garden",
  "Sports",
  "Beauty",
];

const SAMPLE_PRODUCTS = [
  {
    id: 1,
    title: "Premium Wireless Headphones",
    price: 199,
    priceOld: 249,
    badge: "-20%",
    img: "https://images.unsplash.com/photo-1518441902119-1a1b2f6a0f6f?w=1200&q=80&auto=format&fit=crop",
    rating: 4.5,
    reviews: 128,
    category: "Electronics",
  },
  {
    id: 2,
    title: "Designer Cotton T-Shirt",
    price: 29,
    priceOld: null,
    badge: "NEW",
    img: "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?w=1200&q=80&auto=format&fit=crop",
    rating: 4.0,
    reviews: 85,
    category: "Clothing",
  },
  {
    id: 3,
    title: "JavaScript: The Definitive Guide",
    price: 45,
    priceOld: null,
    badge: null,
    img: "https://images.unsplash.com/photo-1512820790803-83ca734da794?w=1200&q=80&auto=format&fit=crop",
    rating: 4.8,
    reviews: 234,
    category: "Books",
  },
  {
    id: 4,
    title: "Smart Home Security Camera",
    price: 89,
    priceOld: 120,
    badge: "-26%",
    img: "https://images.unsplash.com/photo-1518544881359-9b9d3c0f06c7?w=1200&q=80&auto=format&fit=crop",
    rating: 4.2,
    reviews: 67,
    category: "Electronics",
  },
  {
    id: 5,
    title: "Essentials Travel Kit",
    price: 319,
    priceOld: null,
    badge: "NEW",
    img: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=1200&q=80&auto=format&fit=crop",
    rating: 4.3,
    reviews: 54,
    category: "Home & Garden",
  },
  {
    id: 6,
    title: "Running Shoes - Red",
    price: 129,
    priceOld: 149,
    badge: null,
    img: "https://images.unsplash.com/photo-1519744792095-2f2205e87b6f?w=1200&q=80&auto=format&fit=crop",
    rating: 4.6,
    reviews: 312,
    category: "Sports",
  },
];

export default function ProductsPage() {
  const [query, setQuery] = useState("");
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(1000);
  const [minRating, setMinRating] = useState(0);
  const [products, setProducts] = useState(SAMPLE_PRODUCTS);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return products.filter((p) => {
      if (q && !p.title.toLowerCase().includes(q) && !(p.category || "").toLowerCase().includes(q)) return false;
      if (selectedCategories.length && !selectedCategories.includes(p.category)) return false;
      if (p.price < minPrice || p.price > maxPrice) return false;
      if (p.rating < minRating) return false;
      return true;
    });
  }, [products, query, selectedCategories, minPrice, maxPrice, minRating]);

  function toggleCategory(cat) {
    setSelectedCategories((prev) => (prev.includes(cat) ? prev.filter((c) => c !== cat) : [...prev, cat]));
  }

  return (
    <div className="relative overflow-hidden bg-white text-slate-900 min-h-screen">
      <Navbar />

      <main className="pt-24 pb-20">
        <div className="mx-auto max-w-7xl px-6 md:px-10">
          <div className="grid gap-8 md:grid-cols-[260px_1fr]">
            {/* Sidebar */}
            <aside className="sticky top-28">
              <div className="rounded-[16px] border border-slate-100 bg-white p-6 shadow-sm">
                <h3 className="mb-4 text-lg font-semibold">Filters</h3>

                <div className="mb-6">
                  <p className="mb-2 text-sm font-semibold">Categories</p>
                  <div className="space-y-2">
                    {CATEGORIES.map((cat) => (
                      <label key={cat} className="flex items-center gap-3 text-sm">
                        <input type="checkbox" checked={selectedCategories.includes(cat)} onChange={() => toggleCategory(cat)} className="h-4 w-4" />
                        <span className="text-slate-700">{cat}</span>
                        <span className="ml-auto text-xs text-slate-400">{Math.floor(Math.random() * 300)}</span>
                      </label>
                    ))}
                  </div>
                </div>

                <div className="mb-6">
                  <p className="mb-2 text-sm font-semibold">Price Range</p>
                  <div className="flex items-center gap-3">
                    <input type="number" value={minPrice} onChange={(e) => setMinPrice(Number(e.target.value || 0))} className="w-1/2 rounded-md border px-3 py-2 text-sm" />
                    <input type="number" value={maxPrice} onChange={(e) => setMaxPrice(Number(e.target.value || 0))} className="w-1/2 rounded-md border px-3 py-2 text-sm" />
                  </div>
                </div>

                <div className="mb-6">
                  <p className="mb-2 text-sm font-semibold">Minimum Rating</p>
                  <div className="space-y-2 text-sm">
                    {[4,3,2,1].map((r) => (
                      <label key={r} className="flex items-center gap-3">
                        <input type="radio" name="rating" checked={minRating === r} onChange={() => setMinRating(r)} className="h-4 w-4" />
                        <span>{r}+ Stars</span>
                      </label>
                    ))}
                    <label className="flex items-center gap-3">
                      <input type="radio" name="rating" checked={minRating === 0} onChange={() => setMinRating(0)} className="h-4 w-4" />
                      <span>Any</span>
                    </label>
                  </div>
                </div>

                <button onClick={() => { setSelectedCategories([]); setMinPrice(0); setMaxPrice(1000); setMinRating(0); setQuery(""); }} className="w-full rounded-full bg-slate-50 px-4 py-2 text-sm font-semibold">Clear filters</button>
              </div>
            </aside>

            {/* Main content */}
            <section>
              <div className="mb-6 flex items-center justify-between gap-4">
                <div>
                  <h2 className="text-2xl font-black">Products <span className="text-sm font-medium text-slate-500">({filtered.length})</span></h2>
                  <p className="mt-2 text-sm text-slate-500">Browse and filter products</p>
                </div>

                <div className="flex items-center gap-3">
                  <div className="relative">
                    <input value={query} onChange={(e) => setQuery(e.target.value)} placeholder="Search products..." className="rounded-full border border-slate-200 bg-white py-3 pl-4 pr-10 text-sm shadow-sm outline-none" />
                    <span className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400">🔍</span>
                  </div>

                  <div className="hidden items-center gap-2 rounded-full border border-slate-200 bg-white px-3 py-2 text-sm md:flex">
                    <button className="text-slate-600">Grid</button>
                    <button className="text-slate-400">List</button>
                  </div>

                  <select className="rounded-full border border-slate-200 bg-white px-4 py-3 text-sm">
                    <option>Sort by: Relevance</option>
                    <option>Price: Low to High</option>
                    <option>Price: High to Low</option>
                    <option>Top Rated</option>
                  </select>
                </div>
              </div>

              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                {filtered.map((p) => (
                  <article key={p.id} className="rounded-[12px] border border-slate-100 bg-white shadow-sm">
                    <div className="relative overflow-hidden rounded-t-[12px]">
                      <img src={p.img} alt={p.title} className="h-44 w-full object-cover" />
                      {p.badge && <div className="absolute left-3 top-3 rounded-full bg-rose-500 px-3 py-1 text-xs font-semibold text-white">{p.badge}</div>}
                      <button className="absolute right-3 top-3 rounded-full bg-white/80 p-2 text-slate-700">♡</button>
                    </div>
                    <div className="p-4">
                      <h3 className="text-sm font-semibold text-slate-900">{p.title}</h3>
                      <div className="mt-2 flex items-center gap-3 text-xs text-slate-500">
                        <div className="flex items-center gap-1 text-amber-400">
                          <span>★</span><span>{p.rating}</span>
                        </div>
                        <span>·</span>
                        <span>({p.reviews})</span>
                      </div>
                      <div className="mt-4 flex items-baseline gap-3">
                        <span className="text-lg font-bold">₹{p.price}</span>
                        {p.priceOld && <span className="text-sm text-slate-400 line-through">₹{p.priceOld}</span>}
                      </div>
                      <div className="mt-4 flex items-center justify-between">
                        <button className="rounded-full bg-black px-4 py-2 text-sm font-semibold text-white">Add to cart</button>
                        <span className="text-sm text-slate-500">{p.category}</span>
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            </section>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
