import Link from "next/link";
export default function Home() {
  return (
    <>
      <h1>Home Page</h1>
      <ul className="">
        <li>
          <Link href={"/"}>Home Page</Link>
        </li>
        <li>
          <Link href={"/products"}>Products</Link>
        </li>
        <li>
          <Link href={"/login"}>Login</Link>
        </li>
        <li>
          <Link href={"/register"}>Register</Link>
        </li>
      </ul>
    </>
  );
}
