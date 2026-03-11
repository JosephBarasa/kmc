import bgImg1 from "../assets/bgImg1.jpg";

export default function Services() {
  const services = [
    {
      title: "Outpatient Clinics",
      description: "General consultation, specialist reviews, and follow‑up care without admission.",
      icon: "🩺",
    },
    {
      title: "Inpatient & Wards",
      description: "Comfortable, closely monitored wards for patients who require admission.",
      icon: "🏥",
    },
    {
      title: "Maternity & Childbirth",
      description: "Antenatal, delivery, and postnatal care in a safe, family‑friendly environment.",
      icon: "🤱",
    },
    {
      title: "Laboratory & Diagnostics",
      description: "Accurate tests and timely results using trusted diagnostic equipment.",
      icon: "🔬",
    },
    {
      title: "Pharmacy",
      description: "Fully stocked pharmacy with genuine medication and professional guidance.",
      icon: "💊",
    },
    {
      title: "Emergency & Ambulance",
      description: "Rapid response to medical emergencies with trained staff on standby.",
      icon: "🚑",
    },
  ];

  return (
    <section
      id="services"
      className="relative py-20 bg-cover bg-center"
      style={{ backgroundImage: `url(${bgImg1})` }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-white/85 backdrop-blur-sm" />

      <div className="relative mx-auto max-w-7xl px-4">

        {/* Section Header */}
        <div className="mb-10 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div className="max-w-2xl">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">
              Our Services
            </p>
            <h2 className="mt-2 text-3xl md:text-4xl font-semibold text-slate-900">
              Comprehensive Care Under One Roof
            </h2>
            <p className="mt-3 text-sm md:text-base text-slate-600">
              From routine check‑ups to emergency care, we provide a full range
              of medical services designed around safety, dignity, and compassion.
            </p>
          </div>

          <div className="mt-4 rounded-2xl bg-white/80 px-4 py-3 text-xs md:text-sm text-slate-700 shadow-sm ring-1 ring-slate-100">
            <p>
              Need clarification about a service?{" "}
              <span className="font-semibold text-primary">
                Call +254 790 463 858
              </span>
            </p>
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <article
              key={service.title}
              className="group flex flex-col rounded-2xl bg-white/90 p-6 shadow-sm ring-1 ring-slate-100 transition hover:-translate-y-1.5 hover:bg-white hover:shadow-lg hover:ring-primary/30"
            >
              <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-xl bg-primary-light text-lg">
                <span className="text-base">{service.icon}</span>
              </div>

              <h3 className="text-base md:text-lg font-semibold text-slate-900">
                {service.title}
              </h3>

              <p className="mt-2 text-sm text-slate-600 flex-1">
                {service.description}
              </p>

              <div className="mt-4 flex items-center text-xs font-semibold text-primary">
                <span className="transition group-hover:translate-x-0.5">
                  Learn more
                </span>
                <span className="ml-1 transition group-hover:translate-x-0.5">
                  →
                </span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
