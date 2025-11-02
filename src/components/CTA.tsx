import {Link} from "react-router-dom";
import {Button} from "@/components/ui/button.tsx";

const CTA = () => {
  return (
      <div>
        <section className="py-20">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Transform Your Digital Presence?</h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Let's discuss your project and create something amazing together. Get a free consultation today.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link to="/contact">
                <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
                  Get Started Today
                </Button>
              </Link>
              <Button size="lg" variant="outline">
                Free Consultation
              </Button>
              <Button size="lg" variant="outline">
                Guaranteed Quality
              </Button>
            </div>
          </div>
        </section>
      </div>
  )
}

export default CTA;