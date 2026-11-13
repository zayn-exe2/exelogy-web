import { type FormEvent, useEffect, useRef, useState } from "react";
import { Bot, ChevronDown, Loader2, MessageCircle, Send, Sparkles, UserRound, X } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { submitContact } from "@/lib/contact-api.ts";

type Message = { role: "assistant" | "user"; content: string };

type Lead = { name: string; email: string; company: string; requirement: string };

const quickActions = [
  "Build an AI solution",
  "Develop custom software",
  "Automate my business",
  "Explore Callifier",
  "Talk to the team",
];

const localAnswers: Array<{ match: RegExp; answer: string; path?: string }> = [
  { match: /^\s*(hi|hello|hey|yo|sup|good morning|good afternoon|good evening)\b/i, answer: "Hey! I'm Exelogy AI. Ask me about our AI solutions, software, automation, digital growth, or our products — GrowthOS, Callifier and CounselAI." },
  { match: /callifier|dialer|phone|sms|virtual number/i, answer: "Callifier gives you virtual phone numbers in countries around the world, so you can call, text, and email customers from one place, with call recording and analytics built in.", path: "/products/callifier" },
  { match: /counsel|law firm|lawyer|attorney|legal intake/i, answer: "CounselAI is Exelogy’s AI intake assistant for law firms. It talks to prospective clients on your website, qualifies their matter, books consultations with the right attorney and follows up automatically.", path: "/products/counselai" },
  { match: /growthos|social media|\bmarketing\b|meta ads|google ads/i, answer: "GrowthOS brings digital growth workflows together, including social media and advertising management. If you tell me what channels you use today, I can point you to the most relevant Exelogy capability.", path: "/products/growthos" },
  { match: /\btrial\b|\bdemo\b|try (it|before)/i, answer: "GrowthOS, Callifier and CounselAI all offer a free trial so you can try the product before you pay. Which one are you interested in?", path: "/products" },
  { match: /refund|cancel|money back|billing/i, answer: "You can cancel your subscription anytime from your dashboard. We don't offer refunds once a billing period has started — see our Refund Policy for the full details.", path: "/refund-policy" },
  { match: /\bsecur(e|ity)\b|gdpr|compliance|data protection|\bssl\b/i, answer: "Security and data protection are built in from the architecture stage — secure design, role-based access, API security and monitoring. Our Privacy Policy covers how we handle your data.", path: "/privacy" },
  { match: /who are you|about exelogy|what is exelogy|what does exelogy do/i, answer: "Exelogy is an AI-first technology company — we build AI solutions, custom software, automation and digital growth systems for modern businesses.", path: "/about" },
  { match: /industr(y|ies)|e-?commerce|healthcare|real estate|\bretail\b|\bstartups?\b/i, answer: "We build AI, software and automation solutions across e-commerce, healthcare, real estate, professional services, retail and startups. Tell me your industry and I can point you to relevant work.", path: "/industries" },
  { match: /\bai\b|\bagent\b|automation/i, answer: "Exelogy builds AI solutions and automation around real business workflows—from AI agents and customer interactions to operational automation. Tell me the process you want to automate and I’ll help narrow the approach.", path: "/services/ai-solutions" },
  { match: /software|saas|\bweb\b|\bapp\b|react|angular|java|node/i, answer: "Exelogy develops custom software and SaaS products, including modern web applications and business platforms. Tell me what you’re building, who will use it, and the main outcome you need.", path: "/services/software-development" },
  { match: /price|cost|quote|budget/i, answer: "Project cost depends on scope, integrations, users and delivery requirements, so I won’t invent a price. Share a short requirement and I can help you prepare it for the Exelogy team." },
  { match: /contact|team|human|call|meeting|project/i, answer: "Absolutely. I can take you to the contact page, or you can tell me your requirement here first so the conversation starts with useful context.", path: "/contact" },
];

function track(event: string, details: Record<string, unknown> = {}) {
  const w = window as Window & { dataLayer?: Record<string, unknown>[] };
  w.dataLayer = w.dataLayer || [];
  w.dataLayer.push({ event, ...details });
}

