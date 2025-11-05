import Hero from "@/components/Hero";
import CountdownTimer from "@/components/CountdownTimer";
import TrustSection from "@/components/TrustSection";
import ProductGallery from "@/components/ProductGallery";
import VideoShowcase from "@/components/VideoShowcase";
import Features from "@/components/Features";
import TechnologyDeepDive from "@/components/TechnologyDeepDive";
import Specifications from "@/components/Specifications";
import Testimonials from "@/components/Testimonials";
import Comparison from "@/components/Comparison";
import FAQ from "@/components/FAQ";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Hero />
      <CountdownTimer />
      <TrustSection />
      <ProductGallery />
      <VideoShowcase />
      <Features />
      <TechnologyDeepDive />
      <Specifications />
      <Testimonials />
      <Comparison />
      <FAQ />
      <CTASection />
      <Footer />
    </div>
  );
};

export default Index;
