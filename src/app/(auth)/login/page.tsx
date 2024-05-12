import Link from "next/link";
function login() {
  return (
    <>
      This is Login Page
      <Link href={"/"} className="text-cyan-600" replace>
        Back
      </Link>
    </>
  );
}

export default login;
