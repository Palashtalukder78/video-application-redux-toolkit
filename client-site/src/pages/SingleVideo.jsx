import Description from "../components/forSingleVideoPage/Description";
import RelatedVideoList from "../components/forSingleVideoPage/List/RelatedVideoList";
import Player from "../components/forSingleVideoPage/Player";


const SingleVideo = () => {
    return (
        <section className="pt-6 pb-20">
            <div className="mx-auto max-w-7xl px-2 pb-20 min-h-[400px]">
                <div className="grid grid-cols-3 gap-2 lg:gap-8">
                    <div className="col-span-full w-full space-y-8 lg:col-span-2">
                        <Player />
                        <Description />
                    </div>
                    <RelatedVideoList />
                </div>
            </div>
        </section>
    );
};

export default SingleVideo;