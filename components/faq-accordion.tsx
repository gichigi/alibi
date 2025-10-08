"use client"

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export default function FaqAccordion() {
  const faqs = [
    {
      question: "Is Alibi watching everything I do?",
      answer:
        "Objection, leading question! Alibi only observes what's on your screen during work hours to build your defense. All data stays local by default. The prosecution has no access to this information unless you explicitly share reports.",
    },
    {
      question: "How accurate is the time tracking?",
      answer:
        "Your Honor, Alibi tracks time with precision down to the second. Our task inference algorithms can distinguish between 'active work' and 'idle contemplation' with 97% accuracy, as tested in the lab of productivity measurement.",
    },
    {
      question: "Can I edit my time records?",
      answer:
        "The defense counsels that you may annotate and adjust time entries if there are extenuating circumstances. However, Alibi will maintain the original timestamps in the court record for transparency.",
    },
    {
      question: "How do I share my time reports with clients?",
      answer:
        "Exhibit B demonstrates you can export professional summaries in PDF or CSV format, with optional redactions for non-billable activities. Your client receives only what's relevant to their case.",
    },
    {
      question: "Does Alibi work on all operating systems?",
      answer:
        "The court recognizes Alibi on Windows, macOS, Linux, and mobile platforms (iOS/Android with limited functionality). Cross-platform synchronization is available with Pro and Team subscriptions.",
    },
  ]

  return (
    <Accordion type="single" collapsible className="w-full">
      {faqs.map((faq, i) => (
        <AccordionItem key={i} value={`item-${i}`}>
          <AccordionTrigger className="text-left font-medium">{faq.question}</AccordionTrigger>
          <AccordionContent className="text-muted-foreground">{faq.answer}</AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  )
}

