function DynamicProducts({ params }: { params: { productId: string } }) {
  return (
    <>
      <h1>This Is Dynamic route page for product{params.productId}</h1>
    </>
  );
}

export default DynamicProducts;
