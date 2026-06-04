import { createFileRoute } from "@tanstack/react-router";
import heroImg from "@/assets/hero-warehouse.jpg";
import flatlayImg from "@/assets/product-flatlay.jpg";
import {
  Phone,
  ShieldCheck,
  Truck,
  FileCheck2,
  BadgeCheck,
  ArrowRight,
  Shirt,
  Sparkles,
  Home as HomeIcon,
  ShoppingBag,
  FlaskConical,
  Gift,
  Check,
} from "lucide-react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "TopShelf Brands — UK Wholesale Distribution for Trade Buyers" },
      {
        name: "description",
        content:
          "UK wholesale distributor of 50+ brands across fashion, beauty, home and lifestyle. Trade accounts, competitive pricing, next-day UK fulfilment.",
      },
      { property: "og:title", content: "TopShelf Brands — UK Wholesale Distribution" },
      {
        property: "og:description",
        content:
          "One account. 50+ brands. Competitive trade pricing with verified UK fulfilment.",
      },
    ],
  }),
  component: Home,
});

const stats = [
  { value: "50+", label: "Brand partners" },
  { value: "10k+", label: "Active SKUs" },
  { value: "48hr", label: "UK dispatch" },
  { value: "20+", label: "Source countries" },
];

const trustBadges = [
  { icon: ShieldCheck, label: "Trade accounts only" },
  { icon: BadgeCheck, label: "Verified onboarding" },
  { icon: Truck, label: "Next-day UK fulfilment" },
  { icon: FileCheck2, label: "VAT invoices on all orders" },
  { icon: ShieldCheck, label: "Authorised distributor" },
];

const categories = [
  { icon: Shirt, name: "Fashion", desc: "Clothing & footwear", count: "2,400+ SKUs" },
  { icon: Sparkles, name: "Beauty", desc: "Cosmetics & skincare", count: "1,800+ SKUs" },
  { icon: HomeIcon, name: "Kitchen & home", desc: "Homeware & garden", count: "1,500+ SKUs" },
  { icon: ShoppingBag, name: "Bags & accessories", desc: "Jewellery & leather", count: "950+ SKUs" },
  { icon: FlaskConical, name: "Fragrance", desc: "Licensed brands", count: "640+ SKUs" },
  { icon: Gift, name: "Toys & gifts", desc: "Branded & licensed", count: "780+ SKUs" },
];

const steps = [
  {
    n: "01",
    title: "Apply online",
    desc: "Submit a short trade application with your business details and intended sales channels.",
  },
  {
    n: "02",
    title: "Account review",
    desc: "We verify your business within 24 hours and confirm your account tier and credit terms.",
  },
  {
    n: "03",
    title: "Access the catalogue",
    desc: "Browse wholesale pricing, MOQs, and live stock levels across all brand partners.",
  },
  {
    n: "04",
    title: "Place orders",
    desc: "Order online or via your account manager. We handle pick, pack and UK dispatch.",
  },
];

const brandLogos = [
  "ARDEN & CO",
  "MAISON LUXE",
  "NORTHFIELD",
  "OAKWELL",
  "HARLOW",
  "CARTER LANE",
  "BLACKMOOR",
  "ST. JAMES",
];

const benefits = [
  "Tiered wholesale pricing — better margins as you scale",
  "Live stock visibility across every brand partner",
  "Dedicated UK account manager from day one",
  "Drop-ship and bulk fulfilment from our Midlands hub",
  "Credit terms available for established resellers",
  "No listing fees, no platform commission",
];

