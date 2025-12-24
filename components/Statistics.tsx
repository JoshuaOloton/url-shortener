import { statisticsData } from "@/app/data";
import StatisticCard from "./StatisticCard";

const Statistics = () => {
  return (
    <section className="mb-0 mt-0 bg-[#F0F1F7] pb-20">
      <div className="w-5/6 m-auto max-w-5xl">
        <h5 className="text-gray900 font-bold text-3xl mb-2">
          Advanced Statistics
        </h5>
        <p className="text-gray500 leading-relaxed font-medium py-6">
          Track how your links are performing across the web with our advanced
          statistics dashboard.
        </p>
        <div className="flex flex-col md:flex-row gap-x-5 gap-y-20 mt-16 min-h-[400px] relative">
          <div className="w-2 absolute top-0 bottom-0 left-1/2 -translate-x-1/2 bg-yellow-600 md:hidden"></div>
          <div className="h-2 absolute left-0 right-0 top-1/2 -translate-y-1/2 bg-yellow-600 md:block"></div>
          {statisticsData.map((statistic, index) => (
            <StatisticCard
              key={index}
              icon={statistic.icon}
              title={statistic.title}
              content={statistic.content}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Statistics;
