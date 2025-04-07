import Navbar from "../Components/App Layout/Navbar";
import Homebanner from "../Components/Home/Homebanner";
import HotTopics from "../Components/Home/HotTopics";
import LatestPosts from "../Components/Home/LatestPosts";
import Newsletter from "../Components/Home/Newsletter";
import Footer from "../Components/App Layout/Footer";

const Home = () => {
  return (
    <>
      <Navbar />
      <Homebanner/>
      <HotTopics />
      <LatestPosts/>
      <Newsletter />
      <Footer/>
    </>
  );
};

export default Home;
