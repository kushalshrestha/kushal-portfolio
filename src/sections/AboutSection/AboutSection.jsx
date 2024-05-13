import "./AboutSection.scss";
import Section from "../Section/Section";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";

function AboutSection() {
  return (
    <>
      {/* // <Section sectionHeader="Projects" headerIcon={<ComputerIcon />}> */}
      <Section sectionHeader="" headerIcon={faUser}>
        <h3 className="project-title">
          <FontAwesomeIcon  className="project-icon" />
          <span>Who I Am</span>
        </h3>
        <p>
          You can call me a software engineer, experienced database developer
          and front-end development learner. I have a experience of 8 years in
          computer industry where I have a demonstrated history of working in   
          the computer software industry. Skilled in MySQL, MS-SQL Server, Java,
          and Agile Methodologies. Worked as a offshore Software Engineer for US based
          Companies - Spiralogics Inc, Cotiviti Inc and in a Denmark based company 'Bookmundi' and currently
          working at Clackamas County, Oregon. I define myself as a continuous
          learner and prefer to keep learning and challenge myself.
        </p>
      </Section>
    </>
  );
}

export default AboutSection;
