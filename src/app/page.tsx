import Image from "next/image";
import Link from "next/link";

async function getProducts() {
  const res = await fetch("http://localhost:3000/api/products");

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

const HomePage = async () => {
  const { products } = await getProducts();

  return (
    <main className="min-h-screen bg-gray-50 dark:bg-gray-900 py-10 px-6 transition-colors duration-300">
      {/* Header */}
      <h1 className="text-4xl font-bold text-center text-lightText dark:text-darkText mb-12">
        🛍️ Welcome to <span className="text-accent">ShopEase</span>
      </h1>
      <p className="text-center text-subtitle dark:text-secondaryDarkText mb-16 max-w-2xl mx-auto">
        Discover our latest products at the best prices. Quality you can trust,
        with a smooth shopping experience.
      </p>

      {/* Product Grid */}
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {products?.map((product: any) => (
          <div
            key={product.id}
            className="bg-white dark:bg-gray-800 shadow-md rounded-2xl overflow-hidden hover:shadow-xl dark:hover:shadow-gray-700 transition duration-300"
          >
            {/* Image */}
            <div className="h-48 w-full bg-gray-100 dark:bg-gray-700 flex items-center justify-center overflow-hidden">
              <Image
                src={product.thumbnail || "https://via.placeholder.com/200"}
                alt={product.title}
                className="object-contain h-full w-full"
                width={400}
                height={400}
              />
            </div>

            {/* Content */}
            <div className="p-5 flex flex-col justify-between">
              <div>
                <h2 className="text-lg font-semibold text-lightText dark:text-darkText truncate">
                  {product.title}
                </h2>
                <p className="text-sm text-secondaryLightText dark:text-secondaryDarkText line-clamp-2 mt-2">
                  {product.description}
                </p>
              </div>

              <div className="mt-5 flex items-center justify-between">
                <p className="text-lg font-bold text-accent">
                  ${product.price}
                </p>
                <span className="text-sm text-yellow-500 font-medium">
                  ⭐ {product.rating}
                </span>
              </div>

              <Link
                href={`/products/${product.id}`}
                className="mt-5 inline-block text-center w-full rounded-xl bg-accent text-hoverText px-4 py-2 text-sm font-medium hover:bg-hoverBg transition"
              >
                See Details
              </Link>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
};

export default HomePage;
