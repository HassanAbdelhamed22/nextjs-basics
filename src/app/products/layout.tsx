export default function ProductLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <h1>Product Layout</h1>
        <main>{children}</main>
      </body>
    </html>
  )
}