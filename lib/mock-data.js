const categoryThemes = {
  "E-books": {
    badge: "Mindset",
    backgrounds: [
      "linear-gradient(135deg, #e879f9 0%, #7c3aed 52%, #09090b 100%)",
      "linear-gradient(135deg, #d946ef 0%, #4338ca 55%, #0f172a 100%)",
      "linear-gradient(135deg, #c084fc 0%, #7c3aed 45%, #111827 100%)",
    ],
  },
  "Gym Materials": {
    badge: "Strength",
    backgrounds: [
      "linear-gradient(135deg, #c026d3 0%, #6d28d9 55%, #0f172a 100%)",
      "linear-gradient(135deg, #e879f9 0%, #3730a3 50%, #09090b 100%)",
      "linear-gradient(135deg, #a855f7 0%, #4f46e5 45%, #111827 100%)",
    ],
  },
  Shakes: {
    badge: "Fuel",
    backgrounds: [
      "linear-gradient(135deg, #f0abfc 0%, #8b5cf6 42%, #1f2937 100%)",
      "linear-gradient(135deg, #d8b4fe 0%, #4f46e5 48%, #111827 100%)",
      "linear-gradient(135deg, #f5d0fe 0%, #7c3aed 40%, #09090b 100%)",
    ],
  },
  Planners: {
    badge: "Systems",
    backgrounds: [
      "linear-gradient(135deg, #f0abfc 0%, #7c3aed 45%, #111827 100%)",
      "linear-gradient(135deg, #e879f9 0%, #4338ca 52%, #020617 100%)",
      "linear-gradient(135deg, #c084fc 0%, #6d28d9 48%, #111827 100%)",
    ],
  },
  Bags: {
    badge: "Travel",
    backgrounds: [
      "linear-gradient(135deg, #d946ef 0%, #312e81 44%, #020617 100%)",
      "linear-gradient(135deg, #c084fc 0%, #7c3aed 45%, #111827 100%)",
      "linear-gradient(135deg, #e879f9 0%, #4f46e5 42%, #0f172a 100%)",
    ],
  },
  "Compression Shirts": {
    badge: "Apparel",
    backgrounds: [
      "linear-gradient(135deg, #f0abfc 0%, #5b21b6 45%, #020617 100%)",
      "linear-gradient(135deg, #d8b4fe 0%, #4338ca 35%, #0f172a 100%)",
      "linear-gradient(135deg, #f5d0fe 0%, #312e81 48%, #111827 100%)",
    ],
  },
  "Reels Bundle": {
    badge: "Content",
    backgrounds: [
      "linear-gradient(135deg, #f0abfc 0%, #9333ea 42%, #18181b 100%)",
      "linear-gradient(135deg, #e879f9 0%, #4f46e5 48%, #020617 100%)",
      "linear-gradient(135deg, #c084fc 0%, #7c3aed 44%, #111827 100%)",
    ],
  },
};

