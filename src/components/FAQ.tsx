import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { motion } from "framer-motion";

const faqs = [
  {
  question: "What types of projects do you work on?",
  answer:
    "I build modern web applications and interactive websites. My projects include fitness platforms, movie discovery apps, productivity tools, and note-taking applications. I focus on creating responsive and user-friendly digital experiences.",
},
{
  question: "What technologies do you use?",
  answer:
    "I work primarily with modern JavaScript technologies such as React, Next.js, Tailwind CSS, and REST APIs. I also have experience with Python and continuously explore new technologies to improve my development skills.",
},
{
  question: "Can you build responsive websites?",
  answer:
    "Yes. I design and develop fully responsive websites that work seamlessly across desktops, tablets, and mobile devices, ensuring a smooth user experience on all screen sizes.",
},
{
  question: "Do you collaborate on projects?",
  answer:
    "Yes, I enjoy collaborating with other developers, designers, and teams. I’m open to contributing to projects, startups, and open-source initiatives where I can help build impactful products.",
},
{
  question: "Are you open to freelance or internship opportunities?",
  answer:
    "Yes. I am open to freelance projects, internships, and collaborative opportunities where I can apply my skills, learn from experienced developers, and contribute to building meaningful software solutions.",
},
{
  question: "How can someone contact you?",
  answer:
    "You can reach out through the contact form on this website or connect with me through my social media and GitHub profiles to discuss projects, collaborations, or opportunities.",
}
];

export default function FAQ() {
  return (
    <section className="py-24 bg-background-light/10 dark:bg-background-dark/10">
      <div className="container-pattern-aligned">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-display font-bold mb-16 text-center text-white space-mono-regular"
        >
          Got Questions? <span className="text-luxury-gold">We&apos;ve Got Answers.</span>
        </motion.h2>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="glass-card rounded-2xl border border-luxury-gold/20 hover:border-luxury-gold/40 px-6 transition-colors duration-300"
              >
                <AccordionTrigger className="hover:no-underline text-left">
                  <span className="text-white dark:text-white font-semibold group-hover:text-luxury-gold transition-colors duration-300">{faq.question}</span>
                </AccordionTrigger>
                <AccordionContent>
                  <p className="text-luxury-platinum/70 dark:text-luxury-platinum/70 leading-relaxed pt-2">{faq.answer}</p>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}