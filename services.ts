import { img, type Img } from "@/lib/images";

export type Service = {
  slug: string;
  number: string;
  category: string;
  title: string;
  summary: string;
  href: string;
  image: Img;
  /** Used by the generic /services/[slug] template */
  detail?: {
    headline: string;
    accent: string;
    intro: string;
    deliver: { title: string; text: string }[];
    why: { title: string; text: string }[];
  };
};

// CONFIRM: remove or edit any service you don't offer. Cards, footer and sitemap update automatically.
export const services: Service[] = [
  {
    slug: "new-pools",
    number: "01",
    category: "New Build",
    title: "New Pool Installations",
    summary:
      "Pools planned around the house, the garden and how you entertain. Shape, depth, coping and surrounding paving are designed together from the first site visit.",
    href: "/pools",
    image: img.pool1,
  },
  {
    slug: "pool-renovations",
    number: "02",
    category: "Renovation",
    title: "Pool Renovations",
    summary:
      "A coordinated upgrade for ageing pools: new finishes, coping, paving and lighting planned as one scope rather than a series of patch jobs.",
    href: "/pool-renovations",
    image: img.pool2,
  },
  {
    slug: "pool-resurfacing",
    number: "03",
    category: "Renovation",
    title: "Pool Resurfacing",
    summary:
      "Replace rough, stained or delaminating interior finishes. We assess the shell first so the new surface goes onto a sound base.",
    href: "/services/pool-resurfacing",
    image: img.pool6,
    detail: {
      headline: "Pool Resurfacing",
      accent: "Done on a sound base.",
      intro:
        "A pool finish wears with time, chemistry and sun. Resurfacing removes the failing layer and applies a new interior finish, so the pool feels smooth underfoot and is easier to keep clean.",
      deliver: [
        { title: "Shell assessment", text: "We check for hollow spots, cracks and previous repairs before quoting, so the scope reflects the real condition." },
        { title: "Surface preparation", text: "Old, loose or delaminating material is removed and the shell is prepared for proper adhesion." },
        { title: "New interior finish", text: "Finish options are discussed on site with samples, including colour and how each option tends to wear." },
        { title: "Refill and start-up guidance", text: "We explain the curing and start-up steps so the new finish isn't damaged in its first weeks." },
      ],
      why: [
        { title: "Comfort", text: "Rough surfaces scuff feet and snag costumes. A new finish makes the pool pleasant to use again." },
        { title: "Easier care", text: "Porous, pitted finishes trap algae and stains. A sound surface is quicker to brush and balance." },
        { title: "Visual reset", text: "Water colour depends heavily on the finish. Resurfacing changes how the whole garden reads." },
      ],
    },
  },
  {
    slug: "pool-paving-coping",
    number: "04",
    category: "Finishing",
    title: "Pool Paving & Coping",
    summary:
      "Coping and surrounding paving set the tone of the pool area. We plan levels, falls and edge details so water drains away from the pool and the finish stays neat.",
    href: "/services/pool-paving-coping",
    image: img.pool4,
    detail: {
      headline: "Pool Paving & Coping",
      accent: "The edge that frames everything.",
      intro:
        "The coping is the first thing you touch and the paving is what you walk on barefoot every summer. Both need to look right, stay cool enough to use and shed rainwater properly.",
      deliver: [
        { title: "Coping replacement", text: "Removal of cracked or loose coping and installation of new coping with consistent joints and overhang." },
        { title: "Pool surround paving", text: "New paving around the pool laid on a prepared base with planned falls away from the water." },
        { title: "Borders and feature bands", text: "Edge details and bands that tie the pool surround to the house and garden." },
        { title: "Steps and level changes", text: "Clean transitions between the pool deck, lawn, patio and entertainment areas." },
      ],
      why: [
        { title: "Drainage", text: "Paving that falls towards the pool carries dirt and runoff into the water. Levels are set before a single paver goes down." },
        { title: "Comfort underfoot", text: "Material and colour choices affect how hot a surface gets in a Highveld summer." },
        { title: "Low maintenance", text: "Joint detailing and sealing advice help reduce staining and weeds." },
      ],
    },
  },
  {
    slug: "pool-repairs",
    number: "05",
    category: "Repair",
    title: "Pool Repairs",
    summary:
      "Cracked coping, loose tiles, damaged edges and surface failures, assessed and repaired with a clear explanation of what caused the problem.",
    href: "/services/pool-repairs",
    image: img.pool7,
    // CONFIRM: adjust the repair scope below to what your team actually handles.
    detail: {
      headline: "Pool Repairs",
      accent: "Fixed, and explained.",
      intro:
        "Small defects grow if they're ignored. We inspect the problem, explain what's causing it and quote a repair that addresses the cause, not just the symptom.",
      deliver: [
        { title: "Coping and edge repairs", text: "Re-bedding loose coping, replacing cracked pieces and repairing damaged edges." },
        { title: "Tile and waterline repairs", text: "Replacing loose or missing waterline tiles and re-grouting where needed." },
        { title: "Surface patch repairs", text: "Localised repairs to finishes where a full resurface isn't yet necessary." },
        { title: "Leak-related coordination", text: "[EDIT IF OFFERED] Where leak detection is needed, we coordinate with specialists and complete the finishing work." },
      ],
      why: [
        { title: "Root cause first", text: "A crack in the coping can point to movement in the paving base. We look at the whole edge." },
        { title: "Honest scoping", text: "If a repair won't last, we'll say so and show the alternative." },
        { title: "Neat finish", text: "Repairs are matched as closely as practical to the existing finishes." },
      ],
    },
  },
  {
    slug: "outdoor-living",
    number: "06",
    category: "Outdoor Living",
    title: "Outdoor Living Areas",
    summary:
      "Patios, courtyards and entertainment areas designed for how you actually host: seating zones, movement between pool and braai, and surfaces that are easy to keep clean.",
    href: "/outdoor-living",
    image: img.living3,
  },
  {
    slug: "braai-boma-areas",
    number: "07",
    category: "Outdoor Living",
    title: "Braai & Boma Areas",
    summary:
      "Built-in braais, fire-pit bomas and seating walls placed with wind, smoke, sightlines and the walk from the kitchen in mind.",
    href: "/services/braai-boma-areas",
    image: img.living1,
    detail: {
      headline: "Braai & Boma Areas",
      accent: "Where the evening happens.",
      intro:
        "A braai or boma works when it's placed well: close enough to the kitchen, away from where smoke drifts into the house, and with enough room for people to gather without crowding the fire.",
      deliver: [
        { title: "Boma and fire-pit areas", text: "Circular or rectilinear paved bomas with a central fire pit and seating walls." },
        { title: "Built-in braai structures", text: "Braai areas with work surfaces and storage, finished to suit the house." },
        { title: "Seating walls and cladding", text: "Built-in seating and stone or brick cladding that ties the area together." },
        { title: "Lighting and pathways", text: "Lit routes between pool, braai and house so the space works after dark." },
      ],
      why: [
        { title: "Placement", text: "Wind direction and smoke are considered during the site visit, not after the build." },
        { title: "Flow", text: "Clear routes between kitchen, braai, pool and seating keep the area comfortable when it's busy." },
        { title: "Durability", text: "Heat-appropriate materials and proper bases so the area ages well." },
      ],
    },
  },
  {
    slug: "outdoor-pool-lighting",
    number: "08",
    category: "Lighting",
    title: "Outdoor & Pool Lighting",
    summary:
      "Pool lights, step lights and solar path lighting placed for safety and atmosphere: step edges, braai routes, seating zones and the water itself.",
    href: "/services/outdoor-pool-lighting",
    image: img.pool3,
    // CONFIRM: if electrical work is done by a partner electrician, say so here.
    detail: {
      headline: "Outdoor & Pool Lighting",
      accent: "Designed for after dark.",
      intro:
        "Good outdoor lighting makes steps and edges safe, extends how long you can use the space and changes the mood of the pool at night. We plan placement as part of the layout rather than adding it at the end.",
      deliver: [
        { title: "Pool lighting upgrades", text: "[EDIT IF OFFERED] Replacement or upgrade of underwater pool lights." },
        { title: "Step and edge lighting", text: "Low-level lights on steps, level changes and pool edges." },
        { title: "Solar path lighting", text: "Solar lights along walkways and braai routes where cabling isn't practical." },
        { title: "Feature lighting", text: "Accent lighting for planting, cladding and seating areas." },
      ],
      why: [
        { title: "Safety", text: "Lit steps and edges reduce trips around water at night." },
        { title: "Use", text: "A well-lit entertainment area gets used long after sunset." },
        { title: "Atmosphere", text: "Restrained, well-placed light looks considered rather than floodlit." },
      ],
    },
  },
];

export const quickServices = [
  { label: "Pool Renovations", href: "/pool-renovations" },
  { label: "Pool Resurfacing", href: "/services/pool-resurfacing" },
  { label: "New Pools", href: "/pools" },
  { label: "Pool Paving", href: "/services/pool-paving-coping" },
  { label: "Coping", href: "/services/pool-paving-coping" },
  { label: "Pool Repairs", href: "/services/pool-repairs" },
  { label: "Bomas", href: "/services/braai-boma-areas" },
  { label: "Braai Areas", href: "/services/braai-boma-areas" },
  { label: "Outdoor Lighting", href: "/services/outdoor-pool-lighting" },
];

export const getService = (slug: string) => services.find((s) => s.slug === slug);
