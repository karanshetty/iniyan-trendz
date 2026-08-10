import Contact from "@/components/Contact";
import Countdown from "@/components/Countdown";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Location from "@/components/Location";
import Offers from "@/components/Offers";
import Services from "@/components/Services";
import Splash from "@/components/Splash";

export default function Page() {
  return (
    <main className="flex-1 bg-paper">
      <Splash />
      <Header />
      <Hero />
      <Countdown />
      <div
        id="details"
        className="mx-auto max-w-3xl scroll-mt-16 px-5 py-14 sm:px-6 sm:py-20"
      >
        <Location />
        <Services />
        <Offers />
        <Contact />
        <Footer />
      </div>
    </main>
  );
}
