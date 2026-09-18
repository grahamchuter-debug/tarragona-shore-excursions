import type { FAQ } from "./types";

export interface Terminal {
  name: string;
  quay: string;
  usedBy: string;
  cityAccess: string;
}

export interface PortGuideSection {
  heading: string;
  paragraphs: string[];
}

export const portGuideContent = {
  title: "Tarragona Cruise Port Guide",
  subtitle:
    "Terminal access, walking toward UNESCO Roman Tarraco, cathedral quarter, Rambla Nova, Mediterranean Balcony, food and sensible return-to-ship planning.",
  terminals: [
    {
      name: "Tarragona cruise berths",
      quay: "Cruise calls at the Port of Tarragona on the Catalan coast",
      usedBy: "Mediterranean cruise itineraries calling at Tarragona / Catalonia",
      cityAccess:
        "Historic centre often within a walkable or short-transfer window; taxis available at peak turnaround — confirm berth logistics on the day",
    },
    {
      name: "Alternative assignments",
      quay: "Occasional berths within the wider port complex",
      usedBy: "Selected calls when specific quays are assigned",
      cityAccess:
        "Walking times vary — follow terminal signage and allow a conservative buffer",
    },
  ] as Terminal[],
  sections: [
    {
      heading: "Where cruise ships dock in Tarragona",
      paragraphs: [
        "Cruise ships call at Tarragona on Spain's Catalan coast — one of the Mediterranean's most underrated landfalls. Unlike mega-ports that strand guests far from sightseeing, Tarragona places UNESCO Roman heritage and a living Old Town within realistic reach for many passengers.",
        "Check the ship's daily programme and terminal signage on arrival. Shuttle arrangements vary by line and berth.",
        "Tarragona is an outstanding base for an independent city day. Organised walking tours add interpretation rather than long transfers.",
      ],
    },
    {
      heading: "Walking from the port",
      paragraphs: [
        "From the terminal area, follow signs toward the city centre and amphitheatre district rather than wandering the working port.",
        "Allow time for the climb toward the Part Alta; amphitheatre terraces sit lower toward the sea.",
        "If mobility, heat or luggage are factors, take a short taxi instead of proving a point.",
      ],
    },
    {
      heading: "Roman and Old Town highlights",
      paragraphs: [
        "The amphitheatre anchors most visits — allow time to absorb sea views rather than a single exterior photograph.",
        "Circus and forum remains explain Tarraco's imperial scale beyond spectacle.",
        "Cathedral and Part Alta deliver medieval Catalan atmosphere above Roman foundations.",
      ],
    },
    {
      heading: "Food and Catalan flavour",
      paragraphs: [
        "Central Market, Rambla terraces and tapas stops sit inside a walkable historic centre.",
        "Build lunch into your loop so you stay oriented toward the ship.",
        "A future premium flavours shared experience is planned; today independent tapas work excellently.",
      ],
    },
    {
      heading: "Transport and taxis",
      paragraphs: [
        "Taxis wait at or near the terminal when ships are in port. Show the driver the cruise terminal or your ship name for the return.",
        "For the core UNESCO day you rarely need more than a short hop — save energy for stone underfoot.",
        "Organised walking tours keep commentary and pacing simple without long coach loops.",
      ],
    },
    {
      heading: "A realistic independent city day",
      paragraphs: [
        "Start at the amphitheatre while light is kinder.",
        "Continue through circus and forum, climb to cathedral and Old Town, then descend via Rambla Nova to the Mediterranean Balcony.",
        "Protect 60–90 minutes before all-aboard — independent days fail only when the buffer is optimistic.",
      ],
    },
  ] as PortGuideSection[],
  faqs: [
    {
      question: "Can I walk from the cruise port into Tarragona?",
      answer:
        "Often yes, depending on berth. Many guests reach key sights on foot or with a short taxi. Follow signage and keep a return buffer.",
    },
    {
      question: "Do I need a shore excursion?",
      answer:
        "Not for an excellent day. Book when you want historical interpretation or cathedral guidance.",
    },
  ] satisfies FAQ[],
};

export function getPortGuideFaqs(): FAQ[] {
  return portGuideContent.faqs;
}

export const portGuideFaqs = portGuideContent.faqs;
