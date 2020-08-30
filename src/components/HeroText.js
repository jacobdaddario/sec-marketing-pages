import React from "react";
import Button from "../components/Button";

const HeroText = () => {
  return (
    <div className="w-1/2">
      <h1 className="mb-2 text-5xl text-gray-900 font-light tracking-tight leading-tight">
        Welcome to the <br />
        <span className="px-3 text-maroon-700 bg-yellow-300 bg-opacity-75 rounded font-semibold transition-colors ease-in-out duration-500 hover:bg-yellow-400">
          Student Engineers' Council
        </span>
      </h1>
      <p className="text-gray-600 font-thin tracking-wide">
        The representative body for all students in the College of Engineering
        at Texas A&amp;M University
      </p>
      <div className="mt-16">
        <h2 className="text-5xl text-gray-800 font-semibold tracking-tight leading-tight">
          Come take part in the largest student-run career fair in the country!
        </h2>
        <div className="mt-8">
          <Button
            link="https://careerfair.sec.tamu.edu/companies/recruiters/sign_in"
            buttonClasses="button button-primary mr-8"
            linkClasses="button-link text-white text-2xl"
          >
            Companies
          </Button>
          <Button
            link="https://careerfair.sec.tamu.edu/career-fair/students/fair-information/general-information"
            buttonClasses="button button-secondary"
            linkClasses="button-link text-gray-700 text-2xl"
          >
            Students
          </Button>
        </div>
      </div>
    </div>
  );
};

export default HeroText;
