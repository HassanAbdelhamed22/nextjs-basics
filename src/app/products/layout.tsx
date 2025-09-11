import { Metadata } from "next";

export const metadata: Metadata = {
  title: "E-Commerce App | Products",
  description: "Browse our selection of products",
};

export default function ProductLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <h1>Product Layout</h1>
      <main>{children}</main>
    </>
  );
}
