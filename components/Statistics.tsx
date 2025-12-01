import { statisticsData } from "@/app/data";
import StatisticCard from "./StatisticCard";

const Statistics = () => {
  return (
    <section className="my-20 bg-[#F0F1F7]">
      <h5 className="text-gray900 font-bold text-3xl mt-6 mb-2">
        Advanced Statistics
      </h5>
      <p className="text-gray500 leading-relaxed font-medium py-6">
        Track how your links are performing across the web with our advanced
        statistics dashboard.
      </p>
      <div className="flex flex-col gap-20 relative mt-16">
        <div className="w-2 absolute top-0 bottom-0 left-1/2 -translate-x-1/2 bg-yellow-600"></div>
        {statisticsData.map((statistic, index) => (
          <StatisticCard
            key={index}
            icon={statistic.icon}
            title={statistic.title}
            content={statistic.content}
          />
        ))}
      </div>
    </section>
  );
};

export default Statistics;
