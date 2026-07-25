export default function Contact() {
  return (
    <main className="mx-auto max-w-2xl px-6 py-24">
      <h1 className="text-3xl font-semibold">Let's talk about your infrastructure.</h1>
      <p className="mt-4 text-muted-foreground">
        We typically respond within 1 business day.
      </p>
      <p className="mt-6 text-sm text-muted-foreground">
        Prefer email? Reach us directly at{" "}
        <a href="mailto:hello@velrite.com" className="text-foreground font-medium hover:underline">
          hello@velrite.com
        </a>
      </p>
      <form
        action="https://formspree.io/f/meeypojw"
        method="POST"
        className="mt-10 space-y-4"
      >
        <input name="name" required className="w-full border rounded-md p-3 bg-background" placeholder="Name" />
        <input name="email" type="email" required className="w-full border rounded-md p-3 bg-background" placeholder="Work Email" />
        <input name="company" className="w-full border rounded-md p-3 bg-background" placeholder="Company" />
        <textarea name="message" required className="w-full border rounded-md p-3 bg-background" rows={5} placeholder="What are you looking to build?" />
        <button type="submit" className="rounded-md bg-primary text-primary-foreground px-6 py-3 font-medium">
          Send Message
        </button>
      </form>
      <div className="mt-12 pt-8 border-t flex gap-6 text-sm text-muted-foreground">
        <a href="https://www.linkedin.com/in/olamide-olalekan-12138a265/" target="_blank" rel="noopener noreferrer" className="hover:text-foreground">LinkedIn</a>
        <a href="https://github.com/velrite" target="_blank" rel="noopener noreferrer" className="hover:text-foreground">GitHub</a>
      </div>
    </main>
  );
}
