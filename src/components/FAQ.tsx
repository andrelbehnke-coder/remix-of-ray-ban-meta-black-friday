import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQ = () => {
  const faqs = [
    {
      question: "How does Meta AI work with the glasses?",
      answer: "Meta AI is built directly into the glasses. Simply say 'Hey Meta' to activate voice commands. The AI can answer questions, provide real-time information, translate languages, identify objects, and much more - all without needing to touch your phone.",
    },
    {
      question: "What's the battery life on Gen 2?",
      answer: "Ray-Ban Meta Gen 2 offers up to 6 hours of continuous use on a single charge, a significant improvement over Gen 1's 4 hours. The included charging case provides multiple additional charges for all-day use.",
    },
    {
      question: "Can I use these glasses without a smartphone?",
      answer: "While you can use basic features like taking photos and listening to music without a phone, you'll need the Meta View app on your smartphone to access AI features, transfer media, adjust settings, and unlock the full potential of your glasses.",
    },
    {
      question: "Are prescription lenses available?",
      answer: "Yes! Ray-Ban offers prescription lenses for Meta Wayfarer Gen 2. You can order prescription lenses separately through Ray-Ban's website or authorized retailers. The frames are designed to accommodate most prescription types.",
    },
    {
      question: "How do I control the camera and audio?",
      answer: "The glasses feature intuitive touch controls on the right temple for audio playback and volume. Press the capture button on top of the right frame to take photos or hold it to record video. Voice commands work for hands-free operation.",
    },
    {
      question: "Is my privacy protected when using the camera?",
      answer: "Yes. The glasses have a visible LED indicator that lights up whenever the camera is recording. This provides transparency to those around you. All media is stored locally on your device until you choose to share it.",
    },
    {
      question: "What's included in the Black Friday deal?",
      answer: "The Black Friday package includes: Ray-Ban Meta Wayfarer Gen 2 glasses, premium charging case, USB-C charging cable, microfiber cleaning cloth, and 2-year warranty. Plus free worldwide shipping and 30-day money-back guarantee.",
    },
    {
      question: "How long is this Black Friday price valid?",
      answer: "This exclusive 66% off deal ($129 instead of $379) is only available during our Black Friday promotion. Once the countdown timer reaches zero or stock runs out, prices return to normal retail. We recommend securing your pair now.",
    },
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Frequently Asked <span className="text-accent">Questions</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Everything you need to know about Ray-Ban Meta Gen 2
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left text-lg font-semibold hover:text-accent">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
