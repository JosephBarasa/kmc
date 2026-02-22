import bgImg1 from "../assets/bgImg1.jpg";

export default function Services() {
  const services = [
    {
      title: "Outpatient Care",
      description: "Fast, reliable diagnosis and treatment without admission.",
    },
    {
      title: "Inpatient Services",
      description: "24/7 monitored care with experienced medical staff.",
    },
    {
      title: "Laboratory",
      description: "Accurate diagnostics using modern lab technology.",
    },
    {
      title: "Pharmacy",
      description: "Well-stocked pharmacy with professional guidance.",
    },
    {
      title: "Maternity",
      description: "Safe delivery, antenatal and postnatal care.",
    },
    {
      title: "Emergency",
      description: "Immediate response for critical medical situations.",
    },
  ];

  return (
    <section
      className="relative py-20 bg-cover bg-center"
      style={{ backgroundImage: `url(${bgImg1})` }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-white/80 backdrop-blur-sm" />

      <div className="relative mx-auto max-w-7xl px-4">

        {/* Section Header */}
        <div className="mb-12 max-w-2xl">
          <h2 className="text-3xl font-semibold text-gray-900 mb-3">
            Our Medical Services
          </h2>
          <p className="text-gray-700">
            Comprehensive healthcare services designed around patient safety,
            efficiency, and compassion.
          </p>
        </div>

        {/* Services Carousel */}
        <div className="relative">
          <div className="flex gap-6 overflow-x-auto scroll-smooth pb-4 snap-x snap-mandatory">

            {services.map((service, index) => (
              <div
                key={index}
                className="
                  snap-start
                  min-w-[280px]
                  bg-white
                  border border-gray-200
                  rounded-xl
                  p-6
                  transition
                  duration-300
                  hover:-translate-y-2
                  hover:shadow-xl
                  hover:border-primary/40
                "
              >
                {/* Icon Placeholder */}
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary font-bold">
                  +
                </div>

                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {service.title}
                </h3>

                <p className="text-sm text-gray-600">
                  {service.description}
                </p>

                <div className="mt-4">
                  <a
                    href="#"
                    className="text-sm font-medium text-primary hover:underline"
                  >
                    Learn more →
                  </a>
                </div>
              </div>
            ))}

          </div>

          {/* Scroll Hint */}
          <div className="pointer-events-none absolute right-0 top-0 h-full w-24 bg-gradient-to-l from-white/80 to-transparent" />
        </div>
      </div>
    </section>
  );
}
