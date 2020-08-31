import React from "react";
import Layout from "../components/Layout";
import HeroSlideShow from "../components/HeroSlideShow";
import HeroText from "../components/HeroText";

const IndexPage = () => (
  <Layout>
    <div className="flex flex-col items-center w-full bg-white">
      <div className="max-w-6xl w-full">
        <div className="flex flex-row h-140 mt-12">
          <HeroText />
          <HeroSlideShow />
        </div>
      </div>
    </div>
  </Layout>
);

export default IndexPage;
