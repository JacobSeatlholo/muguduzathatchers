import { Navbar } from "@/components/site/navbar";
import { Hero } from "@/components/site/hero";
import { About } from "@/components/site/about";
import { Services } from "@/components/site/services";
import { Process } from "@/components/site/process";
import { Gallery } from "@/components/site/gallery";
import { References } from "@/components/site/references";
import { CtaBanner } from "@/components/site/cta";
import { Contact } from "@/components/site/contact";
import { Footer } from "@/components/site/footer";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <About />
        <Services />
        <Process />
        <Gallery />
        <References />
        <CtaBanner />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
