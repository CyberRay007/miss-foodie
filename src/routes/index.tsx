import { createFileRoute } from "@tanstack/react-router";
import logo from "@/assets/miss-foodie-logo.png";
import heroDish from "@/assets/hero-dish.jpg";
import menuFlyer from "@/assets/miss-foodie-menu.png";
import dishAmala from "@/assets/dish-amala.jpg";
import dishFriedRice from "@/assets/dish-friedrice.jpg";
import dishPepper from "@/assets/dish-pepper.jpg";
import interior from "@/assets/interior.jpg";
import {
  MapPin, Phone, Clock, Star, Utensils, Car, CreditCard,
  Baby, Users, CheckCircle2, Truck, Instagram, Facebook,
} from "lucide-react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Miss Foodie — Authentic Nigerian Restaurant in Lekki, Lagos" },
      { name: "description", content: "Miss Foodie Fast Food Restaurant at Atlantic Mall, Chevron Drive, Lekki. Dine-in, takeaway & delivery. 4.9★ rated Nigerian cuisine — jollof, amala, fried rice & more." },
      { property: "og:title", content: "Miss Foodie — Authentic Nigerian Restaurant in Lekki" },
      { property: "og:description", content: "4.9★ rated. Dine-in, takeaway & delivery in Lekki, Lagos." },
    ],
  }),
  component: Index,
});

const PHONE = "0808 924 2669";
const PHONE_TEL = "+2348089242669";
const ADDRESS = "Atlantic Mall, 6 Chevron Drive, Eti-Osa, Lekki 105102, Lagos";
const MAPS_URL = "https://www.google.com/maps/search/?api=1&query=Miss+Foodie+Fast+Food+Restaurant+Atlantic+Centre+Chevron+Drive+Lekki";

const menu = {
  "Main Dish": ["White Rice", "Jollof Rice", "Spaghetti", "Porridge Yam", "Ewa Aganyin", "White Beans", "Porridge Beans", "Fried Rice", "Special Rice", "Rice & Beans", "Ofada Rice"],
  Protein: ["Turkey", "Chicken", "Ponmo", "Assorted", "Goat Meat", "Titus", "Snail", "Panla", "Asun", "Cowleg", "Croaker", "Beef", "Catfish", "Gizzard"],
  Swallow: ["Eba", "Amala", "Semo", "Iyan", "Fufu"],
  Sides: ["Moi Moi", "Coleslaw", "Fish Sauce", "Plantain"],
};

