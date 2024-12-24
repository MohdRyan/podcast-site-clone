import Cards from "./Cards";
import CardTwo from "./CardTwo";
import Creator from "./Creator";
import Featured from "./Featured";
import Footer from "./Footer";
import HeroPage from "./HeroPage";
import MainNav from "./MainNav";
import NewsLetter from "./NewsLetter";
import RecentPosts from "./RecentPosts";
import SupportCreators from "./SupportCreators";
import Testimonial from "./Testimonial";
import TopCreators from "./TopCreators";
import TopNav from "./TopNav";

const Home = () => {
  return (
    <>
      <TopNav />
      <MainNav />
      <HeroPage />
      {/* <Cards /> */}
      {/* <CardTwo /> */}
      <Creator />
      <TopCreators />
      {/* <Featured /> */}
      <Testimonial />
      <SupportCreators />
      <RecentPosts />
      <NewsLetter />
      {/* <Footer /> */}
    </>
  );
};

export default Home;
