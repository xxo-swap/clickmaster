"use client";

import { FaInstagram, FaEnvelope, FaWhatsapp } from "react-icons/fa";
import { getWhatsAppLink } from "@/utils/Whatsapp";

export default function Footer() {
  const whatsappNumber = "917408913971";
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

            <h3 className="mt-5 text-3xl font-medium tracking-tight text-white">
              Product Photography
            </h3>

            <p className="mt-6 max-w-sm text-white leading-7">
              Helping brands create premium imagery for food, drinks,
              e-commerce and lifestyle products.
            </p>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-sm uppercase tracking-[0.2em] text-white">
              Contact
            </h4>

            <div className="mt-6 space-y-4 text-white">

              <a
                href="mailto:sunny@clickkmaster.in"
                className="block hover:text-primary transition"
              >
                sunny@clickkmaster.in
              </a>

              <a 
                href="tel:+917408913971"
                className="block hover:text-primary transition"
              >
                +91 878 9069 866
              </a>

              <p className="leading-7">
                Govardhan, Mathura
                <br />
                Uttar Pradesh, India
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
                className="text-white hover:text-primary transition"
              >
                <FaEnvelope />
              </a>

              <a
                href="https://instagram.com/clickkmaster"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-primary transition"
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
                className="text-white hover:text-primary transition"
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

          <p className="text-sm text-white greyscale">
            Crafted with care.
          </p>

        </div>

      </div>
    </footer>
  );
}