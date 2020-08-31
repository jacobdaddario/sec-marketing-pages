import React from "react";
import { graphql, useStaticQuery, Link } from "gatsby";
import Img from "gatsby-image";

const Navbar = () => {
  const data = useStaticQuery(graphql`
    query Image {
      image: file(relativePath: { eq: "sec_logo_black.png" }) {
        childImageSharp {
          fixed(width: 100) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `);

  return (
    <div className="flex items-center max-w-6xl h-16 mx-auto py-16">
      <Link to="/" className="mr-12">
        <Img fixed={data.image.childImageSharp.fixed} alt="SEC Logo" />
      </Link>
      <Link
        to="#"
        className="px-4 py-2 mr-6 text-gray-600 text-xl hover:text-gray-800"
      >
        Lorem Ipsum
      </Link>
      <Link
        to="#"
        className="px-4 py-2 mr-6 text-gray-600 text-xl hover:text-gray-800"
      >
        Lorem Ipsum
      </Link>
    </div>
  );
};

export default Navbar;
