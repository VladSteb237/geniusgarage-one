"use client";
import Link from "next/link";

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-neutral-950 text-neutral-100">
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="mx-auto max-w-7xl px-6 py-24">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
            Contact <span className="text-orange-500">GeniusGarage</span>
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-neutral-300">
            Let’s talk about your idea, project, or challenge. We usually
            respond within 24 hours.
          </p>
        </div>

        <div className="absolute inset-0 -z-10 bg-gradient-to-br from-orange-500/10 via-transparent to-transparent" />
      </section>

      {/* Content */}
      <section className="mx-auto max-w-7xl px-6 py-20">
        <div className="grid gap-12 md:grid-cols-2">
          {/* Contact info */}
          <div>
            <h2 className="text-3xl font-semibold">Get in touch</h2>
            <p className="mt-4 text-neutral-300">
              Reach out to us for partnerships, product development,
              consultations, or just to say hello.
            </p>

            <div className="mt-8 space-y-4 text-neutral-300">
              <div>
                <span className="block text-sm text-neutral-400">Email</span>
                <a
                  href="mailto:hello@geniusgarage.com"
                  className="hover:text-orange-500">
                  hello@geniusgarage.com
                </a>
              </div>

              <div>
                <span className="block text-sm text-neutral-400">Location</span>
                <span>Remote / Worldwide</span>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="rounded-2xl border border-neutral-800 bg-neutral-900 p-6">
            <form className="space-y-6">
              <div>
                <label className="block text-sm text-neutral-400">
                  Your name
                </label>
                <input
                  type="text"
                  placeholder="John Doe"
                  className="mt-2 w-full rounded-xl border border-neutral-800 bg-neutral-950 px-4 py-3 text-neutral-100 placeholder-neutral-500 focus:border-orange-500 focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-sm text-neutral-400">
                  Email address
                </label>
                <input
                  type="email"
                  placeholder="you@example.com"
                  className="mt-2 w-full rounded-xl border border-neutral-800 bg-neutral-950 px-4 py-3 text-neutral-100 placeholder-neutral-500 focus:border-orange-500 focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-sm text-neutral-400">
                  Message
                </label>
                <textarea
                  rows={5}
                  placeholder="Tell us about your project..."
                  className="mt-2 w-full rounded-xl border border-neutral-800 bg-neutral-950 px-4 py-3 text-neutral-100 placeholder-neutral-500 focus:border-orange-500 focus:outline-none"
                />
              </div>

              <button
                type="button"
                className="inline-flex w-full items-center justify-center rounded-xl bg-orange-500 px-6 py-3 font-semibold text-black transition hover:bg-orange-400"
                onClick={() => (window.location.href = "/")}>
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>
    </main>
  );
}
