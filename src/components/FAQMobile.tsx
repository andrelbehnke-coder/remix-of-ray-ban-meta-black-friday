import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQMobile = () => {
  const faqs = [
    {
      question: "Was ist im Lieferumfang enthalten?",
      answer: "Ray-Ban | Meta Wayfarer Brille, tragbares Ladeetui, USB-C Ladekabel und Reinigungstuch."
    },
    {
      question: "Wie lange hält der Akku?",
      answer: "Bis zu 4 Stunden Dauernutzung. Das Ladeetui bietet zusätzliche Ladungen für den ganzen Tag."
    },
    {
      question: "Ist sie mit Korrekturgläsern kompatibel?",
      answer: "Ja! Sie können Ray-Ban | Meta mit Ihren Korrekturgläsern bestellen. Wählen Sie bei der Bestellung 'Sehstärke verfügbar'."
    },
    {
      question: "Wie funktioniert Meta AI?",
      answer: "Sagen Sie einfach 'Hey Meta' gefolgt von Ihrer Frage. Die integrierte KI kann Objekte erkennen, Sprachen übersetzen, Fragen beantworten und vieles mehr."
    },
    {
      question: "Kann ich sie mit meinem Handy verwenden?",
      answer: "Ja, sie verbindet sich über Bluetooth sowohl mit iOS- als auch mit Android-Geräten. Nutzen Sie die Meta View App für alle Funktionen."
    },
    {
      question: "Ist sie wasserdicht?",
      answer: "Die Brille ist wasserbeständig (IPX4-Schutzklasse), geschützt gegen Spritzwasser und leichten Regen. Nicht zum Schwimmen geeignet."
    },
  ];

  return (
    <section className="py-8 bg-muted">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl font-bold mb-6">HÄUFIG GESTELLTE FRAGEN</h2>
        
        <Accordion type="single" collapsible className="space-y-2">
          {faqs.map((faq, index) => (
            <AccordionItem
              key={index}
              value={`item-${index}`}
              className="bg-card border rounded-lg px-4"
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
