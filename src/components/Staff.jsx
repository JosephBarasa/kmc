export default function Staff() {
  const staffMembers = [
    {
      name: "Dr. Evans Nyamu",
      position: "Manager",
      photo: "/assets/staff1.jpg",
      bio: "---",
    },
    {
      name: "Mrs. Agnes Barasa",
      position: "Deputy Manager",
      photo: "/assets/staff2.jpg",
      bio: "---",
    },
    {
      name: "Dr. Leonard Omukaga",
      position: "Clinical Officer",
      photo: "/assets/staff3.jpg",
      bio: "---",
    },
    {
      name: "Dr. Eddie Odhiambo Okoth",
      position: "Clinical Officer",
      photo: "/assets/staff4.jpg",
      bio: "---",
    },
    {
      name: "Mercy Kavuka",
      position: "Nurse",
      photo: "/assets/staff4.jpg",
      bio: "---",
    },
    {
      name: "---",
      position: "Nurse",
      photo: "/assets/staff4.jpg",
      bio: "---",
    },
    {
      name: "Josphat Mungai",
      position: "Nurse",
      photo: "/assets/staff4.jpg",
      bio: "---",
    },
    {
      name: "Vivian Achieng",
      position: "Nutrionist",
      photo: "/assets/staff4.jpg",
      bio: "---",
    },
    {
      name: "Zamira Hamsa",
      position: "Pharmacist",
      photo: "/assets/staff4.jpg",
      bio: "---",
    },
    {
      name: "Brenda Nanje",
      position: "Pharmacist",
      photo: "/assets/staff4.jpg",
      bio: "---",
    },
    {
      name: "Janet",
      position: "Pharmacist",
      photo: "/assets/staff4.jpg",
      bio: "---",
    },
    {
      name: "Chrishellah Wekesa",
      position: "Pharmacist/Chef",
      photo: "/assets/staff4.jpg",
      bio: "---",
    },
    {
      name: "Joseph Barasa",
      position: "IT",
      photo: "/assets/staff4.jpg",
      bio: "---",
    },
  ];

  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-7xl px-4">

        {/* Section Header */}
        <div className="mb-12 text-center max-w-2xl mx-auto">
          <h2 className="text-3xl font-semibold text-gray-900 mb-3">
            Meet Our Team
          </h2>
          <p className="text-gray-600">
            Our experienced medical professionals are committed to providing exceptional care.
          </p>
        </div>

        {/* Staff Carousel */}
        <div className="relative">
          <div className="flex gap-6 overflow-x-auto scroll-smooth pb-4 snap-x snap-mandatory">

            {staffMembers.map((staff, index) => (
              <div
                key={index}
                className="
                  snap-start
                  min-w-[240px] sm:min-w-[280px]
                  bg-white
                  border border-gray-200
                  rounded-xl
                  p-6
                  text-center
                  transition
                  duration-300
                  hover:-translate-y-2
                  hover:shadow-lg
                  hover:border-primary/40
                "
              >
                {/* Profile Photo */}
                <div className="mx-auto mb-4 h-28 w-28 overflow-hidden rounded-full border-4 border-primary/20">
                  <img
                    src={staff.photo}
                    alt={staff.name}
                    className="h-full w-full object-cover"
                  />
                </div>

                {/* Name & Position */}
                <h3 className="text-lg font-semibold text-gray-900">{staff.name}</h3>
                <p className="text-primary text-sm mb-2">{staff.position}</p>

                {/* Bio */}
                <p className="text-gray-600 text-sm">{staff.bio}</p>
              </div>
            ))}

          </div>

          {/* Scroll Hint */}
          <div className="pointer-events-none absolute right-0 top-0 h-full w-24 bg-gradient-to-l from-white to-transparent" />
        </div>
      </div>
    </section>
  );
}
