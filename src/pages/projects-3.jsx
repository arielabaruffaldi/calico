import { useState } from "react";

import Layouts from "@layouts/Layouts";
import PageBanner from "@components/PageBanner";
import ProjectsMasonry from "@components/ProjectsMasonry";
import CallToActionSection from "@components/sections/CallToAction";

import { getSortedProjectsData } from "@library/projects";
import { useIntl } from "react-intl";

const Projects = (props) => {
  const intl = useIntl();
  return (
    <Layouts>
      <PageBanner
        pageTitle={intl.formatMessage({ id: "page.projects.title" })}
        breadTitle={"Portfolio"}
        anchorLabel={intl.formatMessage({ id: "page.projects.button" })}
        anchorLink={"#portfolio"}
      />

      <ProjectsMasonry projects={props.projects} />

      <CallToActionSection />
    </Layouts>
  );
};
export default Projects;

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
