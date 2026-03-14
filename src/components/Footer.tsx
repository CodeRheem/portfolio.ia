import { motion, useInView } from "framer-motion";
import { Twitter, Instagram, Linkedin, Github, Loader2, CheckCircle2, AlertCircle } from "lucide-react";
import { useRef, useState, type FormEvent, useEffect } from "react";
import emailjs from "@emailjs/browser";

export default function Footer() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [focusedField, setFocusedField] = useState<string | null>(null);
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  // Initialize EmailJS
  useEffect(() => {
    // Replace with your EmailJS public key from https://dashboard.emailjs.com/
    emailjs.init("HGBjNK631nawDiH19");
  }, []);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus("idle");
    setErrorMessage("");

    try {
      // Replace with your EmailJS credentials
      await emailjs.send(
        "service_onz8zu2", // Service ID from EmailJS
        "template_tp7rvp7", // Template ID from EmailJS
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
          to_email: "ibraheemabdulrahman305@gmail.com", // Your email address
        }
      );

      setSubmitStatus("success");
      setFormData({ name: "", email: "", message: "" });
      setTimeout(() => setSubmitStatus("idle"), 5000);
    } catch (error) {
      setSubmitStatus("error");
      setErrorMessage(
        error instanceof Error
          ? error.message
          : "Failed to send message. Please try again."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <>
      {/* ── Contact Section ── */}
      <section id="contact" className="py-24 bg-background-light/10 dark:bg-background-dark/10">
        <div className="container-pattern-aligned">
          <motion.div
            ref={ref}
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center"
          >
            {/* Left — heading + socials */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-5xl md:text-7xl font-display font-bold leading-none mb-8 tracking-tight text-white space-mono-regular">
                LET&apos;S WORK <br />
                <span className="text-luxury-gold">TOGETHER.</span>
              </h2>
              <p className="text-xl text-luxury-platinum/60 mb-12 max-w-md">
                Have a project in mind? Let&apos;s turn your idea into a digital reality. Reach out and I&apos;ll get back to you within 24 hours.
              </p>

              <div className="flex gap-4">
                {[
                  { href: "https://github.com/CodeRheem", icon: Github, label: "GitHub" },
                  { href: "https://x.com/CodeRheem", icon: Twitter, label: "X (Twitter)" },
                  { href: "https://www.instagram.com/coderheem_dev", icon: Instagram, label: "Instagram" },
                  { href: "https://www.linkedin.com/in/abdulrahman-ibraheem-42522b321", icon: Linkedin, label: "LinkedIn" },
                ].map((social, index) => (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    whileTap={{ scale: 0.9 }}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="w-14 h-14 rounded-full border border-white/15 flex items-center justify-center text-luxury-platinum/60 hover:bg-luxury-gold hover:border-luxury-gold hover:text-black transition-all duration-300 group"
                    aria-label={social.label}
                  >
                    <social.icon className="w-5 h-5 fill-current group-hover:scale-110 transition-transform" />
                  </motion.a>
                ))}
              </div>
            </motion.div>

            {/* Right — contact form */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="bg-luxury-gold-250 p-8 md:p-10 rounded-3xl shadow-2xl relative"
            >
              {/* Gold glow border */}
              <motion.div
                animate={{ opacity: [0.15, 0.3, 0.15] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -inset-[1px] bg-gradient-to-r from-luxury-gold to-luxury-bronze rounded-3xl blur -z-10"
              />

              <form onSubmit={handleSubmit} className="space-y-6">
                {[
                  { id: "name",  name: "name",  label: "Name",          placeholder: "John Doe",          type: "text"  },
                  { id: "email", name: "email", label: "Email address", placeholder: "john@example.com",  type: "email" },
                ].map((field, index) => (
                  <motion.div
                    key={field.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <label
                      className={`block text-sm font-semibold mb-2 transition-colors ${
                        focusedField === field.id ? "text-luxury-gold" : "text-luxury-platinum/60"
                      }`}
                    >
                      {field.label}
                    </label>
                    <motion.input
                      type={field.type}
                      name={field.name}
                      value={formData[field.name as keyof typeof formData]}
                      onChange={handleChange}
                      onFocus={() => setFocusedField(field.id)}
                      onBlur={() => setFocusedField(null)}
                      whileFocus={{ scale: 1.02 }}
                      required
                      disabled={isSubmitting}
                      placeholder={field.placeholder}
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-4 text-white placeholder:text-white/25 focus:outline-none focus:border-luxury-gold focus:ring-2 focus:ring-luxury-gold/30 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                    />
                  </motion.div>
                ))}

                {/* Message */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 }}
                >
                  <label
                    className={`block text-sm font-semibold mb-2 transition-colors ${
                      focusedField === "message" ? "text-luxury-gold" : "text-luxury-platinum/60"
                    }`}
                  >
                    Tell me about your project
                  </label>
                  <motion.textarea
                    rows={4}
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    onFocus={() => setFocusedField("message")}
                    onBlur={() => setFocusedField(null)}
                    whileFocus={{ scale: 1.02 }}
                    required
                    disabled={isSubmitting}
                    placeholder="I need a new website for..."
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-4 text-white placeholder:text-white/25 focus:outline-none focus:border-luxury-gold focus:ring-2 focus:ring-luxury-gold/30 transition-all duration-300 resize-none disabled:opacity-50 disabled:cursor-not-allowed"
                  />
                </motion.div>

                {/* Success / error states */}
                {submitStatus === "success" && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="flex items-center gap-2 text-green-400 bg-green-500/10 border border-green-500/20 rounded-xl p-3"
                  >
                    <CheckCircle2 className="w-5 h-5 shrink-0" />
                    <span className="text-sm font-medium">Message sent! I&apos;ll get back to you soon.</span>
                  </motion.div>
                )}

                {submitStatus === "error" && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="flex items-center gap-2 text-red-400 bg-red-500/10 border border-red-500/20 rounded-xl p-3"
                  >
                    <AlertCircle className="w-5 h-5 shrink-0" />
                    <span className="text-sm font-medium">{errorMessage}</span>
                  </motion.div>
                )}

                {/* Submit button */}
                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  whileHover={!isSubmitting ? { scale: 1.02 } : {}}
                  whileTap={!isSubmitting ? { scale: 0.98 } : {}}
                  className="relative w-full bg-luxury-gold text-black font-bold py-4 rounded-xl overflow-hidden group disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <motion.span
                    className="absolute inset-0 bg-gradient-to-r from-yellow-300 to-luxury-gold opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    initial={false}
                  />
                  <span className="relative z-10 flex items-center justify-center gap-2">
                    {isSubmitting ? (
                      <>
                        <Loader2 className="w-5 h-5 animate-spin" />
                        Sending...
                      </>
                    ) : (
                      "Send Message"
                    )}
                  </span>
                  {!isSubmitting && (
                    <motion.span
                      className="absolute inset-0 bg-white/20 rounded-full"
                      initial={{ scale: 0, opacity: 1 }}
                      whileTap={{ scale: 4, opacity: 0 }}
                      transition={{ duration: 0.6 }}
                    />
                  )}
                </motion.button>
              </form>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ── Footer ── */}
      <motion.footer
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="py-12 border-t border-white/10 mt-20"
      >
        <div className="container-pattern-aligned">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="font-display font-bold text-2xl tracking-wider text-white"
            >
              CODERHEEM<span className="text-luxury-gold">.</span>
            </motion.div>

            <div className="flex gap-8 text-sm font-medium text-luxury-platinum/60">
              {["Home", "About", "Portfolio", "Services", "Contact"].map((link, index) => (
                <motion.a
                  key={link}
                  href={`#${link.toLowerCase()}`}
                  whileHover={{ scale: 1.1, color: "#eab308" }}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  className="hover:text-luxury-gold transition-colors"
                >
                  {link}
                </motion.a>
              ))}
            </div>

            <p className="text-sm text-luxury-platinum/40">
              © 2025 Abdul-Rahman Ibraheem. All rights reserved.
            </p>
          </div>
        </div>
      </motion.footer>
    </>
  );
}