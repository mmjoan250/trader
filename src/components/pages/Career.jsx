import React from "react";
import { Navbar, Footer, CareerItem } from "../common";

const Career = () => {
  return (
    <div>
      <Navbar careers_active={true} border="border-bottom" />
      <div className="bg-light py-5">
        <div className=" d-flex justify-content-between container">
          <div className="bg-white p-3 shadow-sm rounded col-md-4 career-items">
            <div className="display-6 dollar">Careers</div>
            <CareerItem />
            <CareerItem />
            <CareerItem />
            <CareerItem />
            <CareerItem />
            <CareerItem />
          </div>
          <div className="col-md-8 bg-white shadow-sm ms-2 p-3">
            <div className="display-6 fs-4 ">Frontend Software Developer</div>
            <div className="py-4">
              At our company, we believe in creating a dynamic and innovative
              work environment where our team can grow and develop
              professionally. We offer exciting opportunities for those who are
              passionate about their work and are mission-driven. Our focus on a
              positive work-life balance, comprehensive benefits, and a
              supportive culture make it a rewarding place to build a career.
              Whether you're just starting out or looking for a change, we're
              always looking for talented individuals to join our collaborative
              and dynamic team. If you're ready for a challenge and want to be a
              part of something special, come join us on our mission.
            </div>
            <div className="display-6 fs-5">Key roles and responsibilities</div>
            <div className="py-3">
              <ul>
                <li>
                  Building strong working relationships and interactions with
                  clients to ensure continuous efficient information flow from
                  the client to the audit team. ▪ Guide proper Business decision
                  making through accurate, timely and relevant HR Dashboard
                  preparation, specifically monitoring and advising on
                  Headcount, productivity and team engagement matters.
                </li>
                <li>
                  Building strong working relationships and interactions with
                  clients to ensure continuous efficient information flow from
                  the client to the audit team. ▪ Guide proper Business decision
                  making through accurate, timely and relevant HR Dashboard
                  preparation, specifically monitoring and advising on
                  Headcount, productivity and team engagement matters.
                </li>

                <li>
                  Building strong working relationships and interactions with
                  clients to ensure continuous efficient information flow from
                  the client to the audit team. ▪ Guide proper Business decision
                  making through accurate, timely and relevant HR Dashboard
                  preparation, specifically monitoring and advising on
                  Headcount, productivity and team engagement matters.
                </li>
                <li>
                  Building strong working relationships and interactions with
                  clients to ensure continuous efficient information flow from
                  the client to the audit team. ▪ Guide proper Business decision
                  making through accurate, timely and relevant HR Dashboard
                  preparation, specifically monitoring and advising on
                  Headcount, productivity and team engagement matters.
                </li>
                <li>
                  Building strong working relationships and interactions with
                  clients to ensure continuous efficient information flow from
                  the client to the audit team. ▪ Guide proper Business decision
                  making through accurate, timely and relevant HR Dashboard
                  preparation, specifically monitoring and advising on
                  Headcount, productivity and team engagement matters.
                </li>
              </ul>
            </div>
            <div className="display-6 fs-5">
              Skills, Qualification and Experience:
            </div>
            <div className="py-3">
              <ul>
                <li>A degree from a recognised university.</li>
                <li>A degree from a recognised university.</li>
                <li>A degree from a recognised university.</li>
                <li>A degree from a recognised university.</li>
                <li>A degree from a recognised university.</li>
              </ul>
            </div>
            <div className="display-6 fs-5">Personal attributes:</div>
            <div className="py-3">
              <ul>
                <li>IT proficiency, especially JavaScript Language</li>
                <li>IT proficiency, especially JavaScript Language</li>
                <li>IT proficiency, especially JavaScript Language</li>
                <li>IT proficiency, especially JavaScript Language</li>
                <li>IT proficiency, especially JavaScript Language</li>
              </ul>
            </div>
            <div className="display-6 fs-5">We offer:</div>
            <div className="py-3">
              <ul>
                <li>Exposure to multi-disciplinary client service teams.</li>
                <li>Exposure to multi-disciplinary client service teams.</li>
                <li>Exposure to multi-disciplinary client service teams.</li>
                <li>Exposure to multi-disciplinary client service teams.</li>
                <li>Exposure to multi-disciplinary client service teams.</li>
              </ul>
            </div>

            <div className="my-5">
              If your career aspirations match this exciting opportunity, please
              use the link below to apply: Frontend Software Developer. Filling
              the link is mandatory for consideration alongside your application
              to career@atrader.co.tz quoting ‘Frontend Software Developer’ by
              28 February 2023.
            </div>
          </div>
        </div>
      </div>

      <div className="container mt-5">
        <Footer />
      </div>
    </div>
  );
};

export default Career;
