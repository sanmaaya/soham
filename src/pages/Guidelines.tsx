import Navigation from "@/components/Navigation";
import { Card } from "@/components/ui/card";
import { Alert, AlertDescription } from "@/components/ui/alert";

const Guidelines = () => {
  const guidelines = [
    "Pranic Healing is not intended to replace allopathic medicine, but rather to complement it.",
    "If symptoms persist or the ailment is severe, please immediately consult a medical doctor and a Certified Pranic Healer.",
    "Pranic Healers are not medical doctors, but medical doctors can be Pranic Healers.",
    "Pranic Healers should not make medical diagnosis.",
    "Pranic Healers should not prescribe medications and/or medical treatments.",
    "Pranic Healers should not interfere with the prescribed medications and/or with medical treatments.",
    "These Pranic Healing Guidelines must be posted in all Pranic Healing Centers."
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <div className="max-w-4xl mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold text-center text-primary mb-12">Pranic Healing Guidelines</h1>
        
        <Alert className="mb-8 border-primary/20 bg-primary/5">
          <AlertDescription className="text-lg">
            <strong>Important:</strong> These guidelines ensure the safe and ethical practice of Pranic Healing while respecting conventional medical care.
          </AlertDescription>
        </Alert>

        <Card className="p-8 mb-8 shadow-gentle">
          <div className="space-y-6">
            {guidelines.map((guideline, index) => (
              <div key={index} className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-gradient-to-br from-primary to-primary-glow rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-white font-bold text-sm">{index + 1}</span>
                </div>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  {guideline}
                </p>
              </div>
            ))}
          </div>
        </Card>

        <Card className="p-8 bg-gradient-to-br from-primary/5 to-healing-blue/5 border-primary/20">
          <div className="text-center">
            <h3 className="text-2xl font-bold text-primary mb-4">
              Master Choa Kok Sui, Founder of Modern Pranic Healing
            </h3>
            <p className="text-lg text-muted-foreground">
              12th January 2006
            </p>
          </div>
        </Card>

        <div className="mt-12">
          <Card className="p-6 bg-muted/30">
            <p className="text-center text-muted-foreground">
              <strong>Note:</strong> All Pranic Healing practitioners must adhere to these guidelines to ensure 
              ethical and safe healing practices that complement modern medical care.
            </p>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Guidelines;