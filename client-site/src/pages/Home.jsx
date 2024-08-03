import VideoGrid from "../components/forHomePage/grid/VideoGrid";
import Pagination from "../components/forHomePage/pagination/Pagination";
import Tags from "../components/forHomePage/tags/Tags";
const Home = () => {
  return (
    <>
      <Tags />
      <VideoGrid />
      <Pagination />
    </>
  );
};

export default Home;
