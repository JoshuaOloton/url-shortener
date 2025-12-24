import Button from "./Button"
import Image from "next/image"

const Hero = () => {
  return (
    <div className="text-gray900 mb-20 pb-10 flex flex-col gap-x-10 md:flex-row-reverse w-5/6 m-auto max-w-5xl items-center md:justify-between">
      <div className="w-full my-5 flex-1">
        <Image src="/assets/illustration-working.svg" alt="Hero image" width={600} height={400} className="w-[150%] md:w-[160%] max-w-none"/>
        {/* <img src="/assets/illustration-working.svg" alt="Hero image" className="w-[150%] md:w-[160%] max-w-none"/> */}
      </div>
      <div className="text-center md:text-left flex-1">
        <h3 className="text-gray900 font-extrabold text-4xl lg:text-5xl xl:text-6xl mt-6 mb-2 leading-16">More than just shorter links</h3>
        <p className="md:text-base text-gray500 leading-relaxed font-medium py-6">Build your brand&lsquo;s recognition and get detailed insights on how your links are performing.</p>
        <Button classname="rounded-3xl mt-5">Get Started</Button>
      </div>
    </div>
  )
}

export default Hero
