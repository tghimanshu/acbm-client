import Link from "next/link";
export default function () {
  return (
    <section
      id="hero"
      className="d-flex justify-content-center align-items-center"
    >
      <div className="container position-relative">
        <h1>
          Doing the Right Thing
          <br />
          At the Right Time
        </h1>
        <h2>To Help Individuals Learn Skills The Right Way</h2>
        <Link href="/register">
          <a className="btn-get-started">Pre Register</a>
        </Link>
      </div>
    </section>
  );
}
