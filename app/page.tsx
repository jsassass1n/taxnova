import AboutUs from "./components/main/about-us";
import Blog from "./components/main/blog";
import ContactUs from "./components/main/contact-us";
import Features from "./components/main/services";
import Header from "./components/main/header";
import Hero from "./components/main/hero";
import Pricing from "./components/main/pricing";
import Services from "./components/main/features";
import NewProject from "./components/main/newProject";

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <AboutUs />
      <Services />
      <Features />
      <Pricing />
      {/* <Blog /> */}
      <NewProject />
      <ContactUs />
    </>
  );
}
