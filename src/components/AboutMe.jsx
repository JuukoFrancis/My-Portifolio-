import { Briefcase, Code, User } from "lucide-react";
import { IoPersonSharp } from "react-icons/io5";
import { AboutSkills, clientReviews } from "../assets/assets";
import React, { useEffect, useState } from "react";
import { BsChatQuote } from "react-icons/bs";
import { HiChevronLeft, HiChevronRight, HiStar } from "react-icons/hi";
import { toast } from "react-toastify";

const AboutMe = () => {
  const [showCard, setShowCard] = useState(0);
  const [numCards, setNumCards] = useState(1);

  const prev = () => {
    if (window.innerWidth >= 1024) {
      setShowCard((cur) => (cur === 0 ? clientReviews.length - 2 : cur - 1));
    } else {
      setShowCard((cur) => (cur === 0 ? clientReviews.length - 1 : cur - 1));
    }
  };
  const next = () => {
    if (window.innerWidth >= 1024) {
      setShowCard((cur) => (cur === clientReviews.length - 2 ? 0 : cur + 1));
    } else {
      setShowCard((cur) => (cur === clientReviews.length - 1 ? 0 : cur + 1));
    }
  };

  useEffect(() => {
    const slideInterval = setInterval(next, 3000);

    return () => {
      clearInterval(slideInterval);
    };
  }, [showCard]);

  const handleDownload = () => {
    toast.success("Resume download completed successfully");
  };

  return (
    <>
      {/* About Me */}
      <section id="#about" className="py-24 px-4 relative">
        <div className="container mx-auto max-w-5xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-10 text-center">
            About <span className="text-primary">Me</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div>
                {" "}
                <img
                  src={"/resized_image.png"}
                  alt={""}
                  className="md:w-65 md:h-65 w-45 h-45 mx-auto mb-4"
                />
                {/* <IoPersonSharp className="inline-block w-50 h-40 text-primary" /> */}
              </div>
              <h3 className="text-2xl font-semibold">
                Passionate Full Stack Developer (Backend-Focused)
              </h3>

              <p className="text-muted-foreground">
                I’m a passionate Full Stack Developer with a strong focus on
                back-end development and database design. I build powerful,
                scalable web applications using modern technologies.
              </p>

              <p className="text-muted-foreground">
                I create secure, efficient systems that seamlessly connect to
                clean, intuitive user interfaces, and I continuously learn and
                adapt to stay ahead in the evolving web ecosystem.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
                <a href="#contact" className="cosmic-button">
                  Get In Touch
                </a>

                <a
                  href="Resume_referenced_final_1.pdf"
                  download="Juuko_Francis_Backend_Developer_CV.pdf"
                  onClick={handleDownload}
                  className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300"
                >
                  Download CV
                </a>
              </div>
            </div>

            {/* grid two */}
            <div className="grid grid-cols-1 gap-6">
              {AboutSkills.map((skill, index) => (
                <div className="gradient-border p-6 card-hover" key={index}>
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-full bg-primary/10">
                      {<skill.icon className="h-6 w-6 text-primary" />}
                    </div>
                    <div className="text-left">
                      <h4 className="font-semibold text-lg"> {skill.title}</h4>
                      <p className="text-muted-foreground">{skill.valuetext}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* REviews from Clients  */}
      <section id="#about" className="py-24 px-4 relative">
        <div className="container mx-auto max-w-5xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-10 text-center">
            Client <span className="text-primary">Reviews</span>
          </h2>
        </div>

        {/*                      */}
        {/* Client Reviews */}
        <div className="flex gap-2 justify-end">
          <HiChevronLeft
            onClick={prev}
            className="inline-block w-10 md:h-12 h-10 text-primary rounded p-1 font-semibold "
          />
          <HiChevronRight
            onClick={next}
            className="inline-block w-10 md:h-12 h-10 text-primary rounded p-1"
          />
        </div>

        <div className="container overflow-hidden w-full shrink-0 gap-6 mt-5 text-center p-4">
          <div className="flex gap-4">
            {clientReviews.map((testimony, index) => (
              <div
                key={index}
                className="flex flex-col gap-2 w-full md:max-w-1/2 shrink-0  transition-transform duration-500 ease-in-out  shadow rounded-xl px-4 py-6"
                style={{
                  transform: `translateX(-${
                    showCard >= 3
                      ? showCard * 105
                      : showCard >= 6
                      ? showCard * 110
                      : showCard * 100
                  }%)`,
                }}
              >
                <BsChatQuote className="inline-block text-center mx-auto sm:w-8 sm:h-8  w-7 h-7  text-primary" />
                <h2 className="text-xl text-muted-foreground font-medium md:text-2xl">
                  {testimony.clientName}
                </h2>
                <p className="text-muted-foreground mb-4 text-sm md:text-md">
                  {testimony.title}
                </p>
                <div className="flex gap-2 mx-auto">
                  {Array.from({ length: testimony.rating }, (_, index) => (
                    <HiStar
                      key={index}
                      className="inline-block text-primary w-5 h-5"
                    />
                  ))}
                </div>
                <p className="text-muted-foreground/80">
                  {testimony.clientText}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutMe;
