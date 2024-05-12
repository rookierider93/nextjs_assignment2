import Link from "next/link";
function Products() {
  return (
    <>
      <h1>All Products</h1>
      <Link href="products/product1" className="text-cyan-600">
        <h1>Product1</h1>
      </Link>
      <Link href="/products/200" className="text-cyan-600">
        <h1>Product200</h1>
      </Link>
    </>
  );
}

export default Products;
