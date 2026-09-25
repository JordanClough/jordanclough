import type { FunctionComponent, SVGProps } from "react";

import ReactIcon from "../assets/skill_images/react-icon.svg?react";
import HtmlIcon from "../assets/skill_images/html-icon.svg?react";
import CssIcon from "../assets/skill_images/css-icon.svg?react";
import JsIcon from "../assets/skill_images/javascript-icon.svg?react";
import TsIcon from "../assets/skill_images/typescript-icon.svg?react";
import SwiftIcon from "../assets/skill_images/swift-icon.svg?react";
import PythonIcon from "../assets/skill_images/python-icon.svg?react";
import JavaIcon from "../assets/skill_images/java-icon.svg?react";
import MatlabIcon from "../assets/skill_images/matlab-icon.svg?react";
import CppIcon from "../assets/skill_images/cpp-icon.svg?react";
import CIcon from "../assets/skill_images/c-icon.svg?react";
import SqlIcon from "../assets/skill_images/sql-icon.svg?react";
import GitIcon from "../assets/skill_images/git-icon.svg?react";

export interface Skill {
  label: string;
  Icon: FunctionComponent<SVGProps<SVGSVGElement>>;
}

export const skills: Skill[] = [
  { label: "TypeScript", Icon: TsIcon },
  { label: "JavaScript", Icon: JsIcon },
  { label: "React", Icon: ReactIcon },
  { label: "HTML", Icon: HtmlIcon },
  { label: "CSS", Icon: CssIcon },
  { label: "Swift", Icon: SwiftIcon },
  { label: "Python", Icon: PythonIcon },
  { label: "Java", Icon: JavaIcon },
  { label: "C++", Icon: CppIcon },
  { label: "C", Icon: CIcon },
  { label: "SQL", Icon: SqlIcon },
  { label: "MATLAB", Icon: MatlabIcon },
  { label: "Git", Icon: GitIcon },
];
