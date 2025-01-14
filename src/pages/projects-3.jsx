import { getSortedProjectsData } from "@library/projects";
import Layouts from "@layouts/Layouts";
import dynamic from "next/dynamic";

const ProjectsSlider = dynamic(() => import("@components/sliders/Projects"), {
  ssr: false,
});

const Projects3 = (props) => {
  return (
    <Layouts noFooter>
      <ProjectsSlider projects={props.projects} />
    </Layouts>
  );
};
export default Projects3;

export async function getStaticProps({ locale }) {
  const allProjects = getSortedProjectsData();
  const messages = require(`../locales/${locale}.json`);

  return {
    props: {
      projects: allProjects,
      messages,
    },
  };
}
