interface IProps {
  params: Promise<{ id: string }>;
}

const ProductPage = async ({ params }: IProps) => {
  const { id } = await params;
  console.log(id);
  return (
    <div>
      <h1>Product Id - {id}</h1>
    </div>
  );
};

export default ProductPage;
