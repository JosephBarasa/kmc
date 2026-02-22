import footerBg from "../assets/footerBg.jpg";

export default function Footer() {
  return (
    <footer
      className="relative border-t border-blue-200"
      style={{
        backgroundImage: `url(${footerBg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-blue-100/90 backdrop-blur-sm" />

      <div className="relative mx-auto max-w-7xl px-4 py-16">
        {/* Main Footer Content */}
        <div className="grid gap-12 md:grid-cols-4">
          {/* Hospital Info */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="h-9 w-9 rounded-md bg-primary flex items-center justify-center text-white font-bold">
                H
              </div>
              <span className="text-lg font-semibold text-gray-900">
                Kimwanga Medical Centre
              </span>
            </div>
            <p className="text-sm text-gray-700">
              Providing compassionate, reliable, and modern healthcare services
              to our community.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-semibold text-gray-900 mb-4">
              Quick Links
            </h4>
            <ul className="space-y-2 text-sm text-gray-700">
              <li><a href="#" className="hover:text-primary">Home</a></li>
              <li><a href="#" className="hover:text-primary">Services</a></li>
              <li><a href="#" className="hover:text-primary">Our Staff</a></li>
              <li><a href="#" className="hover:text-primary">About Us</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-sm font-semibold text-gray-900 mb-4">
              Contact
            </h4>
            <ul className="space-y-2 text-sm text-gray-700">
              <li>📍 Bungoma, Kenya</li>
              <li>📞 +254 790463858</li>
              <li>✉️ kimwangamedicalcenter1@gmail.com</li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h4 className="text-sm font-semibold text-gray-900 mb-4">
              Follow Us
            </h4>
            <div className="flex items-center gap-4">
              {/* Social icons go here */}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 border-t border-blue-200 pt-6 flex flex-col sm:flex-row items-center justify-between text-sm text-gray-600">
          <p>
            © {new Date().getFullYear()} Kimwanga Medical Center. All rights reserved.
          </p>
          <p className="mt-2 sm:mt-0">
            Developed by <span className="text-primary font-medium">Joseph Barasa</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
