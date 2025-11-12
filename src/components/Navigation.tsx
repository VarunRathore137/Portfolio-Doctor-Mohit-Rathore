import { Stethoscope } from "lucide-react";

const Navigation = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 shadow-soft">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          <button
            onClick={() => scrollToSection("hero")}
            className="flex items-center gap-2 font-semibold text-lg text-primary hover:text-accent transition-smooth"
          >
            <Stethoscope className="w-5 h-5" />
            <span>Dr. Mohit Rathore, MBBS, MD</span>
          </button>

          <nav className="hidden md:flex items-center gap-8">
            <button
              onClick={() => scrollToSection("hero")}
              className="text-sm font-medium text-foreground hover:text-accent transition-smooth"
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection("biography")}
              className="text-sm font-medium text-foreground hover:text-accent transition-smooth"
            >
              Biography
            </button>
            <button
              onClick={() => scrollToSection("clinical-focus")}
              className="text-sm font-medium text-foreground hover:text-accent transition-smooth"
            >
              Clinical Focus
            </button>
            <button
              onClick={() => scrollToSection("education")}
              className="text-sm font-medium text-foreground hover:text-accent transition-smooth"
            >
              Education & Internship
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="text-sm font-medium text-foreground hover:text-accent transition-smooth"
            >
              Contact
            </button>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Navigation;
