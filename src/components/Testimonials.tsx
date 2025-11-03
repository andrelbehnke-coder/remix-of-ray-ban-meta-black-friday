import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Star } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Sarah Mitchell",
      role: "Content Creator",
      avatar: "SM",
      rating: 5,
      text: "These glasses have completely changed how I create content. The hands-free video recording is a game-changer for my vlogs!"
    },
    {
      name: "Marcus Chen",
      role: "Tech Professional",
      avatar: "MC",
      rating: 5,
      text: "The Meta AI integration is incredibly useful. I can get information, translate text, and stay connected without pulling out my phone."
    },
    {
      name: "Emily Rodriguez",
      role: "Fitness Enthusiast",
      avatar: "ER",
      rating: 5,
      text: "Perfect for my active lifestyle. Great audio quality, comfortable fit, and I love capturing my runs without carrying extra gear."
    },
    {
      name: "James Wilson",
      role: "Business Executive",
      avatar: "JW",
      rating: 5,
      text: "The build quality is exceptional. Ray-Ban style with smart features - exactly what I needed for both work and personal use."
    },
    {
      name: "Lisa Thompson",
      role: "Travel Blogger",
      avatar: "LT",
      rating: 5,
      text: "Captured amazing moments on my European trip. The camera quality is outstanding and the battery lasts all day."
    },
    {
      name: "David Park",
      role: "Designer",
      avatar: "DP",
      rating: 5,
      text: "These aren't just smart glasses - they're a statement piece. The Wayfarer design is timeless and the tech is impressive."
    }
  ];

  return (
    <section className="py-20 md:py-32 bg-muted/30">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-6xl font-black mb-6">
            Loved by Thousands
          </h2>
          <div className="flex items-center justify-center gap-2 mb-4">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-8 h-8 fill-accent text-accent" />
            ))}
          </div>
          <p className="text-xl text-muted-foreground">
            4.8 out of 5 stars from 12,847 verified customers
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="border-2 hover:border-accent transition-all duration-300 hover:shadow-xl">
              <CardContent className="p-6 space-y-4">
                {/* Rating */}
                <div className="flex gap-1">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-accent text-accent" />
                  ))}
                </div>

                {/* Review Text */}
                <p className="text-foreground leading-relaxed">
                  "{testimonial.text}"
                </p>

                {/* Author */}
                <div className="flex items-center gap-3 pt-4 border-t">
                  <Avatar className="border-2 border-accent">
                    <AvatarFallback className="bg-accent text-accent-foreground font-bold">
                      {testimonial.avatar}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-bold text-foreground">{testimonial.name}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Trust Badges */}
        <div className="mt-16 flex flex-wrap justify-center gap-8 items-center">
          <div className="text-center">
            <p className="text-4xl font-black text-accent">15K+</p>
            <p className="text-sm text-muted-foreground font-medium">Happy Customers</p>
          </div>
          <div className="text-center">
            <p className="text-4xl font-black text-accent">4.8★</p>
            <p className="text-sm text-muted-foreground font-medium">Average Rating</p>
          </div>
          <div className="text-center">
            <p className="text-4xl font-black text-accent">98%</p>
            <p className="text-sm text-muted-foreground font-medium">Satisfaction Rate</p>
          </div>
          <div className="text-center">
            <p className="text-4xl font-black text-accent">24/7</p>
            <p className="text-sm text-muted-foreground font-medium">Customer Support</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
