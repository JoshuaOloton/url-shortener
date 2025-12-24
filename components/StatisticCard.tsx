import Image from "next/image"

const StatisticCard = ({ icon, title, content }: { icon: string, title: string, content: string }) => {
  return (
    <div className="relative bg-white p-5 rounded-lg shadow-md h-80 lg:h-72 first:self-start nth-[2n]:self-center last:self-end">
      <div className="rounded-full bg-purple950 w-20 h-20 md:w-24 md:h-24 flex items-center justify-center absolute -top-12 left-1/2 -translate-x-1/2">
        {/* <img src={icon} alt={title} className="w-1/2" /> */}
        <Image src={icon} alt={title} width={40} height={40} />
      </div>
      <h3 className="font-bold text-lg lg:text-xl mt-10">{title}</h3>
      <p className="text-base lg:text-base text-gray500 leading-relaxed font-medium py-6">{content}</p>
    </div>
  )
}

export default StatisticCard
