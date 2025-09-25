import Navigation from "@/components/Navigation";
import { Card } from "@/components/ui/card";

const KeyPoints = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <div className="max-w-4xl mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold text-center text-primary mb-12">Two Basic Laws in Pranic Healing</h1>
        
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <Card className="p-8 shadow-gentle border-primary/20">
            <div className="text-center mb-6">
              <div className="w-16 h-16 bg-gradient-to-br from-primary to-primary-glow rounded-full mx-auto flex items-center justify-center">
                <span className="text-2xl text-white">1</span>
              </div>
            </div>
            <h2 className="text-2xl font-bold text-primary mb-6 text-center">The Law of Self-Recovery</h2>
            <p className="text-lg text-muted-foreground leading-relaxed text-center">
              This fundamental law states that <strong>the body possesses an innate ability to heal itself</strong>. 
              Pranic Healing leverages this natural capacity by enhancing the body's energy system.
            </p>
          </Card>
          
          <Card className="p-8 shadow-gentle border-healing-blue/20">
            <div className="text-center mb-6">
              <div className="w-16 h-16 bg-gradient-to-br from-healing-blue to-primary rounded-full mx-auto flex items-center justify-center">
                <span className="text-2xl text-white">2</span>
              </div>
            </div>
            <h2 className="text-2xl font-bold text-primary mb-6 text-center">The Law of Life-Energy (Prana)</h2>
            <p className="text-lg text-muted-foreground leading-relaxed text-center">
              This law explains that <strong>by increasing the life energy (prana) level within the body, 
              the healing process is significantly accelerated</strong>. This is achieved through various Pranic Healing techniques.
            </p>
          </Card>
        </div>

        <Card className="p-8 text-center bg-gradient-to-r from-primary/10 to-healing-blue/10 border-primary/20 mb-12">
          <blockquote className="text-xl italic text-primary mb-4">
            "Pranic Healing accelerates the natural healing process of the body."
          </blockquote>
          <div className="text-lg font-semibold text-primary">
            - Master Choa Kok Sui
          </div>
        </Card>

        {/* Additional Key Principles */}
        <h2 className="text-3xl font-bold text-center text-primary mb-8">Core Principles</h2>
        
        <div className="grid gap-6">
          <Card className="p-6 shadow-gentle">
            <div className="flex items-start space-x-4">
              <div className="w-8 h-8 bg-gradient-to-br from-gold to-primary rounded-full flex items-center justify-center flex-shrink-0">
                <span className="text-white font-bold">✦</span>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-primary mb-2">No-Touch Healing</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Pranic Healing is a completely non-invasive method that requires no physical contact between healer and patient.
                </p>
              </div>
            </div>
          </Card>

          <Card className="p-6 shadow-gentle">
            <div className="flex items-start space-x-4">
              <div className="w-8 h-8 bg-gradient-to-br from-gold to-primary rounded-full flex items-center justify-center flex-shrink-0">
                <span className="text-white font-bold">✦</span>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-primary mb-2">Energy Projection</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Healers project life energy (prana) to the patient to accelerate the natural healing process.
                </p>
              </div>
            </div>
          </Card>

          <Card className="p-6 shadow-gentle">
            <div className="flex items-start space-x-4">
              <div className="w-8 h-8 bg-gradient-to-br from-gold to-primary rounded-full flex items-center justify-center flex-shrink-0">
                <span className="text-white font-bold">✦</span>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-primary mb-2">Complementary Medicine</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Pranic Healing works alongside conventional medical treatment to enhance overall healing outcomes.
                </p>
              </div>
            </div>
          </Card>

          <Card className="p-6 shadow-gentle">
            <div className="flex items-start space-x-4">
              <div className="w-8 h-8 bg-gradient-to-br from-gold to-primary rounded-full flex items-center justify-center flex-shrink-0">
                <span className="text-white font-bold">✦</span>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-primary mb-2">Holistic Approach</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Addresses physical, emotional, mental, and spiritual aspects of health and well-being.
                </p>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default KeyPoints;