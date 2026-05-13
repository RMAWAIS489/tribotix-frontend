import AboutUs from "./components/AboutUs";
import AiAutomation from "./components/AiAutomation";
import ContactUs from "./components/ContactUs";
import EngagementModels from "./components/EngagementModel";
import Home from "./components/Home";
import Reviews from "./components/Reviews";
import Services from "./components/Services";


export default function HomePage() {
  return (
    <main>
      <Home />
      <AboutUs />
      <Services />
      <AiAutomation />
      <EngagementModels />
      <Reviews />
      <ContactUs />
    </main>
  );
}
