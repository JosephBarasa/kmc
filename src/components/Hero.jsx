import heroImage from '../assets/kmc img1.jpg';

export default function Hero() {
  return (
    <section className="bg-gradient-to-b from-primary-light/60 via-white to-white">
      <div className="mx-auto max-w-7xl px-4 py-16 md:py-20 grid gap-12 md:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)] items-center">

        {/* Text content */}
        <div className="space-y-8 animate-fade-in-up">
          <div className="inline-flex items-center gap-2 rounded-full bg-white/80 px-3 py-1 text-xs font-semibold text-primary ring-1 ring-primary/20 shadow-sm">
            <span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-primary text-[10px] text-white">
              24/7
            </span>
            <span>Emergency & Quality Healthcare Services</span>
          </div>

          <div className="space-y-4">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 leading-tight">
              Compassionate Care
              <br />
              <span className="text-primary">Close to Your Community</span>
            </h1>
            <p className="text-slate-600 max-w-xl text-sm md:text-base">
              Kimwanga Medical Centre offers comprehensive outpatient, inpatient,
              maternity, emergency, and diagnostic services – delivered by a
              dedicated team of professionals who put patients first.
            </p>
          </div>

          {/* CTAs + reassurance */}
          <div className="space-y-4">
            <div className="flex flex-wrap gap-3">
              <button className="rounded-full bg-primary px-7 py-3 text-sm md:text-base font-semibold text-white shadow-sm transition hover:bg-primary-dark focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary">
                Book an Appointment
              </button>

              <button
                onClick={() =>
                  document
                    .getElementById("services")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
                className="rounded-full border border-primary/30 bg-white px-7 py-3 text-sm md:text-base font-semibold text-primary shadow-sm transition hover:bg-primary-light/60"
              >
                View Our Services
              </button>
            </div>

            <div className="flex flex-wrap items-center gap-6 text-xs md:text-sm text-slate-600">
              <div className="flex items-center gap-2">
                <span className="inline-block h-2 w-2 rounded-full bg-emerald-500" />
                <span>Licensed medical facility</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="inline-block h-2 w-2 rounded-full bg-emerald-500" />
                <span>SHA & major insurance accepted</span>
              </div>
            </div>
          </div>

          {/* Quick stats */}
          <div className="grid grid-cols-3 gap-4 max-w-md pt-2">
            <div className="rounded-2xl bg-white/80 p-4 shadow-sm ring-1 ring-slate-100">
              <p className="text-xs text-slate-500">Patients served</p>
              <p className="text-xl md:text-2xl font-bold text-slate-900">10K+</p>
            </div>
            <div className="rounded-2xl bg-white/80 p-4 shadow-sm ring-1 ring-slate-100">
              <p className="text-xs text-slate-500">Medical experts</p>
              <p className="text-xl md:text-2xl font-bold text-slate-900">15+</p>
            </div>
            <div className="rounded-2xl bg-white/80 p-4 shadow-sm ring-1 ring-slate-100">
              <p className="text-xs text-slate-500">Average rating</p>
              <p className="text-xl md:text-2xl font-bold text-slate-900">4.8/5</p>
            </div>
          </div>
        </div>

        {/* Image + appointment card */}
        <div className="relative animate-fade-in">
          <div className="absolute -inset-6 rounded-[32px] bg-primary/10 blur-3xl" />

          <div className="relative overflow-hidden rounded-[28px] border border-white/70 bg-slate-100 shadow-xl">
            <img
              src={heroImage}
              alt="Kimwanga Medical Centre facility and staff"
              className="h-full w-full object-cover"
            />
          </div>

          {/* Floating appointment card */}
          <div className="absolute -bottom-6 left-4 right-4 rounded-2xl bg-white/95 p-4 shadow-lg ring-1 ring-slate-100 backdrop-blur">
            <div className="flex items-center justify-between gap-4">
              <div>
                <p className="text-xs font-semibold uppercase tracking-wide text-primary">
                  Same-Day Appointments
                </p>
                <p className="text-sm text-slate-600">
                  Call us now to speak with our reception team.
                </p>
              </div>
              <a
                href="tel:+254790463858"
                className="shrink-0 rounded-full bg-emerald-500 px-4 py-2 text-xs md:text-sm font-semibold text-white shadow-sm transition hover:bg-emerald-600"
              >
                Call +254 790 463 858
              </a>
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}
