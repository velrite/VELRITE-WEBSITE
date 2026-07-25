import Link from "next/link";

export default function Home() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Velrite",
    url: "https://velrite.com",
    description:
      "Velrite helps enterprise teams build secure, scalable cloud infrastructure through platform engineering and DevSecOps consulting.",
    sameAs: [
      "https://www.linkedin.com/in/olamide-olalekan-12138a265/",
      "https://github.com/velrite",
    ],
  };

  return (
    <main className="mx-auto max-w-5xl px-6 py-24">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <section className="text-center">
        <h1 className="text-4xl sm:text-5xl font-semibold tracking-tight">
          We Design Secure Cloud Platforms That Scale.
        </h1>
        <p className="mt-6 text-lg text-muted-foreground max-w-2xl mx-auto">
          Velrite helps engineering-driven companies build reliable, secure, and automated infrastructure — from Kubernetes platforms to CI/CD pipelines to cloud security.
        </p>
        <div className="mt-10 flex justify-center gap-4">
          <Link href="/contact" className="rounded-md bg-primary text-primary-foreground px-6 py-3 font-medium hover:opacity-90">
            Book a Discovery Call
          </Link>
          <Link href="/case-studies" className="rounded-md border px-6 py-3 font-medium hover:bg-zinc-50 dark:hover:bg-zinc-900">
            View Case Studies
          </Link>
        </div>
      </section>
    </main>
  );
}
