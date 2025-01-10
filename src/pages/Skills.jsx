import SkillHex from '../components/SkillHex';

import reactIcon from '../assets/skill_images/react-icon.svg?react';
import htmlIcon from '../assets/skill_images/html-icon.svg?react';
import cssIcon from '../assets/skill_images/css-icon.svg?react';
import jsIcon from '../assets/skill_images/javascript-icon.svg?react';
import tsIcon from '../assets/skill_images/typescript-icon.svg?react';
import swiftIcon from '../assets/skill_images/swift-icon.svg?react';
import pythonIcon from '../assets/skill_images/python-icon.svg?react';
import javaIcon from '../assets/skill_images/java-icon.svg?react';
import matlabIcon from '../assets/skill_images/matlab-icon.svg?react';
import cppIcon from '../assets/skill_images/cpp-icon.svg?react';
import cIcon from '../assets/skill_images/c-icon.svg?react';
import sqlIcon from '../assets/skill_images/sql-icon.svg?react';


function Skills() {
  return (
    <div className="skills">
      <h1>SKILLS</h1>
      <div className="hex-container">
          <SkillHex label="C++" Icon={cppIcon} />
          <SkillHex label="HTML" Icon={htmlIcon} />
          <SkillHex label="TypeScript" Icon={tsIcon} />
          <SkillHex label="JavaScript" Icon={jsIcon} />
          <SkillHex label="CSS" Icon={cssIcon} />
          <SkillHex label="Swift" Icon={swiftIcon} />
          <SkillHex label="React" Icon={reactIcon} />
          <SkillHex label="Python" Icon={pythonIcon} />
          <SkillHex label="Java" Icon={javaIcon} />
          <SkillHex label="MATLAB" Icon={matlabIcon} />
          <SkillHex label="C" Icon={cIcon} />
          <SkillHex label="SQL" Icon={sqlIcon} />
      </div>
    </div>
  );
}   
export default Skills;