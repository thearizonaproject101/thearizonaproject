import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

const officialSite = "https://www.thearizonaproject.com"

export default function ContactPage() {
  return (
    <main className="mx-auto flex min-h-[calc(100vh-5rem)] w-full max-w-6xl items-center px-4 py-12 md:px-6">
      <section className="w-full rounded-3xl border border-border/60 bg-white/80 p-8 shadow-sm backdrop-blur dark:bg-black/60 md:p-12">
        <p className="text-sm uppercase tracking-[0.3em] text-muted-foreground">
          Contact
        </p>
        <h1 className="mt-4 text-3xl font-semibold tracking-tight md:text-5xl">
          Contact and follow along
        </h1>
        <p className="mt-6 max-w-2xl text-base leading-7 text-muted-foreground md:text-lg">
          Add your preferred contact details, social links, or newsletter
          signup here when you are ready to publish the project publicly.
        </p>

        <div className="mt-10 grid gap-8 lg:grid-cols-[1.35fr_0.85fr]">
          <div className="rounded-3xl border border-border/60 bg-zinc-50/90 p-8 shadow-sm dark:bg-white/5">
            <p className="text-sm uppercase tracking-[0.3em] text-muted-foreground">
              Mailing list
            </p>
            <h2 className="mt-3 text-2xl font-semibold tracking-tight">
              Stay in the loop
            </h2>
            <p className="mt-4 text-base leading-7 text-muted-foreground">
              Join the Arizona Project mailing list for updates, project notes,
              and first access to new work.
            </p>

            <form className="mt-8 space-y-6">
              <div className="grid gap-4 sm:grid-cols-2">
                <label className="flex flex-col gap-2 text-sm font-medium text-foreground">
                  Name
                  <Input name="name" type="text" placeholder="Your name" />
                </label>
                <label className="flex flex-col gap-2 text-sm font-medium text-foreground">
                  Email
                  <Input
                    name="email"
                    type="email"
                    placeholder="you@example.com"
                  />
                </label>
              </div>
              <label className="flex flex-col gap-2 text-sm font-medium text-foreground">
                Message
                <Textarea
                  name="message"
                  placeholder="What would you like to hear about?"
                  rows={5}
                />
              </label>
              <Button type="submit" className="w-full sm:w-auto">
                Join the list
              </Button>
            </form>
          </div>

          <div className="rounded-3xl border border-border/60 bg-white/80 p-8 shadow-sm backdrop-blur dark:bg-black/60">
            <h2 className="text-2xl font-semibold tracking-tight">
              Why sign up?
            </h2>
            <p className="mt-4 text-base leading-7 text-muted-foreground">
              Receive curated updates, project previews, and occasional behind-
              the-scenes notes that match the Arizona Project vibe.
            </p>
            <div className="mt-6 rounded-3xl bg-muted p-5 text-sm text-foreground">
              No spam, no noise — just thoughtful updates and early access to
              what’s next.
            </div>
          </div>
        </div>

        <div className="mt-10 flex flex-wrap gap-3">
          <Link
            href="/"
            className="rounded-full border border-border px-5 py-2.5 text-sm font-medium transition-colors hover:bg-muted"
          >
            Back home
          </Link>
          <a
            href={officialSite}
            target="_blank"
            rel="noreferrer"
            className="rounded-full bg-foreground px-5 py-2.5 text-sm font-medium text-background transition-colors hover:bg-foreground/90"
          >
            Official site
          </a>
        </div>
      </section>
    </main>
  )
}