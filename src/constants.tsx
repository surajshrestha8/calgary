import { 
  Warehouse, 
  Tag, 
  ShoppingBag, 
  Package, 
  ClipboardList, 
  RotateCcw 
} from 'lucide-react';
import { ReactNode } from 'react';

export const NAV_LINKS = [
  { name: 'Services', href: '#services' },
  { name: 'Process', href: '#process' },
  { name: 'Why Us', href: '#why' },
  { name: 'Pricing', href: '#pricing' },
  { name: 'FAQ', href: '#faq' },
  { name: 'Contact', href: '#contact' },
];

export const MARQUEE_ITEMS = [
  "Amazon FBA Prep",
  "FBM Fulfillment",
  "FNSKU Labeling",
  "Bundling & Kitting",
  "Inventory Storage",
  "Receiving & Inspection",
  "Shipping to Amazon",
  "Shopify Fulfillment",
  "Walmart Prep",
  "TikTok Shop",
];

export interface Service {
  id: string;
  name: string;
  desc: string;
  icon: ReactNode;
  image: string;
  imageAlt: string;
}

export const SERVICES: Service[] = [
  {
    id: "SVC / 01",
    name: "Receiving & Inspection",
    desc: "We accept your shipments, count units, photograph damage, and confirm quantities — same-day notifications via email or portal.",
    icon: <Warehouse size={26} />,
    image: "/services/receiving-inspection.svg",
    imageAlt: "Warehouse receiving area with boxes ready for inspection",
  },
  {
    id: "SVC / 02",
    name: "Amazon FBA Prep",
    desc: "FNSKU labeling, polybagging, bubble wrap, suffocation warnings, expiration dates — fully compliant with Amazon's prep requirements.",
    icon: <Tag size={26} />,
    image: "/services/fba-prep.svg",
    imageAlt: "Amazon FBA prep station with label printer and packed units",
  },
  {
    id: "SVC / 03",
    name: "FBM Fulfillment",
    desc: "We pick, pack, and ship orders directly to your customers — discounted carrier rates with Canada Post, UPS, FedEx, and Purolator.",
    icon: <ShoppingBag size={26} />,
    image: "/services/fbm-fulfillment.svg",
    imageAlt: "Fulfillment packing station with outbound parcels",
  },
  {
    id: "SVC / 04",
    name: "Bundling & Kitting",
    desc: "Multi-packs, gift sets, subscription boxes — we assemble custom bundles and kits ready for retail or marketplace listings.",
    icon: <Package size={26} />,
    image: "/services/bundling-kitting.svg",
    imageAlt: "Kitting table with grouped products and bundle packaging",
  },
  {
    id: "SVC / 05",
    name: "Inventory Storage",
    desc: "Climate-controlled, secure pallet and shelf storage in our Calgary facility. Pay only for the space you use, by the month.",
    icon: <ClipboardList size={26} />,
    image: "/services/inventory-storage.svg",
    imageAlt: "Organized pallet storage and inventory shelves",
  },
  {
    id: "SVC / 06",
    name: "Returns Processing",
    desc: "Inspect customer returns, restock sellable units, and dispose of or return damaged goods — keep your account healthy.",
    icon: <RotateCcw size={26} />,
    image: "/services/returns-processing.svg",
    imageAlt: "Returns processing desk with inspection checklist",
  },
];

export const PROCESS_STEPS = [
  {
    num: "01",
    title: "Get a Quote",
    desc: "Tell us your product, volume, and prep needs. We'll send pricing within one business day.",
  },
  {
    num: "02",
    title: "Ship to Us",
    desc: "Send your inventory to our Calgary warehouse. We accept LTL, parcel, and container shipments.",
  },
  {
    num: "03",
    title: "We Prep It",
    desc: "Receive, inspect, label, and pack to Amazon's spec — or your custom FBM packaging.",
  },
  {
    num: "04",
    title: "Out the Door",
    desc: "Shipped to Amazon FCs or directly to your customers. Tracking and confirmation always.",
  },
];

