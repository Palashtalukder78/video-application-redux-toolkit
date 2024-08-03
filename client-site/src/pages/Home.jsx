import VideoGrid from "../components/grid/VideoGrid";
import Pagination from "../components/pagination/Pagination";
import Tags from "../components/tags/Tags";
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
