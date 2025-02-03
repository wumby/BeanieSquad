import Hero from "./_components/Hero";
import Navbar from "./_components/Navbar";

export default function Home() {
  return (
    <div className="flex justify-center">
      <section className="w-full h-screen">
        <Navbar></Navbar>
        <Hero />
      </section>
    </div>
  );
}
