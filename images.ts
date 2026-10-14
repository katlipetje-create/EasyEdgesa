/**
 * Central image registry.
 * The files in /public/images are generated plan-view placeholders.
 * To use real photography: drop your photos into /public/images and change the paths here
 * (keep roughly 16:10 for cards and 4:3 or wider for galleries).
 */
export const img = {
  hero: { src: "/images/hero.jpg", alt: "Plan view of a residential pool with stone coping, paved surround and boma in a Gauteng garden" },
  og: "/images/og.jpg",
  pool1: { src: "/images/pool-01.jpg", alt: "Rectangular pool with light stone coping and paved surround" },
  pool2: { src: "/images/pool-02.jpg", alt: "L-shaped pool with coping and grey paving" },
  pool3: { src: "/images/pool-03.jpg", alt: "Pool beside a circular boma with fire pit" },
  pool4: { src: "/images/pool-04.jpg", alt: "Long lap-style pool with timber-look deck" },
  pool5: { src: "/images/pool-05.jpg", alt: "Pool with adjoining fire-pit seating area" },
  pool6: { src: "/images/pool-06.jpg", alt: "Compact courtyard pool with paved surround" },
  pool7: { src: "/images/pool-07.jpg", alt: "Family pool with entertainment area and lawn" },
  pool8: { src: "/images/pool-08.jpg", alt: "Contemporary pool with deck and planting" },
  before1: { src: "/images/before-01.jpg", alt: "Pool before renovation with stained finish and worn coping" },
  before2: { src: "/images/before-02.jpg", alt: "Pool before renovation with tired paving" },
  before3: { src: "/images/before-03.jpg", alt: "Pool and boma area before the upgrade" },
  before4: { src: "/images/before-04.jpg", alt: "Older pool surround before resurfacing" },
  before5: { src: "/images/before-05.jpg", alt: "Pool area before the boma integration" },
  before6: { src: "/images/before-06.jpg", alt: "Dated pool before a contemporary upgrade" },
  living1: { src: "/images/living-01.jpg", alt: "Circular paved boma with central fire pit" },
  living2: { src: "/images/living-02.jpg", alt: "Patio with deck and circular seating area" },
  living3: { src: "/images/living-03.jpg", alt: "Outdoor entertainment area linking pool and boma" },
} as const;

export type Img = { src: string; alt: string };
