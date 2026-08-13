import { useGSAP } from "@gsap/react";
import AnimatedHeaderSection from "../components/AnimatedHeaderSection";
import Marquee from "../components/Marquee";
import { socials } from "../constants";
import gsap from "gsap";

const Contact = () => {
  const text = `Hiring for a frontend or full-stack role?
    Building a product that needs engineering and motion?
    Let's talk about the outcome you need.`;
  const items = [
    "available for select projects",
    "frontend engineering",
    "full-stack products",
    "motion with purpose",
    "let's build something useful",
  ];
  useGSAP(() => {
    gsap.from(".social-link", {
      y: 100,
      opacity: 0,
      delay: 0.5,
      duration: 1,
      stagger: 0.3,
      ease: "back.out",
      scrollTrigger: {
        trigger: ".social-link",
      },
    });
  }, []);
  return (
    <section
      id="contact"
      className="flex flex-col justify-between min-h-screen bg-black"
    >
      <div>
        <AnimatedHeaderSection
          subTitle={"Available for freelance and full-time opportunities"}
          title={"Contact"}
          text={text}
          textColor={"text-white"}
          withScrollTrigger={true}
        />
        <div className="flex px-10 font-light text-white uppercase lg:text-[32px] text-[26px] leading-none mb-10">
          <div className="flex flex-col w-full gap-10">
            <a
              className="social-link group"
              href="https://www.linkedin.com/in/abdelrhman-mounier-b62426369/"
              target="_blank"
              rel="noreferrer"
            >
              <h2>Start a conversation ↗</h2>
              <div className="w-full h-px my-2 bg-white/30" />
              <p className="text-xl normal-case md:text-2xl lg:text-3xl text-white/70 group-hover:text-white transition-colors">
                Message me on LinkedIn with your role, project, or challenge.
              </p>
            </a>
            <div className="social-link">
              <h2>Location</h2>
              <div className="w-full h-px my-2 bg-white/30" />
              <p className="text-xl capitalize md:text-2xl lg:text-3xl">
                Giza, Egypt
              </p>
            </div>
            <div className="social-link">
              <h2>Social Media</h2>
              <div className="w-full h-px my-2 bg-white/30" />
              <div className="flex flex-wrap gap-2">
                {socials.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noreferrer"
                    className="text-xs leading-loose tracking-widest uppercase md:text-sm hover:text-white/80 transition-colors duration-200"
                  >
                    {"{ "}
                    {social.name}
                    {" }"}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      <Marquee items={items} className="text-white bg-transparent" />
    </section>
  );
};

export default Contact;
