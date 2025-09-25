import Navigation from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Link } from "react-router-dom";
import heroImage from "@/assets/hero-healing.jpg";
import healingHandsImage from "@/assets/healing-hands-correct.jpg";

const Home = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative py-20 px-4 overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-20"
          style={{ backgroundImage: `url(${heroImage})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-healing-blue/10" />
        
        <div className="relative max-w-6xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            <span className="bg-gradient-to-r from-primary via-primary-glow to-healing-blue bg-clip-text text-transparent">
              Soham
            </span>
          </h1>
          <h2 className="text-2xl md:text-3xl text-primary mb-6">
            School Of Healing And Meditation
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
            Welcome to the Wonderful World of Energy! Pranic Healing is a no-touch method 
            of healing yourself and others using powerful and simple techniques.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/courses">
              <Button size="lg" className="bg-gradient-to-r from-primary to-primary-glow hover:opacity-90 px-8 py-3">
                Explore Courses
              </Button>
            </Link>
            <Link to="/about">
              <Button variant="outline" size="lg" className="px-8 py-3">
                Learn More
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* About Preview */}
      <section className="py-16 px-4 bg-muted/30">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-3xl font-bold text-primary mb-6">About Pranic Healing</h3>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                Pranic Healing is an ancient science and art of energy healing that utilizes 
                <strong> prana</strong> or life energy to balance, harmonize, and transform 
                the body's energy processes.
              </p>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                Developed by <strong>Master Choa Kok Sui</strong>, it's a 
                <strong> no-touch, non-invasive</strong> healing modality that promotes 
                physical, emotional, and mental well-being.
              </p>
              <Link to="/about">
                <Button className="bg-gradient-to-r from-healing-blue to-primary hover:opacity-90">
                  Read Full Story
                </Button>
              </Link>
            </div>
            <div className="relative">
              <img 
                src={healingHandsImage} 
                alt="Healing Hands with Energy" 
                className="rounded-lg shadow-healing w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Course Categories */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h3 className="text-3xl font-bold text-center text-primary mb-12">Course Categories</h3>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="p-8 text-center hover:shadow-healing transition-all duration-300 border-primary/20">
              <div className="w-16 h-16 bg-gradient-to-br from-primary to-primary-glow rounded-full mx-auto mb-6 flex items-center justify-center">
                <span className="text-2xl text-white">🧘</span>
              </div>
              <h4 className="text-xl font-semibold text-primary mb-4">Spiritual Courses</h4>
              <p className="text-muted-foreground mb-6">
                Achieve higher consciousness through Arhatic Yoga, meditation, and spiritual practices.
              </p>
              <Link to="/courses#spiritual">
                <Button variant="outline" className="w-full">Explore Spiritual</Button>
              </Link>
            </Card>

            <Card className="p-8 text-center hover:shadow-healing transition-all duration-300 border-healing-blue/20">
              <div className="w-16 h-16 bg-gradient-to-br from-healing-blue to-primary rounded-full mx-auto mb-6 flex items-center justify-center">
                <span className="text-2xl text-white">✋</span>
              </div>
              <h4 className="text-xl font-semibold text-primary mb-4">Healing Courses</h4>
              <p className="text-muted-foreground mb-6">
                Learn powerful healing techniques including Basic Pranic Healing and Psychotherapy.
              </p>
              <Link to="/courses#healing">
                <Button variant="outline" className="w-full">Explore Healing</Button>
              </Link>
            </Card>

            <Card className="p-8 text-center hover:shadow-golden transition-all duration-300 border-gold/20">
              <div className="w-16 h-16 bg-gradient-to-br from-gold to-primary rounded-full mx-auto mb-6 flex items-center justify-center">
                <span className="text-2xl text-white">💰</span>
              </div>
              <h4 className="text-xl font-semibold text-primary mb-4">Prosperity Courses</h4>
              <p className="text-muted-foreground mb-6">
                Attract abundance through Kriyashakti, Feng Shui, and spiritual business management.
              </p>
              <Link to="/courses#prosperity">
                <Button variant="outline" className="w-full">Explore Prosperity</Button>
              </Link>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-primary text-primary-foreground py-12 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <div className="text-2xl font-bold mb-4">Soham</div>
          <div className="text-lg mb-4">School Of Healing And Meditation</div>
          <div className="text-primary-foreground/80 mb-6">
            Contact: 9567 846 343 | 9388 233 061
          </div>
          <div className="text-sm text-primary-foreground/60">
            © 2023 Soham. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;