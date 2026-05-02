import { Link } from "react-router-dom";
import { ArrowUpRight, Mail, Phone, MapPin } from "lucide-react";
import Logo from "./Logo";

const Footer = () => {
  return (
    <footer className="bg-ink text-white">
      <div className="container-x py-20 md:py-28">
        <div className="grid gap-14 md:grid-cols-12">
          <div className="md:col-span-5">
            <Logo light />
            <p className="mt-6 max-w-md text-[15px] leading-relaxed text-white/60">
              Premium contract manufacturing, custom packaging and integrated
              3PL distribution — engineered for the world's most ambitious
              wellness brands.
            </p>
            <Link
              to="/contact"
              className="mt-8 inline-flex items-center gap-3 rounded-full bg-white px-7 py-3.5 text-sm font-medium text-ink transition-transform duration-300 hover:-translate-y-0.5"
            >
              Start Your Project <ArrowUpRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="grid grid-cols-2 gap-10 md:col-span-7 md:grid-cols-3">
            <div>
              <div className="text-[11px] font-medium uppercase tracking-[0.22em] text-white/40">
                Products
              </div>
              <ul className="mt-5 space-y-3 text-[14px] text-white/80">
                <li>
                  <Link
                    className="hover:text-white"
                    to="/custom-products/new-product-development"
                  >
                    New Product Development
                  </Link>
                </li>
                <li>
                  <Link
                    className="hover:text-white"
                    to="/custom-products/custom-manufacturing"
                  >
                    Custom Manufacturing
                  </Link>
                </li>
                <li>
                  <Link
                    className="hover:text-white"
                    to="/custom-products/custom-packaging"
                  >
                    Custom Packaging
                  </Link>
                </li>
                <li>
                  <Link className="hover:text-white" to="/distribution">
                    3PL Distribution
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <div className="text-[11px] font-medium uppercase tracking-[0.22em] text-white/40">
                Capabilities
              </div>
              <ul className="mt-5 space-y-3 text-[14px] text-white/80">
                <li>
                  <Link
                    className="hover:text-white"
                    to="/manufacturing/gummies"
                  >
                    Gummies
                  </Link>
                </li>
                <li>
                  <Link
                    className="hover:text-white"
                    to="/manufacturing/capsules"
                  >
                    Capsules
                  </Link>
                </li>
                <li>
                  <Link
                    className="hover:text-white"
                    to="/manufacturing/tablets"
                  >
                    Tablets
                  </Link>
                </li>
                <li>
                  <Link
                    className="hover:text-white"
                    to="/manufacturing/powders"
                  >
                    Powders
                  </Link>
                </li>
                <li>
                  <Link
                    className="hover:text-white"
                    to="/manufacturing/liquids"
                  >
                    Liquids
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <div className="text-[11px] font-medium uppercase tracking-[0.22em] text-white/40">
                Company
              </div>
              <ul className="mt-5 space-y-3 text-[14px] text-white/80">
                <li>
                  <Link className="hover:text-white" to="/about">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link className="hover:text-white" to="/how-we-work">
                    How We Work
                  </Link>
                </li>
                <li>
                  <Link className="hover:text-white" to="/contact">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-20 grid gap-6 border-t border-white/10 pt-8 md:grid-cols-3">
          <div className="flex items-center gap-3 text-[13px] text-white/70">
            <Mail className="h-4 w-4 text-white/40" /> hello@novabrands.com
          </div>
          <div className="flex items-center gap-3 text-[13px] text-white/70">
            <Phone className="h-4 w-4 text-white/40" /> +1 (888) 555-0142
          </div>
          <div className="flex items-center gap-3 text-[13px] text-white/70">
            <MapPin className="h-4 w-4 text-white/40" /> 1200 Industrial Pkwy,
            Salt Lake City, UT
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-3 text-[12px] text-white/40 md:flex-row md:items-center md:justify-between">
          <div>
            © {new Date().getFullYear()} Nova Brands Manufacturing. All rights
            reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
