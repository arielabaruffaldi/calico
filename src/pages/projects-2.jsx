import Layouts from "@layouts/Layouts";
import PageBanner from "@components/PageBanner";
import ProjectsGrid from "@components/ProjectsGrid";
import CallToActionSection from "@components/sections/CallToAction";

import { getSortedProjectsData } from "@library/projects";

const Projects2 = (props) => {
  return (
    <Layouts>
      <PageBanner
        pageTitle={
          'Designing a <br> Better <span className="mil-thin">World Today</span>'
        }
        breadTitle={"Portfolio"}
        anchorLabel={"Our works"}
        anchorLink={"#portfolio"}
      />

      <ProjectsGrid projects={props.projects} />

      <CallToActionSection />
    </Layouts>
  );
};
export default Projects2;

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
