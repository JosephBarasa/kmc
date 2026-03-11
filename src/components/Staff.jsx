import Leonard from '../assets/leonard.jpg';
import Eddie from '../assets/eddie2.jpeg';
import Brenda from '../assets/brenda.png';
import Chrishellah from '../assets/chrishellah.jpg';
import Janet from '../assets/janet.jpg';
import Zamira from '../assets/zamira.jpg';
import Mungai from '../assets/mungai.jpg';
import Viviane from '../assets/viviane.png';
import Evans from '../assets/evans.png';
import Agnes from '../assets/agnes.jpg';
import JB from '../assets/jb.jpeg';

export default function Staff() {
  const staffMembers = [
    {
      name: "Dr. Evans Nyamu",
      position: "Manager",
      photo: Evans,
      bio: "Oversees hospital operations and ensures high standards of care.",
    },
    {
      name: "Mrs. Agnes Barasa",
      position: "Deputy Manager",
      photo: Agnes,
      bio: "Supports administration and drives community‑focused health programs.",
    },
    {
      name: "Dr. Leonard Omukaga",
      position: "Clinical Officer",
      photo: Leonard,
      bio: "Experienced clinician offering general and emergency medical services.",
    },
    {
      name: "Dr. Eddie Odhiambo Okoth",
      position: "Clinical Officer",
      photo: Eddie,
      bio: "Clinical officer with special interest in internal medicine.",
    },
    {
      name: "Josphat Mungai",
      position: "Nurse",
      photo: Mungai,
      bio: "Registered nurse providing patient‑centered inpatient and outpatient care.",
    },
    {
      name: "Joseph Barasa",
      position: "IT",
      photo: JB,
      bio: "Leads technology and digital systems to improve patient experience.",
    },
    {
      name: "Vivian Achieng",
      position: "Nutrionist",
      photo: Viviane,
      bio: "Provides nutrition counselling for prevention and management of disease.",
    },
    {
      name: "Zamira Hamsa",
      position: "Pharmacist",
      photo: Zamira,
      bio: "Dispenses medication and advises on safe and effective use.",
    },
    {
      name: "Brenda Nanje",
      position: "Pharmacist",
      photo: Brenda,
      bio: "Pharmacy professional ensuring access to quality medicines.",
    },
    {
      name: "Janet",
      position: "Pharmacist",
      photo: Janet,
      bio: "Supports the pharmacy team and patient medication counselling.",
    },
    {
      name: "Chrishellah Wekesa",
      position: "Pharmacist/Chef",
      photo: Chrishellah,
      bio: "Ensures quality service in both pharmacy and hospital catering.",
    },
  ];

  return (
    <section id="staff" className="bg-slate-50 py-20">
      <div className="mx-auto max-w-7xl px-4">

        {/* Section Header */}
        <div className="mb-10 flex flex-col items-center text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">
            Our Team
          </p>
          <h2 className="mt-2 text-3xl md:text-4xl font-semibold text-slate-900">
            Meet the People Behind Your Care
          </h2>
          <p className="mt-3 max-w-2xl text-sm md:text-base text-slate-600">
            A multidisciplinary team of clinicians, nurses, pharmacists, and support
            staff working together to provide safe and dignified healthcare.
          </p>
        </div>

        {/* Staff Carousel */}
        <div className="relative">
          <div className="flex gap-6 overflow-x-auto scroll-smooth pb-4 snap-x snap-mandatory">
            {staffMembers.map((staff) => (
              <article
                key={staff.name}
                className="
                  snap-start
                  min-w-[220px] sm:min-w-[260px]
                  flex flex-col items-center
                  rounded-2xl bg-white p-6 text-center
                  shadow-sm ring-1 ring-slate-100
                  transition duration-300
                  hover:-translate-y-1.5 hover:shadow-lg hover:ring-primary/30
                "
              >
                {/* Profile Photo */}
                <div className="relative mx-auto mb-4 h-24 w-24 overflow-hidden rounded-full border-4 border-primary/15 bg-slate-100">
                  <img
                    src={staff.photo}
                    alt={staff.name}
                    className="h-full w-full object-cover"
                  />
                  <span className="absolute -bottom-1 right-1 h-3 w-3 rounded-full border-2 border-white bg-emerald-500" />
                </div>

                {/* Name & Position */}
                <h3 className="text-base md:text-lg font-semibold text-slate-900">
                  {staff.name}
                </h3>
                <p className="mt-1 text-xs font-semibold uppercase tracking-wide text-primary">
                  {staff.position}
                </p>

                {/* Bio */}
                <p className="mt-3 text-xs md:text-sm text-slate-600">
                  {staff.bio}
                </p>
              </article>
            ))}
          </div>

          {/* Scroll hint gradient on right edge */}
          <div className="pointer-events-none absolute right-0 top-0 h-full w-16 bg-gradient-to-l from-slate-50 to-transparent" />
        </div>
      </div>
    </section>
  );
}