const reviews = [
  { name: "OAS", rating: 5, text: "This is a home away from home. Imagine getting the taste of our local food in a very beautiful, well-ventilated environment. I think I just found myself a new Amala joint." },
  { name: "Sola", rating: 5, text: "The Amala and ewedu I ate was more than satisfying. The amala was on fire and not pre-wrapped. More importantly, the food was affordable. I will surely repeat my call!" },
  { name: "Roqibat Yusuf", rating: 5, text: "Love the food so much to the point I get confused on which food to eat between the local and continental dishes. The ambience is so relaxing." },
  { name: "KUNOMSAS HABILA", rating: 5, text: "The food here is excellent, with great customer service and beautiful ambience — my favorite restaurant so far." },
  { name: "aishat odukoya", rating: 5, text: "The restaurant is a must try, it has a nice ambience and their food is very delicious. Can't wait to try their amala and ogunfe again." },
  { name: "olalekan omowumi", rating: 5, text: "I was marveled with the taste of their food, the varieties available coupled with the affordable price. I'm definitely gonna revisit often." },
];

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* NAV */}
      <header className="sticky top-0 z-50 border-b border-border/60 bg-background/85 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
          <a href="#top" className="flex items-center gap-2">
            <img src={logo} alt="Miss Foodie" className="h-10 w-10 rounded-full object-cover" />
            <span className="text-lg font-bold tracking-tight">Miss Foodie</span>
          </a>
          <nav className="hidden gap-6 text-sm font-medium md:flex">
            <a href="#menu" className="hover:text-brand">Menu</a>
            <a href="#about" className="hover:text-brand">About</a>
            <a href="#reviews" className="hover:text-brand">Reviews</a>
            <a href="#visit" className="hover:text-brand">Visit</a>
          </nav>
          <a href={`tel:${PHONE_TEL}`} className="inline-flex items-center gap-2 rounded-full bg-brand px-4 py-2 text-sm font-semibold text-primary-foreground shadow-[var(--shadow-card)] transition hover:opacity-90">
            <Phone className="h-4 w-4" /> Call
          </a>
        </div>
      </header>

      {/* HERO */}
      <section id="top" className="relative overflow-hidden" style={{ background: "var(--gradient-warm)" }}>
        <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 py-16 md:grid-cols-2 md:py-24">
          <div>
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-border bg-card px-3 py-1 text-xs font-medium">
              <Star className="h-3.5 w-3.5 fill-brand-yellow text-brand-yellow" />
              4.9 ★ on Google · 25 reviews
            </div>
            <h1 className="text-4xl font-extrabold leading-tight tracking-tight md:text-6xl">
              Authentic Nigerian flavours,{" "}
              <span className="bg-clip-text text-transparent" style={{ backgroundImage: "var(--gradient-brand)" }}>
                served with love
              </span>
            </h1>
            <p className="mt-5 max-w-lg text-base text-muted-foreground md:text-lg">
              Jollof, amala, ewedu, fried rice and more — fresh, affordable and made the way mama makes it. Dine in, take away or order delivery.
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <a href="#menu" className="inline-flex items-center gap-2 rounded-full bg-brand px-6 py-3 font-semibold text-primary-foreground shadow-[var(--shadow-warm)] transition hover:translate-y-[-1px]">
                <Utensils className="h-4 w-4" /> View Menu
              </a>
              <a href="https://glovoapp.com" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-6 py-3 font-semibold transition hover:bg-secondary">
                <Truck className="h-4 w-4" /> Order on Glovo
              </a>
            </div>
            <div className="mt-6 flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
              <span className="inline-flex items-center gap-1.5"><CheckCircle2 className="h-4 w-4 text-brand" /> Dine-in</span>
              <span className="inline-flex items-center gap-1.5"><CheckCircle2 className="h-4 w-4 text-brand" /> Takeaway</span>
              <span className="inline-flex items-center gap-1.5"><CheckCircle2 className="h-4 w-4 text-brand" /> Delivery</span>
            </div>
          </div>
          <div className="relative">
            <div className="absolute -inset-6 -z-10 rounded-[3rem] opacity-30 blur-3xl" style={{ background: "var(--gradient-brand)" }} />
            <img src={heroDish} alt="Signature Miss Foodie plate" width={1600} height={1200} className="aspect-square w-full rounded-[2rem] object-cover shadow-[var(--shadow-warm)]" />
            <div className="absolute -bottom-5 -left-5 hidden rounded-2xl bg-card p-3 shadow-[var(--shadow-card)] md:block">
              <img src={logo} alt="" className="h-16 w-16 rounded-full" />
            </div>
          </div>
        </div>
      </section>

      {/* QUICK INFO STRIP */}
      <section className="border-y border-border bg-card">
        <div className="mx-auto grid max-w-6xl gap-6 px-4 py-8 sm:grid-cols-2 lg:grid-cols-4">
          {[
            { icon: Clock, label: "Open today", value: "Closes 9:30 pm" },
            { icon: MapPin, label: "Find us", value: "Atlantic Mall, Lekki" },
            { icon: Phone, label: "Call", value: PHONE },
            { icon: CreditCard, label: "Price", value: "₦2,000–10,000" },
          ].map((it) => (
            <div key={it.label} className="flex items-start gap-3">
              <div className="rounded-xl bg-secondary p-2.5 text-brand"><it.icon className="h-5 w-5" /></div>
              <div>
                <div className="text-xs uppercase tracking-wide text-muted-foreground">{it.label}</div>
                <div className="font-semibold">{it.value}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* FEATURED DISHES */}
      <section className="mx-auto max-w-6xl px-4 py-20">
        <div className="mb-10 flex items-end justify-between">
          <div>
            <p className="mb-2 text-sm font-semibold uppercase tracking-wider text-brand">Tasting board</p>
            <h2 className="text-3xl font-bold md:text-4xl">Crowd favourites</h2>
          </div>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {[
            { img: dishAmala, name: "Amala & Ewedu", desc: "Hot, fresh amala served with rich ewedu soup and assorted meat." },
            { img: dishFriedRice, name: "Fried Rice & Turkey", desc: "Vibrant party-style fried rice with grilled turkey and plantain." },
            { img: dishPepper, name: "Pepper Soup", desc: "Spicy, aromatic pepper soup with catfish or assorted meat." },
          ].map((d) => (
            <article key={d.name} className="group overflow-hidden rounded-3xl bg-card shadow-[var(--shadow-card)] transition hover:-translate-y-1">
              <img src={d.img} alt={d.name} width={900} height={900} loading="lazy" className="aspect-[4/3] w-full object-cover transition duration-500 group-hover:scale-105" />
              <div className="p-5">
                <h3 className="text-lg font-bold">{d.name}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{d.desc}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* FULL MENU */}
      <section id="menu" className="bg-secondary/40 py-20">
        <div className="mx-auto max-w-6xl px-4">
          <div className="mb-10 text-center">
            <p className="mb-2 text-sm font-semibold uppercase tracking-wider text-brand">The big menu</p>
            <h2 className="text-3xl font-bold md:text-4xl">Something for every appetite</h2>
            <p className="mx-auto mt-3 max-w-xl text-muted-foreground">From local classics to continental favourites — mix and match your perfect plate.</p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {Object.entries(menu).map(([cat, items]) => (
              <div key={cat} className="rounded-3xl bg-card p-6 shadow-[var(--shadow-card)]">
                <h3 className="mb-4 inline-block rounded-full px-3 py-1 text-xs font-bold uppercase tracking-wider text-primary-foreground" style={{ background: "var(--gradient-brand)" }}>
                  {cat}
                </h3>
                <ul className="space-y-2 text-sm">
                  {items.map((i) => (
                    <li key={i} className="flex items-center gap-2 border-b border-dashed border-border/70 py-1.5 last:border-0">
                      <span className="h-1.5 w-1.5 rounded-full bg-brand" /> {i}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div className="mt-10 overflow-hidden rounded-3xl bg-card shadow-[var(--shadow-card)]">
            <img src={menuFlyer} alt="Miss Foodie full menu flyer" loading="lazy" className="w-full object-contain" />
          </div>
        </div>
      </section>

      {/* ABOUT / AMENITIES */}
      <section id="about" className="mx-auto max-w-6xl px-4 py-20">
        <div className="grid items-center gap-12 md:grid-cols-2">
          <div>
            <p className="mb-2 text-sm font-semibold uppercase tracking-wider text-brand">About us</p>
            <h2 className="text-3xl font-bold md:text-4xl">A casual, trendy spot in the heart of Lekki</h2>
            <p className="mt-4 text-muted-foreground">
              Miss Foodie is a home away from home — a relaxed, well-ventilated restaurant inside Atlantic Mall on Chevron Drive. Whether you're popping in for a quick bite, hosting a group lunch, or feeding the family, we've got you covered.
            </p>
            <div className="mt-6 grid grid-cols-2 gap-3 text-sm">
              {[
                { i: Utensils, t: "Dine-in & Takeaway" },
                { i: Users, t: "Great for groups" },
                { i: Baby, t: "Kid-friendly" },
                { i: Car, t: "Free parking lot" },
                { i: CreditCard, t: "Cards & NFC accepted" },
                { i: CheckCircle2, t: "Vegetarian options" },
              ].map(({ i: Icon, t }) => (
                <div key={t} className="flex items-center gap-2 rounded-xl bg-secondary/60 px-3 py-2">
                  <Icon className="h-4 w-4 text-brand" /> {t}
                </div>
              ))}
            </div>
          </div>
          <div className="relative">
            <img src={interior} alt="Miss Foodie restaurant interior" width={1600} height={1000} loading="lazy" className="rounded-3xl object-cover shadow-[var(--shadow-card)]" />
          </div>
        </div>
      </section>

      {/* REVIEWS */}
      <section id="reviews" className="bg-secondary/40 py-20">
        <div className="mx-auto max-w-6xl px-4">
          <div className="mb-10 flex flex-wrap items-end justify-between gap-4">
            <div>
              <p className="mb-2 text-sm font-semibold uppercase tracking-wider text-brand">What guests say</p>
              <h2 className="text-3xl font-bold md:text-4xl">Loved by Lagos foodies</h2>
            </div>
            <div className="flex items-center gap-3 rounded-2xl bg-card px-5 py-3 shadow-[var(--shadow-card)]">
              <div className="text-3xl font-extrabold">4.9</div>
              <div>
                <div className="flex">{[...Array(5)].map((_, i) => <Star key={i} className="h-4 w-4 fill-brand-yellow text-brand-yellow" />)}</div>
                <div className="text-xs text-muted-foreground">25 Google reviews</div>
              </div>
            </div>
          </div>
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {reviews.map((r) => (
              <figure key={r.name} className="flex h-full flex-col rounded-3xl bg-card p-6 shadow-[var(--shadow-card)]">
                <div className="mb-3 flex">{[...Array(r.rating)].map((_, i) => <Star key={i} className="h-4 w-4 fill-brand-yellow text-brand-yellow" />)}</div>
                <blockquote className="flex-1 text-sm leading-relaxed text-foreground/90">"{r.text}"</blockquote>
                <figcaption className="mt-4 text-sm font-semibold">— {r.name}</figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* VISIT */}
      <section id="visit" className="mx-auto max-w-6xl px-4 py-20">
        <div className="grid gap-10 md:grid-cols-2">
          <div>
            <p className="mb-2 text-sm font-semibold uppercase tracking-wider text-brand">Come visit</p>
            <h2 className="text-3xl font-bold md:text-4xl">We'd love to feed you</h2>
            <ul className="mt-8 space-y-5">
              <li className="flex gap-4">
                <div className="rounded-xl bg-secondary p-3 text-brand"><MapPin className="h-5 w-5" /></div>
                <div>
                  <div className="font-semibold">Address</div>
                  <p className="text-sm text-muted-foreground">{ADDRESS}</p>
                  <a href={MAPS_URL} target="_blank" rel="noreferrer" className="mt-1 inline-block text-sm font-semibold text-brand hover:underline">Get directions →</a>
                </div>
              </li>
              <li className="flex gap-4">
                <div className="rounded-xl bg-secondary p-3 text-brand"><Phone className="h-5 w-5" /></div>
                <div>
                  <div className="font-semibold">Phone</div>
                  <a href={`tel:${PHONE_TEL}`} className="text-sm text-muted-foreground hover:text-brand">{PHONE}</a>
                </div>
              </li>
              <li className="flex gap-4">
                <div className="rounded-xl bg-secondary p-3 text-brand"><Clock className="h-5 w-5" /></div>
                <div>
                  <div className="font-semibold">Hours</div>
                  <p className="text-sm text-muted-foreground">Open daily · Closes 9:30 pm</p>
                </div>
              </li>
              <li className="flex gap-4">
                <div className="rounded-xl bg-secondary p-3 text-brand"><Truck className="h-5 w-5" /></div>
                <div>
                  <div className="font-semibold">Delivery</div>
                  <a href="https://glovoapp.com" target="_blank" rel="noreferrer" className="text-sm text-muted-foreground hover:text-brand">Order on Glovo</a>
                </div>
              </li>
            </ul>
          </div>
          <div className="overflow-hidden rounded-3xl shadow-[var(--shadow-card)]">
            <iframe
              title="Miss Foodie location map"
              src="https://www.google.com/maps?q=Miss+Foodie+Fast+Food+Restaurant+Atlantic+Centre+Chevron+Drive+Lekki&output=embed"
              className="h-full min-h-[400px] w-full border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-border bg-card">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-4 py-8 md:flex-row">
          <div className="flex items-center gap-3">
            <img src={logo} alt="" className="h-9 w-9 rounded-full" />
            <div>
              <div className="font-bold">Miss Foodie</div>
              <div className="text-xs text-muted-foreground">…for ultimate food experience!</div>
            </div>
          </div>
          <div className="flex items-center gap-4 text-sm text-muted-foreground">
            <a href="https://www.instagram.com/miss.foodieng" target="_blank" rel="noreferrer" className="inline-flex items-center gap-1.5 hover:text-brand"><Instagram className="h-4 w-4" /> @miss.foodieng</a>
            <a href="https://www.facebook.com/" target="_blank" rel="noreferrer" className="inline-flex items-center gap-1.5 hover:text-brand"><Facebook className="h-4 w-4" /> Facebook</a>
          </div>
          <div className="text-xs text-muted-foreground">© {new Date().getFullYear()} Miss Foodie · Lekki, Lagos</div>
        </div>
      </footer>
    </div>
  );
}
