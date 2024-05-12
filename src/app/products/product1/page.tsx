import Link from "next/link";

function product1() {
  return (
    <>
      <h1>Product1</h1>
      <p className="">This is Nasted Page</p>
      <Link href={"/products"} className="text-cyan-600" replace>
        Back
      </Link>
    </>
  );
}

export default product1;
