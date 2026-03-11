export default function Footer() {
  return (
    <footer
      className="relative border-t border-blue-100 bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700"
    >
      <div className="mx-auto max-w-7xl px-4 py-10 md:py-12">
        {/* Main Footer Content */}
        <div className="grid gap-8 md:grid-cols-4 items-start">
          {/* Hospital Info */}
          <div className="md:col-span-2">
            <div className="mb-3 flex items-center gap-3">
              <div className="flex h-9 w-9 items-center justify-center rounded-md bg-primary text-white font-bold shadow-sm">
                K
              </div>
              <span className="text-lg font-semibold text-white">
                Kimwanga Medical Centre
              </span>
            </div>
            <p className="text-xs md:text-sm text-blue-100/90">
              A community‑based medical facility dedicated to delivering safe,
              accessible, and affordable healthcare for families in and around
              Bungoma.
            </p>
          </div>

          {/* Contact */}
          <div>
            <h4 className="mb-3 text-sm font-semibold text-white">
              Contact
            </h4>
            <ul className="space-y-1.5 text-xs md:text-sm text-blue-100">
              <li>📍 Bungoma, Kenya</li>
              <li>📞 <a href="tel:+254790463858" className="hover:underline">+254 790 463 858</a></li>
              <li>✉️ <a href="mailto:kimwangamedicalcenter1@gmail.com" className="hover:underline">kimwangamedicalcenter1@gmail.com</a></li>
              <li>🕒 24/7 Emergency Services</li>
            </ul>
          </div>

          {/* Quick Links / Social */}
          <div>
            <h4 className="mb-3 text-sm font-semibold text-white">
              Quick Links
            </h4>
            <ul className="space-y-1.5 text-xs md:text-sm text-blue-100">
              <li>
                <button
                  onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                  className="hover:underline"
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
                  className="hover:underline"
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
                  className="hover:underline"
                >
                  Our Team
                </button>
              </li>
            </ul>

            <div className="mt-4">
              <p className="mb-2 text-xs font-semibold uppercase tracking-wide text-blue-200">
                Follow Us
              </p>
              <div className="flex items-center gap-2 text-blue-100">
                <span className="flex h-7 w-7 items-center justify-center rounded-full bg-white/10 text-[10px]">
                  fb
                </span>
                <span className="flex h-7 w-7 items-center justify-center rounded-full bg-white/10 text-[10px]">
                  ig
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-8 flex flex-col items-center justify-between gap-2 border-t border-blue-800/60 pt-4 text-[11px] md:flex-row md:text-xs lg:text-sm text-blue-100">
          <p>
            © {new Date().getFullYear()} Kimwanga Medical Center. All rights reserved.
          </p>
          <p className="mt-1 md:mt-0">
            Developed by{" "}
            <span className="font-medium text-white">
              Joseph Barasa
            </span>
          </p>
        </div>
      </div>
    </footer>
  );
}
