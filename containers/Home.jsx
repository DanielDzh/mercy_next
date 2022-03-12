import React from "react";
import HeroSlider from "../components/Slider";
import SimpleReactLightbox from "simple-react-lightbox";
import AboutUs from "../components/AboutUs";
import SaveLife from "../components/SaveLife";
import Portfolios from "../components/portfolios";
import Blogs from "../components/blogs";
import Contact from "../components/contact";
import Header from "../components/header";
import Footer from "../components/footer";
import OurMission from "../components/OurMission";
import OurTeam from "../components/OurTeam";
import OurValues from "../components/OurValues";
import BecomePartner from "../components/BecomePartner";
import CurrentProjects from "../components/CurrentProjects";
import { Helmet } from "../components/Helmet";

export default function Home() {
  return (
    <div>
      <Helmet
        title="Mercy Chain"
        description="Головне завдання благодійного фонду “UNFAILING CHARITY” — забезпечити допомогу та матеріальну підтримку найбільш потребуючого населення потребуючих країн. "
      />
      {/* <Header/> */}
      <HeroSlider />
      <AboutUs />
      <OurMission />
      <OurValues />
      <SaveLife />
      <CurrentProjects />
      <BecomePartner />
      <OurTeam />
    </div>
  );
}
