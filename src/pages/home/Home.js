import React from "react";

import Main from "../../components/main/Main";

const Home = ({ celebs }) => {
  return (
    <React.Fragment>
      <Main celebs={celebs} />
    </React.Fragment>
  );
};

export default Home;
