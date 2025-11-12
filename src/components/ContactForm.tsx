import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { z } from "zod";
import emailjs from "@emailjs/browser";

const contactSchema = z.object({
  name: z.string().trim().min(1, { message: "Name is required" }).max(100, { message: "Name must be less than 100 characters" }),
  email: z.string().trim().email({ message: "Invalid email address" }).max(255, { message: "Email must be less than 255 characters" }),
  message: z.string().trim().min(1, { message: "Message is required" }).max(1000, { message: "Message must be less than 1000 characters" }),
});

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      const validatedData = contactSchema.parse(formData);
      setIsSubmitting(true);
      
      // Send email using EmailJS
      // Replace these with your EmailJS service ID, template ID, and public key
      await emailjs.send(
        "service_zoyzys4",      // Your Service ID from EmailJS dashboard
        "template_vyopwcj",     // Your Template ID from EmailJS dashboard
        {
          from_name: validatedData.name,
          from_email: validatedData.email,
          message: validatedData.message,
          to_email: "varunrathore7067@gmail.com", // Your actual email address
        },
        "gRukYlsiZMT7QavJh"   // Your Public Key from EmailJS dashboard
      );
      
      toast({
        title: "Message Sent",
        description: "Thank you for your inquiry. We will get back to you soon.",
      });
      
      // Reset form
      setFormData({ name: "", email: "", message: "" });
      setErrors({});
    } catch (error) {
      if (error instanceof z.ZodError) {
        const newErrors: Record<string, string> = {};
        error.errors.forEach((err) => {
          if (err.path[0]) {
            newErrors[err.path[0].toString()] = err.message;
          }
        });
        setErrors(newErrors);
      } else {
        toast({
          title: "Error",
          description: "Failed to send message. Please try again later.",
          variant: "destructive",
        });
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    // Clear error when user starts typing
    if (errors[field]) {
      setErrors((prev) => {
        const newErrors = { ...prev };
        delete newErrors[field];
        return newErrors;
      });
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <Label htmlFor="name" className="text-sm font-medium">
          Name *
        </Label>
        <Input
          id="name"
          value={formData.name}
          onChange={(e) => handleChange("name", e.target.value)}
          className={`mt-1 ${errors.name ? "border-destructive" : ""}`}
          placeholder="Your full name"
        />
        {errors.name && (
          <p className="text-destructive text-sm mt-1">{errors.name}</p>
        )}
      </div>

      <div>
        <Label htmlFor="email" className="text-sm font-medium">
          Email *
        </Label>
        <Input
          id="email"
          type="email"
          value={formData.email}
          onChange={(e) => handleChange("email", e.target.value)}
          className={`mt-1 ${errors.email ? "border-destructive" : ""}`}
          placeholder="your.email@example.com"
        />
        {errors.email && (
          <p className="text-destructive text-sm mt-1">{errors.email}</p>
        )}
      </div>

      <div>
        <Label htmlFor="message" className="text-sm font-medium">
          Message *
        </Label>
        <Textarea
          id="message"
          value={formData.message}
          onChange={(e) => handleChange("message", e.target.value)}
          className={`mt-1 min-h-[120px] ${errors.message ? "border-destructive" : ""}`}
          placeholder="Please describe your inquiry..."
        />
        {errors.message && (
          <p className="text-destructive text-sm mt-1">{errors.message}</p>
        )}
      </div>

      <Button 
        type="submit" 
        className="w-full bg-accent hover:bg-accent/90"
        disabled={isSubmitting}
      >
        {isSubmitting ? "Sending..." : "Send Message"}
      </Button>
    </form>
  );
};

export default ContactForm;
