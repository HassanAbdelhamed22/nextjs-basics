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
      <main>{children}</main>
    </>
  );
}
