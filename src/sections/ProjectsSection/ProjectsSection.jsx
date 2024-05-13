import "./ProjectsSection.scss";
import Section from "../Section/Section";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLaptop } from "@fortawesome/free-solid-svg-icons";
import { faGlobe } from "@fortawesome/free-solid-svg-icons";
import { faLink } from "@fortawesome/free-solid-svg-icons";

function ProjectsSection() {
  return (
    <>
      {/* // <Section sectionHeader="Projects" headerIcon={<ComputerIcon />}> */}
      <Section sectionHeader="Projects" headerIcon={faLaptop}>
        <h3 className="project-title">
          <FontAwesomeIcon icon={faGlobe} className="project-icon" />
          <span>Bookmundi</span>
        </h3>
        <p>
          Bookmundi is a Denmark based, but global travel booking portal where
          you effortlessly can book day tours, fixed group departures, holidays
          and vacation packages in 130+ countries around the world. Today,
          booking the right tour or holiday package has become a time consuming
          and painful process.
        </p>
        <FontAwesomeIcon icon={faLink}/>
      </Section>
    </>
  );
}

export default ProjectsSection;
