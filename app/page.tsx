"use client";

import { useEffect, useState } from "react";

type Video = { id:string; title:string };
const enterpriseVideo:Video = { id:"87Q95WrthQY", title:"Enterprise Membership launch video" };
const leapVideo:Video = { id:"7IEwl8uVxaE", title:"LEAP launch film" };
const Arrow = () => <span aria-hidden="true">↗</span>;

export default function Home() {
  const [activeVideo,setActiveVideo] = useState<Video|null>(null);
  const [progress,setProgress] = useState(0);
  useEffect(() => {
    const reveal = new IntersectionObserver(entries => entries.forEach(entry => { if(entry.isIntersecting) entry.target.classList.add("is-visible"); }),{threshold:.14});
    document.querySelectorAll("[data-reveal]").forEach(el => reveal.observe(el));
    const onScroll=()=>{ const h=document.documentElement.scrollHeight-window.innerHeight; setProgress(h>0?(window.scrollY/h)*100:0); };
    window.addEventListener("scroll",onScroll,{passive:true}); onScroll();
    return()=>{reveal.disconnect();window.removeEventListener("scroll",onScroll);};
  },[]);
  useEffect(()=>{ if(!activeVideo)return; const close=(e:KeyboardEvent)=>e.key==="Escape"&&setActiveVideo(null); document.body.classList.add("modal-open"); window.addEventListener("keydown",close); return()=>{document.body.classList.remove("modal-open");window.removeEventListener("keydown",close);}; },[activeVideo]);

  return <main>
    <style>{`:root{--ink:#121612;--paper:#f2eee4;--blue:#29483b;--coral:#e86f4c;--line:rgba(18,22,18,.22)}.campaign-story{display:grid;gap:18px;margin:22px 0 28px}.campaign-story p{margin:0!important}.campaign-role{border-left:3px solid var(--coral);padding:4px 0 4px 16px;font-family:var(--font-mono);font-size:.68rem;line-height:1.55;text-transform:uppercase}.case-result{display:grid;grid-template-columns:auto 1fr;gap:16px;align-items:center;margin:6px 0 26px}.case-result strong{font-size:3.4rem;letter-spacing:-.07em;color:var(--coral)}.case-result span{font-size:.78rem;line-height:1.35;max-width:180px}.campaign-scope{display:grid;grid-template-columns:repeat(3,1fr);width:100%;border-top:1px solid var(--line);border-bottom:1px solid var(--line);margin:4px 0 24px}.campaign-scope span{padding:10px 7px;font-family:var(--font-mono);font-size:.56rem;text-transform:uppercase;border-right:1px solid var(--line)}.campaign-scope span:last-child{border:0}.program-visual{background:#18251f;color:var(--paper);padding:34px!important;display:flex!important;flex-direction:column;justify-content:space-between;text-align:left}.program-visual:after{display:none}.program-visual .program-mark{font-size:clamp(6rem,14vw,13rem);font-weight:700;line-height:.72;letter-spacing:-.1em;color:var(--coral)}.program-lines{display:flex;flex-wrap:wrap;gap:9px;max-width:700px}.program-lines span{border:1px solid rgba(242,238,228,.38);padding:8px 10px;font-family:var(--font-mono);font-size:.58rem}.demand-context{display:grid;grid-template-columns:24% 1fr;gap:0;margin:0 0 70px;border-top:1px solid rgba(242,238,228,.32);border-bottom:1px solid rgba(242,238,228,.32)}.demand-context>div{padding:24px 20px;border-right:1px solid rgba(242,238,228,.32)}.demand-context>div:last-child{border:0}.demand-context strong{display:block;color:var(--coral);font-size:1.25rem;margin-bottom:8px}.demand-context span{font-family:var(--font-mono);font-size:.62rem;line-height:1.45;text-transform:uppercase}.channel-strip{grid-column:1/-1;display:grid!important;grid-template-columns:repeat(4,1fr);padding:0!important;border-top:1px solid rgba(242,238,228,.32)!important}.channel-strip i{padding:16px 20px;font-style:normal;font-family:var(--font-mono);font-size:.61rem;border-right:1px solid rgba(242,238,228,.32)}.channel-strip i:last-child{border:0}@media(max-width:850px){.campaign-scope{grid-template-columns:1fr}.campaign-scope span{border-right:0;border-bottom:1px solid var(--line)}.demand-context{grid-template-columns:1fr}.demand-context>div{border-right:0;border-bottom:1px solid rgba(242,238,228,.32)}.channel-strip{grid-template-columns:1fr 1fr}.program-visual{min-height:450px}.case-result strong{font-size:2.8rem}}`}</style>
    <div className="scroll-progress" style={{transform:`scaleX(${progress/100})`}} />
    <header className="site-header">
      <a className="brand" href="#top"><span>ISLAM ELSAEED</span><small>Senior B2B Marketer</small></a>
      <nav aria-label="Main navigation"><a href="#work">Work</a><a href="#results">Results</a><a href="#ai">AI workflow</a><a className="nav-cta" href="#contact">Start a conversation <Arrow/></a></nav>
    </header>

    <section className="hero" id="top">
      <div className="hero-index mono">PORTFOLIO / 2026</div>
      <h1><span className="hero-line">Complex products.</span><span className="hero-line accent">Clear stories.</span><span className="hero-line">Measurable demand.</span></h1>
      <div className="hero-bottom"><p>I build the line between audience insight, product value and revenue—through content, campaigns and systems that help B2B teams move.</p><a className="round-link" href="#work">↓</a></div>
    </section>
    <div className="ticker"><div className="ticker-track"><span>9 YEARS B2B</span><i>✦</i><span>143+ LEADS</span><i>✦</i><span>6.6× CAMPAIGN ROI</span><i>✦</i><span>€120K NEW REVENUE</span><i>✦</i><span>9 YEARS B2B</span><i>✦</i><span>143+ LEADS</span><i>✦</i><span>6.6× CAMPAIGN ROI</span><i>✦</i><span>€120K NEW REVENUE</span><i>✦</i></div></div>

    <section className="intro section-grid" id="about">
      <div className="section-label mono" data-reveal>01 / INTRODUCTION</div>
      <div className="intro-copy" data-reveal><p className="eyebrow">A marketer who builds the whole system</p><h2>From a new market to a functioning marketing engine.</h2><div className="two-col-copy"><p>Across Europe and MENA, I have marketed technology, events, memberships and business services to complex buying groups. At Companial, I built the marketing functions for both the Enterprise market and the ISV Partnership Program—not only individual campaigns.</p><p>That means defining the proposition, audience and campaign architecture, then creating the content, channels, processes and commercial alignment needed to generate demand and help sales convert it.</p></div></div>
    </section>

    <section className="work" id="work">
      <div className="section-head" data-reveal><span className="mono">02 / SELECTED CAMPAIGNS &amp; LAUNCHES</span><p>The asset is the visible output. The campaign system around it is the real story.</p></div>
      <article className="project" data-reveal>
        <button className="project-visual" onClick={()=>setActiveVideo(enterpriseVideo)} aria-label="Play Enterprise Membership launch video"><img src="/assets/87Q95WrthQY.jpg" alt="Enterprise Membership launch video"/><span className="play">PLAY</span><span className="image-index mono">01</span></button>
        <div className="project-copy"><div className="project-meta mono">Companial · Enterprise market launch</div><h3>Built the market. Then launched the membership.</h3><div className="campaign-story"><p>I built the Enterprise marketing function from the ground up—creating the positioning, campaign architecture, content engine and alignment with sales for a new strategic market.</p><p>The film shown here was one execution inside the wider Enterprise Membership launch, connecting the proposition with web content, sales collateral, events, email, social outreach and structured follow-up.</p></div><div className="campaign-role">My ownership · End-to-end Enterprise marketing function and launch campaign</div><div className="campaign-scope"><span>Positioning &amp; message</span><span>Campaign &amp; assets</span><span>Sales activation</span></div><div className="case-result"><strong>12</strong><span>sales opportunities created in the pipeline</span></div><button className="text-link" onClick={()=>setActiveVideo(enterpriseVideo)}>Watch one campaign asset <Arrow/></button></div>
      </article>

      <article className="project" data-reveal>
        <div className="project-visual program-visual" aria-label="ISV Partnership Program campaign system"><span className="image-index mono">02</span><div className="program-mark">ISV</div><div className="program-lines"><span>POSITIONING</span><span>PARTNER ACQUISITION</span><span>WEBINARS</span><span>NURTURE</span><span>SALES ENABLEMENT</span><span>AI WORKFLOW</span></div></div>
        <div className="project-copy"><div className="project-meta mono">Companial · ISV Partnership Program</div><h3>Built a partner marketing function—not a collection of tactics.</h3><div className="campaign-story"><p>I built the ISV marketing function around the full partner journey: defining the program story, attracting software partners, creating useful expert content, nurturing interest and equipping commercial teams for follow-up.</p><p>The recurring webinar engine became a core acquisition and engagement channel. I then redesigned its production workflow with AI, reducing manual coordination while keeping human review and brand control.</p></div><div className="campaign-role">My ownership · Program positioning, campaign system, content engine and operating model</div><div className="campaign-scope"><span>Acquire partners</span><span>Build engagement</span><span>Enable conversion</span></div><div className="case-result"><strong>20</strong><span>webinars connected through one scalable program</span></div><a className="text-link" href="#ai">Explore the AI workflow <Arrow/></a></div>
      </article>

      <article className="project" data-reveal>
        <button className="project-visual" onClick={()=>setActiveVideo(leapVideo)} aria-label="Play LEAP launch film"><img src="/assets/7IEwl8uVxaE.jpg" alt="LEAP launch film"/><span className="play">PLAY</span><span className="image-index mono">03</span></button>
        <div className="project-copy"><div className="project-meta mono">LEAP · Event launch campaign</div><h3>Launching a new technology event to the world.</h3><div className="campaign-story"><p>This was the launch film for the first LEAP event, earning more than one million views. But the film was only one part of a much larger digital launch campaign.</p><p>My remit connected brand storytelling with audience acquisition, content distribution, search visibility, media activation and database growth—building both immediate attention and an owned audience for the event.</p></div><div className="campaign-role">My ownership · Digital launch strategy, campaign execution and audience growth</div><div className="campaign-scope"><span>6.7M impressions</span><span>20K clicks</span><span>20K database</span></div><div className="case-result"><strong>1M+</strong><span>views on the launch film alone</span></div><button className="text-link" onClick={()=>setActiveVideo(leapVideo)}>Watch the launch film <Arrow/></button></div>
      </article>
      <article className="project project-fi" data-reveal>
        <a className="project-visual" href="https://webinars.figlobal.com/webinar-series/" target="_blank" rel="noreferrer"><img src="/assets/figlobal-webinar.webp" alt="Fi Global webinar series"/><span className="play">VISIT</span><span className="image-index mono">04</span></a>
        <div className="project-copy"><div className="project-meta mono">Fi Global · Webinar business</div><h3>I owned the full program—from idea to revenue.</h3><div className="campaign-story"><p>I owned the webinar series end to end: audience proposition, program design, topic roadmap, speaker and sponsor coordination, promotion, marketing automation, live delivery, reporting and optimization.</p><p>The result was not simply a content calendar. It became a repeatable audience product for Fi Global and a commercial sponsorship proposition that generated new revenue.</p></div><div className="campaign-role">My ownership · Strategy, production, audience growth, sponsor delivery and performance</div><div className="campaign-scope"><span>20 webinars</span><span>700 registrations / session</span><span>43% attendance</span></div><div className="case-result"><strong>€120K</strong><span>sponsorship revenue generated</span></div><a className="text-link" href="https://webinars.figlobal.com/webinar-series/" target="_blank" rel="noreferrer">View the series <Arrow/></a></div>
      </article>
    </section>

    <section className="results" id="results">
      <div className="results-title" data-reveal><span className="mono">03 / LEAD GENERATION</span><h2>Focused demand for a narrow, senior audience.</h2><p>The brief was not mass lead volume. It was reaching C-level decision-makers with minimal paid budget and turning event-led engagement into commercial conversations.</p></div>
      <div className="demand-context" data-reveal><div><strong>C-level</strong><span>High-value, difficult-to-reach target audience</span></div><div><strong>Lean budget</strong><span>Paid media used selectively—not as the primary engine</span></div><div><strong>Event-led</strong><span>Expert events and webinars created the reason to engage</span></div><div className="channel-strip"><i>2 × DRIPIFY CAMPAIGNS</i><i>2 × LINKEDIN CAMPAIGNS</i><i>24 × EMAIL JOURNEYS</i><i>SALES FOLLOW-UP</i></div></div>
      <div className="metric-list"><div className="metric" data-reveal><strong>143+</strong><span>qualified leads created across the new Enterprise and ISV portfolios</span><em>H1 2026</em></div><div className="metric" data-reveal><strong>50+</strong><span>opportunities created in CRM for structured commercial follow-up</span><em>PIPELINE</em></div><div className="metric" data-reveal><strong>6.6×</strong><span>ROI from a LinkedIn demand campaign, with CTR 26% above benchmark</span><em>LEAN PAID</em></div><div className="metric" data-reveal><strong>44.68%</strong><span>open rate across 24 personalized journeys to 2,727 targeted contacts</span><em>NURTURE</em></div></div>
    </section>

    <section className="ai-case" id="ai">
      <div className="ai-sticky" data-reveal><span className="mono">04 / AI WORKFLOW CASE</span><h2>More room for judgment. Less time lost to repetition.</h2><p>For the ISV webinar program, I designed a human-led workflow using Claude, Apify and Asana to turn approved event inputs into structured campaign drafts.</p></div>
      <div className="workflow">
        <div className="workflow-step" data-reveal><span className="mono">01</span><div><h3>Collect</h3><p>Public, approved webinar sources are captured into a consistent input structure.</p></div></div>
        <div className="workflow-step" data-reveal><span className="mono">02</span><div><h3>Generate</h3><p>Claude drafts emails, social posts and supporting assets against a defined framework.</p></div></div>
        <div className="workflow-step" data-reveal><span className="mono">03</span><div><h3>Orchestrate</h3><p>Asana routes the work, replacing handoffs and roughly 120 coordination emails.</p></div></div>
        <div className="workflow-step coral" data-reveal><span className="mono">04</span><div><h3>Review</h3><p>Human review remains mandatory before anything is scheduled or published.</p></div></div>
        <div className="ai-outcomes" data-reveal><div><strong>120 → 20</strong><span>minutes per webinar</span></div><div><strong>40+</strong><span>hours saved</span></div><div><strong>60</strong><span>assets auto-drafted</span></div></div>
      </div>
    </section>

    <section className="sectors section-grid">
      <div className="section-label mono" data-reveal>05 / SECTOR FIT</div><div className="sector-content" data-reveal><p className="eyebrow">Telco · Travel · Fintech</p><h2>Direct sector tenure? No. Transferable B2B complexity? Yes.</h2><p className="sector-lead">My experience is adjacent rather than employed directly inside these three sectors. The relevant pattern is marketing platforms and propositions across ecosystems where buyers, partners, users and commercial teams each need a different reason to believe.</p><div className="sector-grid"><div><span>Telco</span><p>Partner-led services, digital distribution and multi-stakeholder value stories.</p></div><div><span>Travel</span><p>Experience-led journeys, international audiences and lifecycle communication.</p></div><div><span>Fintech</span><p>Trust, clarity and education around complex digital products and transactions.</p></div></div></div>
    </section>

    <footer id="contact"><div className="footer-top mono"><span>06 / LET’S TALK</span><span>AVAILABLE FOR THE NEXT CHALLENGE</span></div><h2>Let’s make the complex feel inevitable.</h2><p>Islam Elsaeed · Senior B2B marketing · Strategy, content, demand and AI-enabled workflows</p><a href="#top">Back to top ↑</a></footer>
    {activeVideo&&<div className="video-modal" role="dialog" aria-modal="true" aria-label={activeVideo.title} onMouseDown={e=>e.target===e.currentTarget&&setActiveVideo(null)}><div className="modal-frame"><button className="modal-close" onClick={()=>setActiveVideo(null)}>CLOSE ×</button><iframe src={`https://www.youtube-nocookie.com/embed/${activeVideo.id}?autoplay=1&rel=0`} title={activeVideo.title} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen/></div></div>}
  </main>;
}
