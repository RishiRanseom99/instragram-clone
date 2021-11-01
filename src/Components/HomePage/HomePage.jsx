import React from "react";
import { HomePageContainer, HomePageContent } from "./HomePageStyles";
import Header from "../Header/Header";
import Stories from "../Stories/index";
import Feeds from "../Feeds/index";
function HomePage() {
  return (
    <HomePageContainer>
       <Header />
      <HomePageContent>
        <Stories />
        <Feeds />
      </HomePageContent>
    </HomePageContainer>
  );
}

export default HomePage;
