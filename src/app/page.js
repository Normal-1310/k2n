import Nav from "./components/Nav";
import Hero from "./components/Hero";
import Image from "next/image";
import Contents from "./components/contents";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div className="scroll-smooth snap-x">
      <div className="sticky z-40">
          <Nav/>
      </div>
      <div className="snap-center bg-white dark:bg-gray-900 bg-[url('https://flowbite.s3.amazonaws.com/docs/jumbotron/hero-pattern.svg')] dark:bg-[url('https://flowbite.s3.amazonaws.com/docs/jumbotron/hero-pattern-dark.svg')] h-screen">
        <div>
          <Hero/>
        </div>
        <div class="bg-gradient-to-b from-blue-50/50 to-transparent dark:from-blue-900/50 w-full h-full absolute top-0 left-0 z-0"></div>
      </div>
      <Image
      src="https://9tonkla.cloud/9tonkal/assets/photos/k2ncover.png"
      className="w-3/6 sm:w-10/12 md:w-4/6 lg:w-6/12 z-30 h-auto absolute inset-x-0 bottom-0 inset-y-1/5 mt-40 container rounded-xl"
      alt="Photo"
      height={4500}
      width={8000}
      />
      <div>
        <div className="bg-slate-100 dark:bg-slate-950 dark:text-slate-100 text-slate-950 snap-center w-11/12 rounded-xl h-full absolute inset-x-0 bottom-0 inset-y-3/4 mt-24 container">
          <Contents/>
          {/* <Footer/> */}
        </div>
      </div>
    </div>
  );
}
