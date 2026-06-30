import { useState, useEffect } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";

const navItems = [
  {
    label: "Home",
    path: "/",
  },
  {
    label: "About",
    path: "/about",
  },
  {
    label: "Leadership",
    path: "/leadership",
  },
  {
    label: "Initiatives",
    path: "/initiatives",
  },
  {
    label: "Analytics",
    path: "/analytics",
  },
  {
    label: "Insights",
    path: "/insights",
  },
];

export default function Navbar() {
  const location = useLocation();

  const [mobileOpen, setMobileOpen] = useState(false);

  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [location]);

  return (
    <>

      {/* ============================= */}
      {/* NAVBAR */}
      {/* ============================= */}

      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          location.pathname !== "/"
            ? "bg-[#090909]/95 backdrop-blur-xl shadow-xl border-b border-yellow-500/10"
            : scrolled
              ? "bg-[#090909]/95 backdrop-blur-xl shadow-xl border-b border-yellow-500/10"
              : "bg-transparent"
  }`}
>
        <div className="max-w-7xl mx-auto">

          <div className="flex items-center justify-between h-24 px-8 lg:px-12">

            {/* ========================= */}
            {/* LOGO */}
            {/* ========================= */}

            <NavLink
              to="/"
              className="flex items-center gap-3"
            >
              <img
                src="/assets/dagfa-logo.png"
                alt="DAGFA"
                className="h-16 w-17 rounded-full object-contain"
              />

              <div className="hidden md:block leading-tight">

                <h2 className="text-white font-extrabold text-2xl tracking-tight">

                  DAGFA

                </h2>

                <p className="text-yellow-400 font-extrabold text-xs uppercase tracking-[2px]">

                  Data Analytics Group

                </p>
                <p className="text-gray-400 font-extrabold text-sm uppercase tracking-[2px]">

                for Asiwaju

                </p>

              </div>

            </NavLink>

            {/* ========================= */}
            {/* DESKTOP NAV */}
            {/* ========================= */}

            <nav className="hidden lg:flex items-center gap-10">

              {navItems.map((item) => (

                <NavLink
                  key={item.path}
                  to={item.path}
                  className={({ isActive }) =>
                    `relative uppercase text-sm tracking-widest font-medium transition-all duration-300 ${
                      isActive
                        ? "text-yellow-400"
                        : "text-white hover:text-yellow-400"
                    }`
                  }
                >
                  {({ isActive }) => (
                    <>
                      {item.label}

                      {isActive && (
                        <span className="absolute -bottom-2 left-0 w-full h-[2px] bg-yellow-500 rounded-full" />
                      )}
                    </>
                  )}
                </NavLink>

              ))}

            </nav>

            {/* ========================= */}
            {/* CTA */}
            {/* ========================= */}

            <div className="hidden lg:flex items-center gap-4">

              <NavLink
                to="/contact"
                className="bg-yellow-500 hover:bg-yellow-400 text-black font-semibold px-6 py-3 rounded-full transition duration-300"
              >
                Contact Us
              </NavLink>

            </div>

            {/* ========================= */}
            {/* MOBILE BUTTON */}
            {/* ========================= */}

            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="lg:hidden text-white"
            >
              {mobileOpen ? (
                <X size={30} />
              ) : (
                <Menu size={30} />
              )}
            </button>

          </div>
        </div>
      </header>
            {/* ============================= */}
      {/* MOBILE MENU */}
      {/* ============================= */}

      <div
        className={`fixed top-0 right-0 h-screen w-[340px] bg-[#080808] border-l border-yellow-500/20 shadow-2xl z-[60] transform transition-transform duration-500 lg:hidden ${
          mobileOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >

        <div className="flex items-center justify-between px-6 h-20 border-b border-white/10">

          <div className="flex items-center gap-3">

            <img
              src="/assets/dagfa-/logo.png"
              alt="DAGFA"
              className="w-14 h-14 object-contain"
            />

            <div>

              <h3 className="font-bold text-xl text-white">

                DAGFA

              </h3>

              <p className="text-[10px] uppercase tracking-[3px] text-yellow-400">

                Data Analytics Group

              </p>
              <p className="text-gray-300 text-sm">

                for Asiwaju

                </p>
            </div>

          </div>

          <button
            onClick={() => setMobileOpen(false)}
            className="text-white hover:text-yellow-400 transition"
          >
            <X size={28} />
          </button>

        </div>

        <div className="flex flex-col py-8">

          {navItems.map((item) => (

            <NavLink
              key={item.path}
              to={item.path}
              onClick={() => setMobileOpen(false)}
              className={({ isActive }) =>
                `px-8 py-5 text-lg font-medium border-b border-white/5 transition-all duration-300 ${
                  isActive
                    ? "text-yellow-400 bg-yellow-500/10 rounded-full px-4 py-2"
                    : "text-white hover:text-yellow-400 hover:bg-white/5"
                }`
              }
            >

              {item.label}

            </NavLink>

          ))}

          <div className="px-8 mt-10">

            <NavLink
              to="/contact"
              onClick={() => setMobileOpen(false)}
              className="bg-yellow-500 hover:bg-yellow-400 text-black font-semibold px-7 py-3.5 rounded-full transition-all duration-300 hover:scale-105 shadow-lg"
            >
            Partner With DAGFA
            </NavLink>

          </div>

        </div>

      </div>

      {/* ============================= */}
      {/* BACKDROP */}
      {/* ============================= */}

      {mobileOpen && (

        <div
          onClick={() => setMobileOpen(false)}
          className="fixed inset-0 bg-black/70 backdrop-blur-sm z-40 lg:hidden"
        />

      )}

</>
  );
}