import React from "react";
import HeroSlider from "../components/Slider";
import AboutUs from "../components/AboutUs";
import ClassVest from "../components/ClassVest";
import OurTeam from "../components/OurTeam";
import CostVest from "../components/CostVest";
import OurPartners from "../components/OurPartners";
import ContactUs from "../components/ContactUs";
import Footer from "../components/Footer";
import { Helmet } from "../components/Helmet";
import Reviews from "../components/Reviews";
import { Api } from "../services/api";
import { useTrans } from "../hooks/useTrans";
import VideoBlock from "../components/VideoBlock";
import Details from "../components/Details";
import Everyday from "../components/Everyday";

const isNumber = (num) => num !== null && !isNaN(num);

export default function Home({ total, expected }) {

  const { trans } = useTrans();

  return (
    <div>
      <Helmet
        customTitle="Mercy Chain"
        description="share_text"
        image="images/Logo.png"
      />
      <HeroSlider totalAmount={total} expectedAmount={expected} />
      <VideoBlock />
      <AboutUs />
      <ClassVest />
      <CostVest />
      <Everyday />
      <Reviews />
      <Details />
      {/* <OurTeam /> */}
      {/* <OurPartners /> */}
      <ContactUs />
      <Footer />
    </div>
  );
}

export async function getServerSideProps() {
  const data = await Api.get("/total");
  return {
    props: {
      total: isNumber(data.total) ? data.total : 3000,
      expected: isNumber(data.expected) ? data.expected : 30000,
    },
  };
}
