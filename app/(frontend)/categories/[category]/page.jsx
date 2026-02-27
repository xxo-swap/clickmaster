import DynamicGallery from "@/section/Category";



export default async function CategoryPage({ params }) {
  const { category } = await params;

  return (
    <main className="min-h-screen ">
      <DynamicGallery folder={category} />
    </main>
  );
}