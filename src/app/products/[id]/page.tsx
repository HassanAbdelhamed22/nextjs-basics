async function getProduct(id: string) {
  const res = await fetch(`https://dummyjson.com/products/${id}`);

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

interface IProps {
  params: Promise<{ id: string }>;
}

const ProductPage = async ({ params }: IProps) => {
  const { id } = await params;
  const product = await getProduct(id);

  return (
    <main className="min-h-screen bg-gray-50 dark:bg-gray-900 py-10 px-6 flex flex-col items-center transition-colors duration-300">
      <div className="max-w-6xl w-full bg-white dark:bg-gray-800 rounded-2xl shadow-lg overflow-hidden">
        {/* Header: Image + Basic Info */}
        <div className="grid md:grid-cols-2">
          {/* Images */}
          <div className="bg-gray-100 dark:bg-gray-700 flex items-center justify-center p-6">
            <img
              src={product.thumbnail || "https://via.placeholder.com/400"}
              alt={product.title}
              className="object-contain max-h-96 rounded-lg shadow-md"
            />
          </div>

          {/* Basic Info */}
          <div className="p-8 flex flex-col justify-between">
            <div>
              <h1 className="text-2xl md:text-3xl font-bold text-gray-800 dark:text-gray-100">
                {product.title}
              </h1>
              <p className="mt-3 text-gray-600 dark:text-gray-300">
                {product.description}
              </p>

              {/* Price + Discount */}
              <div className="mt-6 flex items-center gap-4">
                <span className="text-3xl font-extrabold text-blue-600 dark:text-blue-400">
                  ${product.price}
                </span>
                {product.discountPercentage && (
                  <span className="text-sm px-2 py-1 rounded bg-red-100 text-red-600 dark:bg-red-800 dark:text-red-200">
                    -{product.discountPercentage}%
                  </span>
                )}
              </div>

              {/* Rating + Stock */}
              <div className="mt-3 flex items-center gap-4">
                <span className="text-yellow-500 font-medium">
                  ⭐ {product.rating}
                </span>
                <span
                  className={`text-sm px-3 py-1 rounded-full ${
                    product.stock > 0
                      ? "bg-green-100 text-green-700 dark:bg-green-800 dark:text-green-200"
                      : "bg-red-100 text-red-700 dark:bg-red-800 dark:text-red-200"
                  }`}
                >
                  {product.availabilityStatus}
                </span>
              </div>

              {/* Meta Info */}
              <div className="mt-4 text-sm text-gray-500 dark:text-gray-400 space-y-1">
                <p>
                  Brand: <span className="font-medium">{product.brand}</span>
                </p>
                <p>SKU: {product.sku}</p>
                <p>Weight: {product.weight}g</p>
              </div>
            </div>

            {/* CTA */}
            <div className="mt-8">
              <button className="w-full bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 text-white font-semibold py-3 rounded-xl transition">
                🛒 Buy Now
              </button>
            </div>
          </div>
        </div>

        {/* More Details */}
        <div className="p-8 border-t border-gray-200 dark:border-gray-700 grid md:grid-cols-3 gap-6">
          <div>
            <h2 className="text-lg font-semibold text-gray-800 dark:text-gray-100">
              Shipping & Warranty
            </h2>
            <p className="text-sm text-gray-600 dark:text-gray-300 mt-2">
              {product.shippingInformation}
            </p>
            <p className="text-sm text-gray-600 dark:text-gray-300">
              {product.warrantyInformation}
            </p>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-gray-800 dark:text-gray-100">
              Return Policy
            </h2>
            <p className="text-sm text-gray-600 dark:text-gray-300 mt-2">
              {product.returnPolicy}
            </p>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-gray-800 dark:text-gray-100">
              Product Specs
            </h2>
            <ul className="text-sm text-gray-600 dark:text-gray-300 mt-2 space-y-1">
              <li>Minimum Order: {product.minimumOrderQuantity}</li>
              <li>
                Dimensions: {product.dimensions.width} ×{" "}
                {product.dimensions.height} × {product.dimensions.depth} cm
              </li>
              <li>Barcode: {product.meta?.barcode}</li>
            </ul>
          </div>
        </div>

        {/* Reviews */}
        <div className="p-8 border-t border-gray-200 dark:border-gray-700">
          <h2 className="text-xl font-bold text-gray-800 dark:text-gray-100 mb-4">
            Customer Reviews
          </h2>
          <div className="space-y-4">
            {product.reviews?.length > 0 ? (
              product.reviews.map((review: any, i: number) => (
                <div
                  key={i}
                  className="p-4 rounded-lg bg-gray-50 dark:bg-gray-700"
                >
                  <div className="flex justify-between items-center">
                    <span className="font-semibold text-gray-800 dark:text-gray-100">
                      {review.reviewerName}
                    </span>
                    <span className="text-yellow-500">⭐ {review.rating}</span>
                  </div>
                  <p className="text-sm text-gray-600 dark:text-gray-300 mt-2">
                    {review.comment}
                  </p>
                  <p className="text-xs text-gray-400 mt-1">
                    {new Date(review.date).toLocaleDateString()}
                  </p>
                </div>
              ))
            ) : (
              <p className="text-gray-500 dark:text-gray-400">
                No reviews yet.
              </p>
            )}
          </div>
        </div>
      </div>
    </main>
  );
};

export default ProductPage;
