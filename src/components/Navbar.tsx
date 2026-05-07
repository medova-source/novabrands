import { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { ChevronDown, Menu, X, ArrowUpRight } from "lucide-react";
import Logo from "./Logo";

const customProducts = [
  {
    to: "/custom-products/new-product-development",
    label: "New Product Development",
    desc: "From idea to finished SKU.",
  },
  {
    to: "/custom-products/custom-manufacturing",
    label: "Custom Product Manufacturing",
    desc: "Match or build any formula.",
  },
  {
    to: "/custom-products/custom-packaging",
    label: "Custom Packaging Design",
    desc: "Complete packaging studio.",
  },
];

const capabilities = [
  {
    to: "/manufacturing",
    label: "Overview",
    desc: "ISO certified GMP facility.",
  },
  {
    to: "/manufacturing/gummies",
    label: "Gummies",
    desc: "Pectin & gelatin formats.",
  },
  {
    to: "/manufacturing/capsules",
    label: "Capsules",
    desc: "Veggie, gel & specialty.",
  },
  {
    to: "/manufacturing/tablets",
    label: "Tablets",
    desc: "Coated, layered, chewable.",
  },
  {
    to: "/manufacturing/powders",
    label: "Powders",
    desc: "Sticks, jars & bulk.",
  },
  {
    to: "/manufacturing/liquids",
    label: "Liquids",
    desc: "Tinctures, shots & syrups.",
  },
];

const NavDropdown = ({
  label,
  items,
  isDarkNav,
}: {
  label: string;
  items: { to: string; label: string; desc: string }[];
  isDarkNav: boolean;
}) => (
  <div className="group relative">
    <button
      className={`flex items-center gap-1.5 py-2 text-[13px] font-medium transition-colors ${!isDarkNav ? "text-foreground/80 hover:text-foreground" : "text-white/80 hover:text-white"}`}
    >
      {label}
      <ChevronDown className="h-3.5 w-3.5 transition-transform duration-300 group-hover:rotate-180" />
    </button>
    <div className="invisible absolute left-1/2 top-full z-50 -translate-x-1/2 translate-y-1 pt-3 opacity-0 transition-all duration-300 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100">
      <div className="w-[420px] overflow-hidden rounded-2xl border border-[hsl(var(--rule))] bg-card p-2 shadow-[var(--shadow-lift)]">
        {items.map((item) => (
          <Link
            key={item.to}
            to={item.to}
            className="group/item flex items-start justify-between gap-4 rounded-xl px-4 py-3 transition-colors hover:bg-secondary"
          >
            <div>
              <div className="text-sm font-medium text-foreground">
                {item.label}
              </div>
              <div className="mt-0.5 text-xs text-muted-foreground">
                {item.desc}
              </div>
            </div>
            <ArrowUpRight className="mt-0.5 h-4 w-4 shrink-0 -translate-x-1 translate-y-1 text-muted-foreground opacity-0 transition-all duration-300 group-hover/item:translate-x-0 group-hover/item:translate-y-0 group-hover/item:opacity-100" />
          </Link>
        ))}
      </div>
    </div>
  </div>
);

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === "/";
  const isDarkNav = isHome && !scrolled;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
    window.scrollTo({ top: 0, behavior: "instant" as ScrollBehavior });
  }, [location.pathname]);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-background/85 backdrop-blur-xl border-b border-[hsl(var(--rule))]"
          : "bg-transparent"
      }`}
    >
      <div className="container-x flex h-16 items-center justify-between md:h-20">
        <Logo light={isDarkNav} />

        <nav className="hidden items-center gap-8 lg:flex">
          <NavLink
            to="/"
            className={({ isActive }) =>
              `text-[13px] font-medium transition-colors ${isActive ? (!isDarkNav ? "text-foreground" : "text-white") : !isDarkNav ? "text-foreground/80 hover:text-foreground" : "text-white/80 hover:text-white"}`
            }
          >
            Home
          </NavLink>
          <NavDropdown
            label="Custom Products"
            items={customProducts}
            isDarkNav={isDarkNav}
          />
          <NavDropdown
            label="Manufacturing"
            items={capabilities}
            isDarkNav={isDarkNav}
          />
          <NavLink
            to="/distribution"
            className={({ isActive }) =>
              `text-[13px] font-medium transition-colors ${isActive ? (!isDarkNav ? "text-foreground" : "text-white") : !isDarkNav ? "text-foreground/80 hover:text-foreground" : "text-white/80 hover:text-white"}`
            }
          >
            3PL Distribution
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) =>
              `text-[13px] font-medium transition-colors ${isActive ? (!isDarkNav ? "text-foreground" : "text-white") : !isDarkNav ? "text-foreground/80 hover:text-foreground" : "text-white/80 hover:text-white"}`
            }
          >
            About
          </NavLink>
          <NavLink
            to="/how-we-work"
            className={({ isActive }) =>
              `text-[13px] font-medium transition-colors ${isActive ? (!isDarkNav ? "text-foreground" : "text-white") : !isDarkNav ? "text-foreground/80 hover:text-foreground" : "text-white/80 hover:text-white"}`
            }
          >
            How We Work
          </NavLink>
        </nav>

        <div className="flex items-center gap-3">
          <Link
            to="/contact"
            className={`hidden md:inline-flex btn-primary !py-2.5 !px-5 !text-[13px] ${isDarkNav ? "bg-[hsl(var(--primary))] text-white hover:bg-[hsl(var(--primary))]/90 shadow-[0_4px_20px_rgb(0,156,254,0.3)]" : "bg-[hsl(var(--primary))] text-white hover:bg-[hsl(var(--primary))]/90"}`}
          >
            Contact Us
            <ArrowUpRight className="h-4 w-4" />
          </Link>
          <button
            onClick={() => setOpen(true)}
            className={`grid h-10 w-10 place-items-center rounded-full border lg:hidden ${!isDarkNav ? "border-[hsl(var(--rule))] text-foreground" : "border-white/20 text-white"}`}
            aria-label="Open menu"
          >
            <Menu className="h-4 w-4" />
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`fixed inset-0 z-50 flex flex-col bg-background transition-opacity duration-500 lg:hidden ${open ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0"}`}
      >
        <div className="flex shrink-0 h-16 items-center justify-between px-6 md:h-20 md:px-10">
          <Logo />
          <button
            onClick={() => setOpen(false)}
            className="grid h-10 w-10 place-items-center rounded-full border border-[hsl(var(--rule))]"
            aria-label="Close menu"
          >
            <X className="h-4 w-4" />
          </button>
        </div>
        <div className="container-x grid gap-1 py-6 overflow-y-auto flex-1">
          <Link
            to="/"
            className="py-2 text-2xl font-display font-semibold tracking-tight"
          >
            Home
          </Link>
          <div className="num-tag mb-2 mt-4">01 : Custom Products</div>
          {customProducts.map((i) => (
            <Link
              key={i.to}
              to={i.to}
              className="py-2 text-2xl font-display font-semibold tracking-tight"
            >
              {i.label}
            </Link>
          ))}
          <div className="num-tag mb-2 mt-8">02 : Manufacturing</div>
          {capabilities.map((i) => (
            <Link
              key={i.to}
              to={i.to}
              className="py-2 text-2xl font-display font-semibold tracking-tight"
            >
              {i.label}
            </Link>
          ))}
          <div className="num-tag mb-2 mt-8">03 : Company</div>
          <Link
            to="/distribution"
            className="py-2 text-2xl font-display font-semibold tracking-tight"
          >
            3PL Distribution
          </Link>
          <Link
            to="/about"
            className="py-2 text-2xl font-display font-semibold tracking-tight"
          >
            About
          </Link>
          <Link
            to="/how-we-work"
            className="py-2 text-2xl font-display font-semibold tracking-tight"
          >
            How We Work
          </Link>
          <Link to="/contact" className="mt-6 btn-primary w-fit">
            Start Your Project <ArrowUpRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
