import { useNavigate } from "react-router-dom";
import CrewRankingCard from "@/components/home/CrewRankingCard";
import { ReactComponent as RightArrowIcon } from "@/assets/icons/RightArrowIcon.svg";

const FaceRanking = () => {
  const navigate = useNavigate();

  return (
    <div className="m-5 mt-8">
      <div className="text-[12px] text-[#444] font-semibold pb-3">
        이번 주, 가장 높은 페이스를 기록한 크루를 확인해보세요.
      </div>
      <div className="bg-[#F3F3F3] rounded-[20px] gap-2.5">
        <CrewRankingCard rank={1} />
        <CrewRankingCard rank={2} />
        <CrewRankingCard rank={3} />
      </div>
      <div className="flex items-center justify-end gap-2.5 pt-3">
        <span className="text-[#444] text-[12px] font-bold cursor-pointer">
          다른 크루 알아보기
        </span>
        <RightArrowIcon onClick={() => navigate("/other-crew")} />
      </div>
    </div>
  );
};

export default FaceRanking;