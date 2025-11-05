import ProductHeader from "@/components/ProductHeader";
import ProductGalleryMobile from "@/components/ProductGalleryMobile";
import ProductInfo from "@/components/ProductInfo";
import VideoFeatures from "@/components/VideoFeatures";
import WhatsInTheBox from "@/components/WhatsInTheBox";
import FAQMobile from "@/components/FAQMobile";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <ProductHeader />
      <ProductGalleryMobile />
      <ProductInfo />
      <VideoFeatures />
      <WhatsInTheBox />
      <FAQMobile />
      <Footer />
    </div>
  );
};

export default Index;
