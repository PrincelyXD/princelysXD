import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import SectionHeader from "../../components/SectionHeader";
import ContactExperience from "./hero-models/ContactExperience";
import FormSuccess from "../../components/FormSuccess";

const Contact = () => {
  const formRef = useRef<HTMLFormElement>(null);

  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = event.target;

    setForm((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setLoading(true);

    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const templateId = import.meta.env.VITE_EMAILJS_POTFOLIO_TEMPLATE_ID;
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    try {
      await emailjs.sendForm(
        serviceId,
        templateId,
        formRef.current!,
        publicKey,
      );

      setSubmitted(true);
    } catch (error) {
      console.log("EMAILJS_ERROR:", error);
    } finally {
      setLoading(false);
      setForm({
        name: "",
        email: "",
        message: "",
      });
    }
  };

  return (
    <section className="flex-center section-padding">
      <div className="h-full w-full md:px-10">
        <SectionHeader
          title="Let's Build Something Great"
          subtitle="Reach out, I'm all ears 👋"
        />

        <div className="grid-12-cols mt-16 gap-y-0">
          <div className="xl:col-span-5">
            {submitted ? (
              <FormSuccess />
            ) : (
              <div className={`flex-center card-border rounded-xl p-5 sm:p-10`}>
                <form
                  ref={formRef}
                  onSubmit={handleSubmit}
                  className="flex w-full flex-col gap-7"
                >
                  <div>
                    <label htmlFor="name">Your name</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      placeholder="What’s your good name?"
                      required
                    />
                  </div>

                  <div>
                    <label htmlFor="email">Your Email</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={form.email}
                      onChange={handleChange}
                      placeholder="What’s your email address?"
                      required
                    />
                  </div>

                  <div>
                    <label htmlFor="message">Your Message</label>
                    <textarea
                      id="message"
                      name="message"
                      value={form.message}
                      onChange={handleChange}
                      placeholder="How can I help you?"
                      rows={5}
                      required
                    />
                  </div>

                  <button type="submit">
                    <div className="cta-button group">
                      <div className="bg-circle" />
                      <p className="text">
                        {loading ? "Sending..." : "Send Message"}
                      </p>
                      <div className="arrow-wrapper">
                        <img src="/images/arrow-down.svg" alt="arrow" />
                      </div>
                    </div>
                  </button>
                </form>
              </div>
            )}
          </div>
          <div className="min-h-96 xl:col-span-7">
            <div className="h-full w-full overflow-hidden rounded-3xl hover:cursor-grab">
              <ContactExperience />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
