"use client";

import { FaInstagram, FaWhatsapp } from "react-icons/fa";
import { getWhatsAppLink } from "@/utils/Whatsapp";

export default function FloatingSocials() {
  return (
    <div
      className="
        fixed
        right-5
        bottom-5
        z-50
        flex
        flex-col
        gap-2
        rounded-full
        border
        border-zinc-200
        bg-white/80
        p-2
        shadow-lg
        backdrop-blur-md
      "
    >
      {/* Instagram */}
      <a
        href="https://instagram.com/clickkmaster"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Instagram"
        className="
          flex
          h-12
          w-12
          items-center
          justify-center
          rounded-full
          bg-gradient-to-tr
          from-[#F58529]
          via-[#DD2A7B]
          to-[#8134AF]
          text-white
          transition-transform
          duration-300
          hover:scale-110
        "
      >
        <FaInstagram size={20} />
      </a>

      {/* WhatsApp */}
      <a
        href={getWhatsAppLink(
          "918789069866",
          "Hello! I'm interested in your photography services."
        )}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="WhatsApp"
        className="
          flex
          h-12
          w-12
          items-center
          justify-center
          rounded-full
          bg-[#25D366]
          text-white
          transition-transform
          duration-300
          hover:scale-110
        "
      >
        <FaWhatsapp size={20} />
      </a>
    </div>
  );
}