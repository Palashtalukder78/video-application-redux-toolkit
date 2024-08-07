import { configureStore } from "@reduxjs/toolkit";
import videosReducer from "../features/videos/videosSlice";
import videoReducer from "../features/video/videoSlice";
import tagsReducer from "../features/tags/tagsSlice";
import filterReducer from "../features/filter/filterSlice";
import relatedVideosReducer from "../features/relatedVideos/relatedVideosSlice";

const store = configureStore({
  reducer: {
    videos: videosReducer,
    video: videoReducer,
    tags: tagsReducer,
    filter: filterReducer,
    relatedVideos: relatedVideosReducer,
  },
});
export default store;
