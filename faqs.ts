export type FAQ = { q: string; a: string };

export const generalFaqs: FAQ[] = [
  {
    q: "How much does a pool renovation cost?",
    a: "It depends on the pool size, its current condition, site access, the finishes you choose, the scope of work, whether structural repairs are needed and how much of the surrounding area is included. We give a clear, itemised quotation after a site assessment rather than a guess over the phone.",
  },
  {
    q: "How long does a pool renovation take?",
    a: "Timeframes depend on scope and weather. A coping or paving upgrade is shorter than a full renovation that includes resurfacing, lighting and surrounding work. We'll give you an expected programme with your quotation.",
  },
  { q: "Can you renovate only the paving around my pool?", a: "Yes. Paving can be replaced on its own. We'll check levels and falls so that water drains away from the pool, and advise if the coping should be replaced at the same time." },
  { q: "Can you replace pool coping?", a: "Yes. We remove damaged or dated coping and install new coping with consistent joints and overhang. We'll show you profile and colour options during the site visit." },
  { q: "Can you redesign the pool entertainment area?", a: "Yes. We look at how you use the space and plan seating zones, routes between the pool and braai, paving, lighting and drainage as one layout." },
  { q: "Do you work throughout Gauteng?", a: "We work across Gauteng, including Sandton, Fourways, Bryanston, Midrand, Randburg, Johannesburg, Centurion, Pretoria, Kyalami and Sunninghill. If you're nearby and not listed, ask us." },
  { q: "Can you help choose finishes?", a: "Yes. We bring samples to the site visit and explain how each option looks, feels underfoot and holds up to maintenance." },
  { q: "Can I send photos before booking a site visit?", a: "Please do. Upload photos with the site-visit form or send them on WhatsApp. They help us prepare, but a site visit is still needed for an accurate quote." },
  { q: "Do you handle new pool installations?", a: "Yes. We plan and build new pools together with the coping, paving and entertainment area around them." },
  { q: "How do I book an assessment?", a: "Use the Book a Site Visit form, call us or send a WhatsApp message. We'll confirm a suitable time to visit." },
];

export const renovationFaqs: FAQ[] = [generalFaqs[0], generalFaqs[1], generalFaqs[2], generalFaqs[3], generalFaqs[6], generalFaqs[7]];
export const outdoorFaqs: FAQ[] = [
  { q: "Can you design the layout for an entertainment area?", a: "Yes. We recommend borders, patterns and feature areas that suit braais, seating and walkways while keeping the installation durable." },
  { q: "Will rainwater pool on an outdoor living area?", a: "We plan levels and falls during the site visit so water drains correctly and doesn't undermine the base." },
  { q: "How do I keep an outdoor living area clean?", a: "We advise on finishes and, where appropriate, sealing to reduce staining and make cleaning easier." },
  generalFaqs[4],
  generalFaqs[5],
];
