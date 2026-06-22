"use client";

import {
  FaInstagram,
  FaEnvelope,
  FaWhatsapp,
} from "react-icons/fa";
import { FiHeart } from "react-icons/fi";
import { getWhatsAppLink } from "@/utils/Whatsapp";

export default function Footer() {
  const whatsappNumber = "918789069866";

  const whatsappMessage =
    "Hello! I'm interested in your photography services.";

  return (
    <footer className="border-t border-zinc-200 bg-primary text-white">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 py-20">
        <div className="grid gap-16 md:grid-cols-3">
          {/* Brand */}
          <div>
            <p className="text-sm uppercase tracking-[0.2em] text-white">
              Clickkmaster
            </p>

            <h3 className="mt-5 text-xl font-medium tracking-tight text-white">
              
              Photography & Videography for <br />Food and Product Brands
            </h3>

            <p className="mt-6 max-w-sm leading-7 text-white">
              Helping brands create premium imagery for food, drinks,
              e-commerce and lifestyle products.
            </p>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-sm uppercase tracking-[0.2em] text-white">
              Contact
            </h4>

            <div className="mt-6 space-y-1 text-white">
              <a
                href="mailto:sunny@clickkmaster.in"
                className="block transition-opacity hover:opacity-80"
              >
                sunny@clickkmaster.in
              </a>

              <a
                href="tel:+918789069866"
                className="block transition-opacity hover:opacity-80"
              >
                +91 87890 69866
              </a>

              <a
                href="tel:+917408913971"
                className="block transition-opacity hover:opacity-80"
              >
                +91 74089 13971
              </a>

              <p className="leading-7">
                Flat No-F6-G09, Centurion Park Terrace Home,
                Techzone-IV, Greater Noida West,
                Gautam Buddha Nagar, Uttar Pradesh 201306
              </p>
            </div>
          </div>

          {/* Social */}
          <div>
            <h4 className="text-sm uppercase tracking-[0.2em] text-white">
              Connect
            </h4>

            <div className="mt-6 flex gap-6 text-2xl">
              <a
                href="mailto:sunny@clickkmaster.in"
                aria-label="Email"
                className="transition-transform duration-300 hover:scale-110"
              >
                <FaEnvelope />
              </a>

              <a
                href="https://instagram.com/clickkmaster"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="transition-transform duration-300 hover:scale-110"
              >
                <FaInstagram />
              </a>

              <a
                href={getWhatsAppLink(
                  whatsappNumber,
                  whatsappMessage
                )}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
                className="transition-transform duration-300 hover:scale-110"
              >
                <FaWhatsapp />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-20 flex flex-col gap-4 border-t border-zinc-200 pt-8 md:flex-row md:items-center md:justify-between">
          <p className="text-sm text-white">
            © {new Date().getFullYear()} Clickkmaster. All rights reserved.
          </p>

          <p className="flex items-center gap-2 text-sm text-white">
            Crafted with care.
            <FiHeart className="h-4 w-4 opacity-90" />
          </p>
        </div>
      </div>
    </footer>
  );
}