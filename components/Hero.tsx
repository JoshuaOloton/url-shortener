import Button from "./Button"

const Hero = () => {
  return (
    <div className="text-gray900 mb-20 pb-10 flex flex-col md:flex-row-reverse w-5/6 m-auto max-w-5xl items-center md:justify-between">
      <div className="w-full overflow-hidden my-5">
        <img src="/assets/illustration-working.svg" alt="Hero image" className="w-[150%] md:w-[120%] max-w-none"/>
      </div>
      <div className="text-left">
        <h3 className="text-gray900 font-bold text-4xl mt-6 mb-2">More than just shorter links</h3>
        <p className="text-sm md:text-base text-gray500 leading-relaxed font-medium py-6">Build your brand&lsquo;s recognition and get detailed insights on how your links are performing.</p>
        <Button classname="rounded-3xl">Get Started</Button>
      </div>
    </div>
  )
}

export default Hero
