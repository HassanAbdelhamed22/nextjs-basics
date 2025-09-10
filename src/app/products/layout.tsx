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
