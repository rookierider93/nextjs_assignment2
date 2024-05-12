import Link from "next/link";
function register() {
  return (
    <>
      Register Page
      <Link href={"/products"} className="text-cyan-600" replace>
        Back
      </Link>
    </>
  );
}

export default register;
