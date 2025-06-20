"use client";

import React from "react";
import { FaInstagram, FaEnvelope, FaWhatsapp } from "react-icons/fa";
import { getWhatsAppLink } from "@/utils/Whatsapp";

const Footer = () => {
  const whatsappNumber = "917408913971";
  const whatsappMessage = "Hello! I'm interested in your photography services.";

  return (
    <footer className="relative bg-backGround text-white sm:px-1 lg:px-36 py-20">
      <div className="max-w-6xl mx-auto flex flex-col justify-between items-center gap-4 z-50 relative">
        
        {/* Social Links */}
        <div className="flex gap-6 text-lg">
          {/* Email Icon (hidden on lg and up) */}
          <a
            href="mailto:sunny@clickkmaster.in"
            className="group relative transition-colors duration-300 ease-in-out z-50 block lg:hidden"
            aria-label="Email"
          >
            <FaEnvelope
              className="text-[#311514] group-hover:text-[#D14836] transition-colors duration-300 ease-in-out "
            />
          </a>

          {/* Instagram */}
          <a
            href="https://instagram.com/clickkmaster"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative transition-colors duration-300 ease-in-out z-50"
            aria-label="Instagram"
          >
            <FaInstagram
              className="text-[#311514] group-hover:text-[#E1306C] transition-colors duration-300 ease-in-out"
            />
          </a>

          {/* WhatsApp */}
          <a
            href={getWhatsAppLink(whatsappNumber, whatsappMessage)}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative transition-colors duration-300 ease-in-out z-50"
            aria-label="WhatsApp"
          >
            <FaWhatsapp
              className="text-[#311514] group-hover:text-[#25D366] transition-colors duration-300 ease-in-out"
            />
          </a>
        </div>

        {/* Copyright */}
        <p className="text-xs text-gray-500 text-center sm:text-right">
          © {new Date().getFullYear()} Clickkmaster. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
