import React from "react";
import { Link } from "gatsby";

const Button = ({ link, children, buttonClasses, linkClasses }) => (
  <div className={buttonClasses}>
    <Link to={link} className={linkClasses}>
      {children}
    </Link>
  </div>
);

export default Button;
