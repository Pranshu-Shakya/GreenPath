import { Heart } from "lucide-react";
import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className="flex justify-center">
      <footer
        className="
          w-full
          py-4
          backdrop-blur-xl
          bg-[#756AB6]
          px-10
          shadow-xl
        "
      >
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">

          {/* Left */}
          <div className="text-[#FFEFEF] text-sm">
            © {new Date().getFullYear()} Jogging Routes
          </div>

          {/* Center Links */}
          <div className="flex gap-4 text-sm">
            <Link
              to="/about"
              className="text-[#E2BBE9] hover:text-[#FFEFEF] transition"
            >
              About
            </Link>
            <Link
              to="/privacy"
              className="text-[#E2BBE9] hover:text-[#FFEFEF] transition"
            >
              Privacy
            </Link>
            <Link
              to="/contact"
              className="text-[#E2BBE9] hover:text-[#FFEFEF] transition"
            >
              Contact
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