function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Top bar */}
      <div className="bg-surface-dark text-primary-foreground/80 text-xs">
        <div className="mx-auto max-w-7xl px-6 py-2.5 flex items-center justify-between">
          <span className="hidden sm:inline tracking-wide">
            UK wholesale distributor — sourcing from 20+ countries worldwide
          </span>
          <span className="sm:hidden tracking-wide">UK wholesale distributor</span>
          <div className="flex items-center gap-5">
            <a href="#" className="hover:text-gold transition-colors">Trade login</a>
            <a href="tel:+441216000000" className="hidden sm:flex items-center gap-1.5 hover:text-gold transition-colors">
              <Phone className="h-3 w-3" />
              +44 121 600 0000
            </a>
          </div>
        </div>
      </div>

      {/* Header */}
      <header className="sticky top-0 z-40 bg-background/85 backdrop-blur border-b border-border">
        <div className="mx-auto max-w-7xl px-6 h-20 flex items-center justify-between">
          <a href="/" className="flex items-center gap-3">
            <div className="h-10 w-10 bg-primary text-primary-foreground flex items-center justify-center rounded-sm">
              <span className="font-display text-2xl leading-none">T</span>
            </div>
            <div className="leading-tight">
              <div className="font-display text-xl text-primary">TopShelf</div>
              <div className="text-[10px] tracking-[0.2em] text-muted-foreground uppercase -mt-0.5">Brands</div>
            </div>
          </a>
          <nav className="hidden md:flex items-center gap-9 text-sm">
            <a href="#catalogue" className="text-foreground/80 hover:text-primary transition-colors">Catalogue</a>
            <a href="#brands" className="text-foreground/80 hover:text-primary transition-colors">Brand partners</a>
            <a href="#how" className="text-foreground/80 hover:text-primary transition-colors">How it works</a>
            <a href="#why" className="text-foreground/80 hover:text-primary transition-colors">Why TopShelf</a>
            <a href="#contact" className="text-foreground/80 hover:text-primary transition-colors">Contact</a>
          </nav>
          <div className="flex items-center gap-3">
            <a href="#apply" className="hidden sm:inline-flex items-center gap-2 bg-primary text-primary-foreground px-5 py-2.5 text-sm font-medium hover:bg-primary/90 transition-colors rounded-sm">
              Apply for account
              <ArrowRight className="h-3.5 w-3.5" />
            </a>
          </div>
        </div>
      </header>

      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={heroImg}
            alt="TopShelf Brands UK distribution warehouse"
            className="h-full w-full object-cover"
            width={1920}
            height={1280}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-surface-dark/95 via-surface-dark/80 to-surface-dark/30" />
        </div>

        <div className="relative mx-auto max-w-7xl px-6 py-24 lg:py-36">
          <div className="max-w-2xl text-primary-foreground">
            <div className="inline-flex items-center gap-2 text-xs tracking-[0.25em] uppercase text-gold mb-8">
              <span className="h-px w-8 bg-gold" />
              Est. UK Wholesale & Distribution
            </div>
            <h1 className="font-display text-5xl md:text-6xl lg:text-7xl leading-[1.05] mb-8">
              One account.<br />
              <span className="text-gradient-gold">50+ brands.</span><br />
              Competitive trade pricing.
            </h1>
            <p className="text-lg text-primary-foreground/75 max-w-xl mb-10 leading-relaxed">
              TopShelf Brands supplies trade buyers with branded consumer goods across
              fashion, beauty, home and lifestyle — with fast UK dispatch and no listing fees.
            </p>
            <div className="flex flex-wrap gap-4">
              <a href="#apply" className="inline-flex items-center gap-2 bg-gold text-surface-dark px-7 py-4 text-sm font-semibold tracking-wide hover:bg-gold-soft transition-colors rounded-sm">
                Apply for a trade account
                <ArrowRight className="h-4 w-4" />
              </a>
              <a href="#catalogue" className="inline-flex items-center gap-2 border border-primary-foreground/30 text-primary-foreground px-7 py-4 text-sm font-medium hover:bg-primary-foreground/10 transition-colors rounded-sm">
                Download catalogue
              </a>
            </div>
          </div>

          {/* Stat cards */}
          <div className="relative mt-20 grid grid-cols-2 lg:grid-cols-4 gap-px bg-primary-foreground/10 border border-primary-foreground/10">
            {stats.map((s) => (
              <div key={s.label} className="bg-surface-dark/70 backdrop-blur px-6 py-7">
                <div className="font-display text-4xl md:text-5xl text-gold leading-none">{s.value}</div>
                <div className="mt-3 text-xs uppercase tracking-[0.2em] text-primary-foreground/60">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust bar */}
      <section className="border-y border-border bg-surface">
        <div className="mx-auto max-w-7xl px-6 py-6 flex flex-wrap items-center justify-center md:justify-between gap-x-8 gap-y-3">
          {trustBadges.map((b) => (
            <div key={b.label} className="flex items-center gap-2 text-sm text-muted-foreground">
              <b.icon className="h-4 w-4 text-gold" />
              <span>{b.label}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Brand logo strip */}
      <section id="brands" className="py-16 border-b border-border">
        <div className="mx-auto max-w-7xl px-6">
          <p className="text-center text-xs uppercase tracking-[0.25em] text-muted-foreground mb-10">
            Trusted distribution partner for leading brands
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-x-10 gap-y-6">
            {brandLogos.map((b) => (
              <div key={b} className="text-center font-display text-base lg:text-lg text-foreground/40 hover:text-foreground transition-colors tracking-wider">
                {b}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Categories */}
      <section id="catalogue" className="py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-6">
            <div className="max-w-xl">
              <div className="text-xs uppercase tracking-[0.25em] text-gold mb-3">Categories</div>
              <h2 className="font-display text-4xl md:text-5xl text-primary mb-4">Browse the catalogue</h2>
              <p className="text-muted-foreground">
                All categories available to approved trade accounts. Tiered pricing and MOQs apply.
              </p>
            </div>
            <a href="#apply" className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:text-gold transition-colors">
              Request full catalogue <ArrowRight className="h-4 w-4" />
            </a>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-border">
            {categories.map((c) => (
              <a
                key={c.name}
                href="#apply"
                className="group bg-card p-8 hover:bg-surface transition-colors flex flex-col"
              >
                <div className="h-12 w-12 bg-primary/5 text-primary flex items-center justify-center mb-6 group-hover:bg-gold group-hover:text-surface-dark transition-colors rounded-sm">
                  <c.icon className="h-5 w-5" />
                </div>
                <h3 className="font-display text-2xl text-primary mb-1">{c.name}</h3>
                <p className="text-sm text-muted-foreground mb-6">{c.desc}</p>
                <div className="mt-auto flex items-center justify-between pt-6 border-t border-border">
                  <span className="text-xs uppercase tracking-wider text-muted-foreground">{c.count}</span>
                  <ArrowRight className="h-4 w-4 text-muted-foreground group-hover:text-gold group-hover:translate-x-1 transition-all" />
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section id="how" className="py-24 bg-surface-dark text-primary-foreground">
        <div className="mx-auto max-w-7xl px-6">
          <div className="max-w-2xl mb-16">
            <div className="text-xs uppercase tracking-[0.25em] text-gold mb-3">Onboarding</div>
            <h2 className="font-display text-4xl md:text-5xl mb-4">How it works</h2>
            <p className="text-primary-foreground/70">
              Getting set up as a trade buyer takes under 48 hours.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-primary-foreground/10">
            {steps.map((s) => (
              <div key={s.n} className="bg-surface-dark p-8 border-t-2 border-gold/0 hover:border-gold transition-colors">
                <div className="font-display text-5xl text-gold/80 mb-6">{s.n}</div>
                <h3 className="text-xl font-semibold mb-3">{s.title}</h3>
                <p className="text-sm text-primary-foreground/65 leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why TopShelf — split */}
      <section id="why" className="py-24">
        <div className="mx-auto max-w-7xl px-6 grid lg:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <img
              src={flatlayImg}
              alt="Premium branded products supplied by TopShelf Brands"
              className="w-full h-auto shadow-elegant rounded-sm"
              width={1024}
              height={1024}
              loading="lazy"
            />
            <div className="absolute -bottom-6 -right-6 bg-gold text-surface-dark px-6 py-5 shadow-elegant hidden md:block rounded-sm">
              <div className="font-display text-3xl leading-none">10k+</div>
              <div className="text-[11px] uppercase tracking-[0.2em] mt-1">SKUs in stock</div>
            </div>
          </div>

          <div>
            <div className="text-xs uppercase tracking-[0.25em] text-gold mb-3">Why TopShelf</div>
            <h2 className="font-display text-4xl md:text-5xl text-primary mb-6">
              Built for resellers who take stock seriously.
            </h2>
            <p className="text-muted-foreground mb-8 leading-relaxed">
              Whether you sell on your own store, marketplace, or direct — we've built our
              distribution operation around the realities of running a retail business in the UK.
            </p>
            <ul className="space-y-4">
              {benefits.map((b) => (
                <li key={b} className="flex items-start gap-3">
                  <div className="mt-0.5 h-5 w-5 rounded-full bg-gold/15 flex items-center justify-center flex-shrink-0">
                    <Check className="h-3 w-3 text-gold" strokeWidth={3} />
                  </div>
                  <span className="text-foreground/85">{b}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section id="apply" className="py-24 bg-surface">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <div className="text-xs uppercase tracking-[0.25em] text-gold mb-4">Apply today</div>
          <h2 className="font-display text-4xl md:text-6xl text-primary mb-6 leading-tight">
            Open a trade account in under 48 hours.
          </h2>
          <p className="text-lg text-muted-foreground mb-10 max-w-xl mx-auto">
            Verified UK and EU resellers only. Submit your business details and our trade team
            will be in touch within one working day.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="#" className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-4 text-sm font-semibold tracking-wide hover:bg-primary/90 transition-colors rounded-sm">
              Start application
              <ArrowRight className="h-4 w-4" />
            </a>
            <a href="tel:+441216000000" className="inline-flex items-center gap-2 border border-primary/20 text-primary px-8 py-4 text-sm font-medium hover:bg-primary/5 transition-colors rounded-sm">
              <Phone className="h-4 w-4" />
              Speak to the trade team
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="bg-surface-dark text-primary-foreground/70 pt-16 pb-8">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-10 mb-12">
            <div className="col-span-2">
              <div className="flex items-center gap-3 mb-5">
                <div className="h-10 w-10 bg-gold text-surface-dark flex items-center justify-center rounded-sm">
                  <span className="font-display text-2xl leading-none">T</span>
                </div>
                <div className="leading-tight">
                  <div className="font-display text-xl text-primary-foreground">TopShelf</div>
                  <div className="text-[10px] tracking-[0.2em] text-primary-foreground/50 uppercase -mt-0.5">Brands</div>
                </div>
              </div>
              <p className="text-sm max-w-sm leading-relaxed">
                UK wholesale distributor supplying trade buyers with branded consumer goods
                across fashion, beauty, home and lifestyle.
              </p>
            </div>

            <div>
              <h4 className="text-primary-foreground text-sm font-semibold mb-4 tracking-wide">Catalogue</h4>
              <ul className="space-y-2.5 text-sm">
                <li><a href="#catalogue" className="hover:text-gold transition-colors">Fashion</a></li>
                <li><a href="#catalogue" className="hover:text-gold transition-colors">Beauty</a></li>
                <li><a href="#catalogue" className="hover:text-gold transition-colors">Home</a></li>
                <li><a href="#catalogue" className="hover:text-gold transition-colors">Fragrance</a></li>
              </ul>
            </div>

            <div>
              <h4 className="text-primary-foreground text-sm font-semibold mb-4 tracking-wide">Contact</h4>
              <ul className="space-y-2.5 text-sm">
                <li>trade@topshelfbrands.co.uk</li>
                <li>+44 121 600 0000</li>
                <li>Birmingham, United Kingdom</li>
              </ul>
            </div>
          </div>

          <div className="border-t border-primary-foreground/10 pt-6 flex flex-wrap items-center justify-between gap-4 text-xs">
            <div>© {new Date().getFullYear()} TopShelf Brands Ltd. All rights reserved.</div>
            <div className="flex gap-6">
              <a href="#" className="hover:text-gold transition-colors">Terms</a>
              <a href="#" className="hover:text-gold transition-colors">Privacy</a>
              <a href="#" className="hover:text-gold transition-colors">Trade terms</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
