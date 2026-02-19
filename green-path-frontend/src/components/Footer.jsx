import React from "react";
import { Link } from "react-router-dom";
import {
  MapPin,
  Mail,
  Send,
  Github,
  Linkedin,
  Twitter,
  Youtube,
  Facebook,
  Wind,
} from "lucide-react";
import PrimaryHeading from "./PrimaryHeading";

function Footer() {
  let address = "IET Lucknow,226021"
  return (
    <footer className="w-full bg-[#756AB6] text-[#FFEFEF]">

      {/* TOP SECTION */}
      <div className="max-w-7xl mx-auto px-6 py-6 grid grid-cols-1 lg:grid-cols-2 gap-10">

        {/* LEFT : Brand + Links */}
        <div className="space-y-6">
          {/* Brand */}

          <div className="flex items-center gap-2">
            <div className="flex flex-col">
              <div className="flex flex-row items-center">
                <Wind />
                <span
                  className="
                text-2xl
                font-semibold
                tracking-wide
                font-['Dancing_Script',cursive]
              "
                >
                  Airo
                </span>
              </div>


              <i className="text-sm font-semibold">A map that cares</i>
            </div>

          </div>

          {/* Nav Links */}
          <div className="flex flex-wrap gap-6 text-sm">
            <Link to="/" className="hover:text-[#E2BBE9] transition">
              Home
            </Link>
            <Link to="/explore" className="hover:text-[#E2BBE9] transition">
              Explore
            </Link>
            <Link to="/about" className="hover:text-[#E2BBE9] transition">
              About
            </Link>
            <Link to="/contact" className="hover:text-[#E2BBE9] transition">
              Contact
            </Link>
            <Link to="/help" className="hover:text-[#E2BBE9] transition">
              Help
            </Link>
          </div>
          <div className="max-w-7xl px-6 pb-8 flex flex-start gap-4">
            {[Twitter, Github, Linkedin, Youtube, Facebook].map((Icon, i) => (
              <div
                key={i}
                className="
              w-10 h-10
              rounded-full
              bg-[#FFEFEF]
              flex items-center justify-center
              text-[#756AB6]
              hover:bg-[#E2BBE9]
              transition
              cursor-pointer
            "
              >
                <Icon size={18} />
              </div>
            ))}
          </div>
        </div>


        {/* RIGHT : Newsletter */}
        <div className="space-y-4  w-full max-w-sm sm:max-w-md md:max-w-lg">

          <PrimaryHeading text="Our Headquarters" />

          {/* Responsive Map */}
          <div className="w-full aspect-[4/4] sm:aspect-[16/6] rounded-2xl overflow-hidden">
            <iframe
              title="Google Map"
              className="w-full h-full border-0"
              loading="lazy"
              allowFullScreen
              referrerPolicy="no-referrer-when-downgrade"
              src={`https://www.google.com/maps?q=${encodeURIComponent(
                address
              )}&output=embed`}
            />
          </div>

          {/* Newsletter Input */}
          <div className="flex flex-col sm:flex-row gap-3">
            <input
              type="email"
              placeholder="Enter your email"
              className="px-4 py-2 rounded-full text-[#756AB6] outline-none w-full"
            />
          </div>

        </div>


        {/* SOCIAL ICONS */}
      </div>

      {/* BOTTOM BAR */}
      <div className="border-t border-[#E2BBE9]/90">
        <div className="max-w-7xl mx-auto px-6 py-4 flex flex-col md:flex-row justify-between gap-4 text-sm">
          <span>
            © {new Date().getFullYear()} Airo. All rights reserved.
          </span>

          <div className="flex flex-wrap gap-6">
            <Link to="/terms" className="hover:text-[#E2BBE9] transition">
              Website Terms
            </Link>
            <Link to="/privacy" className="hover:text-[#E2BBE9] transition">
              Privacy Policy
            </Link>
            <Link to="/cookies" className="hover:text-[#E2BBE9] transition">
              Cookies
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
