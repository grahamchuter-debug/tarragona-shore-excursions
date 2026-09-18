# Tarragona Shore Excursions — World 2.0 Completion Report

**Date:** 26 July 2026  
**Domain:** tarragonashoreexcursions.com  
**Template:** World 2.0 Starter Template (platform v1.4 editorial features; request referenced v1.3 Experience Cards)  
**QA:** **World 2.0 Gold PASS — 113/115**  
**Scope:** Localhost only — no deploy, no Cloudflare, no Stripe

---

## Configuration

| Item | Value |
|------|--------|
| Brand | Tarragona Shore Excursions |
| Strapline | Spain's Hidden Roman Treasure |
| Domain / URL | tarragonashoreexcursions.com |
| Booking prefix | TQ |
| Currency | EUR |
| Country | Spain |
| Region | europe (Mediterranean cruise network) |
| Contact mode | central (`info@wowatour.com`) |
| Pages project | tarragona-shore-excursions |
| Payments worker | tarragona-payments |
| D1 | tarragona-bookings (placeholder id) |

Files: `src/config/destination.ts`, `completion.ts`, `footer.ts`, `AGENTS.md`, `public/_redirects`, World-2.0 `sites.json` entry (development).

---

## Low-inventory demonstration

Unlike most destinations, **there is no Shore Excursions Group catalogue** for Tarragona. This site shows how World 2.0 handles ports with little existing cruise inventory:

- Honest independent exploration as a first-class recommendation
- Local-operator-informed editorial products (Itinere / turismedetarragona.com as conceptual reference — original copy only)
- **Future Premium Collection** placeholders (`supplier.kind: "future"`) for shared departures evolved from premium private concepts
- All products `bookingStatus: "comingSoon"` — **no pricing**, not bookable
- Empty Worker catalogue and empty `bookable-products.ts`

---

## Editorial content

- **Opening message:** Tarragona as one of the Mediterranean’s most underrated cruise destinations.
- **Foundational distinction:** Excellent independent UNESCO / Old Town day **or** guided interpretation for deeper history and exclusive experiences.
- **Spirit of Place:** Original editorial — Spain’s forgotten Roman capital; UNESCO, ruins, Mediterranean views, relaxed Catalan culture.
- **Honest Advice:** Balanced — one of the best Med ports for independence; guided days for narrative / exclusive access.
- **Editorial Promise:** Present on homepage.
- **Tone:** Premium travel magazine / experienced local travel editor (British English).

---

## Experience Cards / Your Day Ashore

**Your Day Ashore:** Roman History · Walk It Yourself · Photography · Food · Families · Editor's Choice

**Homepage pathways:** Editor's Choice · Walk It Yourself · Roman History · Food · Photography (+ cathedral / future premium cards)

---

## Walk It Yourself

- **URL:** `/guides/explore-independently` (v1.4 pattern — no parallel `/walk-it-yourself` route)
- **Title:** Walk It Yourself
- Full `independentWalk` covering: Cruise Port · Roman Amphitheatre · Roman Circus · Roman Forum · Cathedral · Old Town · Rambla Nova · Mediterranean Balcony · Food Market · Tapas recommendations · Return to ship
- Soft link to Editor's Choice for interpretation

---

## Editor's Choice

| Field | Value |
|-------|--------|
| Slug | `tarragona-highlights-walking-tour` |
| Title | Tarragona Highlights Walking Tour |
| Reference | Official local highlights walking tour (Itinere) — original editorial |
| Flags | `editorChoice: true`, `featured: true`, `bookingStatus: comingSoon` |
| Trust | Full `whyWeChose`, EditorsChoice callout, return-to-ship messaging |

**Secondary:** Guided Tarragona Cathedral (`guided-tarragona-cathedral`)

---

## Future Premium Collection

Internal label: **future premium shared experiences** (migration path to direct operations).

| Slug | Concept |
|------|---------|
| `future-shared-roman-tarraco-discovery` | Deep Roman amphitheatre / circus / forum |
| `future-shared-cathedral-old-town-exclusive` | Cathedral & Part Alta |
| `future-shared-mediterranean-balcony-catalan-flavours` | Balcony & Catalan flavours |

All: `supplier.kind: "future"`, `bookingStatus: "comingSoon"`, no prices, not bookable. Mirrored on `/wow-collection` and signature concept page.

---

## Guides

| Guide | Slug |
|-------|------|
| Cruise Port Guide | `walking-from-port` |
| Walk It Yourself | `explore-independently` |
| One Day in Tarragona | `one-day-in-tarragona` |
| Roman Tarragona | `roman-tarragona` |
| Cathedral Guide | `cathedral-guide` |
| Food Guide | `food-guide` |
| Best Viewpoints | `best-viewpoints` |
| FAQ | `cruise-faq` + `/faq` |
| Cruise Tips | `cruise-tips` |

Plus highlights (amphitheatre, circus, forum, cathedral, Old Town, Rambla Nova, Balcony, market) and comparisons (tour-or-independent, roman-or-independent, best-shore-excursions, first-time-tarragona-day).

---

## Products summary

All `bookingStatus: "comingSoon"` — **no pricing**.

1. Tarragona Highlights Walking Tour *(Editor's Choice)*  
2. Guided Tarragona Cathedral  
3. Future Shared Roman Tarraco Discovery  
4. Future Shared Cathedral & Old Town Exclusive  
5. Future Shared Mediterranean Balcony & Catalan Flavours  

`bookable-products.ts` and Worker `catalogue.ts` empty until EUR prices verified.

---

## Schedules

Empty entries only — **no fictitious ship calls**. Framework ready in `schedules.ts`.

---

## Images

- Wikimedia Commons placeholders in `public/images/` + sources recorded in `public/images/sources.json`
- Optimisation pipeline active (`prebuild` / `optimize-images.mjs`)
- **Production images still required before launch**

---

## QA

```
TOTAL 113/115  PASS  World 2.0 Gold
```

All categories PASS. Remaining soft warnings only (optional booking-engine width/height; client-component count platform-wide).

---

## Outstanding items

- [ ] Verify EUR selling prices and fulfilment → set `bookingStatus: live` selectively  
- [ ] Populate Worker catalogue + D1 + Stripe secrets *(explicitly out of scope this run)*  
- [ ] Confirmed cruise ship schedules (none published — no fictitious calls)  
- [ ] Replace Wikimedia stand-ins with licensed production photography  
- [ ] Switch `contactMode` to `local` once email forwarding works  
- [ ] Cloudflare Pages, DNS, Search Console, analytics *(out of scope)*  
- [ ] Deploy *(out of scope)*  

---

## Production readiness

| Area | Status |
|------|--------|
| Editorial Gold destination | Ready for localhost review |
| Online booking / payments | Not ready — comingSoon |
| Production images | Not ready |
| Deploy / Cloudflare / Stripe | Not configured (by request) |

**Localhost:** `cd tarragona-shore-excursions && npm run dev`
