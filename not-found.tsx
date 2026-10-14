import { Heading } from "@/components/ui/Heading";
import { Button } from "@/components/ui/Button";

export default function NotFound() {
  return (
    <section className="grid-bg">
      <div className="container py-28 sm:py-36">
        <Heading as="h1" eyebrow="404" title="This page" accent="isn't here." intro="The link may be out of date. Head back to the homepage or book a site visit." />
        <div className="mt-10 flex flex-col gap-3 sm:flex-row">
          <Button href="/" variant="dark">Back to Home</Button>
          <Button href="/contact#book" variant="outline" arrow>Book a Site Visit</Button>
        </div>
      </div>
    </section>
  );
}
