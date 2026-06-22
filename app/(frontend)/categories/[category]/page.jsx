import CategoryPage from "@/section/Category";

export default async function Categories({ params }) {
  const { category } = await params;

  return (
    <main className="min-h-screen">
      <CategoryPage slug={category} />
    </main>
  );
}