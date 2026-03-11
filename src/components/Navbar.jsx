import { useState } from "react"

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 border-b border-blue-100 bg-white/90 backdrop-blur">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 md:py-4">

        {/* Logo + Brand */}
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary text-white font-semibold shadow-sm">
            K
          </div>
          <div className="leading-tight">
            <p className="text-sm font-semibold text-slate-900">
              Kimwanga Medical Centre
            </p>
            <p className="text-xs text-slate-500">
              Compassion. Excellence. Trust.
            </p>
          </div>
        </div>

        {/* Desktop Menu */}
        <div className="hidden items-center gap-10 md:flex">
          <ul className="flex items-center gap-8 text-sm font-medium text-slate-700">
            <li>
              <button
                onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                className="transition hover:text-primary"
              >
                Home
              </button>
            </li>
            <li>
              <button
                onClick={() =>
                  document
                    .getElementById("services")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
                className="transition hover:text-primary"
              >
                Services
              </button>
            </li>
            <li>
              <button
                onClick={() =>
                  document
                    .getElementById("staff")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
                className="transition hover:text-primary"
              >
                Our Team
              </button>
            </li>
          </ul>

          {/* Call to action */}
          <a
            href="tel:+254790463858"
            className="rounded-full bg-primary px-4 py-2 text-sm font-semibold text-white shadow-sm transition hover:bg-primary-dark"
          >
            Call Emergency
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="inline-flex items-center justify-center rounded-md p-2 text-slate-700 hover:bg-slate-100 focus:outline-none focus:ring-2 focus:ring-primary md:hidden"
          aria-label="Toggle navigation menu"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            {isOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </nav>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden border-t border-blue-100 bg-white/95 backdrop-blur-sm">
          <ul className="flex flex-col gap-2 px-4 py-3 text-sm font-medium text-slate-700">
            <li>
              <button
                onClick={() => {
                  window.scrollTo({ top: 0, behavior: "smooth" })
                  setIsOpen(false)
                }}
                className="block w-full text-left rounded-md px-2 py-2 hover:bg-slate-50"
              >
                Home
              </button>
            </li>
            <li>
              <button
                onClick={() => {
                  document
                    .getElementById("services")
                    ?.scrollIntoView({ behavior: "smooth" })
                  setIsOpen(false)
                }}
                className="block w-full text-left rounded-md px-2 py-2 hover:bg-slate-50"
              >
                Services
              </button>
            </li>
            <li>
              <button
                onClick={() => {
                  document
                    .getElementById("staff")
                    ?.scrollIntoView({ behavior: "smooth" })
                  setIsOpen(false)
                }}
                className="block w-full text-left rounded-md px-2 py-2 hover:bg-slate-50"
              >
                Our Team
              </button>
            </li>
            <li className="pt-1">
              <a
                href="tel:+254790463858"
                className="flex items-center justify-center rounded-full bg-primary px-4 py-2 text-sm font-semibold text-white shadow-sm transition hover:bg-primary-dark"
              >
                Call Emergency
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  )
}
