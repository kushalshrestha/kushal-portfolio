import "./SkillSection.scss";
import Section from "../Section/Section";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";

function SkillSection() {
  return (
    <>
      <Section sectionHeader="" headerIcon={faUser}>
        <h3 className="project-title">
          <FontAwesomeIcon className="project-icon" />
          <span>Skills</span>
        </h3>
        <p><span className="skills-h">Languages: </span>JavaScript, PHP, JAVA, Python</p>
        <p><span className="skills-h">Frameworks: </span>Spring, Yii, Flask</p>
        <p><span className="skills-h">Frontend: </span>JQuery, React.js, AngularJS</p>
        <p><span className="skills-h">APIs: </span>REST, GraphQL</p>
      </Section>
    </>
  );
}

export default SkillSection;
