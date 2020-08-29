import React from "react";
import { Link, graphql, useStaticQuery } from "gatsby";
import Img from "gatsby-image";

const IndexPage = () => {
  const data = useStaticQuery(graphql`
    query Images {
      images: allFile(filter: { relativeDirectory: { eq: "landing" } }) {
        nodes {
          id
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  `);

  console.log(data);

  return (
    <div className="flex flex-col items-center w-full bg-white">
      <div className="max-w-6xl w-full">
        <div className="flex flex-row mt-32">
          <div className="w-1/2">
            <h1 className="mx-auto text-2xl">
              Join the <span className="text-maroon-500">blah blah blah</span>
            </h1>
          </div>
          <div className="grid grid-cols-4 gap-8 w-3/5">
            <Img
              fluid={data.images.nodes[0].childImageSharp.fluid}
              className="col-start-2 col-span-3 h-40 bg-gray-600 border border-gray-300 rounded-lg shadow-xl"
            />
            <Img
              fluid={data.images.nodes[1].childImageSharp.fluid}
              className="col-span-2 h-40 bg-gray-600 border border-gray-300 rounded-lg shadow-xl"
            />
            <Img
              fluid={data.images.nodes[2].childImageSharp.fluid}
              className="col-span-2 h-40 bg-gray-600 border border-gray-300 rounded-lg shadow-xl"
            />
            <Img
              fluid={data.images.nodes[3].childImageSharp.fluid}
              className="col-span-3 h-40 bg-gray-600 border border-gray-300 rounded-lg shadow-xl"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default IndexPage;
