import { StaticImageData } from "next/image";

type WatermarkProps = {
  title: string;
  top: string;
  left: string;
};
type ButtonProps = {
  content: string;
  linkTo: string;
  selector: string;
};

type Description = {
  id: string;
  text: string;
};
type Tech = {
  id: string;
  name: string;
};

type ProjectType = {
  id: string;
  title: string;
  description: Description[];
  tech: Tech[];
  demoLink: string;
  repoLink: string;
  variant: string;
  image: StaticImageData;
  translateY: string;
};
export type { WatermarkProps, ButtonProps, ProjectType };
