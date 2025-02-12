import React from "react";
import Layouts from "@layouts/Layouts";

import HeroTwoSection from "@components/sections/HeroTwo"

const Home2 = (props) => {
  return (
    <Layouts noFooter>
      <HeroTwoSection />
    </Layouts>
  );
};
export default Home2;

export async function getStaticProps({ locale }) {
  const messages = require(`../locales/${locale}.json`);

  return {
    props: {
      messages,
    },
  };
}