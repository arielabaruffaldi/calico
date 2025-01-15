import { getSortedProjectsData } from "@library/projects";
import Layouts from "@layouts/Layouts";
import dynamic from "next/dynamic";
import PageBanner from "../components/PageBanner";
import ProjectsGrid from "../components/ProjectsGrid";
import CallToActionSection from "../components/sections/CallToAction";
import { useIntl } from "react-intl";

const Projects3 = (props) => {
  const intl = useIntl()
  return (
    <Layouts>
      <PageBanner
        pageTitle={intl.formatMessage({ id: "page.home.head.title" })}
        breadTitle={"Portfolio"}
        anchorLabel={"Our works"}
        anchorLink={"#portfolio"}
      />

      <ProjectsGrid projects={props.projects} />

      <CallToActionSection />
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
