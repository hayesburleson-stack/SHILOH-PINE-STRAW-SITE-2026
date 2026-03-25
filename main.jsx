export default function App() {
  const reviews = [
    {
      name: "Jennifer Johnson",
      text: "Candido from Shiloh Pinestraw was a pleasure to work with and a great communicator! They were fast, efficient, and reasonable. I paid a few extra dollars to have them install the pine straw and it looks absolutely beautiful, done with such care! Highly recommended! The pine straw is super clean and top quality! My yard looks gorgeous!",
    },
    {
      name: "Laurie Shoulars",
      text: "First time using this company and was very pleased. Workers were polite and did a great job installing pine straw. I will definitely use them again for future landscaping needs. Highly recommend!",
    },
    {
      name: "Tammy Daniels",
      text: "This is an excellent company to work with on doing my yard work. They pine needle and mulch my yard and I'm completely happy. I have been using this company for over two years. They have great prices to accommodate your budget.",
    },
    {
      name: "Jamie Gabriel",
      text: "We just had a great experience using Shiloh Pine Straw to install 150 bales of pine straw at our home. Not only did they provide excellent quality pine straw and professional installation, they were half the price of what we had been quoted by our regular lawn service. We will certainly be using Candido and his team in the future!!!",
    },
    {
      name: "Bob",
      text: "Very professional, on time, high quality pine straw, very fresh, delivered. Will use again next year. Recommend",
    },
    {
      name: "Ryan Sabatini",
      text: "Their team acted quickly to get me a quote and were out to my property, taking care of the front and back yard in just a few hours. The work is great, the yard looks super clean and their mulch work was a much needed improvement for my yard. This is a great company to work with for a very reasonable price",
    },
    {
      name: "Scott Cottrill",
      text: "Candido and the crew were the best and I highly recommend them for making your yard look great! They were on-time, efficient and easy pay via Venmo. 5 stars!",
    },
  ];

  const services = [
    "Pine Straw Installation",
    "Mulch Installation",
    "Landscaping Services",
    "Yard Refresh & Cleanup",
  ];

  return (
    <div className="min-h-screen bg-stone-50 text-stone-900">
      <section className="relative overflow-hidden bg-gradient-to-br from-green-900 via-green-800 to-amber-700 text-white">
        <div className="absolute inset-0 opacity-10">
          <div className="h-full w-full bg-[radial-gradient(circle_at_top_left,_white_0,_transparent_35%),radial-gradient(circle_at_bottom_right,_white_0,_transparent_30%)]" />
        </div>

        <div className="relative mx-auto max-w-6xl px-6 py-20 md:py-28">
          <div className="grid items-center gap-12 md:grid-cols-2">
            <div>
              <p className="mb-4 inline-flex rounded-full border border-white/30 px-4 py-1 text-sm font-medium backdrop-blur">
                Raleigh, North Carolina
              </p>
              <h1 className="text-4xl font-bold leading-tight md:text-6xl">
                Shiloh Pine Straw Landscaping Company
              </h1>
              <p className="mt-6 max-w-xl text-lg text-white/90 md:text-xl">
                17 years of experience in pine straw, mulch, and landscaping.
                Our goal is simple: make every client happy with excellent,
                dependable service.
              </p>

              <div className="mt-8 flex flex-wrap gap-4">
                <a
                  href="tel:9197207117"
                  className="rounded-2xl bg-white px-6 py-3 font-semibold text-green-900 shadow-lg transition hover:scale-[1.02]"
                >
                  Call Now: (919) 720-7117
                </a>
                <a
                  href="#reviews"
                  className="rounded-2xl border border-white/40 px-6 py-3 font-semibold text-white transition hover:bg-white/10"
                >
                  See Reviews
                </a>
              </div>
            </div>

            <div>
              <div className="rounded-[2rem] bg-white/10 p-6 shadow-2xl backdrop-blur-md">
                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="rounded-3xl bg-white/10 p-5">
                    <p className="text-sm text-white/80">Experience</p>
                    <p className="mt-2 text-3xl font-bold">17 Years</p>
                  </div>
                  <div className="rounded-3xl bg-white/10 p-5">
                    <p className="text-sm text-white/80">Service Area</p>
                    <p className="mt-2 text-3xl font-bold">Raleigh</p>
                  </div>
                  <div className="rounded-3xl bg-white/10 p-5 sm:col-span-2">
                    <p className="text-sm text-white/80">What We Do</p>
                    <p className="mt-2 text-xl font-semibold leading-relaxed">
                      Pine straw, mulch, and landscaping services with careful,
                      professional installation.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-16">
        <div className="grid gap-8 md:grid-cols-2">
          <div className="rounded-[2rem] bg-white p-8 shadow-sm ring-1 ring-stone-200">
            <h2 className="text-3xl font-bold">About Us</h2>
            <p className="mt-4 text-lg leading-8 text-stone-700">
              Shiloh Pine Straw Landscaping Company proudly serves Raleigh,
              North Carolina with high-quality pine straw, mulch, and
              landscaping services. With 17 years of experience in the
              industry, we focus on doing the job right, treating customers
              with respect, and leaving every yard looking its best.
            </p>
            <p className="mt-4 text-lg leading-8 text-stone-700">
              We believe great service means clear communication, fair pricing,
              and work done with care. Our mission is to make our clients happy
              by providing excellent service from start to finish.
            </p>
          </div>

          <div className="rounded-[2rem] bg-green-900 p-8 text-white shadow-sm">
            <h2 className="text-3xl font-bold">Our Services</h2>
            <div className="mt-6 grid gap-4">
              {services.map((service) => (
                <div
                  key={service}
                  className="rounded-2xl border border-white/15 bg-white/5 px-5 py-4 text-lg"
                >
                  {service}
                </div>
              ))}
            </div>
            <div className="mt-8 rounded-2xl bg-amber-400/15 p-5 ring-1 ring-amber-200/20">
              <p className="text-sm uppercase tracking-[0.2em] text-amber-200">
                Contact
              </p>
              <a
                href="tel:9197207117"
                className="mt-2 block text-2xl font-bold text-white"
              >
                (919) 720-7117
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-16">
        <div className="rounded-[2rem] bg-white p-8 shadow-sm ring-1 ring-stone-200">
          <div className="max-w-3xl">
            <p className="font-semibold uppercase tracking-[0.2em] text-green-800">
              Why Homeowners Choose Pine Straw
            </p>
            <h2 className="mt-3 text-3xl font-bold md:text-4xl">
              Clean, natural curb appeal with lasting value
            </h2>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            <div className="rounded-3xl bg-stone-50 p-6 ring-1 ring-stone-200">
              <h3 className="text-xl font-bold">Beautiful Finish</h3>
              <p className="mt-3 leading-7 text-stone-700">
                Fresh pine straw gives flower beds and landscaped areas a neat,
                polished look that instantly improves curb appeal.
              </p>
            </div>
            <div className="rounded-3xl bg-stone-50 p-6 ring-1 ring-stone-200">
              <h3 className="text-xl font-bold">Plant Protection</h3>
              <p className="mt-3 leading-7 text-stone-700">
                Pine straw helps retain moisture, regulate soil temperature, and
                protect the roots of your plants throughout the season.
              </p>
            </div>
            <div className="rounded-3xl bg-stone-50 p-6 ring-1 ring-stone-200">
              <h3 className="text-xl font-bold">Dependable Service</h3>
              <p className="mt-3 leading-7 text-stone-700">
                We focus on quality materials, careful installation, fair
                pricing, and excellent customer service from start to finish.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="reviews" className="bg-stone-100 py-16">
        <div className="mx-auto max-w-6xl px-6">
          <div className="max-w-2xl">
            <p className="font-semibold uppercase tracking-[0.2em] text-green-800">
              Customer Reviews
            </p>
            <h2 className="mt-3 text-3xl font-bold md:text-4xl">
              Trusted by happy homeowners
            </h2>
            <p className="mt-4 text-lg text-stone-700">
              Here’s what customers have said about working with Shiloh Pine
              Straw Landscaping Company.
            </p>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {reviews.map((review, index) => (
              <div
                key={index}
                className="rounded-[2rem] bg-white p-7 shadow-sm ring-1 ring-stone-200"
              >
                <div className="mb-4 text-2xl">★★★★★</div>
                <p className="leading-8 text-stone-700">“{review.text}”</p>
                <p className="mt-4 font-semibold text-green-800">
                  — {review.name}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-16">
        <div className="rounded-[2rem] bg-gradient-to-r from-amber-600 to-green-800 p-8 text-white shadow-xl md:p-12">
          <div className="grid items-center gap-8 md:grid-cols-2">
            <div>
              <h2 className="text-3xl font-bold md:text-4xl">
                Ready to refresh your yard?
              </h2>
              <p className="mt-4 text-lg text-white/90">
                Call today for pine straw, mulch, and landscaping services in
                Raleigh, North Carolina.
              </p>
            </div>
            <div className="flex md:justify-end">
              <a
                href="tel:9197207117"
                className="rounded-2xl bg-white px-8 py-4 text-lg font-bold text-green-900 shadow-lg transition hover:scale-[1.02]"
              >
                (919) 720-7117
              </a>
            </div>
          </div>
        </div>
      </section>

      <footer className="border-t border-stone-200 bg-white">
        <div className="mx-auto flex max-w-6xl flex-col gap-3 px-6 py-8 text-sm text-stone-600 md:flex-row md:items-center md:justify-between">
          <p>© {new Date().getFullYear()} Shiloh Pine Straw Landscaping Company</p>
          <p>Raleigh, North Carolina • (919) 720-7117</p>
        </div>
      </footer>
    </div>
  );
}
