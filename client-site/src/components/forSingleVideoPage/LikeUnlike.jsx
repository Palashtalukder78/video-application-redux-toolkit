/* eslint-disable react/prop-types */
import LikeImg  from '../../assets/like.svg'
import UnLikeImg  from '../../assets/unlike.svg'

const LikeUnlike = ({like,unlike}) => {
    return (
      <div className="flex gap-10 w-48">
        <div className="flex gap-1">
          <div className="shrink-0">
            <img className="w-5 block" src={LikeImg} alt="Like" />
          </div>
          <div className="text-sm leading-[1.7142857] text-slate-600">{like}</div>
        </div>
        <div className="flex gap-1">
          <div className="shrink-0">
            <img className="w-5 block" src={UnLikeImg} alt="Unlike" />
          </div>
          <div className="text-sm leading-[1.7142857] text-slate-600">{unlike}</div>
        </div>
      </div>
    );
};

export default LikeUnlike;