export type Area = {
  slug: string;
  name: string;
  headline: string;
  intro: string;
  considerations: { title: string; text: string }[];
  focus: string[]; // service slugs
  nearby: string[]; // area slugs
};

/**
 * Local landing pages. Each has distinct copy — edit freely, and add genuine local
 * project references once you have them. Avoid copying text between areas.
 */
export const areas: Area[] = [
  {
    slug: "sandton",
    name: "Sandton",
    headline: "Pool renovations and new pools in Sandton",
    intro:
      "Many Sandton properties have pools that were built decades ago and still work, but no longer match the house. Most of our conversations here start with a renovation: new coping, a fresh finish and a surround that suits a more contemporary home.",
    considerations: [
      { title: "Established pools", text: "Older shells often need a careful assessment before resurfacing, so the new finish isn't applied over hidden problems." },
      { title: "Estate and complex rules", text: "Where you live in an estate or complex, we plan deliveries and working hours around its contractor requirements." },
      { title: "Tight access", text: "Side passages and finished gardens mean materials and rubble removal need to be planned before work starts." },
    ],
    focus: ["pool-renovations", "pool-paving-coping", "pool-resurfacing"],
    nearby: ["bryanston", "sunninghill", "randburg"],
  },
  {
    slug: "fourways",
    name: "Fourways",
    headline: "Pool surrounds and entertainment areas in Fourways",
    intro:
      "Fourways homes are often built for family life, and the pool area is where weekends happen. Homeowners here frequently ask us to make the space around the pool work harder: more room for loungers, a better link to the patio and somewhere to braai.",
    considerations: [
      { title: "Making room", text: "Narrow pool edges can often be widened on the sunny side to create a proper lounging zone." },
      { title: "Lawn transitions", text: "Clean steps and borders between paving and lawn keep grass and soil off the pool deck." },
      { title: "Family use", text: "Comfortable, slip-conscious surfaces and lighting on steps matter when children use the pool." },
    ],
    focus: ["pool-paving-coping", "outdoor-living", "braai-boma-areas"],
    nearby: ["kyalami", "randburg", "bryanston"],
  },
  {
    slug: "bryanston",
    name: "Bryanston",
    headline: "Pool resurfacing and paving in Bryanston",
    intro:
      "Bryanston gardens tend to be mature, with established trees and planting close to the pool. That shapes how we plan resurfacing and paving: protecting what's already there while improving finishes, drainage and maintenance.",
    considerations: [
      { title: "Leaf fall", text: "Trees near the pool affect finish choice and how the surround should drain, so debris doesn't end up in the water." },
      { title: "Root movement", text: "Lifted paving and coping near large trees are assessed for the cause before being relaid." },
      { title: "Protecting the garden", text: "Access routes and material storage are planned to minimise disturbance to established beds." },
    ],
    focus: ["pool-resurfacing", "pool-paving-coping", "pool-repairs"],
    nearby: ["sandton", "randburg", "fourways"],
  },
  {
    slug: "midrand",
    name: "Midrand",
    headline: "Pools and outdoor living areas in Midrand",
    intro:
      "Midrand has a wide mix of property types, from newer estate homes with compact gardens to larger stands. Many projects here are about getting the most from a defined space: a well-proportioned pool with an entertainment area that doesn't feel cramped.",
    considerations: [
      { title: "Compact gardens", text: "Smaller pools and plunge-style layouts can be planned with the patio so both remain usable." },
      { title: "Newer homes", text: "Recently built properties often have a pool shell but a basic surround that's ready for a proper finish." },
      { title: "Storm runoff", text: "Summer storms test drainage. Falls and outlets are set during planning, not after the first downpour." },
    ],
    focus: ["new-pools", "outdoor-living", "pool-paving-coping"],
    nearby: ["kyalami", "centurion", "sunninghill"],
  },
  {
    slug: "randburg",
    name: "Randburg",
    headline: "Pool renovations and repairs in Randburg",
    intro:
      "Randburg has many established homes where the pool has been in place for a long time. Our work here is often practical: repairing coping, sorting out a failing finish and modernising the surround without rebuilding everything.",
    considerations: [
      { title: "Repair or renovate", text: "We'll tell you honestly whether a targeted repair will last or whether a fuller renovation makes more sense." },
      { title: "Phased upgrades", text: "Work can be planned in stages, starting with the pool and following with the entertainment area." },
      { title: "Matching finishes", text: "Where only part of the area is replaced, we aim to match or deliberately contrast with what remains." },
    ],
    focus: ["pool-repairs", "pool-renovations", "pool-resurfacing"],
    nearby: ["bryanston", "fourways", "sandton"],
  },
  {
    slug: "centurion",
    name: "Centurion",
    headline: "Pool upgrades and outdoor living in Centurion",
    intro:
      "Centurion homeowners often want the pool and the entertainment area to feel like one space. Projects here commonly combine a pool refresh with a braai or boma, new paving and lighting that makes the garden usable into the evening.",
    considerations: [
      { title: "One layout", text: "Pool, patio and braai are planned together so routes between them are short and paved." },
      { title: "Evening use", text: "Step, path and feature lighting is placed so the area works after sunset." },
      { title: "Durable surfaces", text: "Materials are chosen for barefoot comfort around the pool and heat tolerance near the fire." },
    ],
    focus: ["pool-renovations", "braai-boma-areas", "outdoor-pool-lighting"],
    nearby: ["pretoria", "midrand"],
  },
  {
    slug: "pretoria",
    name: "Pretoria",
    headline: "Swimming pool renovations and paving in Pretoria",
    intro:
      "Pretoria summers are long and hot, which makes the pool central to how many households use their gardens. We focus on surfaces that stay comfortable, finishes that hold up and surrounds that drain well when the afternoon storms arrive.",
    considerations: [
      { title: "Heat underfoot", text: "Paving colour and material affect how hot the surround gets. We'll show you the trade-offs." },
      { title: "Shade and seating", text: "Seating zones are planned with shade in mind so the area is usable at midday." },
      { title: "Finish longevity", text: "Strong sun and pool chemistry affect finishes. We explain care steps that help them last." },
    ],
    focus: ["pool-renovations", "pool-paving-coping", "outdoor-living"],
    nearby: ["centurion", "midrand"],
  },
  {
    slug: "kyalami",
    name: "Kyalami",
    headline: "Pools, bomas and entertainment areas in Kyalami",
    intro:
      "Kyalami properties often have more space to work with, which opens up options: a pool with a separate boma, a covered braai area and paths that link the garden together. The planning challenge is keeping it all cohesive rather than scattered.",
    considerations: [
      { title: "Linking spaces", text: "Paved routes and consistent materials tie separate zones into one outdoor environment." },
      { title: "Fire-pit bomas", text: "Boma placement takes wind, smoke and distance from the house into account." },
      { title: "Estate requirements", text: "Where estate design guidelines apply, we work within them from the start." },
    ],
    focus: ["braai-boma-areas", "new-pools", "outdoor-living"],
    nearby: ["midrand", "fourways", "sunninghill"],
  },
  {
    slug: "sunninghill",
    name: "Sunninghill",
    headline: "Pool and patio upgrades in Sunninghill",
    intro:
      "Sunninghill has many townhouses, cluster homes and family houses where outdoor space is valuable. We help homeowners make a smaller pool area feel open and finished, with a patio that flows straight onto the water's edge.",
    considerations: [
      { title: "Small-space planning", text: "Continuous paving and slim coping make compact areas feel larger." },
      { title: "Complex approvals", text: "If your body corporate needs to approve changes, we can supply a written scope to include with the request." },
      { title: "Neighbour-friendly work", text: "Noise, dust and deliveries are managed carefully where homes are close together." },
    ],
    focus: ["pool-paving-coping", "outdoor-living", "pool-resurfacing"],
    nearby: ["sandton", "kyalami", "midrand"],
  },
];

export const getArea = (slug: string) => areas.find((a) => a.slug === slug);
