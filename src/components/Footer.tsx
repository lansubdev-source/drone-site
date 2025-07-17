import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaInstagram,
  FaYoutube,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#121212] text-white text-sm py-12">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-4 gap-10">
        {/* Address */}
        <div>
          <h3 className="font-semibold text-base mb-4">Address</h3>
          <p>
            No:203, Ashritha Apartments,<br />
            3rd Cross, Neeladrinagar,<br />
            Electronic City, Bangalore,<br />
            Karnataka, India – 560100
          </p>
          <br />
          <p>
            No:125, Thirumalapalayam Post,<br />
            Coimbatore, Tamil Nadu,<br />
            India – 641105
          </p>
        </div>

        {/* Contact */}
        <div>
          <h3 className="font-semibold text-base mb-4">Contact</h3>
          <p>
            Email:{" "}
            <a href="mailto:info@magicmyna.in" className="hover:underline text-blue-400">
              info@magicmyna.in
            </a>
          </p>
          <p>
            Phone:{" "}
            <a href="tel:+919900539540" className="hover:underline text-blue-400">
              9900539540
            </a>
          </p>
          <p className="mt-4">
            You can also schedule a visit or a demo.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="font-semibold text-base mb-4">Quick Links</h3>
          <ul className="space-y-2">
            <li><a href="#" className="hover:underline">Who We Are</a></li>
            <li><a href="#" className="hover:underline">Careers</a></li>
            <li><a href="#" className="hover:underline">Contact Us</a></li>
            <li><a href="#" className="hover:underline">Dealer Portal</a></li>
          </ul>
        </div>

        {/* Social */}
        <div>
          <h3 className="font-semibold text-base mb-4">Stay Connected</h3>
          <div className="flex space-x-4 mt-2">
            <a
              href="https://www.facebook.com/MagicMyna"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white"
            >
              <FaFacebookF />
            </a>
            <a
              href="https://x.com/MagicMyna"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white"
            >
              <FaTwitter />
            </a>
            <a
              href="https://www.linkedin.com/company/magicmyna-private-limited/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white"
            >
              <FaLinkedinIn />
            </a>
            <a
              href="https://www.instagram.com/magicmyna/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white"
            >
              <FaInstagram />
            </a>
            <a
              href="https://www.youtube.com/channel/UClrkHnAyBVnD5-1htHft-jA"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white"
            >
              <FaYoutube />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className="border-t border-gray-700 mt-10 pt-6 text-center text-xs text-gray-400">
        <p>© 2025 MagicMyna. All rights reserved.</p>
        <p className="mt-1">
          <a href="#" className="hover:underline">Privacy Policy</a> ·{" "}
          <a href="#" className="hover:underline">Terms of Use</a> ·{" "}
          <a href="#" className="hover:underline">Cookie Preferences</a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
