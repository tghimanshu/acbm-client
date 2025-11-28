import Link from "next/link";

/**
 * HeroSection component for the ACBM application.
 *
 * This component renders the main hero banner of the homepage, featuring:
 * - A headline message ("Doing the Right Thing At the Right Time").
 * - A subheadline describing the mission.
 * - A commented-out "Pre Register" button.
 *
 * @returns {JSX.Element} The rendered Hero section.
 */
export default function HeroSection() {
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
        {/* <Link href="/register">
          <a className="btn-get-started">Pre Register</a>
        </Link> */}
      </div>
    </section>
  );
}
