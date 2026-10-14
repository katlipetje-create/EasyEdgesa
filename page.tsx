import Link from "next/link";
import { HomeHero } from "@/components/sections/HomeHero";
import { FeaturedCard } from "@/components/cards/FeaturedCard";
import { ServiceCard } from "@/components/cards/ServiceCard";
import { ProjectCard } from "@/components/cards/ProjectCard";
import { ArticleCard } from "@/components/cards/ArticleCard";
import { Pillars } from "@/components/sections/Pillars";
import { ProcessSteps } from "@/components/sections/ProcessSteps";
import { QuickServices } from "@/components/sections/QuickServices";
import { FAQAccordion } from "@/components/sections/FAQAccordion";
import { BookSection } from "@/components/sections/BookSection";
import { AreaLinks } from "@/components/sections/AreaLinks";
import { Heading } from "@/components/ui/Heading";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { services } from "@/data/services";
import { projects } from "@/data/projects";
import { articles } from "@/data/articles";
import { generalFaqs } from "@/data/faqs";
import { img } from "@/lib/images";
import { pageMeta } from "@/lib/seo";

export const metadata = pageMeta({
  title: "Swimming Pool Contractors & Outdoor Living in Gauteng",
  description:
    "New swimming pools, pool renovations, resurfacing, coping, paving and outdoor entertainment areas in Sandton, Fourways, Midrand, Pretoria and across Gauteng. Book a site visit.",
  path: "/",
});

export default function HomePage() {
  return (
    <>
      <HomeHero />

      {/* FEATURED SERVICES — modelled on the reference blog's two-card "Featured" row */}
      <section className="section bg-white" aria-labelledby="featured-heading">
        <div className="container">
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div id="featured-heading">
              <Heading eyebrow="Featured Services" title="Where most projects" accent="begin." />
            </div>
            <Link href="/projects" className="link-underline self-start text-sm font-semibold md:self-auto">See finished work</Link>
          </div>
          <div className="mt-12 grid gap-6 lg:grid-cols-2">
            <FeaturedCard
              href="/pool-renovations"
              image={img.pool2}
              label="Swimming Pool Renovations"
              tags={["Renovation", "Resurfacing", "Coping"]}
              heading="Give Your Pool a Second Life."
              description="Modernise ageing finishes, damaged coping, outdated paving and tired pool surrounds with a coordinated renovation."
              cta="Explore Renovations"
              initials="RN"
              meta="Site visit · itemised quote"
            />
            <FeaturedCard
              href="/pools"
              image={img.pool3}
              label="New Pool Installations"
              tags={["Design", "Construction", "Outdoor Living"]}
              heading="Built for More Than Swimming."
              description="Plan the pool, paving and entertainment area as one cohesive outdoor environment."
              cta="Explore New Pools"
              initials="NP"
              meta="Planned with the whole garden"
            />
          </div>
        </div>
      </section>

      {/* ALL SERVICES — adapted from the reference's "All Articles" grid */}
      <section className="section border-t border-line bg-paper" aria-labelledby="services-heading">
        <div className="container">
          <Reveal>
            <div id="services-heading">
              <Heading eyebrow="What We Do" title="Our Services" accent="Pool to patio." intro="Each service can be booked on its own, or planned together as one project with a single team and one programme." />
            </div>
          </Reveal>
          <div className="mt-14 grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
            {services.map((s) => <ServiceCard key={s.slug} service={s} />)}
          </div>
        </div>
      </section>

      <Pillars />

      {/* PROJECTS */}
      <section className="section bg-white" aria-labelledby="projects-heading">
        <div className="container">
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div id="projects-heading">
              <Heading eyebrow="Case Studies" title="Recent" accent="Projects." intro="Renovations, new surrounds and entertainment areas across Gauteng." />
            </div>
            <Button href="/projects" variant="outline" arrow className="self-start md:self-auto">View Our Projects</Button>
          </div>
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {projects.map((p) => <ProjectCard key={p.slug} project={p} />)}
          </div>
        </div>
      </section>

      <ProcessSteps tone="paper" />
      <QuickServices />

      {/* AREAS */}
      <section className="section bg-white" aria-labelledby="areas-heading">
        <div className="container grid gap-10 lg:grid-cols-[1fr_1.2fr] lg:items-center">
          <div id="areas-heading">
            <Heading eyebrow="Service Areas" title="Working across" accent="Gauteng." intro="From established Sandton gardens to newer Midrand and Kyalami homes. Choose your area for local considerations." />
          </div>
          <AreaLinks />
        </div>
      </section>

      {/* INSIGHTS */}
      <section className="section border-t border-line bg-paper" aria-labelledby="insights-heading">
        <div className="container">
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div id="insights-heading">
              <Heading eyebrow="Insights" title="Practical advice" accent="before you build." />
            </div>
            <Button href="/insights" variant="outline" arrow className="self-start md:self-auto">All Insights</Button>
          </div>
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {articles.slice(0, 4).map((a) => <ArticleCard key={a.slug} article={a} />)}
          </div>
        </div>
      </section>

      <FAQAccordion faqs={generalFaqs} />
      <BookSection title="Let's Transform" accent="Your Outdoor Space." />
    </>
  );
}
