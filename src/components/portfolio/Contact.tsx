// Contact section - validated form with success message + contact info
// Uses a mailto fallback so it works out-of-the-box without API keys.
// To wire up real email sending later, swap handleSubmit to use EmailJS.
import { useState } from "react";
import { Mail, Phone, MapPin, Send, CheckCircle2, Github, Linkedin, Code2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { SectionHeading } from "./SectionHeading";
import emailjs from "@emailjs/browser";

interface FormState {
  name: string;
  phone: string;
  email: string;
  message: string;
}

const initial: FormState = { name: "", phone: "", email: "", message: "" };

export function Contact() {
  const [form, setForm] = useState<FormState>(initial);
  const [errors, setErrors] = useState<Partial<FormState>>({});
  const [sent, setSent] = useState(false);

  const validate = () => {
    const e: Partial<FormState> = {};
    if (!form.name.trim()) e.name = "Name is required";
    if (!form.phone.trim()) e.phone = "Phone is required";
    else if (!/^[0-9+\-\s()]{7,15}$/.test(form.phone)) e.phone = "Invalid phone";
    if (!form.email.trim()) e.email = "Email is required";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = "Invalid email";
    if (!form.message.trim()) e.message = "Message is required";
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const handleSubmit = async (ev: React.FormEvent) => {
  ev.preventDefault();

  if (!validate()) return;

  try {
    await emailjs.send(
      "service_6pjtaoa",
      "template_t40as4h",
      {
        name: form.name,
        phone: form.phone,
        email: form.email,
        message: form.message,
      },
      "8ejkC4fTx8c50kPXI"
    );

    setSent(true);
    setForm(initial);

    setTimeout(() => setSent(false), 4000);
  } catch (error) {
    console.log(error);
    alert("Failed to send message");
  }
};  

  const update = (k: keyof FormState) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setForm((f) => ({ ...f, [k]: e.target.value }));

  return (
    <section id="contact" className="py-24">
      <div className="container mx-auto px-4">
        <SectionHeading
          eyebrow="Contact"
          title="Let's work together"
          description="Have a project, idea or just want to say hi? Drop a message."
        />

        <div className="grid gap-8 md:grid-cols-5">
          {/* Contact info */}
          <div className="reveal md:col-span-2 space-y-4">
            <InfoCard icon={Mail} label="Email" value="shubham14mmn@gmail.com" href="mailto:shubham14mmn@gmail.com" />
            <InfoCard icon={Phone} label="Phone" value="+91 7061801127" href="tel:+917061801127" />
            <InfoCard icon={MapPin} label="Location" value="Bihar, India" />

            <div className="flex gap-3 pt-2">
              <Social href="https://github.com/shubham14mmn" icon={<Github className="h-5 w-5" />} label="GitHub" />
              <Social href="https://linkedin.com/in/shubham-singh-a265a8296" icon={<Linkedin className="h-5 w-5" />} label="LinkedIn" />
              <Social href="https://leetcode.com/u/Shubham14mmn" icon={<Code2 className="h-5 w-5" />} label="LeetCode" />
            </div>
          </div>

          {/* Form */}
          <form
            onSubmit={handleSubmit}
            className="reveal md:col-span-3 space-y-4 rounded-2xl border border-border bg-gradient-card p-6 shadow-card md:p-8"
            noValidate
          >
            <div className="grid gap-4 sm:grid-cols-2">
              <Field label="Full Name" error={errors.name}>
                <Input value={form.name} onChange={update("name")} placeholder="Enter your name.." />
              </Field>
              <Field label="Contact Number" error={errors.phone}>
                <Input value={form.phone} onChange={update("phone")} placeholder="+91 ..." />
              </Field>
            </div>
            <Field label="Email Address" error={errors.email}>
              <Input type="email" value={form.email} onChange={update("email")} placeholder="you@example.com" />
            </Field>
            <Field label="Message" error={errors.message}>
              <Textarea
                value={form.message}
                onChange={update("message")}
                placeholder="Tell me about your project..."
                rows={5}
              />
            </Field>

            <Button type="submit" size="lg" className="w-full shadow-glow">
              <Send className="mr-2 h-4 w-4" /> Send Message
            </Button>

            {sent && (
              <div className="flex items-center gap-2 rounded-md border border-primary/30 bg-primary/10 p-3 text-sm text-primary animate-fade-in-up">
                <CheckCircle2 className="h-5 w-5" />
                Message ready! Your email app should open shortly.
              </div>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}

function Field({
  label,
  error,
  children,
}: {
  label: string;
  error?: string;
  children: React.ReactNode;
}) {
  return (
    <div className="space-y-1.5">
      <Label>{label}</Label>
      {children}
      {error && <p className="text-xs text-destructive">{error}</p>}
    </div>
  );
}

function InfoCard({
  icon: Icon,
  label,
  value,
  href,
}: {
  icon: typeof Mail;
  label: string;
  value: string;
  href?: string;
}) {
  const inner = (
    <div className="flex items-center gap-4 rounded-xl border border-border bg-gradient-card p-4 shadow-card transition-all hover:-translate-y-1 hover:border-primary hover:shadow-glow">
      <div className="flex h-11 w-11 items-center justify-center rounded-full bg-primary/10 text-primary">
        <Icon className="h-5 w-5" />
      </div>
      <div>
        <p className="text-xs uppercase tracking-wider text-muted-foreground">{label}</p>
        <p className="font-medium">{value}</p>
      </div>
    </div>
  );
  return href ? <a href={href}>{inner}</a> : inner;
}

function Social({ href, icon, label }: { href: string; icon: React.ReactNode; label: string }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className="flex h-11 w-11 items-center justify-center rounded-full border border-border bg-card transition-all hover:border-primary hover:text-primary hover:shadow-glow hover:-translate-y-1"
    >
      {icon}
    </a>
  );
}
