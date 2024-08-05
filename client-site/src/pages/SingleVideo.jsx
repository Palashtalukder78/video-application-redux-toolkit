import { useDispatch, useSelector } from "react-redux";
import Description from "../components/forSingleVideoPage/Description";
import RelatedVideoList from "../components/forSingleVideoPage/List/RelatedVideoList";
import Player from "../components/forSingleVideoPage/Player";
import { useEffect } from "react";
import { fetchVideo } from "../features/video/videoSlice";
import { useParams } from "react-router-dom";

const SingleVideo = () => {
  const dispatch = useDispatch();
  const { video } = useSelector((state) => state.video);
  const {videoId} = useParams();

  useEffect(() => {
    dispatch(fetchVideo(videoId));
  }, [dispatch, videoId]);
  const { id, link, title, tags } = video || {};
  return (
    <section className="pt-6 pb-20">
      <div className="mx-auto max-w-7xl px-2 pb-20 min-h-[400px]">
        <div className="grid grid-cols-3 gap-2 lg:gap-8">
          <div className="col-span-full w-full space-y-8 lg:col-span-2">
            <Player link={link} title={title} />
            <Description video={video} />
          </div>
          <RelatedVideoList tags={tags} currentVideoId={id} />
        </div>
      </div>
    </section>
  );
};

export default SingleVideo;