export default function ExelogyChatbot() {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const [minimized, setMinimized] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { role: "assistant", content: "Hi, I’m Exelogy AI. Tell me what you’re trying to build, automate or grow, and I’ll point you in the right direction." },
  ]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [leadMode, setLeadMode] = useState(false);
  const [leadSubmitting, setLeadSubmitting] = useState(false);
  const [lead, setLead] = useState<Lead>({ name: "", email: "", company: "", requirement: "" });
  const endRef = useRef<HTMLDivElement>(null);

  useEffect(() => { endRef.current?.scrollIntoView({ behavior: "smooth" }); }, [messages, loading, leadMode]);

  const openChat = () => {
    setOpen(true); setMinimized(false); track("chat_opened");
  };

  const send = async (text: string) => {
    const clean = text.trim();
    if (!clean || loading) return;
    setInput("");
    setMessages(prev => [...prev, { role: "user", content: clean }]);
    track("chat_message_sent");
    if (/talk to the team|contact|book|human/i.test(clean)) {
      setMessages(prev => [...prev, { role: "assistant", content: "Great. Share a few details and I’ll prepare your enquiry for the team." }]);
      setLead(prev => ({ ...prev, requirement: clean === "Talk to the team" ? "" : clean }));
      setLeadMode(true);
      return;
    }
    setLoading(true);
    try {
      const response = await fetch("/api/chat", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ messages: [...messages, { role: "user", content: clean }] }) });
      if (!response.ok) throw new Error("AI endpoint unavailable");
      const data = await response.json();
      setMessages(prev => [...prev, { role: "assistant", content: data.message || data.reply }]);
    } catch {
      const found = localAnswers.find(item => item.match.test(clean));
      setMessages(prev => [...prev, { role: "assistant", content: found?.answer || "I can help with Exelogy's AI solutions, custom software, automation, digital growth, GrowthOS, Callifier and CounselAI. Tell me a little more about the outcome you need." }]);
      if (found?.path) setMessages(prev => [...prev, { role: "assistant", content: `PAGE:${found.path}` }]);
    } finally { setLoading(false); }
  };

  const submitLead = async (e: FormEvent) => {
    e.preventDefault();
    const requirement = lead.requirement || messages.filter(m => m.role === "user").map(m => m.content).join("\n");
    setLeadSubmitting(true);
    const result = await submitContact({
      email: lead.email,
      name: lead.name,
      company: lead.company,
      message: requirement,
      form: "Exelogy AI assistant",
    });
    setLeadSubmitting(false);
    track("chat_conversion", { lead_source: "exelogy_ai" });

    if (result.ok) {
      setLeadMode(false);
      setMessages(prev => [...prev, { role: "assistant", content: "Thanks — that's been sent to our team. We'll be in touch within one business day." }]);
      return;
    }

    if (result.status === 422) {
      setMessages(prev => [...prev, { role: "assistant", content: result.error || "That email address doesn't look right — please double-check it and try again." }]);
      return;
    }
    if (result.status === 429) {
      setMessages(prev => [...prev, { role: "assistant", content: "You're sending messages a bit too fast — please wait a few minutes and try again." }]);
      return;
    }

    // API unreachable or returned an unexpected error — fall back to email.
    const subject = encodeURIComponent(`Website AI enquiry${lead.company ? ` — ${lead.company}` : ""}`);
    const body = encodeURIComponent(`Name: ${lead.name}\nEmail: ${lead.email}\nCompany: ${lead.company || "Not provided"}\n\nRequirement:\n${requirement}`);
    window.location.assign(`mailto:info@exelogy.com?subject=${subject}&body=${body}`);
    setLeadMode(false);
    setMessages(prev => [...prev, { role: "assistant", content: "Your email app should now open with the enquiry prepared. You can also use the Contact page to reach the team." }, { role: "assistant", content: "PAGE:/contact" }]);
  };

  return <>
    {!open && <button onClick={openChat} aria-label="Open Exelogy AI assistant" className="fixed bottom-5 right-5 z-[70] group flex items-center gap-3 rounded-full bg-[#5118A5] px-4 py-3 text-white shadow-[0_16px_50px_rgba(81,24,165,.28)] transition hover:-translate-y-1 hover:shadow-[0_20px_60px_rgba(81,24,165,.38)]">
      <span className="relative"><MessageCircle className="h-6 w-6"/><span className="absolute -right-1 -top-1 h-2.5 w-2.5 rounded-full bg-emerald-400 ring-2 ring-[#5118A5]"/></span>
      <span className="hidden text-sm font-semibold sm:inline">Ask Exelogy AI</span>
    </button>}

    {open && <section aria-label="Exelogy AI assistant" className={`fixed bottom-4 right-4 z-[70] w-[calc(100vw-2rem)] overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-[0_24px_80px_rgba(15,23,42,.18)] sm:w-[390px] ${minimized ? "h-auto" : "h-[min(650px,calc(100vh-2rem))]"}`}>
      <header className="flex items-center justify-between bg-gradient-to-r from-[#5118A5] to-[#7137c8] px-4 py-3.5 text-white">
        <div className="flex items-center gap-3"><div className="grid h-10 w-10 place-items-center rounded-xl bg-white/15 ring-1 ring-white/20"><Sparkles className="h-5 w-5"/></div><div><div className="font-semibold leading-tight">Exelogy AI</div><div className="mt-0.5 flex items-center gap-1.5 text-[11px] text-white/75"><span className="h-1.5 w-1.5 rounded-full bg-emerald-300"/>AI business assistant</div></div></div>
        <div className="flex items-center gap-1"><button onClick={() => setMinimized(v => !v)} className="rounded-lg p-2 hover:bg-white/10" aria-label="Minimize chat"><ChevronDown className={`h-4 w-4 transition ${minimized ? "rotate-180" : ""}`}/></button><button onClick={() => setOpen(false)} className="rounded-lg p-2 hover:bg-white/10" aria-label="Close chat"><X className="h-4 w-4"/></button></div>
      </header>

      {!minimized && <div className="flex h-[calc(100%-68px)] flex-col">
        <div className="flex-1 overflow-y-auto bg-slate-50/70 p-4">
          <div className="mb-3 rounded-xl border border-violet-100 bg-violet-50/70 px-3 py-2 text-[11px] leading-relaxed text-slate-600">I can explain Exelogy services and products or help shape your requirement. For pricing and commitments, I’ll connect you with the team.</div>
          <div className="space-y-3">
            {messages.map((m, i) => m.content.startsWith("PAGE:") ? <div key={i} className="ml-9"><button onClick={() => { navigate(m.content.replace("PAGE:", "")); setOpen(false); track("chat_page_click", { path: m.content.replace("PAGE:", "") }); }} className="rounded-lg border border-[#5118A5]/20 bg-white px-3 py-2 text-xs font-semibold text-[#5118A5] hover:bg-violet-50">View relevant page →</button></div> : <div key={i} className={`flex gap-2 ${m.role === "user" ? "justify-end" : "justify-start"}`}>{m.role === "assistant" && <div className="mt-1 grid h-7 w-7 shrink-0 place-items-center rounded-lg bg-violet-100 text-[#5118A5]"><Bot className="h-4 w-4"/></div>}<div className={`max-w-[82%] rounded-2xl px-3.5 py-2.5 text-sm leading-relaxed ${m.role === "user" ? "rounded-br-md bg-[#5118A5] text-white" : "rounded-bl-md border border-slate-200 bg-white text-slate-700 shadow-sm"}`}>{m.content}</div>{m.role === "user" && <div className="mt-1 grid h-7 w-7 shrink-0 place-items-center rounded-lg bg-slate-200 text-slate-600"><UserRound className="h-4 w-4"/></div>}</div>)}
            {loading && <div className="flex items-center gap-2 text-xs text-slate-500"><div className="grid h-7 w-7 place-items-center rounded-lg bg-violet-100 text-[#5118A5]"><Bot className="h-4 w-4"/></div><div className="flex items-center gap-2 rounded-xl border bg-white px-3 py-2"><Loader2 className="h-3.5 w-3.5 animate-spin"/>Thinking…</div></div>}
          </div>

          {messages.length <= 2 && !leadMode && <div className="mt-4 flex flex-wrap gap-2">{quickActions.map(a => <button key={a} onClick={() => send(a)} className="rounded-full border border-violet-200 bg-white px-3 py-1.5 text-[11px] font-medium text-[#5118A5] transition hover:border-violet-300 hover:bg-violet-50">{a}</button>)}</div>}

          {leadMode && <form onSubmit={submitLead} className="mt-4 space-y-2 rounded-2xl border border-violet-100 bg-white p-3 shadow-sm"><div className="mb-2 text-xs font-semibold text-slate-800">Tell the team about your project</div><input required placeholder="Your name" value={lead.name} onChange={e => setLead({...lead, name:e.target.value})} className="w-full rounded-lg border border-slate-200 px-3 py-2 text-sm outline-none focus:border-violet-400"/><input required type="email" placeholder="Work email" value={lead.email} onChange={e => setLead({...lead, email:e.target.value})} className="w-full rounded-lg border border-slate-200 px-3 py-2 text-sm outline-none focus:border-violet-400"/><input placeholder="Company (optional)" value={lead.company} onChange={e => setLead({...lead, company:e.target.value})} className="w-full rounded-lg border border-slate-200 px-3 py-2 text-sm outline-none focus:border-violet-400"/><textarea required placeholder="What would you like to build or improve?" rows={3} value={lead.requirement} onChange={e => setLead({...lead, requirement:e.target.value})} className="w-full resize-none rounded-lg border border-slate-200 px-3 py-2 text-sm outline-none focus:border-violet-400"/><button disabled={leadSubmitting} className="w-full rounded-lg bg-[#5118A5] px-3 py-2.5 text-sm font-semibold text-white hover:bg-[#431487] disabled:opacity-60">{leadSubmitting ? "Sending…" : "Send to the team"}</button><p className="text-[10px] leading-relaxed text-slate-400">Sent straight to our team. We'll reply within one business day.</p></form>}
          <div ref={endRef}/>
        </div>
        <form onSubmit={e => { e.preventDefault(); send(input); }} className="border-t border-slate-200 bg-white p-3"><div className="flex items-end gap-2 rounded-xl border border-slate-200 bg-slate-50 p-1.5 focus-within:border-violet-300 focus-within:ring-2 focus-within:ring-violet-100"><textarea aria-label="Chat message" rows={1} placeholder="Ask about AI, software or automation…" value={input} onChange={e => setInput(e.target.value)} onKeyDown={e => { if(e.key === "Enter" && !e.shiftKey){e.preventDefault(); send(input);} }} className="max-h-24 min-h-9 flex-1 resize-none bg-transparent px-2 py-2 text-sm outline-none"/><button type="submit" disabled={!input.trim() || loading} className="grid h-9 w-9 shrink-0 place-items-center rounded-lg bg-[#5118A5] text-white disabled:opacity-40"><Send className="h-4 w-4"/></button></div><div className="mt-1.5 text-center text-[9px] text-slate-400">AI can make mistakes. Verify important information with the Exelogy team.</div></form>
      </div>}
    </section>}
  </>;
}
