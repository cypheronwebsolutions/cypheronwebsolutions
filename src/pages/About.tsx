import { Card, CardContent } from "@/components/ui/card";
import { Users, Target, Lightbulb, Handshake } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const About = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      {/* Hero Section */}
      <section className="container mx-auto px-4 py-20">
        <div className="text-center max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            About Cypheron <span className="text-accent">Web Solution</span>
          </h1>
          <p className="text-lg text-muted-foreground">
            We're a passionate team dedicated to creating high-end web solutions that help businesses grow and succeed in the digital world.
          </p>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="bg-muted py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">Our Story</h2>
            
            <Card className="mb-6">
              <CardContent className="p-8">
                <p className="text-muted-foreground mb-4">
                  Founded with a vision to bridge the gap between innovative design and powerful functionality, Cypheron Web Solution emerged from a simple belief: every business deserves a digital presence that truly represents their values and drives growth.
                </p>
                <p className="text-muted-foreground mb-4">
                  Our journey began when we recognized that many businesses were struggling with websites that looked good but didn't perform, or performed well but lacked visual appeal. We set out to create a different approach—one that combines stunning design with robust functionality and measurable results.
                </p>
                <p className="text-muted-foreground">
                  Today, we're proud to work with businesses of all sizes, from startups to established enterprises, helping them transform their digital presence and achieve their business goals through thoughtful, strategic web solutions.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Founders Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Meet Our Founders</h2>
            <p className="text-muted-foreground">The passionate minds behind Cypheron Web Solution</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card>
              <CardContent className="p-8 text-center">
                <div className="w-24 h-24 bg-muted rounded-full flex items-center justify-center mx-auto mb-6">
                  <Users className="h-12 w-12 text-muted-foreground" />
                </div>
                <h3 className="text-xl font-bold mb-2">Stacey Tang</h3>
                <p className="text-sm text-muted-foreground">
                  Specializes in company management and UI/UX design, creating intuitive experiences that drive business growth.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-8 text-center">
                <div className="w-24 h-24 bg-muted rounded-full flex items-center justify-center mx-auto mb-6">
                  <Users className="h-12 w-12 text-muted-foreground" />
                </div>
                <h3 className="text-xl font-bold mb-2">Vincci Chye</h3>
                <p className="text-sm text-muted-foreground">
                  Technical expert focused on development and innovative technology solutions that power modern web applications.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="bg-muted py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Values</h2>
            <p className="text-muted-foreground">The principles that guide everything we do</p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-8">
            <Card>
              <CardContent className="p-8 text-center">
                <Target className="h-12 w-12 text-accent mx-auto mb-6" />
                <h3 className="text-xl font-bold mb-4">Results-Driven</h3>
                <p className="text-sm text-muted-foreground">
                  Every project is designed with clear business objectives in mind.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-8 text-center">
                <Target className="h-12 w-12 text-accent mx-auto mb-6" />
                <h3 className="text-xl font-bold mb-4">Quality First</h3>
                <p className="text-sm text-muted-foreground">
                  We never compromise on code quality, design standards, or user experience.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-8 text-center">
                <Lightbulb className="h-12 w-12 text-accent mx-auto mb-6" />
                <h3 className="text-xl font-bold mb-4">Innovation</h3>
                <p className="text-sm text-muted-foreground">
                  We stay ahead of trends and implement the latest technologies.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-8 text-center">
                <Handshake className="h-12 w-12 text-accent mx-auto mb-6" />
                <h3 className="text-xl font-bold mb-4">Partnership</h3>
                <p className="text-sm text-muted-foreground">
                  We build long-term relationships and grow together with our clients.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