function slugify(value) {
  return value
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

function createGallery(name, category) {
  const theme = categoryThemes[category] || categoryThemes["E-books"];

  return theme.backgrounds.map((background, index) => ({
    id: `${slugify(name)}-${index + 1}`,
    title: `${theme.badge} Frame ${index + 1}`,
    eyebrow: index === 0 ? "Front View" : index === 1 ? "Detail Shot" : "Community Fit",
    background,
  }));
}

function normalizeImageUrls(imageUrls) {
  const list = Array.isArray(imageUrls) ? imageUrls : String(imageUrls || "").split("\n");
  return list.map((item) => item.trim()).filter(Boolean).slice(0, 3);
}

function createImageGallery(name, category, imageUrls) {
  const urls = normalizeImageUrls(imageUrls);
  if (urls.length === 0) {
    return createGallery(name, category);
  }

  return urls.map((imageUrl, index) => ({
    id: `${slugify(name)}-${index + 1}`,
    title: `${category} Image ${index + 1}`,
    eyebrow: index === 0 ? "Front View" : index === 1 ? "Detail Shot" : "Lifestyle View",
    imageUrl,
    background: "linear-gradient(135deg, #111827 0%, #1f2937 100%)",
  }));
}

function createProduct({
  id,
  name,
  category,
  price,
  tag,
  featured = false,
  shortDescription,
  description,
  features,
  shippingLabel,
  deliveryNote,
  imageUrls = [],
}) {
  return {
    id,
    slug: slugify(name),
    name,
    category,
    price,
    tag,
    featured,
    shortDescription,
    description,
    features,
    shippingLabel,
    deliveryNote,
    gallery: createImageGallery(name, category, imageUrls),
  };
}

export const PRODUCT_CATEGORIES = [
  "All",
  "E-books",
  "Gym Materials",
  "Shakes",
  "Planners",
  "Bags",
  "Compression Shirts",
  "Reels Bundle",
];

export const INITIAL_PRODUCTS = [
  createProduct({
    id: "prod_iron_mind",
    name: "Iron Mind Blueprint",
    category: "E-books",
    price: 699,
    tag: "Bestseller",
    featured: true,
    shortDescription: "A 12-week mental conditioning playbook for discipline, focus, and repeatable execution.",
    description:
      "The Iron Mind Blueprint packages MaxEra's mindset system into one decisive guide. It blends routines, focus drills, and weekly reflections for creators, athletes, and founders who want more structure and less hesitation.",
    features: [
      "12-week performance system with daily focus prompts",
      "Printable habit trackers and reflection templates",
      "Built for solo execution or accountability partners",
    ],
    shippingLabel: "Instant digital delivery",
    deliveryNote: "Download link delivered to your email right after payment.",    digitalAccessLink: "https://drive.google.com/file/d/your-iron-mind-blueprint-link",  }),
  createProduct({
    id: "prod_tribe_lift",
    name: "Tribe Lift Straps",
    category: "Gym Materials",
    price: 1199,
    tag: "Gym Essential",
    featured: true,
    shortDescription: "Heavy-duty lifting straps built for stronger pulls, cleaner reps, and longer sessions.",
    description:
      "Designed for intense strength blocks, the Tribe Lift Straps keep your grip from becoming the limiting factor. Durable weave, soft wrist support, and a bold MaxEra finish make them feel competition-ready.",
    features: [
      "Reinforced stitching for heavy pull days",
      "Soft inner lining to reduce wrist irritation",
      "Works for deadlifts, rows, shrugs, and holds",
    ],
    shippingLabel: "Ships in 24 hours",
    deliveryNote: "Delivery across India in 3-5 working days.",
  }),
  createProduct({
    id: "prod_alpha_fuel",
    name: "Alpha Recovery Shake",
    category: "Shakes",
    price: 1499,
    tag: "Top Rated",
    featured: true,
    shortDescription: "A recovery-first blend built to support training volume, energy, and routine consistency.",
    description:
      "Alpha Recovery Shake is the post-session ritual for the MaxEra community. It is designed for smooth mixing, balanced macros, and a habit-friendly flavor profile that makes recovery feel automatic.",
    features: [
      "Balanced recovery formula for daily training cycles",
      "Smooth blend profile with low-clump mixability",
      "Pairs cleanly with morning or post-workout routines",
    ],
    shippingLabel: "Ships in 24 hours",
    deliveryNote: "Sealed tins are dispatched within one business day.",
  }),
  createProduct({
    id: "prod_war_room",
    name: "War Room Planner",
    category: "Planners",
    price: 899,
    tag: "Planner Drop",
    featured: true,
    shortDescription: "A weekly execution planner for training, content, learning, and self-audits.",
    description:
      "The War Room Planner gives structure to the work behind your goals. Weekly planning pages, habit scorecards, and execution reviews help turn motivation into visible progress.",
    features: [
      "90-day layout for habits, priorities, and reviews",
      "Dedicated pages for gym, business, and mindset goals",
      "Minimal design for fast daily use",
    ],
    shippingLabel: "Ships in 24 hours",
    deliveryNote: "Premium hardbound planner delivered in 4-6 working days.",
  }),
  createProduct({
    id: "prod_road_pack",
    name: "Road Warrior Duffel",
    category: "Bags",
    price: 2299,
    tag: "New Arrival",
    featured: false,
    shortDescription: "A structured duffel bag made for gym commutes, travel, and daily carry discipline.",
    description:
      "Road Warrior Duffel keeps your day dialed in with dedicated compartments, durable zips, and a clean silhouette that fits both gym floors and travel terminals.",
    features: [
      "Separate zones for shoes, shaker, and accessories",
      "Water-resistant shell with reinforced handles",
      "Built for daily training carry and short trips",
    ],
    shippingLabel: "Ships in 24 hours",
    deliveryNote: "Delivered across major cities in 3-5 working days.",
  }),
  createProduct({
    id: "prod_forge_tee",
    name: "Forge Compression Tee",
    category: "Compression Shirts",
    price: 1699,
    tag: "Performance Fit",
    featured: false,
    shortDescription: "A second-skin training tee that supports movement, focus, and all-session comfort.",
    description:
      "Forge Compression Tee is cut for performance sessions where breathability and fit matter. It layers well, moves cleanly, and gives the MaxEra visual identity a sharper edge.",
    features: [
      "Stretch-knit build for unrestricted movement",
      "Sweat-managing fabric for tough sessions",
      "Athletic fit designed for gym and recovery wear",
    ],
    shippingLabel: "Ships in 24 hours",
    deliveryNote: "Dispatch in one business day with tracked delivery.",
  }),
  createProduct({
    id: "prod_relentless_notes",
    name: "Relentless Notes Pack",
    category: "E-books",
    price: 549,
    tag: "Digital Drop",
    featured: false,
    shortDescription: "A punchy collection of mindset prompts, journaling pages, and self-correction exercises.",
    description:
      "Relentless Notes Pack is a lighter, faster companion to the flagship blueprint. Use it to restart momentum, break loops, and tighten your self-talk.",
    features: [
      "Quick-read chapters for immediate application",
      "Journaling prompts focused on clarity and action",
      "Ideal for morning resets and weekly reflections",
    ],
    shippingLabel: "Instant digital delivery",
    deliveryNote: "Email delivery happens automatically after checkout.",
    digitalAccessLink: "https://drive.google.com/file/d/your-relentless-notes-pack-link",
  }),
  createProduct({
    id: "prod_command_grips",
    name: "Command Grip Set",
    category: "Gym Materials",
    price: 1399,
    tag: "Grip Upgrade",
    featured: false,
    shortDescription: "Training grips engineered for pulling volume, callus protection, and faster transitions.",
    description:
      "Command Grip Set supports high-volume back days and hybrid conditioning blocks. It trims fatigue in the hands while keeping setup quick between movements.",
    features: [
      "Textured grip surface with secure wrist lock",
      "Cuts down hand fatigue on pull-heavy sessions",
      "Easy to pack inside any MaxEra bag",
    ],
    shippingLabel: "Ships in 24 hours",
    deliveryNote: "Standard delivery window is 3-5 working days.",
  }),
];

export const INITIAL_NEWSLETTER_SUBSCRIBERS = [
  {
    id: "sub_001",
    email: "focus@maxera.in",
    joinedAt: "2026-05-24T08:45:00.000Z",
    source: "Newsletter",
  },
  {
    id: "sub_002",
    email: "build@maxera.in",
    joinedAt: "2026-05-20T10:30:00.000Z",
    source: "Newsletter",
  },
];

export const INITIAL_USERS = [
  {
    id: "usr_001",
    name: "Aarav Mehta",
    email: "aarav@maxera.in",
    phone: "+91 98765 12345",
    address: "Koramangala, Bengaluru",
    joinedAt: "2026-05-23T07:00:00.000Z",
    source: "Community",
  },
  {
    id: "usr_002",
    name: "Diya Sharma",
    email: "diya@maxera.in",
    phone: "+91 99881 77665",
    address: "Andheri West, Mumbai",
    joinedAt: "2026-05-18T12:15:00.000Z",
    source: "Customer",
  },
  {
    id: "usr_003",
    name: "Kabir Singh",
    email: "kabir@maxera.in",
    phone: "+91 91234 56780",
    address: "Civil Lines, Jaipur",
    joinedAt: "2026-05-12T14:10:00.000Z",
    source: "Newsletter",
  },
];

export const INITIAL_ORDERS = [
  {
    id: "MXR-2048",
    customerName: "Diya Sharma",
    email: "diya@maxera.in",
    phone: "+91 99881 77665",
    address: "Andheri West, Mumbai",
    productName: "Forge Compression Tee",
    productSlug: "forge-compression-tee",
    amount: 1699,
    status: "Shipped",
    createdAt: "2026-05-25T06:25:00.000Z",
  },
  {
    id: "MXR-2047",
    customerName: "Aarav Mehta",
    email: "aarav@maxera.in",
    phone: "+91 98765 12345",
    address: "Koramangala, Bengaluru",
    productName: "Alpha Recovery Shake",
    productSlug: "alpha-recovery-shake",
    amount: 1499,
    status: "Paid",
    createdAt: "2026-05-24T09:55:00.000Z",
  },
  {
    id: "MXR-2046",
    customerName: "Kabir Singh",
    email: "kabir@maxera.in",
    phone: "+91 91234 56780",
    address: "Civil Lines, Jaipur",
    productName: "War Room Planner",
    productSlug: "war-room-planner",
    amount: 899,
    status: "Pending",
    createdAt: "2026-05-21T15:35:00.000Z",
  },
  {
    id: "MXR-2042",
    customerName: "Sana Kapoor",
    email: "sana@maxera.in",
    phone: "+91 90909 80808",
    address: "Salt Lake, Kolkata",
    productName: "Tribe Lift Straps",
    productSlug: "tribe-lift-straps",
    amount: 1199,
    status: "Shipped",
    createdAt: "2026-05-03T11:20:00.000Z",
  },
];

export function createProductRecord(input) {
  const title = input.name.trim();
  const category = PRODUCT_CATEGORIES.includes(input.category) && input.category !== "All"
    ? input.category
    : "E-books";
  const isDigitalProduct = Boolean(input.isDigitalProduct);
  const canHavePhysicalVersion = category === "E-books";
  const price = isDigitalProduct ? Number(input.digitalPrice) || 0 : Number(input.price) || 0;
  const shortDescription = input.shortDescription.trim();
  const description = input.description.trim();
  const shippingLabel = input.shippingLabel.trim() || "Ships in 24 hours";
  const deliveryNote = input.deliveryNote.trim() || "Delivery timelines are shared after checkout.";
  const features = input.features
    .map((item) => item.trim())
    .filter(Boolean)
    .slice(0, 5);
  const imageUrls = normalizeImageUrls(input.imageUrls);

  return {
    ...createProduct({
      id: `prod_${slugify(title)}_${Date.now()}`,
      name: title,
      category,
      price,
      tag: input.tag?.trim() || "Admin Added",
      featured: Boolean(input.featured),
      shortDescription: shortDescription || "MaxEra product description coming in strong.",
      description:
        description ||
        "This product was added from the MaxEra admin panel and is ready to be merchandised across the storefront.",
      features:
        features.length > 0
          ? features
          : [
              "Freshly added through the protected admin dashboard",
              "Editable product story for future CMS or database hookup",
              "Ready for checkout and storefront rendering immediately",
            ],
      shippingLabel,
      deliveryNote,
      imageUrls,
    }),
    isDigitalProduct,
    digitalLabel: input.digitalLabel?.trim() || "",
    digitalPrice: Number(input.digitalPrice) || 0,
    digitalAccessLink: input.digitalAccessLink?.trim() || "",
    enablePhysicalVersion: canHavePhysicalVersion && Boolean(input.enablePhysicalVersion),
    physicalLabel: canHavePhysicalVersion ? input.physicalLabel?.trim() || "" : "",
    physicalPrice: canHavePhysicalVersion ? Number(input.physicalPrice) || 0 : 0,
  };
}
