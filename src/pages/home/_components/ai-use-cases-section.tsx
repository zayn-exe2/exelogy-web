import { useState } from "react";
import { motion } from "motion/react";
import { ArrowRight, Headphones, Megaphone, Settings2, ShoppingBag } from "lucide-react";
import { Link } from "react-router-dom";

const groups = [
  { key:"Sales", icon:ShoppingBag, text:"Turn repetitive sales work into a responsive, always-on system.", items:["Qualify inbound leads","AI outbound calling","Automated follow-ups","CRM updates & routing"] },
  { key:"Customer service", icon:Headphones, text:"Give customers faster answers while keeping people in control of complex cases.", items:["24/7 first-line support","AI receptionist","Intent-based routing","Appointment scheduling"] },
  { key:"Operations", icon:Settings2, text:"Connect the tools your team already uses and remove manual hand-offs.", items:["Document processing","Workflow automation","Internal AI assistants","Reporting & alerts"] },
  { key:"Marketing", icon:Megaphone, text:"Plan, publish and learn across channels from one connected workflow.", items:["Campaign assistance","Content workflows","Performance analysis","Google & Meta Ads operations"] },
];
export default function AIUseCasesSection(){
 const [active,setActive]=useState(0); const g=groups[active]; const Icon=g.icon;
 return <section className="section-pad bg-[#f2f6f4] border-y border-[#dfe8e4]">
  <div className="mx-auto max-w-7xl px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-[.8fr_1.2fr] gap-12 lg:gap-20 items-start">
   <motion.div initial={{opacity:0,y:20}} whileInView={{opacity:1,y:0}} viewport={{once:true}}>
    <p className="eyebrow mb-5">AI use cases</p><h2 className="dark-heading">What could AI do inside your business?</h2>
    <p className="mt-6 text-lg text-muted-foreground max-w-xl">Start with the business problem, not the technology. Explore practical ways AI can improve revenue, service and operations.</p>
   </motion.div>
   <div className="rounded-[28px] border border-[#d9e3df] bg-white p-3 shadow-[0_20px_60px_rgba(24,50,74,.07)]">
    <div className="flex flex-wrap sm:flex-nowrap gap-2 sm:overflow-x-auto p-2">{groups.map((x,i)=><button key={x.key} onClick={()=>setActive(i)} className={`whitespace-nowrap rounded-xl px-4 py-3 text-sm font-semibold transition ${active===i?"bg-[#18324a] text-white":"text-[#536676] hover:bg-[#f2f6f4]"}`}>{x.key}</button>)}</div>
    <motion.div key={g.key} initial={{opacity:0,y:8}} animate={{opacity:1,y:0}} className="p-5 sm:p-8 border-t border-[#edf1ef] mt-2">
     <div className="w-12 h-12 rounded-2xl bg-[#f2ecfb] flex items-center justify-center mb-6"><Icon className="w-6 h-6 text-[#5118a5]"/></div>
     <h3 className="text-2xl font-semibold tracking-tight text-[#18324a]">{g.key}</h3><p className="mt-3 text-muted-foreground">{g.text}</p>
     <div className="grid sm:grid-cols-2 gap-3 mt-7">{g.items.map(x=><div key={x} className="rounded-xl bg-[#f7f8f5] border border-[#e8ece8] p-4 text-sm font-medium text-[#314b60]">{x}</div>)}</div>
     <Link to="/contact" className="inline-flex items-center gap-2 mt-7 text-sm font-semibold text-[#5118a5]">Discuss your use case <ArrowRight className="w-4 h-4"/></Link>
    </motion.div>
   </div>
  </div>
 </section>
}
