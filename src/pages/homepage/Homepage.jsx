import React from "react";
import Directory from "../../components/directory/directory";
import { HomePageContainer } from "./homepage.styles";
function Homepage() {
  return (
    <HomePageContainer className="homepage">
      <Directory />
    </HomePageContainer>
  );
}

export default Homepage;
