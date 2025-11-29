import Hero from "@/components/Hero";
import ShortenForm from "@/components/ShortenForm";
import Statistics from "@/components/Statistics";

export default function Home() {
  return (
    <div className="w-5/6 m-auto text-center">
      <Hero />
      <ShortenForm />
      <Statistics />
    </div>
  );
}
