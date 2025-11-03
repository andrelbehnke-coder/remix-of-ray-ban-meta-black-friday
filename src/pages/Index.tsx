import Hero from "@/components/Hero";
import CountdownTimer from "@/components/CountdownTimer";
import Features from "@/components/Features";
import Testimonials from "@/components/Testimonials";
import Specifications from "@/components/Specifications";
import OrderSection from "@/components/OrderSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Hero />
      <CountdownTimer />
      <Features />
      <Testimonials />
      <Specifications />
      <OrderSection />
      <Footer />
    </div>
  );
};

export default Index;
