import Navigation from "@/components/Navigation";
import { Card } from "@/components/ui/card";

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <div className="max-w-6xl mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold text-center text-primary mb-12">About Pranic Healing</h1>
        
        {/* Main About Section */}
        <Card className="p-8 mb-12 shadow-gentle">
          <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
            Pranic Healing is an ancient science and art of energy healing that utilizes <strong>prana</strong> or life energy to balance, harmonize, and transform the body's energy processes. It is a <strong>no-touch, non-invasive</strong> healing modality that promotes physical, emotional, and mental well-being.
          </p>
          <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
            Developed by <strong>Master Choa Kok Sui</strong>, Pranic Healing synthesizes ancient healing practices with modern science. It emphasizes the use of life energy to heal the body and has gained recognition worldwide for its effectiveness in promoting health and well-being.
          </p>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Welcome to the Wonderful World of Energy! Pranic Healing is a <strong>no-touch method</strong> of healing yourself and others by using powerful and simple techniques given by the school's founder, Grand Master Choa Kok Sui (GMCKS).
          </p>
        </Card>

        {/* Master Choa Quote */}
        <Card className="p-8 mb-12 bg-gradient-to-br from-primary/5 to-healing-blue/5 border-primary/20">
          <div className="grid md:grid-cols-3 gap-8 items-center">
            <div className="md:col-span-2">
              <blockquote className="text-xl italic text-primary mb-4 leading-relaxed">
                "The body is capable of healing itself, if the body has enough life energy. What the healer does is to increase the body's ability to heal itself. Prana is the life energy that keeps the body alive and healthy. It is by projecting the life energy to a patient that 'Miraculous Healing' occurs."
              </blockquote>
              <div className="text-lg font-semibold text-primary">
                - Grand Master Choa Kok Sui
              </div>
            </div>
            <div className="text-center">
              <img 
                src="https://arhaticyogaretreat.com/wp-content/uploads/2012/11/photo5.jpg" 
                alt="Master Choa Kok Sui" 
                className="w-48 h-48 rounded-full mx-auto shadow-healing object-cover"
              />
              <div className="mt-4 text-sm text-muted-foreground">Master Choa Kok Sui</div>
            </div>
          </div>
        </Card>

        {/* ... rest of your component unchanged ... */}
      </div>
    </div>
  );
};

export default About;
