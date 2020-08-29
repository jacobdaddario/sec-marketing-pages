import React from "react";
import { Link, graphql, useStaticQuery } from "gatsby";
import Img from "gatsby-image";

const IndexPage = () => {
  const data = useStaticQuery(graphql`
    query Images {
      image: file(relativePath: {eq: "sec_logo_black.png"})
      {
        id
        childImageSharp {
          fixed {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `);

  return (
    <div className="flex flex-col items-center w-full bg-white">
      <div className="max-w-4xl w-full">
        <div className="flex flex-row">
          <div>
            <h1 className="mx-auto mt-32">Name</h1>
          </div>
          <div>
            <Img
              fixed={data.image.childImageSharp.fixed}
              alt="sec logo"
            />
          </div>
        </div>
      </div>
    </div>
  )
};

export default IndexPage;
