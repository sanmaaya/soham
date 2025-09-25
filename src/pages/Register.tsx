import Navigation from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Link } from "react-router-dom";

const Register = () => {
  const googleFormUrl = "https://docs.google.com/forms/d/e/1FAIpQLSeck3jTQJ3LbkcWB__okT5i1FKqKJAGrcA4_M4eqbqYcXnGwQ/viewform";

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <div className="min-h-[calc(100vh-80px)] flex items-center justify-center px-4 py-12">
        <Card className="w-full max-w-lg p-8 shadow-gentle text-center">
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-primary mb-2">Join Soham</h1>
            <p className="text-muted-foreground">Begin your journey in Pranic Healing</p>
            <p className="mt-4">
              Please click the button below to register through our official form.
            </p>
          </div>
          
          <Button 
            asChild
            className="w-full bg-gradient-to-r from-primary to-primary-glow hover:opacity-90"
          >
            <Link to={googleFormUrl} target="_blank" rel="noopener noreferrer">
              Register Now
            </Link>
          </Button>

          <div className="mt-6">
            <p className="text-xs text-muted-foreground">
              Questions? Contact us at 9567 846 343 | 9388 233 061
            </p>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default Register;