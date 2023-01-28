import React from "react";
import { welcome_two } from "../../images/";
import { Welcome } from "../common";

const WelcomeTwo = () => {
  return (
    <>
      <Welcome
        image={welcome_two}
        heading="Your path to a secure finacial future."
        content="Become a more confident trader and set your path to more secure
          finacial future path. Invest using our easy-to-understand smart
          finacial tools."
        to="/home"
      />
    </>
  );
};

export default WelcomeTwo;
