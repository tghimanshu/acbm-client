/**
 * Counts component for the ACBM application.
 *
 * This component renders a section displaying statistical counts, such as:
 * - Number of Students.
 * - Number of Mentors.
 * - Number of Events.
 *
 * @returns {JSX.Element} The rendered Counts section.
 */
export default function Counts() {
  return (
    <section id="counts" className="counts section-bg">
      <div className="container">
        <div className="row counters">
          <div className="col-lg-4 col-6 text-center">
            <span className="purecounter">250</span>
            <p>Students</p>
          </div>

          <div className="col-lg-4 col-6 text-center">
            <span className="purecounter">200</span>
            <p>Mentors</p>
          </div>

          <div className="col-lg-4 col-6 text-center">
            <span className="purecounter">120</span>
            <p>Events</p>
          </div>
        </div>
      </div>
    </section>
  );
}
