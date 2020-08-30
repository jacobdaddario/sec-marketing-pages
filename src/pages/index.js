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
            fluid(quality: 90) {
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
        <div className="flex flex-row h-140 mt-32">
          <div className="w-1/2">
            <h1 className="mx-auto mb-4 text-5xl text-gray-900 font-light tracking-tight leading-tight">
              Welcome to the <br />
              <span className="px-3 text-maroon-900 bg-yellow-300 bg-opacity-75 rounded font-semibold transition-colors ease-in-out duration-500 hover:bg-yellow-400">
                Student Engineers' Council
              </span>
            </h1>
            <p className="text-gray-600 font-thin tracking-wide">
              The representative body for all students in the College of
              Engineering at Texas A&amp;M University
            </p>
          </div>

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
        </div>
      </div>
    </div>
  );
};

export default IndexPage;
