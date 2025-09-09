import Link from "next/link";

interface IProps {}

const ProductsPage = ({}: IProps) => {
  return (
    <div>
      {Array.from({ length: 10 }, (_, i) => (
        <p key={i}>
          <Link href={`/products/${i + 1}`}>Products Id - {i + 1}</Link>
        </p>
      ))}
    </div>
  );
};

export default ProductsPage;
