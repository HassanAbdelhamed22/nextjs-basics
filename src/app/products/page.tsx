import Image from "next/image";
import Link from "next/link";

async function getProducts() {
  const res = await fetch("https://dummyjson.com/products");

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

const ProductsPage = async () => {
  const { products } = await getProducts();

  return (
    <main className="min-h-screen bg-gray-50 dark:bg-gray-900 py-10 px-6 transition-colors duration-300">
      <h1 className="text-3xl font-bold text-center text-gray-800 dark:text-gray-100 mb-10">
        🛍️ Products
      </h1>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {products?.map((product: any) => (
          <div
            key={product.id}
            className="bg-white dark:bg-gray-800 shadow-md rounded-2xl overflow-hidden hover:shadow-xl dark:hover:shadow-gray-700 transition duration-300"
          >
            <div className="h-48 w-full bg-gray-100 dark:bg-gray-700 flex items-center justify-center overflow-hidden">
              <Image
                src={product.thumbnail || "https://via.placeholder.com/200"}
                alt={product.title}
                className="object-contain h-full w-full"
                width={400}
                height={400}
              />
            </div>

            <div className="p-4 flex flex-col justify-between">
              <div>
                <h2 className="text-lg font-semibold text-gray-800 dark:text-gray-100 truncate">
                  {product.title}
                </h2>
                <p className="text-sm text-gray-500 dark:text-gray-400 line-clamp-2 mt-1">
                  {product.description}
                </p>
              </div>

              <div className="mt-4 flex items-center justify-between">
                <p className="text-lg font-bold text-blue-600 dark:text-blue-400">
                  ${product.price}
                </p>
                <span className="text-sm text-yellow-500 font-medium">
                  ⭐ {product.rating}
                </span>
              </div>

              <Link
                href={`/products/${product.id}`}
                className="mt-4 inline-block text-center w-full rounded-lg bg-blue-600 dark:bg-blue-500 text-white px-4 py-2 text-sm font-medium hover:bg-blue-700 dark:hover:bg-blue-600 transition"
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

export default ProductsPage;
