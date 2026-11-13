import { zodResolver } from "@hookform/resolvers/zod";
import { motion } from "motion/react";
import { Controller, useForm } from "react-hook-form";
import { toast } from "sonner";
import { z } from "zod";
import { Mail, MapPin, Phone, Send } from "lucide-react";
import PageLayout from "@/components/layout/page-layout.tsx";
import { Button } from "@/components/ui/button.tsx";
import { Input } from "@/components/ui/input.tsx";
import { Label } from "@/components/ui/label.tsx";
import { Textarea } from "@/components/ui/textarea.tsx";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select.tsx";
import { submitContact } from "@/lib/contact-api.ts";

const contactSchema = z.object({
  name: z.string().min(2, "Please enter your full name"),
  email: z.string().email("Please enter a valid email address"),
  company: z.string().optional(),
  topic: z.string().min(1, "Please select a topic"),
  message: z.string().min(10, "Tell us a bit more — at least 10 characters"),
  // Honeypot — real visitors never see or fill this field.
  company_website: z.string().optional(),
});

type ContactFormValues = z.infer<typeof contactSchema>;

const topicLabels: Record<string, string> = {
  services: "AI Services & Consulting",
  growthos: "GrowthOS",
  callifier: "Callifier",
  partnership: "Partnership",
  careers: "Careers",
  other: "Other",
};

const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "info@exelogy.com",
    href: "mailto:info@exelogy.com",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+1 (213) 376-0594",
    href: "tel:+12133760594",
  },
  // {
  //   icon: MapPin,
  //   label: "Office",
  //   value: "San Francisco, CA — Remote-first team",
  //   href: undefined,
  // },
];

