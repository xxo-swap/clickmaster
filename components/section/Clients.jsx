import Link from "next/link";
import Image from "next/image";

const clients = [
  {
    name: "TGI Friday's",
    logo: "/clients/TGI/logo.jpg",
    instagram: "https://www.instagram.com/tgifridays/",
  },
  {
    name: "Third Wave Coffee",
    logo: "/clients/thirdwave/logo.jpg",
    instagram: "https://www.instagram.com/thirdwavecoffeeindia/",
  },
];

export default function Clients() {
  return (
    <section className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 py-24">
      <div className="mb-14">
        <p className="text-sm uppercase tracking-[0.2em] text-zinc-500">
          Trusted By
        </p>

        <h2 className="mt-4 text-4xl md:text-6xl font-medium tracking-tight">
          Brands we collaborate with.
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {clients.map((client) => (
          <Link
            key={client.name}
            href={client.instagram}
            target="_blank"
            className="
              group
              rounded-[32px]
              border border-primary-500
              bg-white
              p-12
              flex items-center justify-center
              transition-all duration-500
              hover:-translate-y-1
              hover:border-zinc-900
              hover:shadow-2xl
            "
          >
            <Image
              src={client.logo}
              alt={client.name}
              width={220}
              height={90}
              className="
                object-contain
                opacity-70
                transition-all duration-500
                group-hover:grayscale-0
                group-hover:opacity-100
              "
            />
          </Link>
        ))}
      </div>
    </section>
  );
}