import { statisticsData } from "@/app/data";

const Statistics = () => {
  return (
    <section className="my-20">
      <h5 className="text-gray900 font-bold text-3xl mt-6 mb-2">Advanced Statistics</h5>
      <p className="text-gray500 leading-relaxed font-medium py-6">Track how your links are performing across the web with our advanced statistics dashboard.</p>
      <div>
        {statisticsData.map((statistic, index) => (
          <div key={index}>
            <p>Hey</p>
            <p>{statistic.title}</p>
            <p>{statistic.content}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Statistics
