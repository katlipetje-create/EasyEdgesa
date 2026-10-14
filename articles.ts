import { img, type Img } from "@/lib/images";

export type Article = {
  slug: string;
  title: string;
  category: string;
  tags: string[];
  excerpt: string;
  readTime: number;
  date: string; // ISO
  image: Img;
  featured?: boolean;
  body: { h: string; p: string[] }[];
  related: string[]; // service slugs
};

export const articles: Article[] = [
  {
    slug: "signs-your-pool-needs-renovation",
    title: "5 Signs Your Swimming Pool Needs Renovation",
    category: "Renovation",
    tags: ["Renovation", "Maintenance"],
    excerpt: "Rough finishes, lifting coping and water that won't stay clear are more than cosmetic. Here's how to tell when a pool needs more than a service.",
    readTime: 5,
    date: "2026-09-01",
    image: img.before2,
    featured: true,
    related: ["pool-renovations", "pool-resurfacing"],
    body: [
      { h: "1. The surface feels rough or looks blotchy", p: ["Interior finishes wear down over time. When the surface scuffs feet, holds stains that won't brush out or shows patchy discolouration, the finish is near the end of its useful life.", "A rough finish also gives algae more places to cling to, which makes the pool harder to keep clear."] },
      { h: "2. Coping is loose, cracked or lifting", p: ["Coping should feel solid. Pieces that rock, hollow-sounding sections or open joints let water get behind the edge, which can damage the bond beam and surrounding paving.", "Replacing coping is also one of the quickest ways to change how a pool looks."] },
      { h: "3. You're losing more water than usual", p: ["Evaporation is normal, especially in summer. Consistent water loss beyond that can point to a leak in the shell, the plumbing or around fittings. Have it checked before refinishing so the cause is dealt with first."] },
      { h: "4. The surround drains towards the pool", p: ["If rain washes soil, leaves and paving dust into the water, the levels around the pool are wrong. Relaying the surround with proper falls saves a lot of cleaning."] },
      { h: "5. The pool no longer suits the house", p: ["Sometimes nothing is broken. The house has been renovated and the pool still looks like it did twenty years ago. A coordinated renovation of finish, coping, paving and lighting brings the two back together."] },
      { h: "What to do next", p: ["Take a few photos of the pool, coping and surround and send them with a site-visit request. We'll assess the condition on site and explain what needs doing now and what can wait."] },
    ],
  },
  {
    slug: "pool-resurfacing-vs-full-renovation",
    title: "Pool Resurfacing vs Full Renovation",
    category: "Renovation",
    tags: ["Resurfacing", "Planning"],
    excerpt: "Resurfacing fixes the inside of the pool. A renovation looks at everything around it. Which one you need depends on more than the finish.",
    readTime: 6,
    date: "2026-08-18",
    image: img.pool6,
    featured: true,
    related: ["pool-resurfacing", "pool-renovations"],
    body: [
      { h: "What resurfacing covers", p: ["Resurfacing removes a failing interior finish and applies a new one. It's the right choice when the shell is sound, the coping is in good condition and you're happy with the layout and surround."] },
      { h: "What a renovation adds", p: ["A renovation treats the pool and its surroundings as one project: finish, coping, waterline, paving, steps, lighting and sometimes the entertainment area beside it.", "Doing these together usually gives a better result than separate jobs over several years, because levels, colours and edges are planned to work with each other."] },
      { h: "Questions that decide it", p: ["Is the coping solid? Does the surround drain away from the pool? Do you like the shape and depth? Is the area around the pool comfortable to use? If most answers are yes, resurfacing may be enough."] },
      { h: "Sequencing matters", p: ["If you plan to replace the coping or paving within a few years, do it before or with the resurfacing. Coping work done after a new finish risks damaging it."] },
    ],
  },
  {
    slug: "how-to-choose-pool-coping",
    title: "How to Choose Pool Coping",
    category: "Finishes",
    tags: ["Coping", "Finishes"],
    excerpt: "Coping is the frame of the pool. Profile, material and colour all affect comfort, safety and how contemporary the pool looks.",
    readTime: 5,
    date: "2026-08-04",
    image: img.pool1,
    related: ["pool-paving-coping"],
    body: [
      { h: "Profile", p: ["Rounded bullnose coping is comfortable to sit on and soft-looking. Square-edged and slim profiles read as more contemporary and pair well with large-format paving."] },
      { h: "Material", p: ["Coping options include precast concrete, natural stone and porcelain-type products. Each has different heat, slip and maintenance characteristics. Ask to see samples outside in the sun, not just in a showroom."] },
      { h: "Colour", p: ["Lighter coping stays cooler underfoot and visually lifts the water. Darker coping gives a crisp outline but can get hot in summer."] },
      { h: "Detailing", p: ["Joint spacing, overhang and how the coping meets the paving all matter. A good installation has consistent joints and a clean line along the full edge."] },
    ],
  },
  {
    slug: "best-pool-paving-options-gauteng",
    title: "Best Pool Paving Options for Gauteng Homes",
    category: "Paving",
    tags: ["Paving", "Outdoor Living"],
    excerpt: "Hot summers and heavy afternoon storms put pool paving to the test. Here's what to consider before choosing a surface.",
    readTime: 6,
    date: "2026-07-21",
    image: img.pool4,
    related: ["pool-paving-coping", "outdoor-living"],
    body: [
      { h: "Comfort underfoot", p: ["Around a pool, people walk barefoot. Lighter colours and textured surfaces generally stay cooler and offer better grip when wet."] },
      { h: "Drainage first", p: ["Highveld storms deliver a lot of water quickly. Whatever you choose, the paving needs a properly prepared base and falls that send water away from the pool and the house."] },
      { h: "Maintenance", p: ["Porous surfaces can stain from leaves, chlorine and braai drips. Ask whether sealing is recommended and how often."] },
      { h: "Consistency", p: ["Using the same or complementary paving around the pool, patio and braai area makes the whole garden feel planned rather than added to over time."] },
    ],
  },
  {
    slug: "designing-a-pool-and-braai-entertainment-area",
    title: "How to Design a Pool and Braai Entertainment Area",
    category: "Outdoor Living",
    tags: ["Braai", "Layout"],
    excerpt: "The best entertainment areas are planned around movement: from kitchen to braai, braai to table, and table to pool.",
    readTime: 7,
    date: "2026-07-07",
    image: img.living3,
    related: ["outdoor-living", "braai-boma-areas"],
    body: [
      { h: "Start with routes", p: ["Map how people move: carrying food from the kitchen, children running to the pool, guests heading to seating. Keep these routes paved, direct and free of steps where possible."] },
      { h: "Separate wet and fire zones", p: ["Keep the braai far enough from the pool that wet feet and hot coals don't meet, but close enough that the cook isn't cut off from the conversation."] },
      { h: "Think about smoke and wind", p: ["Note where the wind usually comes from and place the braai so smoke drifts away from seating and the house."] },
      { h: "Light it properly", p: ["Light the routes and steps first, then add atmosphere. Low-level lighting works better than a single bright floodlight."] },
    ],
  },
  {
    slug: "before-installing-a-new-pool",
    title: "What to Consider Before Installing a New Pool",
    category: "New Pools",
    tags: ["New Pools", "Planning"],
    excerpt: "Position, size and surroundings matter as much as the pool itself. A short checklist before you commit.",
    readTime: 6,
    date: "2026-06-23",
    image: img.pool3,
    related: ["new-pools", "outdoor-living"],
    body: [
      { h: "Sun and shade", p: ["Watch where the sun falls during the day. A pool in full afternoon sun is warmer; trees nearby mean more leaves."] },
      { h: "Sightlines", p: ["Being able to see the pool from the kitchen or living area matters, especially with young children."] },
      { h: "Access for construction", p: ["Excavation and materials need a route into the garden. Tight access affects method, programme and cost."] },
      { h: "The space around it", p: ["Budget for coping, paving and somewhere to sit. A pool without a usable surround rarely feels finished."] },
      { h: "Rules and safety", p: ["Check estate or municipal requirements early, and plan for pool safety measures such as a cover or fence."] },
    ],
  },
  {
    slug: "how-to-modernise-an-older-pool",
    title: "How to Modernise an Older Swimming Pool",
    category: "Renovation",
    tags: ["Renovation", "Design"],
    excerpt: "You don't need to rebuild to get a contemporary pool. Coping, finish colour, paving and lighting do most of the work.",
    readTime: 5,
    date: "2026-06-09",
    image: img.pool8,
    related: ["pool-renovations", "outdoor-pool-lighting"],
    body: [
      { h: "Change the edge", p: ["Swapping chunky bullnose coping for a slimmer, square profile instantly makes a pool look newer."] },
      { h: "Rethink the colour", p: ["Interior finish colour sets the water tone. Lighter finishes read as fresh and bright; darker ones as deeper and more reflective."] },
      { h: "Simplify the surround", p: ["Fewer materials, larger formats and consistent borders give a calmer, more contemporary look."] },
      { h: "Add restrained lighting", p: ["A lit pool and soft step lighting change how the garden feels at night more than almost anything else."] },
    ],
  },
  {
    slug: "pool-maintenance-mistakes",
    title: "Pool Maintenance Mistakes That Lead to Expensive Repairs",
    category: "Maintenance",
    tags: ["Maintenance", "Repairs"],
    excerpt: "Most costly pool repairs start small. These habits shorten the life of finishes, coping and equipment.",
    readTime: 5,
    date: "2026-05-26",
    image: img.pool7,
    related: ["pool-repairs", "pool-resurfacing"],
    body: [
      { h: "Ignoring water balance", p: ["Water that's out of balance for long periods can etch or stain finishes. Test regularly and adjust in small steps."] },
      { h: "Leaving loose coping", p: ["A single loose coping piece lets water behind the edge. Re-bed it early rather than waiting for neighbouring pieces to follow."] },
      { h: "Letting debris sit", p: ["Leaves left on the floor can stain the finish. Skim and brush regularly, especially in autumn."] },
      { h: "Draining without advice", p: ["Emptying a pool can be risky depending on the shell and ground conditions. Get advice before draining."] },
    ],
  },
];

export const getArticle = (slug: string) => articles.find((a) => a.slug === slug);
export const formatDate = (iso: string) =>
  new Date(iso).toLocaleDateString("en-ZA", { day: "numeric", month: "long", year: "numeric" });
