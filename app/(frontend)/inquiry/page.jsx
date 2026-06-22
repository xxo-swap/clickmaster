export default function ContactPage() {
  return (
    <main className="min-h-screen bg-white px-6">
      <section className="mx-auto flex max-w-4xl flex-col py-24">
        {/* Heading */}
        <div className="mb-16 max-w-2xl">
          <p className="mb-3 text-sm uppercase tracking-[0.2em] text-zinc-500">
            Product Photography
          </p>

          <h1 className="text-5xl font-semibold tracking-tight text-zinc-900">
            Let's create images that sell.
          </h1>

          <p className="mt-6 text-lg leading-8 text-zinc-600">
            Whether you're launching a new brand or refreshing your catalog,
            tell us about your product and we'll send you a customized quote.
          </p>
        </div>

        {/* Form */}
        <form className="space-y-10">
          <div className="grid gap-8 md:grid-cols-2">
            <div>
              <label className="mb-3 block text-sm font-medium text-zinc-900">
                Name
              </label>
              <input
                type="text"
                placeholder="Your name"
                className="w-full border-b border-zinc-300 bg-transparent py-3 outline-none focus:border-black"
              />
            </div>

            <div>
              <label className="mb-3 block text-sm font-medium text-zinc-900">
                Email
              </label>
              <input
                type="email"
                placeholder="you@example.com"
                className="w-full border-b border-zinc-300 bg-transparent py-3 outline-none focus:border-black"
              />
            </div>
          </div>

          <div>
            <label className="mb-3 block text-sm font-medium text-zinc-900">
              Product Type
            </label>
            <input
              type="text"
              placeholder="Cosmetics, Jewelry, Food, Clothing..."
              className="w-full border-b border-zinc-300 bg-transparent py-3 outline-none focus:border-black"
            />
          </div>

          <div>
            <label className="mb-3 block text-sm font-medium text-zinc-900">
              Project Details
            </label>
            <textarea
              rows={4}
              placeholder="Tell us about your products, number of items, preferred style, etc."
              className="w-full border-b border-zinc-300 bg-transparent py-3 outline-none focus:border-black resize-none"
            />
          </div>

          <div className="flex items-center justify-between border-t pt-8">
            <p className="text-sm text-zinc-500">
              Response within 24 hours.
            </p>

            <button
              className="rounded-full bg-black px-8 py-4 text-sm font-medium text-white transition hover:bg-zinc-800"
            >
              Request Quote
            </button>
          </div>
        </form>
      </section>
    </main>
  );
}