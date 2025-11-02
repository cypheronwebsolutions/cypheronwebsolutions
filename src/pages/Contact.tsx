import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { Mail, Clock, Phone } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message Sent!",
      description: "We'll get back to you within 24 hours.",
    });
    setFormData({ name: "", email: "", company: "", message: "" });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="container mx-auto px-4 py-20">
        <div className="text-center max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Get In <span className="text-accent">Touch</span>
          </h1>
          <p className="text-lg text-muted-foreground">
            Ready to start your project? We'd love to hear from you. Send us a message and we'll respond as soon as possible.
          </p>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="container mx-auto px-4 pb-20">
        <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Form */}
          <Card>
            <CardContent className="p-8">
              <h2 className="text-2xl font-bold mb-2">Send us a message</h2>
              <p className="text-sm text-muted-foreground mb-6">
                Fill out the form below and we'll get back to you within 24 hours.
              </p>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm font-medium mb-2 block">
                      Name <span className="text-destructive">*</span>
                    </label>
                    <Input
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Your full name"
                      required
                    />
                  </div>
                  <div>
                    <label className="text-sm font-medium mb-2 block">
                      Email <span className="text-destructive">*</span>
                    </label>
                    <Input
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="your@email.com"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label className="text-sm font-medium mb-2 block">
                    Company
                  </label>
                  <Input
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    placeholder="Your company name"
                  />
                </div>

                <div>
                  <label className="text-sm font-medium mb-2 block">
                    Message <span className="text-destructive">*</span>
                  </label>
                  <Textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell us about your project..."
                    rows={6}
                    required
                  />
                </div>

                <Button type="submit" className="w-full bg-primary text-primary-foreground hover:bg-primary/90">
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Contact Info */}
          <div className="space-y-6">
            <div>
              <h2 className="text-2xl font-bold mb-4">Let's Start a Conversation</h2>
              <p className="text-muted-foreground mb-6">
                We're here to help you bring your vision to life. Whether you need a new website, want to improve your existing one, or need digital marketing support, we're ready to discuss your project.
              </p>
            </div>

            <Card>
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <Mail className="h-6 w-6 text-accent mt-1" />
                  <div>
                    <h3 className="font-bold mb-2">Email</h3>
                    <p className="text-sm text-muted-foreground mb-1">cypheronwebsolution@gmail.com</p>
                    <p className="text-xs text-muted-foreground">Send us an email anytime</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <Clock className="h-6 w-6 text-accent mt-1" />
                  <div>
                    <h3 className="font-bold mb-2">Response Time</h3>
                    <p className="text-sm text-muted-foreground mb-1">Within 24 hours</p>
                    <p className="text-xs text-muted-foreground">We respond to all inquiries promptly</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <Phone className="h-6 w-6 text-accent mt-1" />
                  <div>
                    <h3 className="font-bold mb-2">Phone</h3>
                    <p className="text-sm text-muted-foreground mb-1">Available upon request</p>
                    <p className="text-xs text-muted-foreground">We'll provide our contact number after initial email</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-muted">
              <CardContent className="p-6">
                <h3 className="font-bold mb-3">What happens next?</h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• We'll review your message and project requirements</li>
                  <li>• Our team will prepare a detailed proposal</li>
                  <li>• We'll schedule a call to discuss your project</li>
                  <li>• Start building your dream website together</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
