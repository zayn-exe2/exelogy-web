import { motion } from "motion/react";
import { Link } from "react-router-dom";
import { Bot, Megaphone, PhoneCall, Workflow, Check, ArrowRight } from "lucide-react";

const chips = ["AI Agents", "Software Engineering", "Automation", "Digital Growth"];

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden pt-20 lg:pt-24">
      <div className="absolute inset-0 hero-mesh" />
      <div className="absolute inset-0 grid-fade opacity-50" />
      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8 pt-6 pb-16 lg:pt-8 lg:pb-20 w-full">
        <div className="grid lg:grid-cols-[1.02fr_.98fr] gap-14 lg:gap-20 items-center lg:items-start">
          <motion.div initial={{opacity:0,y:24}} animate={{opacity:1,y:0}} transition={{duration:.65}}>
            <div className="inline-flex items-center gap-2 rounded-full border border-primary/25 bg-primary/8 px-4 py-2 text-xs font-mono uppercase tracking-[.16em] text-primary mb-7">
              <span className="size-1.5 rounded-full bg-primary animate-pulse"/> AI-first technology partner
            </div>
            <h1 className="font-sans text-5xl sm:text-6xl lg:text-[72px] xl:text-[82px] font-bold tracking-[-.055em] leading-[.98] text-balance">
              Build. Automate. <span className="gradient-text">Grow.</span>
            </h1>
            <p className="mt-7 text-lg lg:text-xl text-muted-foreground max-w-2xl leading-relaxed">
              We build intelligent software, automate business operations and create digital growth systems that turn ambitious ideas into measurable progress.
            </p>
            <div className="mt-9 flex flex-col sm:flex-row gap-3">
              <Link to="/contact" className="btn-primary">Book a strategy call <ArrowRight className="size-4"/></Link>
              <Link to="/products" className="btn-secondary">Explore our products</Link>
            </div>
            <div className="mt-10 flex flex-wrap gap-x-5 gap-y-3 text-sm text-muted-foreground">
              {chips.map(x => <span key={x} className="flex items-center gap-2"><Check className="size-3.5 text-primary"/>{x}</span>)}
            </div>
          </motion.div>

          <motion.div initial={{opacity:0,scale:.96,x:20}} animate={{opacity:1,scale:1,x:0}} transition={{duration:.75,delay:.15}} className="relative">
            <div className="absolute -inset-12 bg-primary/15 blur-[100px] rounded-full"/>
            <div className="relative rounded-[28px] border border-border bg-white/90 p-4 sm:p-6 shadow-2xl shadow-slate-900/10 overflow-hidden">
              <div className="flex items-center justify-between pb-5 border-b border-border/70">
                <div><p className="text-xs text-muted-foreground">EXELOGY INTELLIGENCE LAYER</p><p className="mt-1 font-semibold">Your business, connected.</p></div>
                <span className="flex items-center gap-2 text-xs text-emerald-400"><span className="size-2 rounded-full bg-emerald-400 animate-pulse"/>Live</span>
              </div>
              <div className="relative py-10 sm:py-14 min-h-[390px] flex items-center justify-center">
                <div className="absolute inset-0 ecosystem-lines"/>
                <div className="relative z-10 size-32 rounded-full border border-primary/30 bg-primary/10 flex flex-col items-center justify-center shadow-[0_0_60px_rgba(81,24,165,.3)]">
                  <img src="/logo.svg" className="size-11 mb-2" alt=""/><span className="text-xs font-semibold">EXELOGY AI</span>
                </div>
                <Node icon={PhoneCall} label="AI Caller" pos="top-4 left-2 sm:left-8" delay={.3}/>
                <Node icon={Megaphone} label="GrowthOS" pos="top-5 right-2 sm:right-8" delay={.5}/>
                <Node icon={Workflow} label="Automation" pos="bottom-5 left-2 sm:left-8" delay={.7}/>
                <Node icon={Bot} label="AI Agents" pos="bottom-4 right-2 sm:right-8" delay={.9}/>
              </div>
              <div className="grid grid-cols-3 gap-2 border-t border-border/70 pt-4">
                {[['24/7','AI operations'],['1 platform','Connected systems'],['Human + AI','Built to scale']].map(([a,b])=><div key={a} className="rounded-xl bg-secondary/60 p-3"><p className="text-sm font-semibold">{a}</p><p className="text-[10px] mt-1 text-muted-foreground">{b}</p></div>)}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
function Node({icon:Icon,label,pos,delay}:{icon:any,label:string,pos:string,delay:number}) { return <motion.div animate={{y:[0,-6,0]}} transition={{duration:4,repeat:Infinity,delay}} className={`absolute ${pos} z-10 rounded-2xl border border-border bg-white p-3.5 sm:p-4 w-[120px] sm:w-[145px] shadow-xl`}><div className="size-9 rounded-xl bg-primary/15 flex items-center justify-center mb-3"><Icon className="size-4 text-primary"/></div><p className="text-xs sm:text-sm font-medium">{label}</p><p className="text-[10px] text-muted-foreground mt-1">Connected</p></motion.div> }
