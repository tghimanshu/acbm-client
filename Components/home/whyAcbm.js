import { HiAcademicCap } from "react-icons/hi";
import { BsGraphUp } from "react-icons/bs";
import { RiVipCrownLine, RiLightbulbFlashLine } from "react-icons/ri";

export default function () {
  return (
    <>
      <section id="why-us" className="why-us">
        <div className="container" data-aos="fade-up">
          <div className="section-title">
            <h2>Why Choose Us</h2>
            <p>Our Pillars</p>
          </div>
          <div className="container" data-aos="fade-up">
            <div className="d-flex align-items-stretch">
              <div className="icon-boxes d-flex flex-column justify-content-center">
                <div className="row">
                  <div className="col-xl-6 d-flex align-items-stretch">
                    <div className="icon-box row d-flex align-items-center mt-4 mt-xl-0">
                      <div className="col-lg-2">
                        {/* <i className="bi bi-receipt"></i> */}
                        <HiAcademicCap />
                      </div>
                      <div className="col-lg-10">
                        <h4>ACADEMICS</h4>
                        <p>
                          The Academic pillar of Global Mentor Academy (GMA)
                          emphasises on empowering Students with enterprising
                          skills and informed purposes; Faculty with customised
                          skill enhancing training solutions; and Institutes
                          with promising Industry-Academia connexions.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-6 d-flex align-items-stretch">
                    <div className="icon-box row d-flex align-items-center mt-4 mt-xl-0">
                      <div className="col-lg-2">
                        {/* <i className="bi bi-images"></i> */}
                        <BsGraphUp />
                      </div>
                      <div className="col-lg-10">
                        <h4>CORPORATE</h4>
                        <p>
                          Comprehending the growth dilemma of professionals
                          serving Corporates across industries, the Corporate
                          Pillar – in an attempt of bringing about Employment
                          Sustainability – offers customised learning and
                          development opportunities and unique career management
                          solutions throughout the Management levels of a
                          Corporate.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-6 d-flex align-items-stretch">
                    <div className="icon-box row d-flex align-items-center mt-4 mt-xl-0">
                      <div className="col-lg-2">
                        {/* <i className="bi bi-images"></i> */}
                        <RiVipCrownLine />
                      </div>
                      <div className="col-lg-10">
                        <h4>BUSINESS</h4>
                        <p>
                          With the guidance and expertise of adept mentor
                          alliances on board, our Business Pillar offers
                          cost-effective business and consulting solutions to
                          both potentially promising entrepreneurial ventures as
                          well as existing Private and Public enterprises.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-6 d-flex align-items-stretch">
                    <div className="icon-box row d-flex align-items-center mt-4 mt-xl-0">
                      <div className="col-lg-2">
                        {/* <i className="bi bi-images"></i> */}
                        <RiLightbulbFlashLine />
                      </div>
                      <div className="col-lg-10">
                        <h4>MENTOR</h4>
                        <p>
                          A powerhouse of high functioning intellectual
                          capacities, the Mentor pillar of ACBM-GMA, combines
                          the collective potentials of erudite and experienced
                          mentors on one platform to provide effective Academic,
                          Corporate and Business solutions.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
