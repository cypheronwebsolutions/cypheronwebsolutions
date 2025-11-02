import {Accordion, AccordionContent, AccordionItem, AccordionTrigger} from "@/components/ui/accordion.tsx";

const FAQ = () => {
  return (
      <div>
        <section className="bg-muted py-20">
          <div className="container mx-auto px-4 max-w-3xl">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Frequently Asked Questions</h2>
              <p className="text-muted-foreground">Get answers to common questions about our services</p>
            </div>

            <Accordion type="single" collapsible className="space-y-4">
              <AccordionItem value="item-1" className="bg-background rounded-lg px-6">
                <AccordionTrigger className="text-left">
                  How long does it take to build a website?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  Typically 4-6 weeks depending on complexity. We provide detailed timelines during our
                  initial consultation.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-2" className="bg-background rounded-lg px-6">
                <AccordionTrigger className="text-left">
                  Do you provide ongoing maintenance?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  Yes, we offer comprehensive maintenance packages to keep your website secure, updated,
                  and performing optimally.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-3" className="bg-background rounded-lg px-6">
                <AccordionTrigger className="text-left">
                  Can you help with digital marketing?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  Absolutely! We offer Google Ads, Facebook Ads, SEO services, and e-commerce marketing
                  solutions.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-4" className="bg-background rounded-lg px-6">
                <AccordionTrigger className="text-left">
                  What's included in your e-commerce solutions?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  Complete setup with product management, payment integration, analytics, SEO, and ongoing
                  support for a seamless shopping experience.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </section>
      </div>
  )
}

export default FAQ;