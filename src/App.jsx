import About from "./components/About";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero"; 
import Technologies from "./components/Technologies";
import Experience from "./components/Experience";
import Education from "./components/Education ";
import ProjectShowcase from "./components/ProjectShowcase ";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div className="overflow-x-hidden bg-gradient-to-r from-gray-900 via-purple-900 to-cyan-900 text-neutral-200 antialiased selection:bg-cyan-500 selection:text-cyan-50">
      <div className="fixed top-0 -z-10 h-full w-full">
      <div className="absolute inset-0 -z-10 h-full w-full items-center px-5 py-24 [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)]"></div>
      </div>
      <div className="container mx-auto px-8">
        <Navbar />
        <Hero />
        <About /> 
        <Technologies />
        <Experience />
        <Education />
        <ProjectShowcase />
        <Contact />
        <Footer />
      </div>
    </div>
  );
};

export default App;
