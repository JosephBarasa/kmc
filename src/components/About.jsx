export default function About() {
  return (
    <section id="about" className="bg-white py-20 border-t border-slate-100">
      <div className="mx-auto max-w-7xl px-4 grid gap-10 md:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)] items-start">
        {/* Text column */}
        <div className="space-y-5">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">
            About Kimwanga Medical Centre
          </p>
          <h2 className="text-3xl md:text-4xl font-semibold text-slate-900">
            Caring for families in Bungoma and beyond
          </h2>
          <p className="text-sm md:text-base text-slate-600">
            Kimwanga Medical Centre is a community‑focused hospital providing
            accessible, quality healthcare services. Our goal is to ensure that
            every patient is treated with dignity, compassion, and professionalism
            from the moment they walk through our doors.
          </p>
          <p className="text-sm md:text-base text-slate-600">
            We combine modern medical practices with a warm, patient‑friendly
            environment. From outpatient visits and maternity care to emergency
            support, our team is committed to being a trusted partner in your
            health journey.
          </p>

          <div className="grid gap-4 sm:grid-cols-3 pt-2">
            <div className="rounded-2xl bg-slate-50 p-4 shadow-sm ring-1 ring-slate-100">
              <p className="text-xs font-semibold text-primary">Our Mission</p>
              <p className="mt-1 text-xs md:text-sm text-slate-600">
                To deliver safe, affordable, and patient‑centered healthcare for
                all members of our community.
              </p>
            </div>
            <div className="rounded-2xl bg-slate-50 p-4 shadow-sm ring-1 ring-slate-100">
              <p className="text-xs font-semibold text-primary">Our Vision</p>
              <p className="mt-1 text-xs md:text-sm text-slate-600">
                To be the most trusted and accessible medical facility in Bungoma
                County and its surroundings.
              </p>
            </div>
            <div className="rounded-2xl bg-slate-50 p-4 shadow-sm ring-1 ring-slate-100">
              <p className="text-xs font-semibold text-primary">Our Values</p>
              <p className="mt-1 text-xs md:text-sm text-slate-600">
                Compassion, excellence, integrity, teamwork, and respect for every
                patient and family.
              </p>
            </div>
          </div>
        </div>

        {/* Highlights column */}
        <div className="space-y-4 rounded-3xl bg-slate-50/80 p-6 md:p-7 shadow-sm ring-1 ring-slate-100">
          <h3 className="text-base md:text-lg font-semibold text-slate-900">
            Why patients choose Kimwanga Medical Centre
          </h3>
          <ul className="space-y-3 text-sm text-slate-600">
            <li className="flex gap-2">
              <span className="mt-1 inline-flex h-4 w-4 items-center justify-center rounded-full bg-emerald-500 text-[10px] text-white">
                ✓
              </span>
              <span>Friendly, approachable staff and clear communication.</span>
            </li>
            <li className="flex gap-2">
              <span className="mt-1 inline-flex h-4 w-4 items-center justify-center rounded-full bg-emerald-500 text-[10px] text-white">
                ✓
              </span>
              <span>Clean, organized environment with a focus on safety.</span>
            </li>
            <li className="flex gap-2">
              <span className="mt-1 inline-flex h-4 w-4 items-center justify-center rounded-full bg-emerald-500 text-[10px] text-white">
                ✓
              </span>
              <span>Collaboration with insurance providers including SHA.</span>
            </li>
            <li className="flex gap-2">
              <span className="mt-1 inline-flex h-4 w-4 items-center justify-center rounded-full bg-emerald-500 text-[10px] text-white">
                ✓
              </span>
              <span>Focus on preventive care, education, and follow‑up.</span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}

