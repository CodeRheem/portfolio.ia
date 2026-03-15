import emailjs from "@emailjs/browser";

// Initialize EmailJS only once
export const initializeEmailJS = () => {
  emailjs.init("HGBjNK631nawDiH19");
};

export const sendContactEmail = async (name: string, email: string, message: string) => {
  return await emailjs.send(
    "service_onz8zu2",
    "template_tp7rvp7",
    {
      from_name: name,
      from_email: email,
      message: message,
      to_email: "ibraheemabdulrahman305@gmail.com",
    }
  );
};
