import { ArrowUp, Mail, MapPin, Phone, Facebook, Twitter, Linkedin, Instagram } from "lucide-react";
import { NavLink } from "react-router-dom";
import { useState } from "react";

export default function Footer() {
  const [email, setEmail] = useState("");

  const year = new Date().getFullYear();

  const quickLinks = [
    { name: "Home", path: "/" },
    { name: "About DAGFA", path: "/about" },
    { name: "Leadership", path: "/leadership" },
    { name: "Initiatives", path: "/initiatives" },
    { name: "Analytics", path: "/analytics" },
    { name: "Insights", path: "/insights" },
    { name: "Contact", path: "/contact" },
  ];

  const resources = [
    "Research Papers",
    "Election Intelligence",
    "Policy Briefs",
    "Data Visualization",
    "SPECTRA Platform",
    "Publications",
  ];

  return (
    <footer className="relative bg-[#070707] text-white border-t border-yellow-600/20">

      {/* Gold Accent */}
      <div className="h-1 bg-gradient-to-r from-yellow-500 via-yellow-300 to-yellow-600" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-20">

        <div className="grid lg:grid-cols-4 gap-14">

          {/* ================================= */}
          {/* LOGO & ABOUT */}
          {/* ================================= */}

          <div>

            <img
              src="/assets/dagfa-logo.png"
              alt="DAGFA"
              className="h-20 mb-6"
            />

            <h2 className="text-2xl font-bold tracking-wide text-yellow-400">
              DAGFA
            </h2>

            <p className="text-sm uppercase tracking-[4px] text-gray-500 mt-1">
              Data Analytics Group for Asiwaju
            </p>

            <p className="mt-6 text-gray-400 leading-8">

              DAGFA leverages data intelligence, research,
              innovation and technology to strengthen governance,
              public policy, democratic participation and evidence-
              based decision making across Nigeria.

            </p>

          </div>

          {/* ================================= */}
          {/* QUICK LINKS */}
          {/* ================================= */}

          <div>

            <h3 className="text-lg font-semibold text-white mb-6">
              Quick Links
            </h3>

            <ul className="space-y-4">

              {quickLinks.map((link) => (

                <li key={link.path}>

                  <NavLink
                    to={link.path}
                    className="text-gray-400 hover:text-yellow-400 transition"
                  >

                    {link.name}

                  </NavLink>

                </li>

              ))}

            </ul>

          </div>

          {/* ================================= */}
          {/* RESEARCH */}
          {/* ================================= */}

          <div>

            <h3 className="text-lg font-semibold text-white mb-6">
              Research & Analytics
            </h3>

            <ul className="space-y-4">

              {resources.map((item) => (

                <li
                  key={item}
                  className="text-gray-400 hover:text-yellow-400 cursor-pointer transition"
                >

                  {item}

                </li>

              ))}

            </ul>

          </div>

                    {/* ================================= */}
          {/* CONTACT + NEWSLETTER */}
          {/* ================================= */}

          <div>

            <h3 className="text-lg font-semibold text-white mb-6">
              Stay Connected
            </h3>

            <div className="space-y-5">

              <div className="flex items-start gap-3">

                <MapPin
                  size={18}
                  className="text-yellow-400 mt-1"
                />

                <span className="text-gray-400 leading-7">
                  Abuja, Federal Capital Territory,
                  Nigeria
                </span>

              </div>

              <div className="flex items-center gap-3">

                <Phone
                  size={18}
                  className="text-yellow-400"
                />

                <span className="text-gray-400">
                  +234 (0) 813 532 8069
                </span>

              </div>

              <div className="flex items-center gap-3">

                <Mail
                  size={18}
                  className="text-yellow-400"
                />

                <span className="text-gray-400">
                  info@dagfa.org
                </span>

              </div>

            </div>

            {/* Newsletter */}

            <div className="mt-10">

              <h4 className="font-semibold mb-4 text-white">
                Subscribe to Updates
              </h4>

              <div className="flex">

                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Your email address"
                  className="flex-1 rounded-l-lg bg-[#111] border border-gray-700 px-4 py-3 outline-none text-white placeholder-gray-500 focus:border-yellow-500"
                />

                <button
                  className="bg-yellow-500 hover:bg-yellow-400 transition text-black font-semibold px-6 rounded-r-lg"
                >
                  Join
                </button>

              </div>

            </div>

            {/* Socials */}

            <div className="flex gap-4 mt-10">

              <a
                href="https://facebook.com/_dagfa"
                className="w-11 h-11 rounded-full bg-[#111] hover:bg-yellow-500 hover:text-black transition flex items-center justify-center"
              >
                <Facebook size={18} />
              </a>

              <a
                href="https://x.com/_dagfa"
                className="w-11 h-11 rounded-full bg-[#111] hover:bg-yellow-500 hover:text-black transition flex items-center justify-center"
              >
                <Twitter size={18} />
              </a>

              <a
                href="https://linkedin.com/company/dagfa"
                className="w-11 h-11 rounded-full bg-[#111] hover:bg-yellow-500 hover:text-black transition flex items-center justify-center"
              >
                <Linkedin size={18} />
              </a>

              <a
                href="https://instagram.com/_dagfa"
                className="w-11 h-11 rounded-full bg-[#111] hover:bg-yellow-500 hover:text-black transition flex items-center justify-center"
              >
                <Instagram size={18} />
              </a>

            </div>

          </div>

        </div>

        {/* ================================= */}
        {/* BOTTOM BAR */}
        {/* ================================= */}

        <div className="border-t border-white/10 mt-20 pt-8 flex flex-col lg:flex-row justify-between items-center gap-6">

          <div className="text-sm text-gray-500 text-center lg:text-left">

            © {year} <span className="text-yellow-400">DAGFA</span> —
            Data Analytics Group for Asiwaju.
            All Rights Reserved.

          </div>

          <div className="flex gap-8 text-sm">

            <NavLink
              to="/privacy"
              className="text-gray-500 hover:text-yellow-400 transition"
            >
              Privacy Policy
            </NavLink>

            <NavLink
              to="/terms"
              className="text-gray-500 hover:text-yellow-400 transition"
            >
              Terms of Use
            </NavLink>

            <NavLink
              to="/contact"
              className="text-gray-500 hover:text-yellow-400 transition"
            >
              Contact
            </NavLink>

          </div>

          <button
            onClick={() =>
              window.scrollTo({
                top: 0,
                behavior: "smooth",
              })
            }
            className="w-12 h-12 rounded-full bg-yellow-500 hover:bg-yellow-400 text-black flex items-center justify-center transition"
          >
            <ArrowUp size={20} />
          </button>

        </div>

        </div>

</footer>
);
}