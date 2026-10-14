import { img, type Img } from "@/lib/images";

export type Project = {
  slug: string;
  title: string;
  area: string;
  type: string;
  summary: string;
  services: string[];
  cover: Img;
  before: Img[];
  after: Img[];
  gallery: Img[];
  challenge: string;
  solution: string;
  materials: string[];
  related: string[]; // service slugs
};

/**
 * SAMPLE PROJECTS — replace with genuine project information and photos.
 * Do not publish these as real case studies. Titles are descriptive only; no client names.
 */
export const projects: Project[] = [
  {
    slug: "pool-renovation-new-coping-sandton",
    title: "Pool Renovation & New Coping",
    area: "Sandton",
    type: "Renovation",
    summary: "An older family pool brought up to date with a new interior finish, replacement coping and a cleaner paved edge.",
    services: ["Resurfacing", "Coping", "Paving"],
    cover: img.pool2,
    before: [img.before2],
    after: [img.pool2],
    gallery: [img.pool2, img.pool6, img.pool4],
    challenge:
      "[REPLACE] The existing finish had become rough and stained, several coping pieces had lifted, and the surrounding paving sloped towards the pool, carrying garden debris into the water after storms.",
    solution:
      "[REPLACE] The shell was assessed and prepared before resurfacing. Lifted coping was removed and replaced with a continuous profile, and the adjoining paving was relaid with falls directed away from the pool.",
    materials: ["[Interior finish]", "[Coping profile]", "[Paving type and colour]"],
    related: ["pool-resurfacing", "pool-paving-coping", "pool-renovations"],
  },
  {
    slug: "modern-pool-surround-fourways",
    title: "Modern Pool Surround",
    area: "Fourways",
    type: "Pool Surround",
    summary: "A new paved surround and timber-look deck that turned a narrow pool edge into a usable lounging area.",
    services: ["Pool Paving", "Coping", "Deck Area"],
    cover: img.pool4,
    before: [img.before4],
    after: [img.pool4],
    gallery: [img.pool4, img.pool8, img.pool1],
    challenge: "[REPLACE] The pool had only a thin strip of paving on one side, leaving no room for loungers and an awkward step down to the lawn.",
    solution: "[REPLACE] The surround was widened on the sunny side, levels were adjusted to create a single step to the lawn and a deck zone was added for seating.",
    materials: ["[Coping profile]", "[Paving type]", "[Deck material]"],
    related: ["pool-paving-coping", "outdoor-living"],
  },
  {
    slug: "pool-resurfacing-paving-bryanston",
    title: "Pool Resurfacing & Paving",
    area: "Bryanston",
    type: "Resurfacing",
    summary: "A resurfaced pool interior paired with new surrounding paving for a consistent, low-maintenance finish.",
    services: ["Resurfacing", "Paving", "Lighting"],
    cover: img.pool6,
    before: [img.before6],
    after: [img.pool6],
    gallery: [img.pool6, img.pool1, img.pool2],
    challenge: "[REPLACE] The interior finish was delaminating in patches and the old paving had uneven joints that collected dirt.",
    solution: "[REPLACE] Loose material was removed and the pool resurfaced. New paving was laid with tighter joints and sealing advice for easier cleaning.",
    materials: ["[Interior finish]", "[Paving]", "[Lighting]"],
    related: ["pool-resurfacing", "pool-paving-coping", "outdoor-pool-lighting"],
  },
  {
    slug: "family-entertainment-area-midrand",
    title: "Family Entertainment Area",
    area: "Midrand",
    type: "Outdoor Living",
    summary: "A pool area reorganised into clear zones for swimming, lounging and braaiing, with lit routes between them.",
    services: ["Outdoor Living", "Braai Area", "Lighting"],
    cover: img.pool7,
    before: [img.before3],
    after: [img.pool7],
    gallery: [img.pool7, img.living2, img.living3],
    challenge: "[REPLACE] Guests had to cross the lawn to reach the braai, and the area around the pool became crowded during gatherings.",
    solution: "[REPLACE] A paved route linked the pool, patio and braai. Seating zones were separated from the swimming area and step lighting was added.",
    materials: ["[Paving]", "[Braai finish]", "[Lighting type]"],
    related: ["outdoor-living", "braai-boma-areas", "outdoor-pool-lighting"],
  },
  {
    slug: "pool-boma-integration-kyalami",
    title: "Pool & Boma Integration",
    area: "Kyalami",
    type: "Outdoor Living",
    summary: "A circular fire-pit boma connected to the pool deck so the two spaces work as one entertainment area.",
    services: ["Boma", "Paving", "Coping"],
    cover: img.pool5,
    before: [img.before5],
    after: [img.pool5],
    gallery: [img.pool5, img.living1, img.pool3],
    challenge: "[REPLACE] The fire pit sat on an isolated patch of lawn, disconnected from the pool and difficult to use after rain.",
    solution: "[REPLACE] A paved boma with seating was built beside the pool deck, joined by a continuous paved surface with planned drainage.",
    materials: ["[Boma paving]", "[Seating wall finish]", "[Coping]"],
    related: ["braai-boma-areas", "pool-paving-coping", "outdoor-living"],
  },
  {
    slug: "contemporary-pool-upgrade-centurion",
    title: "Contemporary Pool Upgrade",
    area: "Centurion",
    type: "Renovation",
    summary: "A dated pool given a cleaner, contemporary look with new coping, a lighter finish and restrained lighting.",
    services: ["Renovation", "Coping", "Lighting"],
    cover: img.pool1,
    before: [img.before1],
    after: [img.pool1],
    gallery: [img.pool1, img.pool8, img.pool6],
    challenge: "[REPLACE] The pool worked but looked dated, with a dark finish, bullnose coping and no lighting.",
    solution: "[REPLACE] The coping was replaced with a slimmer profile, the interior was refinished in a lighter tone and low-level lighting was added around the pool.",
    materials: ["[Coping]", "[Interior finish]", "[Lighting]"],
    related: ["pool-renovations", "pool-paving-coping", "outdoor-pool-lighting"],
  },
];

export const getProject = (slug: string) => projects.find((p) => p.slug === slug);
