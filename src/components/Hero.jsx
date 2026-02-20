export default function Hero() {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-7xl px-4 py-16 grid gap-12 md:grid-cols-2 items-center">

        {/* Text content */}
        <div className="space-y-6 animate-fade-in-up">
          <span className="inline-block rounded-full bg-primary/10 px-4 py-1 text-sm font-medium text-primary">
            Trusted Healthcare
          </span>

          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
            Compassionate Care <br />
            <span className="text-primary">You Can Trust</span>
          </h1>

          <p className="text-gray-600 max-w-lg">
            Kimwanga Medical Center provides reliable, patient-centered healthcare
            with modern facilities and experienced medical professionals.
          </p>

          <div className="flex flex-wrap gap-4">
            <button className="rounded-md bg-primary px-6 py-3 text-white font-medium hover:bg-primary/90 transition">
              Book Appointment
            </button>

            <button className="rounded-md border border-primary px-6 py-3 text-primary font-medium hover:bg-primary/5 transition">
              Our Services
            </button>
          </div>
        </div>

        {/* Image section */}
        <div className="relative animate-fade-in">
          <div className="absolute -inset-4 rounded-2xl bg-primary/10 blur-2xl"></div>

          <div className="relative overflow-hidden rounded-2xl border border-gray-200 bg-gray-100">
            {/* Replace src with your image */}
            <img
              src="/hospital-hero.jpg"
              alt="Hospital building and staff"
              className="h-full w-full object-cover"
            />
          </div>
        </div>

      </div>
    </section>
  )
}