export const WHY_US_POINTS = [
  {
    num: "01",
    title: "Strategic Calgary Location",
    desc: "Direct access to Western Canada and a short hop to Amazon's Alberta and BC fulfillment centers — lower freight, faster intake.",
  },
  {
    num: "02",
    title: "Transparent Per-Unit Pricing",
    desc: "No surprise fees. No long-term contracts. You pay for exactly what we touch — published rates, monthly invoicing.",
  },
  {
    num: "03",
    title: "Fast 24-Hour Turnaround",
    desc: "Most shipments are received, prepped, and outbound within one business day of arrival. No more sitting on inventory.",
  },
  {
    num: "04",
    title: "FBA Compliance Guaranteed",
    desc: "Trained team that knows Amazon's prep requirements cold — from FNSKU placement to expiration formatting and suffocation warnings.",
  },
  {
    num: "05",
    title: "Real Humans, Real Updates",
    desc: "Direct messaging with your account manager via email, WhatsApp, or our portal — no support ticket purgatory.",
  },
];

export const PLATFORMS = [
  { name: "Amazon CA", logo: "/platforms/amazon-ca.png" },
  { name: "Amazon US", logo: "/platforms/amazon.png" },
  { name: "Walmart", logo: "/platforms/wallmart.png" },
  { name: "Shopify", logo: "/platforms/shopify.png" },
  { name: "TikTok Shop", logo: "/platforms/tiktok-shop.png" },
  { name: "Etsy", logo: "/platforms/etsy.png" },
  { name: "eBay", logo: "/platforms/ebay.png" },
  { name: "SPN", logo: "/platforms/amazon.png" },
];

export const PRICING_PLANS = [
  {
    name: "Starter Prep",
    desc: "Receiving + FNSKU labeling for standard items.",
    price: "0.65",
    period: "PER UNIT",
    features: [
      "Receiving & count verification",
      "FNSKU label printing & application",
      "Removal of existing barcodes",
      "Box weighing & dimension capture",
      "Photo documentation",
    ],
    btnStyle: "btn-outline"
  },
  {
    name: "FBA Pro",
    desc: "Full Amazon FBA prep, ready to ship.",
    price: "1.25",
    period: "PER UNIT",
    featured: true,
    tag: "Most Popular",
    features: [
      "Everything in Starter",
      "Polybagging with suffocation warning",
      "Bubble wrap for fragile items",
      "Expiration date labeling",
      "FBA shipment plan creation",
      "Outbound to Amazon FC included",
    ],
    btnStyle: ""
  },
  {
    name: "Storage",
    desc: "Secure warehousing in our Calgary facility.",
    price: "22",
    period: "PER PALLET / MONTH",
    features: [
      "Climate-controlled space",
      "24/7 security & monitoring",
      "Real-time inventory access",
      "Shelf storage from $0.50/cu ft",
      "No long-term commitment",
    ],
    btnStyle: "btn-outline"
  }
];

export const FAQS = [
  {
    q: "How quickly can I start sending inventory?",
    a: "Same week. Once we agree on pricing and you sign our service agreement, we'll send you our warehouse address and intake instructions. Most clients have inventory shipped within 48 hours of signing."
  },
  {
    q: "Do you accept international shipments?",
    a: "Yes. We regularly receive containers from China, India, and the us, as well as parcel shipments from anywhere. We can act as the consignee for customs purposes — ask us for our customs broker recommendations."
  },
  {
    q: "What's your minimum volume?",
    a: "There is no minimum. Whether you're sending 50 units or 50,000, we'll prep them. That said, our per-unit pricing improves significantly above 1,000 units per month."
  },
  {
    q: "Can you handle hazmat or oversize items?",
    a: "We handle most non-regulated oversized items. Hazmat (lithium batteries, aerosols, flammables) is reviewed case-by-case — please tell us what you're shipping when you request a quote so we can confirm."
  },
  {
    q: "How do I track my inventory?",
    a: "You'll get a client portal login where you can see real-time inventory counts, incoming shipments, outbound history, and download invoices. We also send email notifications for every receipt and shipment."
  },
  {
    q: "What happens if my product gets damaged?",
    a: "If damage occurs in our facility, we cover replacement up to the documented unit cost. We carry full warehouse liability insurance and document every incoming shipment with photos to keep things transparent."
  }
];
