import Button from "./Button"

const Hero = () => {
  return (
    <div className="text-gray900 h-screen">
      <div className="w-full overflow-hidden my-5">
        <img src="/assets/illustration-working.svg" alt="Hero image" className="w-[150%] max-w-none"/>
      </div>
      <h3 className="text-gray900 font-bold text-4xl mt-6 mb-2">More than just shorter links</h3>
      <p className="text-gray500 leading-relaxed font-medium py-6">Build your brand's recognition and get detailed insights on how your links are performing.</p>
      <Button classname="rounded-3xl">Get Started</Button>
    </div>
  )
}

export default Hero