export default function ContactPage() {
  const form = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: "",
      email: "",
      company: "",
      topic: "",
      message: "",
      company_website: "",
    },
  });

  async function onSubmit(values: ContactFormValues) {
    const result = await submitContact({
      email: values.email,
      name: values.name,
      company: values.company,
      topic: topicLabels[values.topic] ?? values.topic,
      message: values.message,
      form: "Contact form",
      company_website: values.company_website,
    });

    if (result.ok) {
      toast.success("Message sent — we'll be in touch within one business day.");
      form.reset();
      return;
    }

    if (result.status === 422) {
      toast.error(result.error || "Please check your email address and try again.");
      return;
    }
    if (result.status === 429) {
      toast.error("You're sending messages a bit too fast — please wait a few minutes and try again.");
      return;
    }

    // API unreachable or returned an unexpected error — fall back to email.
    const subject = encodeURIComponent(
      `Website enquiry — ${values.topic}${values.company ? ` — ${values.company}` : ""}`,
    );
    const body = encodeURIComponent(
      `Name: ${values.name}\nEmail: ${values.email}\nCompany: ${values.company || "Not provided"}\nTopic: ${values.topic}\n\nMessage:\n${values.message}`,
    );
    window.location.assign(`mailto:info@exelogy.com?subject=${subject}&body=${body}`);
    toast.success("Opening your email app to send this to our team.");
    form.reset();
  }

  const {
    register,
    handleSubmit,
    control,
    formState: { errors, isSubmitting },
  } = form;

  return (
    <PageLayout>
      {/* Hero */}
      <section className="relative pt-32 pb-16 lg:pt-40 lg:pb-20 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/3 w-[600px] h-[600px] rounded-full bg-primary/5 blur-[130px]" />
          <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] rounded-full bg-accent/4 blur-[100px]" />
        </div>

        <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="max-w-3xl"
          >
            <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-border/50 bg-secondary/30 text-xs font-mono tracking-widest text-primary uppercase mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-primary" />
              Contact
            </span>
            <h1 className="font-sans text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.1]">
              {"Let's build something "}
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                intelligent together.
              </span>
            </h1>
            <p className="mt-6 text-lg lg:text-xl text-muted-foreground leading-relaxed max-w-2xl">
              Tell us about your project or question. We typically respond
              within one business day.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Form + Info */}
      <section className="relative py-8 pb-24 lg:pb-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid lg:grid-cols-5 gap-10 lg:gap-16">
            {/* Form */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7 }}
              className="lg:col-span-3 p-8 lg:p-10 rounded-3xl border border-border/50 bg-card/30"
            >
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                <input
                  type="text"
                  tabIndex={-1}
                  autoComplete="off"
                  aria-hidden="true"
                  className="absolute left-[-9999px] h-0 w-0 opacity-0"
                  {...register("company_website")}
                />
                <div className="grid sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="name">Full name</Label>
                    <Input
                      id="name"
                      placeholder="Jane Doe"
                      aria-invalid={!!errors.name}
                      {...register("name")}
                    />
                    {errors.name && (
                      <p className="text-xs text-destructive">
                        {errors.name.message}
                      </p>
                    )}
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="jane@company.com"
                      aria-invalid={!!errors.email}
                      {...register("email")}
                    />
                    {errors.email && (
                      <p className="text-xs text-destructive">
                        {errors.email.message}
                      </p>
                    )}
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="company">Company (optional)</Label>
                    <Input
                      id="company"
                      placeholder="Acme Inc."
                      {...register("company")}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="topic">Topic</Label>
                    <Controller
                      name="topic"
                      control={control}
                      render={({ field }) => (
                        <Select
                          value={field.value}
                          onValueChange={field.onChange}
                        >
                          <SelectTrigger id="topic" className="w-full">
                            <SelectValue placeholder="Select a topic" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="services">
                              AI Services & Consulting
                            </SelectItem>
                            <SelectItem value="growthos">GrowthOS</SelectItem>
                            <SelectItem value="callifier">Callifier</SelectItem>
                            <SelectItem value="partnership">
                              Partnership
                            </SelectItem>
                            <SelectItem value="careers">Careers</SelectItem>
                            <SelectItem value="other">Other</SelectItem>
                          </SelectContent>
                        </Select>
                      )}
                    />
                    {errors.topic && (
                      <p className="text-xs text-destructive">
                        {errors.topic.message}
                      </p>
                    )}
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">Message</Label>
                  <Textarea
                    id="message"
                    rows={6}
                    placeholder="Tell us about your project, timeline, and goals..."
                    aria-invalid={!!errors.message}
                    {...register("message")}
                  />
                  {errors.message && (
                    <p className="text-xs text-destructive">
                      {errors.message.message}
                    </p>
                  )}
                </div>

                <Button
                  type="submit"
                  size="lg"
                  disabled={isSubmitting}
                  className="w-full sm:w-auto rounded-full px-8 h-12 bg-gradient-to-r from-primary to-accent hover:opacity-90 gap-2"
                >
                  <Send className="w-4 h-4" />
                  {isSubmitting ? "Sending..." : "Send Message"}
                </Button>
              </form>
            </motion.div>

            {/* Info */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="lg:col-span-2 space-y-4"
            >
              {contactInfo.map((item) => {
                const Wrapper = item.href ? "a" : "div";
                return (
                  <Wrapper
                    key={item.label}
                    {...(item.href ? { href: item.href } : {})}
                    className="flex items-start gap-4 p-6 rounded-2xl border border-border/50 bg-card/30 hover:bg-card/50 hover:border-primary/20 transition-all duration-300"
                  >
                    <div className="w-11 h-11 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                      <item.icon className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-xs font-mono tracking-wide text-muted-foreground uppercase mb-1">
                        {item.label}
                      </p>
                      <p className="font-sans font-medium">{item.value}</p>
                    </div>
                  </Wrapper>
                );
              })}

              <div className="p-6 rounded-2xl border border-border/50 bg-gradient-to-br from-primary/8 to-accent/6">
                <h3 className="font-sans font-semibold mb-2">
                  Prefer to talk it through?
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Select "AI Services & Consulting" above and we'll set up a
                  call with a solutions engineer to scope your project.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
