import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQMobile = () => {
  const faqs = [
    {
      question: "What's included in the box?",
      answer: "Ray-Ban | Meta Wayfarer glasses, portable charging case, USB-C charging cable, and cleaning cloth."
    },
    {
      question: "How long does the battery last?",
      answer: "Up to 4 hours of continuous use. The charging case provides additional charges for all-day use."
    },
    {
      question: "Is it compatible with prescription lenses?",
      answer: "Yes! You can order Ray-Ban | Meta with your prescription lenses. Select 'Prescription available' when ordering."
    },
    {
      question: "How does Meta AI work?",
      answer: "Simply say 'Hey Meta' followed by your question. The built-in AI can identify objects, translate languages, answer questions, and more."
    },
    {
      question: "Can I use it with my phone?",
      answer: "Yes, it connects via Bluetooth to both iOS and Android devices. Use the Meta View app to access all features."
    },
    {
      question: "Is it waterproof?",
      answer: "The glasses are water-resistant (IPX4 rated), protecting against splashes and light rain. Not suitable for swimming."
    },
  ];

  return (
    <section className="py-8 bg-muted">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl font-bold mb-6">FREQUENTLY ASKED QUESTIONS</h2>
        
        <Accordion type="single" collapsible className="space-y-2">
          {faqs.map((faq, index) => (
            <AccordionItem
              key={index}
              value={`item-${index}`}
              className="bg-white border rounded-lg px-4"
            >
              <AccordionTrigger className="text-left font-semibold hover:no-underline py-4">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground pb-4">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default FAQMobile;
