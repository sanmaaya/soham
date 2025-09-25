import Navigation from "@/components/Navigation";
import { Card } from "@/components/ui/card";
import masterChoaImage from "@/assets/master-choa.jpg";

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
                src={masterChoaImage} 
                alt="Master Choa Kok Sui" 
                className="w-48 h-48 rounded-full mx-auto shadow-healing object-cover"
              />
              <div className="mt-4 text-sm text-muted-foreground">Master Choa Kok Sui</div>
            </div>
          </div>
        </Card>

        {/* Two Basic Laws */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <Card className="p-8 shadow-gentle">
            <h3 className="text-2xl font-bold text-primary mb-4">The Law of Self-Recovery</h3>
            <p className="text-muted-foreground leading-relaxed">
              This fundamental law states that <strong>the body possesses an innate ability to heal itself</strong>. Pranic Healing leverages this natural capacity by enhancing the body's energy system.
            </p>
          </Card>
          
          <Card className="p-8 shadow-gentle">
            <h3 className="text-2xl font-bold text-primary mb-4">The Law of Life-Energy (Prana)</h3>
            <p className="text-muted-foreground leading-relaxed">
              This law explains that <strong>by increasing the life energy (prana) level within the body, the healing process is significantly accelerated</strong>. This is achieved through various Pranic Healing techniques.
            </p>
          </Card>
        </div>

        <Card className="p-6 text-center bg-gradient-to-r from-healing-blue/10 to-primary/10 border-primary/20 mb-12">
          <p className="text-xl italic text-primary">
            "Pranic Healing accelerates the natural healing process of the body."
          </p>
          <div className="text-lg font-semibold text-primary mt-2">
            - Master Choa Kok Sui
          </div>
        </Card>

        {/* Key Aspects */}
        <h2 className="text-3xl font-bold text-primary mb-8">Key Aspects of Pranic Healing</h2>
        
        <div className="space-y-8">
          <Card className="p-8 shadow-gentle">
            <h3 className="text-2xl font-bold text-primary mb-4">Pranic Feng-Shui</h3>
            <p className="text-muted-foreground mb-4 leading-relaxed">
              The energy in your home, office, and workplace profoundly impacts your <strong>Health, Wealth, and Happiness</strong>.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              You can achieve greater happiness and prosperity by attracting <strong>favorable energy</strong> into your living and business spaces.
            </p>
          </Card>

          <Card className="p-8 shadow-gentle">
            <h3 className="text-2xl font-bold text-primary mb-4">Personalized Healing for Physical Ailments</h3>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              Pranic Healing can support the body in recovering from various physical ailments such as:
            </p>
            <div className="grid md:grid-cols-2 gap-4 mb-4">
              <ul className="text-muted-foreground space-y-2">
                <li>• Arthritis, Joint Pain, Migraine</li>
                <li>• Headache, Asthma, Chronic Sinusitis</li>
                <li>• Cough, Skin Allergy, Thyroidism</li>
                <li>• Diabetes, Tumors and Cancers</li>
              </ul>
              <ul className="text-muted-foreground space-y-2">
                <li>• Gastrointestinal Ailments</li>
                <li>• Heart, Liver, Kidney Issues</li>
                <li>• Reproductive Ailments</li>
                <li>• Brain and Nervous System Disorders</li>
              </ul>
            </div>
            <p className="text-sm text-muted-foreground italic">
              *Pranic Healing is not intended to replace allopathic Medicine, but rather to complement it.
            </p>
          </Card>

          <Card className="p-8 shadow-gentle">
            <h3 className="text-2xl font-bold text-primary mb-4">Pranic Healing for Psychological Ailments</h3>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              Pranic Psychotherapy can help the mind in recovering from different ailments such as:
            </p>
            <div className="grid md:grid-cols-2 gap-4">
              <ul className="text-muted-foreground space-y-2">
                <li>• Stress, Irritability, Anxiety, Depression</li>
                <li>• Traumas, Phobias, Grief and Hysteria</li>
                <li>• Obsessions and Compulsions</li>
                <li>• Relationship Healing</li>
              </ul>
              <ul className="text-muted-foreground space-y-2">
                <li>• Smoking, Alcohol and Drug Addiction</li>
                <li>• Mental Retardation, Dyslexia</li>
                <li>• Learning Disabilities</li>
              </ul>
            </div>
          </Card>

          <div className="grid md:grid-cols-2 gap-8">
            <Card className="p-8 shadow-gentle">
              <h3 className="text-2xl font-bold text-primary mb-4">Pranic Body Sculpting</h3>
              <p className="text-muted-foreground mb-4 leading-relaxed">Very effective in treating:</p>
              <ul className="text-muted-foreground space-y-2">
                <li>• Fat Belly and Over Weight</li>
                <li>• Breast Reduction and Augmentation</li>
                <li>• Food Addiction and Psychological Factors Resulting in Obesity</li>
              </ul>
            </Card>

            <Card className="p-8 shadow-gentle">
              <h3 className="text-2xl font-bold text-primary mb-4">Pranic Face Lift</h3>
              <p className="text-muted-foreground mb-4 leading-relaxed">Very effective in:</p>
              <ul className="text-muted-foreground space-y-2">
                <li>• Reducing the Signs of Aging</li>
                <li>• Rejuvenating the Face and Improving Facial Glow</li>
                <li>• Disintegrating Negative Energies</li>
                <li>• Healing Eyelid tuck, Chin tuck</li>
              </ul>
            </Card>
          </div>
        </div>

        {/* Benefits */}
        <h2 className="text-3xl font-bold text-primary mb-8 mt-16">Benefits of Pranic Healing</h2>
        
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <Card className="p-8 text-center shadow-gentle">
            <div className="w-16 h-16 bg-gradient-to-br from-primary to-primary-glow rounded-full mx-auto mb-6 flex items-center justify-center">
              <span className="text-2xl text-white">💫</span>
            </div>
            <h3 className="text-xl font-bold text-primary mb-4">Emotional Balance</h3>
            <p className="text-muted-foreground leading-relaxed">
              Helps reduce stress, irritability, anxiety, depression, and emotional trauma. Fosters inner peace.
            </p>
          </Card>

          <Card className="p-8 text-center shadow-gentle">
            <div className="w-16 h-16 bg-gradient-to-br from-healing-blue to-primary rounded-full mx-auto mb-6 flex items-center justify-center">
              <span className="text-2xl text-white">🧠</span>
            </div>
            <h3 className="text-xl font-bold text-primary mb-4">Mental Clarity</h3>
            <p className="text-muted-foreground leading-relaxed">
              Improves focus, concentration, decision-making, and mental peace. Aids in overcoming obsessions and compulsions.
            </p>
          </Card>

          <Card className="p-8 text-center shadow-gentle">
            <div className="w-16 h-16 bg-gradient-to-br from-gold to-primary rounded-full mx-auto mb-6 flex items-center justify-center">
              <span className="text-2xl text-white">⚡</span>
            </div>
            <h3 className="text-xl font-bold text-primary mb-4">Physical Healing</h3>
            <p className="text-muted-foreground leading-relaxed">
              Accelerates the body's natural healing processes for various physical ailments, promoting faster recovery.
            </p>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default About;