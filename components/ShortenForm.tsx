import Button from "./Button"

const ShortenForm = () => {
  return (
    <section className="bg-purple950 p-5 mt-5 mb-10">
      <form className="flex flex-col gap-y-5">
        <input 
          type="text" 
          placeholder="Shorten a link here..."
          className="bg-white text-gray500 p-3 rounded-lg border-none outline-none"
        />
        <Button classname="rounded-lg">Shorten it!</Button>
      </form>
    </section>
  )
}

export default ShortenForm
