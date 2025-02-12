import React from "react";
import Layouts from "@layouts/Layouts";
import dynamic from "next/dynamic";

import { getSortedPostsData } from "@library/posts";

import HeroOneSection from "@components/sections/HeroOne"
import AboutSection from "@components/sections/About";
import ServicesSection from "@components/sections/Services";
import TeamSection from "@components/sections/Team";
import LatestPostsSection from "@components/sections/LatestPosts";
import CallToActionSection from "../components/sections/CallToAction";

const TestimonialSlider = dynamic( () => import("@components/sliders/Testimonial"), { ssr: false } );

const Home1 = (props) => {
  return (
    <Layouts>
      <HeroOneSection />
      <AboutSection />
      <ServicesSection />
      <CallToActionSection />

      {/* <TeamSection /> */}
      {/* <TestimonialSlider /> */}
      {/* <LatestPostsSection posts={props.posts} /> */}
    </Layouts>
  );
};
export default Home1;

export async function getStaticProps({ locale}) {
  const allPosts = getSortedPostsData();
  const messages = require(`../locales/${locale}.json`);

  return {
    props: {
      posts: allPosts,
      messages
    }
  }
}