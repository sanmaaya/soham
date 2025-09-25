import Navigation from "@/components/Navigation";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const Courses = () => {
  const spiritualCourses = [
    { name: "Achieving Oneness with the Higher Soul", duration: "2 days" },
    { name: "Arhatic Yoga", duration: "2 days" },
    { name: "Om Mani Padme Hum", duration: "1 day" },
    { name: "Spiritual Essence of Man", duration: "1 day" },
    { name: "Arhatic Sexual Alchemy", duration: "1 day" },
    { name: "Master Choa Kok Sui Clairvoyance", duration: "2 days" },
    { name: "Universal and Kabbalistic Meditation on the Lord's Prayer", duration: "1 day" },
    { name: "Inner Teachings of Hinduism Revealed", duration: "1 day" },
    { name: "Inner Teachings of Christianity Revealed", duration: "1 day" },
    { name: "Inner Teachings of Buddhism Revealed", duration: "1 day" },
  ];

  const healingCourses = [
    { name: "Basic Pranic Healing", duration: "2 days" },
    { name: "Advanced Pranic Healing", duration: "2 days" },
    { name: "Pranic Psychotherapy", duration: "2 days" },
    { name: "Pranic Crystal Healing", duration: "1 day" },
    { name: "Pranic Facelift And Pranic Body Sculpting", duration: "2 days" },
    { name: "Pranic Psychic Self-Defence", duration: "1 day" },
    { name: "Super Brain Yoga", duration: "1 day" },
  ];

  const prosperityCourses = [
    { name: "Kriyashakti for Prosperity & Success", duration: "2 days" },
    { name: "Pranic Feng Shui", duration: "1 day" },
    { name: "Spiritual Business Management", duration: "1 day" },
  ];

  const CourseCard = ({ course, bgClass }: { course: { name: string; duration: string }, bgClass: string }) => (
    <Card className={`p-6 hover:shadow-lg transition-all duration-300 ${bgClass}`}>
      <h3 className="text-lg font-semibold text-primary mb-3 leading-tight">{course.name}</h3>
      <Badge variant="secondary" className="bg-primary/10 text-primary">
        Duration: {course.duration}
      </Badge>
    </Card>
  );

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <div className="max-w-6xl mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold text-center text-primary mb-4">Master Choa Kok Sui's Courses</h1>
        <p className="text-center text-muted-foreground mb-12 text-lg">
          Comprehensive training programs for spiritual development, healing mastery, and prosperity
        </p>

        {/* Spiritual Courses */}
        <section id="spiritual" className="mb-16">
          <div className="flex items-center mb-8">
            <div className="w-12 h-12 bg-gradient-to-br from-primary to-primary-glow rounded-full flex items-center justify-center mr-4">
              <span className="text-2xl text-white">🧘</span>
            </div>
            <h2 className="text-3xl font-bold text-primary">Spiritual Courses</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {spiritualCourses.map((course, index) => (
              <CourseCard 
                key={index} 
                course={course} 
                bgClass="border-primary/20 hover:border-primary/40" 
              />
            ))}
          </div>
        </section>

        {/* Healing Courses */}
        <section id="healing" className="mb-16">
          <div className="flex items-center mb-8">
            <div className="w-12 h-12 bg-gradient-to-br from-healing-blue to-primary rounded-full flex items-center justify-center mr-4">
              <span className="text-2xl text-white">✋</span>
            </div>
            <h2 className="text-3xl font-bold text-primary">Healing Courses</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {healingCourses.map((course, index) => (
              <CourseCard 
                key={index} 
                course={course} 
                bgClass="border-healing-blue/20 hover:border-healing-blue/40" 
              />
            ))}
          </div>
        </section>

        {/* Prosperity Courses */}
        <section id="prosperity">
          <div className="flex items-center mb-8">
            <div className="w-12 h-12 bg-gradient-to-br from-gold to-primary rounded-full flex items-center justify-center mr-4">
              <span className="text-2xl text-white">💰</span>
            </div>
            <h2 className="text-3xl font-bold text-primary">Prosperity Courses</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {prosperityCourses.map((course, index) => (
              <CourseCard 
                key={index} 
                course={course} 
                bgClass="border-gold/20 hover:border-gold/40" 
              />
            ))}
          </div>
        </section>

        {/* Contact Information */}
        <div className="mt-16 text-center">
          <Card className="p-8 bg-gradient-to-br from-primary/5 to-healing-blue/5">
            <h3 className="text-2xl font-bold text-primary mb-4">Ready to Begin Your Journey?</h3>
            <p className="text-lg text-muted-foreground mb-6">
              Contact us to learn more about course schedules and enrollment
            </p>
            <div className="text-lg font-semibold text-primary">
              Contact: 9567 846 343 | 9388 233 061
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Courses;