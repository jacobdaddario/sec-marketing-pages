import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import Img from "gatsby-image";

const HeroSlideShow = () => {
  const data = useStaticQuery(graphql`
    query Images {
      images: allFile(filter: { relativeDirectory: { eq: "landing" } }) {
        nodes {
          id
          childImageSharp {
            fluid(quality: 90) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  `);

  return (
    <div className="w-1/2 max-h-full pl-20 overflow-hidden">
      <div className="splash-slideshow grid grid-cols-4 gap-8">
        <Img
          fluid={data.images.nodes[0].childImageSharp.fluid}
          className="col-start-2 col-span-3 h-40 bg-gray-600 border border-gray-300 rounded-lg shadow-md"
        />
        <Img
          fluid={data.images.nodes[1].childImageSharp.fluid}
          className="col-span-2 h-40 bg-gray-600 border border-gray-300 rounded-lg shadow-md"
        />
        <Img
          fluid={data.images.nodes[2].childImageSharp.fluid}
          className="col-span-2 h-40 bg-gray-600 border border-gray-300 rounded-lg shadow-md"
        />
        <Img
          fluid={data.images.nodes[3].childImageSharp.fluid}
          className="col-span-3 h-40 bg-gray-600 border border-gray-300 rounded-lg shadow-md"
        />
        <Img
          fluid={data.images.nodes[4].childImageSharp.fluid}
          className="col-span-2 h-40 bg-gray-600 border border-gray-300 rounded-lg shadow-md"
        />
        <Img
          fluid={data.images.nodes[5].childImageSharp.fluid}
          className="col-span-2 h-40 bg-gray-600 border border-gray-300 rounded-lg shadow-md"
        />
        <Img
          fluid={data.images.nodes[6].childImageSharp.fluid}
          className="col-span-2 h-40 bg-gray-600 border border-gray-300 rounded-lg shadow-md"
        />
        <Img
          fluid={data.images.nodes[0].childImageSharp.fluid}
          className="col-start-2 col-span-3 h-40 bg-gray-600 border border-gray-300 rounded-lg shadow-md"
        />
        <Img
          fluid={data.images.nodes[1].childImageSharp.fluid}
          className="col-span-2 h-40 bg-gray-600 border border-gray-300 rounded-lg shadow-md"
        />
        <Img
          fluid={data.images.nodes[2].childImageSharp.fluid}
          className="col-span-2 h-40 bg-gray-600 border border-gray-300 rounded-lg shadow-md"
        />
        <Img
          fluid={data.images.nodes[3].childImageSharp.fluid}
          className="col-span-3 h-40 bg-gray-600 border border-gray-300 rounded-lg shadow-md"
        />
      </div>
    </div>
  );
};

export default HeroSlideShow;
