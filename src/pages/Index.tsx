import { Activity, Award, BookOpen, Brain, Heart, Mail, MapPin, Phone, Shield, Stethoscope, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Navigation from "@/components/Navigation";
import ContactForm from "@/components/ContactForm";
// Use public folder paths (no import needed, just strings)
const doctorPortrait = "/assets/Doctor1.jpg";
const degreeCeremony = "/assets/Degree.jpg";
const ruralHealth = "/assets/Rural.jpg"; // or keep the placeholder URL if you don't have this image
const Index = () => {
  const clinicalFocus = [
    {
      icon: Heart,
      title: "Preventative Medicine",
      description: "Emphasizing wellness and early intervention to maintain optimal health and prevent disease progression.",
    },
    {
      icon: Activity,
      title: "Acute Care",
      description: "Comprehensive assessment and treatment of urgent medical conditions with evidence-based protocols.",
    },
    {
      icon: Users,
      title: "Patient Education",
      description: "Empowering patients through clear communication and education about their health conditions.",
    },
    {
      icon: Shield,
      title: "Community Health",
      description: "Committed to improving public health outcomes through accessible, quality medical care.",
    },
    {
      icon: Brain,
      title: "Holistic Approach",
      description: "Addressing physical, mental, and social factors to provide comprehensive patient care.",
    },
    {
      icon: Stethoscope,
      title: "Evidence-Based Practice",
      description: "Utilizing the latest medical research and clinical guidelines to inform treatment decisions.",
    },
  ];

  const philosophy = [
    {
      icon: Heart,
      title: "Empathy First",
      description: "Every patient deserves compassionate, personalized care that respects their unique circumstances.",
    },
    {
      icon: Shield,
      title: "Preventive Focus",
      description: "Proactive health management and early intervention are key to long-term wellness.",
    },
    {
      icon: BookOpen,
      title: "Patient Education",
      description: "Informed patients are empowered to make better decisions about their health and treatment.",
    },
  ];

  const scrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section id="hero" className="py-20 md:py-32 bg-gradient-to-br from-gray-light via-background to-white-pure">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            {/* Text Content */}
            <div className="space-y-6 animate-fade-in">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-accent/10 rounded-full text-accent font-medium">
                <Stethoscope className="w-4 h-4" />
                <span className="text-sm">Civil Hospital Ujjain</span>
              </div>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary leading-tight">
                Dr. Mohit Rathore, MBBS
              </h1>
              
              <p className="text-xl md:text-2xl text-muted-foreground font-medium">
                General Physician
              </p>
              
              <p className="text-lg text-foreground leading-relaxed">
                Committed to community health and compassionate, modern care. 
                Dedicated to providing evidence-based medical treatment with a patient-centered approach.
              </p>
              
              <Button 
                onClick={scrollToContact}
                size="lg"
                className="bg-accent hover:bg-accent/90 text-white shadow-medium hover:shadow-hover transition-smooth"
              >
                Contact Hospital for Consultation
              </Button>
            </div>

            {/* Professional Image */}
            <div className="relative">
              <div className="aspect-[3/4] bg-gradient-to-br from-primary/5 to-accent/5 rounded-2xl shadow-medium overflow-hidden">
                <img 
                  src={doctorPortrait} 
                  alt="Dr. Mohit Rathore" 
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-accent/10 rounded-full -z-10" />
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-primary/10 rounded-full -z-10" />
            </div>
          </div>
        </div>
      </section>

      {/* Biography/Philosophy Section */}
      <section id="biography" className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">About Me</h2>
              <div className="w-24 h-1 bg-accent mx-auto mb-6" />
            </div>

            <div className="max-w-3xl mx-auto mb-12">
              <Card className="p-8 shadow-soft border-l-4 border-l-accent">
                <p className="text-lg text-foreground leading-relaxed">
                  As a newly qualified physician, I bring fresh perspectives combined with rigorous 
                  medical training from Amaltas Institute of Medical Science to deliver compassionate, 
                  evidence-based care. My approach to medicine is rooted in the belief that every patient 
                  deserves attentive, personalized treatment that addresses not just symptoms, but the whole 
                  person. Through my internship at Sanskar Hospital and commitment to rural health programs, 
                  I am passionate about building lasting relationships with my patients and serving the community 
                  through accessible, quality healthcare.
                </p>
              </Card>
            </div>

            {/* Medical Philosophy */}
            <div>
              <h3 className="text-2xl font-bold text-primary text-center mb-8">Medical Philosophy</h3>
              <div className="grid md:grid-cols-3 gap-6">
                {philosophy.map((item, index) => (
                  <Card
                    key={index}
                    className="p-6 shadow-soft hover:shadow-hover transition-smooth"
                  >
                    <div className="flex flex-col items-center text-center space-y-4">
                      <div className="p-4 bg-accent/10 rounded-full">
                        <item.icon className="w-8 h-8 text-accent" />
                      </div>
                      <h4 className="font-semibold text-lg text-primary">{item.title}</h4>
                      <p className="text-muted-foreground leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Clinical Focus & Skills Section */}
      <section id="clinical-focus" className="py-20 bg-gray-light">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Clinical Focus & Skills</h2>
              <div className="w-24 h-1 bg-accent mx-auto mb-6" />
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                My training has provided a strong foundation in the following areas
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {clinicalFocus.map((item, index) => (
                <Card
                  key={index}
                  className="p-6 bg-background hover:shadow-hover transition-smooth hover:-translate-y-1 border-t-4 border-t-accent"
                >
                  <div className="flex flex-col space-y-4">
                    <div className="inline-flex items-center justify-center w-12 h-12 bg-accent/10 rounded-lg">
                      <item.icon className="w-6 h-6 text-accent" />
                    </div>
                    <h3 className="font-semibold text-lg text-primary">{item.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Education & Internship Timeline */}
      <section id="education" className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
                Education & Foundational Experience
              </h2>
              <div className="w-24 h-1 bg-accent mx-auto mb-6" />
            </div>

            <div className="relative">
              {/* Timeline Line */}
              <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-border -translate-x-1/2 md:-translate-x-0" />

              {/* Timeline Items */}
              <div className="space-y-12">
                {/* Current MD Position */}
                <div className="relative">
                  <div className="flex flex-col md:flex-row gap-8">
                    <div className="md:w-1/2 md:text-right md:pr-12 pl-12 md:pl-0">
                      <div className="inline-block px-4 py-2 bg-accent text-white rounded-lg font-semibold mb-2">
                        2025 - Present
                      </div>
                      <h3 className="text-xl font-bold text-primary mb-2">Medical Officer </h3>
                      <p className="text-foreground font-medium mb-2">Civil Hospital Ujjain, Madhya Pradesh</p>
                      <p className="text-muted-foreground">
                        Currently serving as a General Physician at Civil Hospital Ujjain, providing 
                        comprehensive medical care to patients. Committed to delivering evidence-based 
                        treatment and maintaining the highest standards of patient care in a community 
                        healthcare setting.
                      </p>
                    </div>
                    <div className="absolute left-4 top-0 w-4 h-4 bg-accent rounded-full border-4 border-background md:left-1/2 md:-translate-x-1/2 -translate-x-1/2" />
                    <div className="md:w-1/2 md:pl-12" />
                  </div>
                </div>

                {/* Medical Internship */}
                <div className="relative">
                  <div className="flex flex-col md:flex-row gap-8">
                    <div className="md:w-1/2 md:pr-12" />
                    <div className="absolute left-4 top-0 w-4 h-4 bg-primary rounded-full border-4 border-background md:left-1/2 md:-translate-x-1/2 -translate-x-1/2" />
                    <div className="md:w-1/2 md:pl-12 pl-12">
                      <div className="inline-block px-4 py-2 bg-primary text-white rounded-lg font-semibold mb-2">
                        2024 - 2025
                      </div>
                      <h3 className="text-xl font-bold text-primary mb-2">Medical Internship</h3>
                      <p className="text-foreground font-medium mb-2">Amaltas Hospital, Dewas, Madhya Pradesh</p>
                      <p className="text-muted-foreground">
                        Completed comprehensive clinical internship, gaining hands-on experience 
                        across multiple departments including emergency medicine, internal medicine, surgery, 
                        and outpatient care. Developed practical skills in patient assessment, diagnosis, 
                        and treatment under experienced supervision.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Board Certification */}
                <div className="relative">
                  <div className="flex flex-col md:flex-row gap-8">
                    <div className="md:w-1/2 md:text-right md:pr-12 pl-12 md:pl-0">
                      <div className="inline-block px-4 py-2 bg-accent text-white rounded-lg font-semibold mb-2">
                        2024
                      </div>
                      <h3 className="text-xl font-bold text-primary mb-2">Board Certification</h3>
                      <p className="text-foreground font-medium mb-2">Medical Council Registered</p>
                      <p className="text-muted-foreground">
                        Successfully completed all requirements for medical licensure and obtained 
                        board certification, authorized to practice medicine independently.
                      </p>
                    </div>
                    <div className="absolute left-4 top-0 w-4 h-4 bg-accent rounded-full border-4 border-background md:left-1/2 md:-translate-x-1/2 -translate-x-1/2" />
                    <div className="md:w-1/2 md:pl-12" />
                  </div>
                </div>

                {/* Medical School */}
                <div className="relative">
                  <div className="flex flex-col md:flex-row gap-8">
                    <div className="md:w-1/2 md:pr-12" />
                    <div className="absolute left-4 top-0 w-4 h-4 bg-primary rounded-full border-4 border-background md:left-1/2 md:-translate-x-1/2 -translate-x-1/2" />
                    <div className="md:w-1/2 md:pl-12 pl-12">
                      <div className="inline-block px-4 py-2 bg-primary text-white rounded-lg font-semibold mb-2">
                        2019 - 2025
                      </div>
                      <h3 className="text-xl font-bold text-primary mb-2">M.B.B.S. Degree</h3>
                      <p className="text-foreground font-medium mb-2">Amaltas Institute of Medical Science, Dewas</p>
                      <p className="text-muted-foreground">
                        Completed comprehensive medical education covering all fundamental medical sciences 
                        and clinical disciplines. Graduated with strong academic performance and practical 
                        clinical skills, prepared for professional medical practice.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Community Engagement & Experience */}
      <section id="community" className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
                Community Engagement & Field Experience
              </h2>
              <div className="w-24 h-1 bg-accent mx-auto mb-6" />
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                Committed to serving communities through rural health programs and accessible medical care
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
              {/* Degree Achievement */}
              <Card className="overflow-hidden shadow-medium hover:shadow-hover transition-smooth">
                <div className="aspect-video overflow-hidden">
                  <img 
                    src={degreeCeremony} 
                    alt="Medical Degree Ceremony" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <Award className="w-5 h-5 text-accent" />
                    <h3 className="text-xl font-bold text-primary">MBBS Graduation</h3>
                  </div>
                  <p className="text-muted-foreground leading-relaxed">
                    Completed comprehensive medical education at Amaltas Institute of Medical Science, 
                    equipped with strong foundation in medical sciences and clinical practice.
                  </p>
                </div>
              </Card>

              {/* Rural Health Programs */}
              <Card className="overflow-hidden shadow-medium hover:shadow-hover transition-smooth">
                <div className="aspect-video overflow-hidden">
                  <img 
                    src={ruralHealth} 
                    alt="Rural Health Programs" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <Users className="w-5 h-5 text-accent" />
                    <h3 className="text-xl font-bold text-primary">Rural Health Initiatives</h3>
                  </div>
                  <p className="text-muted-foreground leading-relaxed">
                    Actively participated in rural immersion programs and community health placements, 
                    providing medical care to underserved communities and promoting health awareness.
                  </p>
                </div>
              </Card>
            </div>

            {/* Key Experiences */}
            <div className="grid md:grid-cols-3 gap-6">
              <Card className="p-6 text-center shadow-soft hover:shadow-hover transition-smooth border-t-4 border-t-accent">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-accent/10 rounded-full mb-4">
                  <Heart className="w-6 h-6 text-accent" />
                </div>
                <h4 className="font-semibold text-lg text-primary mb-2">Community Outreach</h4>
                <p className="text-muted-foreground text-sm">
                  Conducted health camps and medical screenings in rural areas
                </p>
              </Card>

              <Card className="p-6 text-center shadow-soft hover:shadow-hover transition-smooth border-t-4 border-t-accent">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-accent/10 rounded-full mb-4">
                  <BookOpen className="w-6 h-6 text-accent" />
                </div>
                <h4 className="font-semibold text-lg text-primary mb-2">Health Education</h4>
                <p className="text-muted-foreground text-sm">
                  Educated communities on preventive healthcare and disease awareness
                </p>
              </Card>

              <Card className="p-6 text-center shadow-soft hover:shadow-hover transition-smooth border-t-4 border-t-accent">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-accent/10 rounded-full mb-4">
                  <Shield className="w-6 h-6 text-accent" />
                </div>
                <h4 className="font-semibold text-lg text-primary mb-2">Public Health</h4>
                <p className="text-muted-foreground text-sm">
                  Contributed to public health initiatives and immunization programs
                </p>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Contact & Hospital Information */}
      <section id="contact" className="py-20 bg-gray-light">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
                Consultation & Contact Information
              </h2>
              <div className="w-24 h-1 bg-accent mx-auto mb-6" />
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {/* Hospital Information */}
              <Card className="p-8 shadow-medium bg-background">
                <h3 className="text-xl font-bold text-primary mb-6">Civil Hospital Ujjain</h3>
                
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <MapPin className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-semibold mb-1">Address</h4>
                      <p className="text-muted-foreground">
                        Civil Hospital Ujjain<br />
                        University Road, Ujjain<br />
                        Madhya Pradesh, India
                      </p>
                      <a 
                        href="https://maps.google.com/?q=Civil+Hospital+Ujjain" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-accent hover:underline text-sm mt-2 inline-block"
                      >
                        View on Google Maps →
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <Phone className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-semibold mb-1">Hospital Contact</h4>
                      <p className="text-muted-foreground">
                        +91 9893021525
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <Activity className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-semibold mb-1">Consultation Timings</h4>
                      <p className="text-muted-foreground">
                        Monday - Friday: 9:00 AM - 5:00 PM<br />
                        Emergency Ward and Outpatient Department (OPD) 
                      </p>
                    </div>
                  </div>

                  <div className="p-4 bg-accent/10 rounded-lg border border-accent/20">
                    <p className="text-sm text-foreground">
                      <strong>Note:</strong> Consultations are provided at the hospital. 
                      Please contact the hospital directly or visit the Emergency Ward and Outpatient Department (OPD) during the timings above.
                    </p>
                  </div>
                </div>
              </Card>

              {/* Professional Inquiries Form */}
              <Card className="p-8 shadow-medium bg-background">
                <h3 className="text-xl font-bold text-primary mb-2">
                  Professional & Referral Inquiries Only
                </h3>
                <p className="text-sm text-muted-foreground mb-6">
                  For professional inquiries, referrals, or collaboration opportunities, please use the form below.
                </p>
                
                <ContactForm />

                <div className="mt-6 pt-6 border-t">
                  <div className="flex items-center gap-4 justify-center">
                    <a 
                      href="mailto:varunrathore7067@gmail.com"
                      className="inline-flex items-center gap-2 text-accent hover:underline"
                    >
                      <Mail className="w-4 h-4" />
                      <span className="text-sm">varunrathore7067@gmail.com</span>
                    </a>
                    
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-primary py-8 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-6">
              <div className="inline-flex items-center gap-2 mb-4">
                <Stethoscope className="w-6 h-6" />
                <span className="font-semibold text-lg">Dr. Mohit Rathore, MBBS</span>
              </div>
              <p className="text-white/80">Civil Hospital Ujjain</p>
            </div>
            
            <div className="text-center text-sm text-white/70 space-y-2 mb-6 max-w-3xl mx-auto">
              <p className="leading-relaxed">
                <strong className="text-white">Medical Disclaimer:</strong> The information on this website is for informational purposes only 
                and does not substitute hospital protocol or direct medical advice. For medical emergencies, please go 
                to your nearest hospital or call emergency services immediately.
              </p>
            </div>

            <div className="text-center text-sm text-white/70">
              <p>© {new Date().getFullYear()} Dr. Mohit Rathore. All rights reserved.</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
