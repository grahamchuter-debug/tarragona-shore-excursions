import type { FAQ } from "./types";
import { getHomepageFaqs } from "./homepage";

export const extraFaqs: FAQ[] = [
  {
    question: "Can I explore Tarragona without an excursion?",
    answer:
      "Yes. Tarragona is one of the best Mediterranean cruise ports for independent exploration. Many visitors walk Roman ruins, the Old Town and the Mediterranean Balcony on foot.",
  },
  {
    question: "How far is the historic centre from the cruise port?",
    answer:
      "Often within a walkable or short-transfer window depending on berth and port logistics. Allow time for the Part Alta climb and always protect a return buffer.",
  },
  {
    question: "Should I book a tour?",
    answer:
      "Book when you want expert Roman or cathedral interpretation, structured pacing, or future exclusive-format experiences. Skip when you prefer self-paced wandering, photography and tapas.",
  },
  {
    question: "How much walking is involved in Tarragona?",
    answer:
      "Uneven historic surfaces and a gentle climb to the cathedral quarter are normal. The city is compact — long coach transfers are not required for the core day.",
  },
  {
    question: "Is Tarragona suitable for limited mobility?",
    answer:
      "Parts of the Part Alta and amphitheatre approaches include steps and uneven stone. Consider a taxi from the terminal and focus on Rambla Nova and lower viewpoints if needed.",
  },
  {
    question: "How much free time should I allow before all-aboard?",
    answer:
      "Protect 60–90 minutes after sightseeing. Heat and terminal queues make optimistic buffers risky.",
  },
  {
    question: "What is your Editor's Choice?",
    answer:
      "Tarragona Highlights Walking Tour — the best first-time guided introduction to UNESCO Roman Tarraco and the Old Town.",
  },
  {
    question: "What currency is used?",
    answer:
      "Spain uses the euro (EUR). Our site will display EUR for bookings once live prices are verified.",
  },
];

export function getAllFaqs(): FAQ[] {
  const seen = new Set<string>();
  const merged: FAQ[] = [];
  for (const faq of [...getHomepageFaqs(), ...extraFaqs]) {
    if (seen.has(faq.question)) continue;
    seen.add(faq.question);
    merged.push(faq);
  }
  return merged;
}
