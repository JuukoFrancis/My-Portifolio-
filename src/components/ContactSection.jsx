import React from "react";
import {
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  Send,
  Twitch,
  Twitter,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { useState } from "react";
import { Address, contactIcons } from "../assets/assets";
import { toast } from "react-toastify";

const key = import.meta.env.VITE_EMAIL_KEY;

export const ContactSection = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  // console.log(key);
  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", key);

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult("");
      //   alert('Form Submitted Successfully');
      toast.success("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      //   alert(data.message);
      toast.error(data.message);
      setResult("");
    }
  };

  //   const handleSubmit = (e) => {
  //     e.preventDefault();

  //     setIsSubmitting(true);

  //     setTimeout(() => {
  //       toast({
  //         title: "Message sent!",
  //         description: "Thank you for your message. I'll get back to you soon.",
  //       });
  //       setIsSubmitting(false);
  //     }, 1500);
  //   };
  return (
    <section id="contact" className="py-24 px-4 relative bg-secondary/30">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Get In <span className="text-primary"> Touch</span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Have a project in mind or want to collaborate? Feel free to reach out.
          I'm always open to discussing new opportunities.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="space-y-8">
            <h3 className="text-2xl font-semibold mb-6">Contact Information</h3>

            <div className="space-y-6 justify-center">
              {Address.map((item, key) => (
                <div className="flex items-start space-x-4" key={key}>
                  <div className="p-3 rounded-full bg-primary/10">
                    {<item.icon className="h-6 w-6 text-primary" />}
                  </div>
                  <div>
                    <h4 className="font-medium"> {item.title}</h4>
                    <a
                      href="mailto:juukojuniorfrancis@gmail.com"
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      {item.detail}
                    </a>
                  </div>
                </div>
              ))}
            </div>

            <div className="pt-8">
              <h4 className="font-medium mb-4"> Connect With Me</h4>
              <div className="flex space-x-4 justify-center">
                {contactIcons.map((icon, key) => (
                  <a href="#" target="_blank" key={key}>
                    {<icon.icon />}
                  </a>
                ))}
              </div>
            </div>
          </div>

          <div
            className="bg-card p-8 rounded-lg shadow-xs"
            // onSubmit={handleSubmit}
          >
            <h3 className="text-2xl font-semibold mb-6"> Send a Message</h3>

            <form className="space-y-6" onSubmit={onSubmit}>
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium mb-2"
                >
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden foucs:ring-2 focus:ring-primary"
                  placeholder="Juuko Francis..."
                />
              </div>
              <div>
                <label
                  htmlFor="Phone number"
                  className="block text-sm font-medium mb-2"
                >
                  Your Name
                </label>
                <input
                  type="number"
                  id="name"
                  name="phone"
                  placeholder="Your phone number"
                  pattern="^(077|076|078|079|074|070|075)[0-9]{7}$"
                  title="Enter a valid 10-digit number starting with 077, 076, 078, 079, 074, 070, 03 ,02 ,or 075"
                  required
                  className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden foucs:ring-2 focus:ring-primary"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium mb-2"
                >
                  Your Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden foucs:ring-2 focus:ring-primary"
                  placeholder="Francis@gmail.com"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium mb-2"
                >
                  Your Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden foucs:ring-2 focus:ring-primary resize-none"
                  placeholder="Hello, I'd like to talk about..."
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className={cn(
                  "cosmic-button w-full flex items-center justify-center gap-2"
                )}
              >
                {isSubmitting ? "Sending..." : "Send Message"}
                <Send size={16} />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
