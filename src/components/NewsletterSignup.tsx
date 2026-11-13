import { useState, type FormEvent } from "react";
import { toast } from "sonner";
import { Mail } from "lucide-react";
import { Button } from "@/components/ui/button.tsx";
import { Input } from "@/components/ui/input.tsx";
import { subscribeNewsletter } from "@/lib/subscribe-api.ts";

export default function NewsletterSignup({
  className,
}: {
  className?: string;
}) {
  const [email, setEmail] = useState("");
  const [honeypot, setHoneypot] = useState("");
  const [submitting, setSubmitting] = useState(false);

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    if (!email || submitting) return;

    setSubmitting(true);
    const result = await subscribeNewsletter({
      email,
      list: "exelogy-newsletter",
      company_website: honeypot,
    });
    setSubmitting(false);

    if (result.ok) {
      toast.success(
        result.already
          ? "You're already subscribed."
          : "Subscribed! Watch your inbox for updates from Exelogy.",
      );
      setEmail("");
      return;
    }
    if (result.status === 422) {
      toast.error(result.error || "Please enter a valid email address.");
      return;
    }
    if (result.status === 429) {
      toast.error("Too many attempts — please try again in a few minutes.");
      return;
    }
    toast.error("Something went wrong — please try again.");
  }

  return (
    <form onSubmit={handleSubmit} className={className}>
      <input
        type="text"
        tabIndex={-1}
        autoComplete="off"
        aria-hidden="true"
        className="absolute left-[-9999px] h-0 w-0 opacity-0"
        value={honeypot}
        onChange={(e) => setHoneypot(e.target.value)}
      />
      <div className="flex flex-col sm:flex-row gap-3">
        <Input
          type="email"
          required
          placeholder="you@company.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="h-11 rounded-full px-4"
          aria-label="Email address"
        />
        <Button
          type="submit"
          disabled={submitting}
          className="h-11 rounded-full px-6 gap-2 bg-gradient-to-r from-primary to-accent hover:opacity-90 shrink-0"
        >
          <Mail className="w-4 h-4" />
          {submitting ? "Subscribing…" : "Subscribe"}
        </Button>
      </div>
    </form>
  );
}
