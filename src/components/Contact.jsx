export default function Contact() {
  return (
    <section id="contact" className="bg-slate-50 py-20 border-t border-slate-100">
      <div className="mx-auto max-w-7xl px-4">
        {/* Header */}
        <div className="mb-10 text-center max-w-2xl mx-auto">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">
            Contact & Visiting Us
          </p>
          <h2 className="mt-2 text-3xl md:text-4xl font-semibold text-slate-900">
            We are here when you need us
          </h2>
          <p className="mt-3 text-sm md:text-base text-slate-600">
            Reach out to Kimwanga Medical Centre for appointments, emergencies,
            or general enquiries. Our reception team is ready to assist you.
          </p>
        </div>

        <div className="grid gap-10 md:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)] items-start">
          {/* Contact details */}
          <div className="space-y-6">
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="rounded-2xl bg-white p-5 shadow-sm ring-1 ring-slate-100">
                <h3 className="text-sm font-semibold text-slate-900">
                  General Enquiries
                </h3>
                <p className="mt-1 text-xs md:text-sm text-slate-600">
                  For questions about services, pricing, and availability.
                </p>
                <div className="mt-3 space-y-1 text-xs md:text-sm text-slate-700">
                  <p>📞 <a href="tel:+254790463858" className="hover:underline">+254 790 463 858</a></p>
                  <p>✉️ <a href="mailto:kimwangamedicalcenter1@gmail.com" className="hover:underline">kimwangamedicalcenter1@gmail.com</a></p>
                </div>
              </div>

              <div className="rounded-2xl bg-white p-5 shadow-sm ring-1 ring-slate-100">
                <h3 className="text-sm font-semibold text-slate-900">
                  Emergency & After Hours
                </h3>
                <p className="mt-1 text-xs md:text-sm text-slate-600">
                  For urgent medical attention and emergency support.
                </p>
                <div className="mt-3 space-y-1 text-xs md:text-sm text-slate-700">
                  <p>📞 <a href="tel:+254790463858" className="font-semibold text-primary hover:underline">+254 790 463 858</a></p>
                  <p>🕒 Available 24/7 for emergencies</p>
                </div>
              </div>
            </div>

            <div className="rounded-2xl bg-white p-5 shadow-sm ring-1 ring-slate-100">
              <h3 className="text-sm font-semibold text-slate-900">
                Location & Visiting Hours
              </h3>
              <div className="mt-3 grid gap-4 sm:grid-cols-2 text-xs md:text-sm text-slate-700">
                <div>
                  <p className="font-semibold text-slate-900">Address</p>
                  <p className="mt-1 text-slate-700">
                    Kimwanga Medical Centre
                    <br />
                    Bungoma, Kenya
                  </p>
                </div>
                <div>
                  <p className="font-semibold text-slate-900">Visiting Hours</p>
                  <p className="mt-1 text-slate-700">
                    Mon – Sun: 6:00am – 8:00pm
                    <br />
                    Emergencies: 24/7
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Simple contact form (non-functional UI) */}
          <div className="rounded-3xl bg-white p-6 md:p-7 shadow-sm ring-1 ring-slate-100">
            <h3 className="text-base md:text-lg font-semibold text-slate-900">
              Send us a message
            </h3>
            <p className="mt-1 text-xs md:text-sm text-slate-600">
              Share your enquiry and our team will get back to you.
            </p>

            <form className="mt-5 space-y-4">
              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label className="block text-xs font-medium text-slate-700 mb-1.5">
                    Full name
                  </label>
                  <input
                    type="text"
                    placeholder="Enter your full name"
                    className="w-full rounded-lg border border-slate-200 bg-slate-50 px-3 py-2 text-sm text-slate-900 outline-none ring-primary/10 focus:bg-white focus:border-primary focus:ring-2"
                  />
                </div>
                <div>
                  <label className="block text-xs font-medium text-slate-700 mb-1.5">
                    Phone number
                  </label>
                  <input
                    type="tel"
                    placeholder="+254 ..."
                    className="w-full rounded-lg border border-slate-200 bg-slate-50 px-3 py-2 text-sm text-slate-900 outline-none ring-primary/10 focus:bg-white focus:border-primary focus:ring-2"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-medium text-slate-700 mb-1.5">
                  Email address (optional)
                </label>
                <input
                  type="email"
                  placeholder="you@example.com"
                  className="w-full rounded-lg border border-slate-200 bg-slate-50 px-3 py-2 text-sm text-slate-900 outline-none ring-primary/10 focus:bg-white focus:border-primary focus:ring-2"
                />
              </div>

              <div>
                <label className="block text-xs font-medium text-slate-700 mb-1.5">
                  Your message
                </label>
                <textarea
                  rows={4}
                  placeholder="Share your question, concern, or feedback..."
                  className="w-full rounded-lg border border-slate-200 bg-slate-50 px-3 py-2 text-sm text-slate-900 outline-none ring-primary/10 focus:bg-white focus:border-primary focus:ring-2"
                />
              </div>

              <button
                type="button"
                className="mt-2 inline-flex w-full items-center justify-center rounded-full bg-primary px-6 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:bg-primary-dark"
              >
                Submit enquiry
              </button>

              <p className="mt-2 text-[11px] text-slate-500">
                For urgent medical concerns, please call{" "}
                <span className="font-semibold text-primary">
                  +254 790 463 858
                </span>{" "}
                instead of using this form.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

