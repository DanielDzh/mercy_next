import React from "react";
import HeroSlider from "../components/Slider";
import SimpleReactLightbox from "simple-react-lightbox";
import AboutUs from "../components/AboutUs";
import SaveLife from "../components/SaveLife";
import Portfolios from "../components/portfolios";
import Header from "../components/header";
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
import { useOpenHandlers } from "../hooks/useOpenHandlers";

export default function Home({ total, expected }) {

  return (
    <div>
      <Helmet
        customTitle="Mercy Chain"
        description="Головне завдання благодійного фонду “UNFAILING CHARITY” — забезпечити допомогу та матеріальну підтримку найбільш потребуючого населення потребуючих країн. "
      />
      {/* <Header/> */}
      <HeroSlider totalAmount={total} expectedAmount={expected} />
      <AboutUs />
      <OurMission />
      <OurValues />
      <SaveLife />
      <CurrentProjects />
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
  const res = await fetch(process.env.NEXT_TOTAL_API_URL);
  const data = await res.json();
  return {
    props: { total: data.total || 3000, expected: data.expected || 30000 },
  };
}
