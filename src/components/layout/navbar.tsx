import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "motion/react";
import { Menu, X, ChevronDown } from "lucide-react";

const navLinks = [
  {
    label: "Services & Solutions",
    href: "/services",
    children: [
      { label: "AI Solutions", href: "/services/ai-solutions" },
      { label: "Software Development", href: "/services/software-development" },
      { label: "Automation", href: "/services/automation" },
      { label: "Digital Marketing", href: "/services/digital-marketing" },
    ],
  },
  // { label: "Services", href: "/services" },
  {
    label: "Products",
    href: "/products",
    children: [
      { label: "GrowthOS", href: "/products/growthos" },
      { label: "Callifier", href: "/products/callifier" },
      { label: "CounselAI", href: "/products/counselai" },
    ],
  },
  { label: "Industries", href: "/industries" },
  { label: "About", href: "/about" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [lastPath, setLastPath] = useState("");
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu and dropdown on route change
  if (lastPath !== location.pathname) {
    setLastPath(location.pathname);
    if (mobileOpen) setMobileOpen(false);
    if (openDropdown) setOpenDropdown(null);
  }

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled
            ? "bg-background/80 backdrop-blur-xl border-b border-border/50"
            : "bg-transparent"
          }`}
      >
        <nav className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="flex h-18 items-center justify-between">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-3 group">
              <img
                src="/logo.png"
                alt="Exelogy"
                className="h-18 transition-transform group-hover:scale-105"
              />
              {/* <span className="h-6 w-px bg-border" />
              <span className="font-sans text-base font-medium uppercase tracking-[0.25em] text-foreground/90">
                Exelogy
              </span> */}
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-1">
              {navLinks.map((link) => (
                <div
                  key={link.label}
                  className="relative"
                  onMouseEnter={() =>
                    link.children && setOpenDropdown(link.label)
                  }
                  onMouseLeave={() => setOpenDropdown(null)}
                >
                  <Link
                    to={link.href}
                    className="flex items-center gap-1 px-4 py-2 text-sm text-muted-foreground hover:text-foreground transition-colors rounded-lg hover:bg-secondary/50"
                  >
                    {link.label}
                    {link.children && <ChevronDown className="w-3 h-3" />}
                  </Link>
                  {link.children && (
                    <AnimatePresence>
                      {openDropdown === link.label && (
                        <motion.div
                          initial={{ opacity: 0, y: 8 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: 8 }}
                          transition={{ duration: 0.2 }}
                          className="absolute top-full left-0 mt-1 w-56 p-2 rounded-xl bg-card/95 backdrop-blur-xl border border-border shadow-xl shadow-black/20"
                        >
                          {link.children.map((child) => (
                            <Link
                              key={child.label}
                              to={child.href}
                              className="block px-4 py-2.5 text-sm text-muted-foreground hover:text-foreground hover:bg-secondary/50 rounded-lg transition-colors"
                            >
                              {child.label}
                            </Link>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  )}
                </div>
              ))}
            </div>

            {/* CTA + Mobile Toggle */}
            <div className="flex items-center gap-3">
              <Link
                to="/contact"
                className="hidden lg:inline-flex items-center gap-2 px-5 py-2.5 text-sm font-medium rounded-full bg-gradient-to-r from-primary to-accent text-primary-foreground hover:shadow-lg hover:shadow-primary/25 transition-all duration-300 hover:-translate-y-0.5"
              >
                Book a Call
                <span className="text-xs">→</span>
              </Link>
              <button
                onClick={() => setMobileOpen(!mobileOpen)}
                className="lg:hidden p-2 text-foreground"
                aria-label="Toggle menu"
              >
                {mobileOpen ? (
                  <X className="w-5 h-5" />
                ) : (
                  <Menu className="w-5 h-5" />
                )}
              </button>
            </div>
          </div>
        </nav>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 bg-background/98 backdrop-blur-xl pt-20 px-6 overflow-y-auto lg:hidden"
          >
            <div className="space-y-1 py-4">
              {navLinks.map((link) => (
                <div key={link.label}>
                  <Link
                    to={link.href}
                    className="block px-4 py-3 text-lg font-medium text-foreground hover:text-primary transition-colors"
                  >
                    {link.label}
                  </Link>
                  {link.children && (
                    <div className="ml-4 space-y-1 border-l border-border/50 pl-4">
                      {link.children.map((child) => (
                        <Link
                          key={child.label}
                          to={child.href}
                          className="block py-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
            <div className="pt-6 border-t border-border">
              <Link
                to="/contact"
                className="block w-full text-center px-6 py-3 text-base font-medium rounded-full bg-gradient-to-r from-primary to-accent text-primary-foreground"
              >
                Book a Call →
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
