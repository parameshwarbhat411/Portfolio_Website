import React from "react";
import { SvgIcon } from "@progress/kendo-react-common";
import { twitterIcon, linkedinIcon } from "@progress/kendo-svg-icons";
import { Github } from "react-bootstrap-icons";
import { SectionWrapper } from "../hoc";

const DockDemo: React.FC = () => {
  return (
    <>
      <div className="text-center social-icons">
        <a
          href="https://github.com/parameshwarbhat411"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="icon github">
            <Github size={38} />
          </div>
        </a>
        <a
          href="https://x.com/Parameshwar411"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="icon twitter">
            <SvgIcon icon={twitterIcon} size="medium" />
          </div>
        </a>
        <a
          href="https://www.linkedin.com/in/parameshwar-bhat/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="icon linkedin">
            <SvgIcon icon={linkedinIcon} size="medium" />
          </div>
        </a>
      </div>
      <style>{`
          .social-icons {
  display: flex;  /* Use flexbox to align icons on the same line */
  justify-content: center;  /* Center the icons horizontally */
  align-items: center;  /* Center the icons vertically */
  gap: 20px;  /* Add spacing between the icons */
}

.social-icons .icon {
  display: flex;  /* Ensure icons are displayed as flex containers */
  justify-content: center;
  align-items: center;
  background-color: #fff;
  width: 100px;  /* Adjust the container width */
  height: 100px;  /* Adjust the container height */
  line-height: 100px;
  margin: 0;  /* Remove any additional margins */
  text-align: center;
  position: relative;
  overflow: hidden;
  border-radius: 28%;
  box-shadow: 0 5px 15px -5px rgba(0, 0, 0, 0.1);
  opacity: 0.99;
}

.social-icons .icon:before {
  content: '';
  position: absolute;
  width: 120%;
  height: 120%;
  top: 90%;
  left: -110%;
  transform: rotate(45deg);
  transition: all 0.35s;
  transition-timing-function: cubic-bezier(0.31, -0.105, 0.43, 1.59);
  z-index: 0; /* Ensure the :before element is behind the icon */
}

.social-icons .icon .k-svg-icon,
.social-icons .icon svg {
  transform: scale(1.1); /* Slightly increase the scale */
  width: 55px; /* Increase the width of the icons */
  height: 55px; /* Increase the height of the icons */
  z-index: 1; /* Ensure the icon stays above the background */
  transition: transform 0.35s cubic-bezier(0.31, -0.105, 0.43, 1.59), color 0.35s cubic-bezier(0.31, -0.105, 0.43, 1.59);
}

.social-icons .icon.github:before {
  background-color: #333;
}

.social-icons .icon.github svg {
  color: #333;
}

.social-icons .icon.twitter:before {
  background-color: #3cf;
}

.social-icons .icon.twitter .k-svg-icon {
  color: #3cf;
}

.social-icons .icon.linkedin:before {
  background-color: #0177b5;
}

.social-icons .icon.linkedin .k-svg-icon {
  color: #0177b5;
}

.social-icons .icon:focus:before,
.social-icons .icon:hover:before {
  top: -10%;
  left: -10%;
}

.social-icons .icon:focus .k-svg-icon,
.social-icons .icon:hover .k-svg-icon,
.social-icons .icon:hover svg {
  color: #fff;
  transform: scale(1.3); /* Adjust the scale on hover */
}
      `}</style>
    </>
  );
};

export default SectionWrapper(DockDemo, "");
