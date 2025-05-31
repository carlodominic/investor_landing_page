import HeroSection from "./HeroSection";
import AboutSection from "./AboutSection";
import ProductPreview from "./ProductPreview";
import NewsletterSignup from "./NewsletterSignup";
import Navbar from "./Navbar";

function Home() {
  return (
    <div className="bg-white">
      <Navbar />
      <HeroSection id="hero" />
      <AboutSection id="about" />
      <ProductPreview id="product" />
      <NewsletterSignup id="newsletter" />
    </div>
  );
}

export default Home;
