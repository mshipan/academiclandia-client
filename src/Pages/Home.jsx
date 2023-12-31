import { Helmet } from "react-helmet-async";
import Gallery from "../components/HomeComponents/Gallery";
import OurClasses from "../components/HomeComponents/OurClasses";
import ResearchPaper from "../components/HomeComponents/ResearchPaper";
import Review from "../components/HomeComponents/Review";
import TopSection from "../components/HomeComponents/TopSection";

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>Home | Academiclandia</title>
      </Helmet>
      <TopSection></TopSection>
      <OurClasses></OurClasses>
      <Gallery></Gallery>
      <ResearchPaper></ResearchPaper>
      <Review></Review>
    </div>
  );
};

export default Home;
