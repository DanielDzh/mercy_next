import React from "react";
import HeroSlider from "../components/Slider";
import AboutUs from "../components/AboutUs";
import SaveLife from "../components/SaveLife";
import OurMission from "../components/OurMission";
import OurTeam from "../components/OurTeam";
import OurValues from "../components/OurValues";
import BecomePartner from "../components/BecomePartner";
import CurrentProjects from "../components/CurrentProjects";
import OurPartners from "../components/OurPartners";
import ContactUs from "../components/ContactUs";
import Footer from "../components/Footer";
import { Helmet } from "../components/Helmet";
import Reviews from "../components/Reviews";
import { Api } from "../services/api";
import { useTrans } from "../hooks/useTrans";

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
      <AboutUs />
      <OurMission />
      <OurValues />
      <SaveLife />
      <CurrentProjects totalAmount={total} expectedAmount={expected} />
      <BecomePartner />
      <Reviews />
      <OurTeam />
      <OurPartners />
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
