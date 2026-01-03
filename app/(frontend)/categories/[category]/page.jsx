import DynamicGallery from '@/section/Category'

// Dynamic SEO metadata
export async function generateMetadata({ params }) {
  const { category } = await params;
  const decoded = decodeURIComponent(category);

  const capitalized =
    decoded.charAt(0).toUpperCase() + decoded.slice(1).toLowerCase();

  const baseUrl = `https://clickkmaster.in/client/${decoded}`;

  return {
    title: `${capitalized} Photography | Clickkmaster`,
    description: `Explore stunning ${capitalized.toLowerCase()} photography by Clickkmaster across Delhi, Jaipur, Lucknow, and North India.`,
    alternates: {
      canonical: baseUrl,
    },
    openGraph: {
      title: `${capitalized} Photography | Clickkmaster`,
      description: `Professional ${capitalized.toLowerCase()} photography portfolio featuring events, portraits, and products in North India.`,
      url: baseUrl,
      siteName: 'Clickkmaster',
      images: [
        {
          url: 'https://kqoiszdheczrpsfxutiw.supabase.co/storage/v1/object/public/personal/og-image.jpg',
          width: 1200,
          height: 630,
          alt: `${capitalized} Photography`,
        },
      ],
      locale: 'en_IN',
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: `${capitalized} Photography | Clickkmaster`,
      description: `Book professional ${capitalized.toLowerCase()} photography in Delhi, Jaipur, Lucknow, and more.`,
      images: [
        'https://kqoiszdheczrpsfxutiw.supabase.co/storage/v1/object/public/personal/og-image.jpg',
      ],
    },
  };
}

export default async function CategoryPage({ params }) {
  const { category } = await params;

  return (
    <main className="min-h-screen p-4">
      <DynamicGallery folder={category} />
    </main>
  );
}
