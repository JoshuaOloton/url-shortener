import Action from "@/components/Action";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import ShortenForm from "@/components/ShortenForm";
import Statistics from "@/components/Statistics";

export default function Home() {
  return (
    <div className="m-auto text-center overflow-hidden">
      <Hero />
      <ShortenForm />
      <Statistics />
      <Action />
      <Footer />
    </div>
  );
}
