import { useState, useRef, useEffect } from "react";
import { ProgressDots, Btn, Chip, Input, IntegrationCard, SliderOption, StepLabel, StepTitle, StepDesc } from "./ui";
import { type OnboardingData, type StepProps, defaultData, t } from "./types";

const STEPS = [
  "lang", "name", "business", "priorities", "email_connect", "email_prefs",
  "social_connect", "social_voice", "soul", "comms", "boundaries", "review", "alive"
];

const API_BASE = (typeof window !== "undefined" && (window as any).__CLAWDADDY_API__) || "";

// ── Step Components ──

const StepLang = ({ data, setData, next }: StepProps) => {
  const [show, setShow] = useState(false);
  useEffect(() => { setTimeout(() => setShow(true), 100); }, []);
  return (
    <div className={`text-center transition-all duration-500 ${show ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
      <div className="w-16 h-16 bg-primary rounded-2xl flex items-center justify-center mx-auto mb-4">
        <span className="text-white font-bold text-3xl">C</span>
      </div>
      <h1 className="text-3xl font-bold text-text-primary mb-2">ClawDaddy</h1>
      <p className="text-text-secondary text-sm mb-10">Your AI assistant. From your pocket.</p>
      <div className="flex gap-3 justify-center mb-10">
        {[{ code: "en", label: "English", flag: "\u{1F1FA}\u{1F1F8}" }, { code: "es", label: "Espa\u00F1ol", flag: "\u{1F1F2}\u{1F1FD}" }].map((l) => (
          <button
            key={l.code}
            onClick={() => setData({ ...data, lang: l.code })}
            className={`px-5 py-4 rounded-2xl text-base font-bold transition-all flex items-center gap-2 sm:gap-3 sm:px-8 ${
              data.lang === l.code
                ? "border-2 border-primary bg-primary-light text-primary"
                : "border-2 border-border bg-white text-text-secondary"
            }`}
          >
            <span className="text-2xl">{l.flag}</span> {l.label}
          </button>
        ))}
      </div>
      <Btn onClick={next}>{t(data, "Let's go", "Empecemos")}</Btn>
    </div>
  );
};

const StepName = ({ data, setData, next }: StepProps) => (
  <div>
    <StepLabel text={t(data, "Step 1 of 11", "Paso 1 de 11")} />
    <StepTitle text={t(data, "What's your name?", "\u00BFC\u00F3mo te llamas?")} />
    <StepDesc text={t(data, "Let's get to know you.", "Vamos a conocerte.")} />
    <div className="flex flex-col gap-4">
      <Input placeholder={t(data, "Your first name", "Tu nombre")} value={data.firstName} onChange={(v) => setData({ ...data, firstName: v })} large />
      <Input placeholder={t(data, "Your last name", "Tu apellido")} value={data.lastName} onChange={(v) => setData({ ...data, lastName: v })} />
    </div>
    <div className="mt-8">
      <Btn onClick={next} disabled={!data.firstName}>{t(data, "Continue", "Siguiente")}</Btn>
    </div>
  </div>
);

const StepBusiness = ({ data, setData, next }: StepProps) => {
  const types = [
    { emoji: "\u{1F3EA}", label: t(data, "Retail / Shop", "Tienda / Retail"), value: "retail" },
    { emoji: "\u{1F37D}\u{FE0F}", label: t(data, "Restaurant / Food", "Restaurante"), value: "restaurant" },
    { emoji: "\u{1F527}", label: t(data, "Services / Trades", "Servicios"), value: "services" },
    { emoji: "\u{1F4BB}", label: t(data, "Tech / Digital", "Tecnolog\u00EDa"), value: "tech" },
    { emoji: "\u{1F3E5}", label: t(data, "Health / Wellness", "Salud"), value: "health" },
    { emoji: "\u{1F4F1}", label: t(data, "Creator / Agency", "Creador"), value: "creator" },
    { emoji: "\u{1F3E0}", label: t(data, "Real Estate", "Bienes ra\u00EDces"), value: "realestate" },
    { emoji: "\u{1F4E6}", label: t(data, "Other", "Otro"), value: "other" },
  ];
  return (
    <div>
      <StepLabel text={t(data, "Step 2 of 11", "Paso 2 de 11")} />
      <StepTitle text={t(data, "Tell me about your business", "Cu\u00E9ntame de tu negocio")} />
      <StepDesc text={t(data, "ClawDaddy adapts to your industry.", "ClawDaddy se adapta a tu industria.")} />
      <Input placeholder={t(data, "Business name", "Nombre del negocio")} value={data.bizName} onChange={(v) => setData({ ...data, bizName: v })} />
      <div className="mt-5 flex flex-wrap gap-2">
        {types.map((tp) => <Chip key={tp.value} emoji={tp.emoji} label={tp.label} selected={data.bizType === tp.value} onClick={() => setData({ ...data, bizType: tp.value })} />)}
      </div>
      <div className="mt-4">
        <div className="text-text-secondary text-sm mb-2">{t(data, "Team size", "Tama\u00F1o del equipo")}</div>
        <div className="flex flex-wrap gap-2">
          {[
            { l: t(data, "Just me", "Solo yo"), v: "solo" },
            { l: "2–5", v: "small" },
            { l: "6–20", v: "medium" },
            { l: "20+", v: "large" },
          ].map((s) => (
            <Chip key={s.v} label={s.l} selected={data.teamSize === s.v} onClick={() => setData({ ...data, teamSize: s.v })} />
          ))}
        </div>
      </div>
      <div className="mt-8">
        <Btn onClick={next} disabled={!data.bizName || !data.bizType}>{t(data, "Continue", "Siguiente")}</Btn>
      </div>
    </div>
  );
};

const StepPriorities = ({ data, setData, next }: StepProps) => {
  const toggle = (id: string) => {
    const p = data.priorities;
    setData({ ...data, priorities: p.includes(id) ? p.filter((x) => x !== id) : [...p, id] });
  };
  const items = [
    { id: "inbox", emoji: "\u{1F4E7}", label: t(data, "Conquer my inbox", "Dominar mi email"), desc: t(data, "Read, sort, draft replies", "Leer, clasificar, responder") },
    { id: "social", emoji: "\u{1F4F1}", label: t(data, "Run my social media", "Redes sociales"), desc: t(data, "Post, engage, grow", "Publicar, interactuar, crecer") },
    { id: "research", emoji: "\u{1F50D}", label: t(data, "Research & intel", "Investigaci\u00F3n"), desc: t(data, "Competitors, leads, trends", "Competencia, leads, tendencias") },
    { id: "leads", emoji: "\u{1F3AF}", label: t(data, "Generate leads", "Generar leads"), desc: t(data, "Find and reach prospects", "Encontrar y contactar clientes") },
    { id: "content", emoji: "\u{270D}\u{FE0F}", label: t(data, "Create content", "Crear contenido"), desc: t(data, "Blogs, posts, newsletters", "Blogs, posts, newsletters") },
    { id: "dev", emoji: "\u{1F6E0}\u{FE0F}", label: t(data, "Dev / tech tasks", "Tareas t\u00E9cnicas"), desc: t(data, "Code, automation, APIs", "C\u00F3digo, automatizaci\u00F3n, APIs") },
  ];
  return (
    <div>
      <StepLabel text={t(data, "Step 3 of 11", "Paso 3 de 11")} />
      <StepTitle text={t(data, "What do you need help with?", "\u00BFEn qu\u00E9 necesitas ayuda?")} />
      <StepDesc text={t(data, "Pick all that apply. We'll start with what matters most.", "Selecciona todo lo que aplique.")} />
      <div className="flex flex-col gap-2.5">
        {items.map((item) => (
          <div
            key={item.id}
            onClick={() => toggle(item.id)}
            className={`flex items-center gap-3.5 p-4 rounded-2xl cursor-pointer transition-all ${
              data.priorities.includes(item.id) ? "border-2 border-primary bg-primary-light" : "border-2 border-border bg-white"
            }`}
          >
            <span className="text-2xl">{item.emoji}</span>
            <div className="flex-1">
              <div className="text-text-primary text-sm font-bold">{item.label}</div>
              <div className="text-text-secondary text-xs">{item.desc}</div>
            </div>
            <div className={`w-6 h-6 rounded-lg flex items-center justify-center text-xs font-bold ${
              data.priorities.includes(item.id) ? "bg-primary text-white" : "border-2 border-border"
            }`}>
              {data.priorities.includes(item.id) && "\u2713"}
            </div>
          </div>
        ))}
      </div>
      <div className="mt-6">
        <Btn onClick={next} disabled={!data.priorities.length}>{t(data, "Continue", "Siguiente")}</Btn>
      </div>
    </div>
  );
};

const StepEmailConnect = ({ data, setData, next }: StepProps) => {
  const [connecting, setConnecting] = useState<string | null>(null);
  const connect = (provider: string) => {
    setConnecting(provider);
    setTimeout(() => {
      setData({ ...data, emailProvider: provider, emailConnected: true });
      setConnecting(null);
    }, 1500);
  };
  return (
    <div>
      <StepLabel text={t(data, "Step 4 of 11", "Paso 4 de 11")} />
      <StepTitle text={t(data, "Connect your email", "Conecta tu email")} />
      <div className="bg-primary-light border border-primary/20 rounded-xl p-3 mb-6">
        <p className="text-primary/80 text-xs">{t(data, "Read-only to start. We never send without your approval.", "Solo lectura al principio. Nunca enviamos sin tu permiso.")}</p>
      </div>
      <div className="flex flex-col gap-3">
        <IntegrationCard icon={connecting === "gmail" ? "\u23F3" : "\u{1F4E7}"} name="Gmail" desc={t(data, "Google Workspace or personal", "Google Workspace o personal")} connected={data.emailConnected && data.emailProvider === "gmail"} onConnect={() => connect("gmail")} labelLinked={t(data, "Linked", "Conectado")} labelConnect={t(data, "Connect", "Conectar")} />
        <IntegrationCard icon={connecting === "outlook" ? "\u23F3" : "\u{1F4E8}"} name="Outlook" desc={t(data, "Microsoft 365 or personal", "Microsoft 365 o personal")} connected={data.emailConnected && data.emailProvider === "outlook"} onConnect={() => connect("outlook")} labelLinked={t(data, "Linked", "Conectado")} labelConnect={t(data, "Connect", "Conectar")} />
      </div>
      <div className="mt-8"><Btn onClick={next} disabled={!data.emailConnected}>{t(data, "Continue", "Siguiente")}</Btn></div>
      <button onClick={next} className="w-full text-center text-text-secondary text-sm mt-3 hover:text-text-primary transition-colors">
        {t(data, "Skip for now \u2192", "Saltar por ahora \u2192")}
      </button>
    </div>
  );
};

const StepEmailPrefs = ({ data, setData, next }: StepProps) => (
  <div>
    <StepLabel text={t(data, "Step 5 of 11", "Paso 5 de 11")} />
    <StepTitle text={t(data, "How should I handle your email?", "\u00BFC\u00F3mo manejo tu email?")} />
    <StepDesc text={t(data, "You can change these anytime.", "Puedes cambiar esto cuando quieras.")} />
    <SliderOption label={t(data, "Autonomy level", "Nivel de autonom\u00EDa")} value={data.emailAutonomy}
      onChange={(v) => setData({ ...data, emailAutonomy: v })}
      options={[
        { emoji: "\u{1F440}", label: t(data, "Read only", "Solo leer"), value: "read" },
        { emoji: "\u{1F4DD}", label: t(data, "Draft for me", "Borrador"), value: "draft" },
        { emoji: "\u{1F680}", label: t(data, "Send for me", "Enviar"), value: "send" },
      ]} />
    <SliderOption label={t(data, "Marketing / spam emails", "Emails de marketing / spam")} value={data.emailSpam}
      onChange={(v) => setData({ ...data, emailSpam: v })}
      options={[
        { emoji: "\u{1F4C2}", label: t(data, "Archive", "Archivar"), value: "archive" },
        { emoji: "\u{1F5D1}\u{FE0F}", label: t(data, "Delete", "Eliminar"), value: "delete" },
        { emoji: "\u{1F937}", label: t(data, "Ask me", "Preguntar"), value: "ask" },
      ]} />
    <SliderOption label={t(data, "Daily digest", "Resumen diario")} value={data.emailDigest}
      onChange={(v) => setData({ ...data, emailDigest: v })}
      options={[
        { emoji: "\u{1F305}", label: t(data, "Morning", "Ma\u00F1ana"), value: "morning" },
        { emoji: "\u{1F319}", label: t(data, "Evening", "Noche"), value: "evening" },
        { emoji: "\u26A1", label: t(data, "Real-time", "Tiempo real"), value: "realtime" },
      ]} />
    <div className="mt-6"><Btn onClick={next}>{t(data, "Continue", "Siguiente")}</Btn></div>
  </div>
);

const StepSocialConnect = ({ data, setData, next }: StepProps) => {
  const [connecting, setConnecting] = useState<string | null>(null);
  const toggle = (platform: string) => {
    setConnecting(platform);
    setTimeout(() => {
      const s = { ...data.socials };
      s[platform] = !s[platform];
      setData({ ...data, socials: s });
      setConnecting(null);
    }, 1200);
  };
  const platforms = [
    { id: "twitter", icon: "\u{1D54F}", name: "X (Twitter)", desc: t(data, "Post, reply, grow your audience", "Publicar, responder, crecer") },
    { id: "linkedin", icon: "in", name: "LinkedIn", desc: t(data, "Professional network", "Red profesional") },
    { id: "instagram", icon: "\u{1F4F7}", name: "Instagram", desc: t(data, "Visual content & stories", "Contenido visual"), locked: data.tier === "claw" },
    { id: "reddit", icon: "\u{1F916}", name: "Reddit", desc: t(data, "Communities & trends", "Comunidades y tendencias") },
  ];
  return (
    <div>
      <StepLabel text={t(data, "Step 6 of 11", "Paso 6 de 11")} />
      <StepTitle text={t(data, "Connect your socials", "Conecta tus redes")} />
      <StepDesc text={t(data, "ClawDaddy becomes your voice \u2014 invisible, consistent, always on.", "ClawDaddy ser\u00E1 tu voz \u2014 invisible, consistente, siempre activo.")} />
      <div className="flex flex-col gap-2.5">
        {platforms.map((p) => (
          <IntegrationCard key={p.id} icon={connecting === p.id ? "\u23F3" : p.icon} name={p.name} desc={p.desc} connected={data.socials[p.id]} locked={p.locked} onConnect={() => toggle(p.id)} labelLinked={t(data, "Linked", "Conectado")} labelPro={t(data, "Pro", "Pro")} labelConnect={t(data, "Connect", "Conectar")} />
        ))}
      </div>
      <div className="mt-6"><Btn onClick={next}>{t(data, "Continue", "Siguiente")}</Btn></div>
      <button onClick={next} className="w-full text-center text-text-secondary text-sm mt-3 hover:text-text-primary transition-colors">
        {t(data, "Skip for now \u2192", "Saltar por ahora \u2192")}
      </button>
    </div>
  );
};

const StepSocialVoice = ({ data, setData, next }: StepProps) => (
  <div>
    <StepLabel text={t(data, "Step 7 of 11", "Paso 7 de 11")} />
    <StepTitle text={t(data, "How do you sound on social?", "\u00BFC\u00F3mo suenas en redes?")} />
    <StepDesc text={t(data, "ClawDaddy will mirror your style. Nobody will notice.", "ClawDaddy imitar\u00E1 tu estilo. Nadie notar\u00E1 la diferencia.")} />
    <SliderOption label={t(data, "Tone", "Tono")} value={data.socialTone}
      onChange={(v) => setData({ ...data, socialTone: v })}
      options={[
        { emoji: "\u{1F454}", label: t(data, "Professional", "Profesional"), value: "formal" },
        { emoji: "\u2696\u{FE0F}", label: t(data, "Balanced", "Equilibrado"), value: "balanced" },
        { emoji: "\u{1F60E}", label: t(data, "Casual", "Casual"), value: "casual" },
      ]} />
    <SliderOption label={t(data, "Posting frequency", "Frecuencia")} value={data.postFreq}
      onChange={(v) => setData({ ...data, postFreq: v })}
      options={[
        { emoji: "\u{1F422}", label: t(data, "Few / week", "Semanal"), value: "weekly" },
        { emoji: "\u{1F4C5}", label: t(data, "Daily", "Diario"), value: "daily" },
        { emoji: "\u26A1", label: t(data, "Aggressive", "Agresivo"), value: "aggressive" },
      ]} />
    <SliderOption label={t(data, "Engagement", "Engagement")} value={data.engagement}
      onChange={(v) => setData({ ...data, engagement: v })}
      options={[
        { emoji: "\u{1F910}", label: t(data, "Minimal", "M\u00EDnimo"), value: "minimal" },
        { emoji: "\u{1F44B}", label: t(data, "Moderate", "Moderado"), value: "moderate" },
        { emoji: "\u{1F4AA}", label: t(data, "Full send", "M\u00E1ximo"), value: "max" },
      ]} />
    <div className="mt-6"><Btn onClick={next}>{t(data, "Continue", "Siguiente")}</Btn></div>
  </div>
);

const StepSoul = ({ data, setData, next }: StepProps) => {
  const msgs: Record<string, Record<string, string>> = {
    formal: { en: '"Thank you for reaching out. I\'ll follow up shortly with the details you requested."', es: '"Gracias por tu mensaje. Te respondo a la brevedad con los detalles solicitados."' },
    balanced: { en: '"Thanks for reaching out! I\'ll get those details over to you soon."', es: '"\u00A1Gracias por escribir! Te mando los detalles pronto."' },
    casual: { en: '"Hey! Sending that over now, give me a sec"', es: '"\u00A1Qu\u00E9 onda! Ya te mando eso, dame un sec"' },
  };
  const sampleMsg = msgs[data.soulTone]?.[data.lang] || msgs.balanced.en;
  return (
    <div>
      <StepLabel text={t(data, "Step 8 of 11", "Paso 8 de 11")} />
      <StepTitle text={t(data, "Your assistant's personality", "La personalidad de tu asistente")} />
      <StepDesc text={t(data, "This defines how it talks, thinks, and acts as you.", "Esto define c\u00F3mo habla, piensa y act\u00FAa como t\u00FA.")} />
      <SliderOption label={t(data, "Communication style", "Estilo de comunicaci\u00F3n")} value={data.soulTone}
        onChange={(v) => setData({ ...data, soulTone: v })}
        options={[
          { emoji: "\u{1F3A9}", label: t(data, "Formal", "Formal"), value: "formal" },
          { emoji: "\u{1F60A}", label: t(data, "Friendly", "Amigable"), value: "balanced" },
          { emoji: "\u{1F60E}", label: t(data, "Chill", "Relajado"), value: "casual" },
        ]} />
      <SliderOption label={t(data, "Emoji use", "Uso de emojis")} value={data.emojiLevel}
        onChange={(v) => setData({ ...data, emojiLevel: v })}
        options={[
          { emoji: "\u{1F6AB}", label: t(data, "Never", "Nunca"), value: "none" },
          { emoji: "\u{1F642}", label: t(data, "Sometimes", "A veces"), value: "some" },
          { emoji: "\u{1F389}", label: t(data, "Lots", "Siempre"), value: "lots" },
        ]} />
      <SliderOption label={t(data, "Default language", "Idioma predeterminado")} value={data.soulLang}
        onChange={(v) => setData({ ...data, soulLang: v })}
        options={[
          { emoji: "\u{1F1FA}\u{1F1F8}", label: "English", value: "en" },
          { emoji: "\u{1F1F2}\u{1F1FD}", label: "Espa\u00F1ol", value: "es" },
          { emoji: "\u{1F504}", label: t(data, "Both", "Ambos"), value: "both" },
        ]} />
      <div className="bg-bg-page border border-border rounded-xl p-4 mt-2">
        <div className="text-text-secondary text-xs font-bold mb-2 tracking-wide">
          {t(data, "PREVIEW \u2014 THIS IS HOW I'LL SOUND:", "VISTA PREVIA \u2014 AS\u00CD SONAR\u00C9:")}
        </div>
        <div className="text-primary text-sm italic leading-relaxed">{sampleMsg}</div>
      </div>
      <div className="mt-6"><Btn onClick={next}>{t(data, "Continue", "Siguiente")}</Btn></div>
    </div>
  );
};

const StepComms = ({ data, setData, next }: StepProps) => {
  const toggle = (id: string) => {
    const c = data.commsChannels;
    setData({ ...data, commsChannels: c.includes(id) ? c.filter((x) => x !== id) : [...c, id] });
  };
  const channels = [
    { id: "push", emoji: "\u{1F514}", label: t(data, "Push notifications", "Push notifications"), desc: t(data, "Instant alerts on your phone", "Alertas instant\u00E1neas en tu tel\u00E9fono") },
    { id: "digest", emoji: "\u{1F4CB}", label: t(data, "Daily digest", "Resumen diario"), desc: t(data, "One summary of everything I did", "Un resumen de todo lo que hice") },
    { id: "sms", emoji: "\u{1F4AC}", label: "SMS / Text", desc: t(data, "For urgent items only", "Para cosas urgentes") },
    { id: "whatsapp", emoji: "\u{1F4F1}", label: "WhatsApp", desc: t(data, "Chat with me like a friend", "Chatea conmigo como con un amigo") },
  ];
  return (
    <div>
      <StepLabel text={t(data, "Step 9 of 11", "Paso 9 de 11")} />
      <StepTitle text={t(data, "How should we reach you?", "\u00BFC\u00F3mo te avisamos?")} />
      <StepDesc text={t(data, "When we need your attention or have updates.", "Cuando necesitemos tu atenci\u00F3n o tengamos updates.")} />
      {channels.map((ch) => (
        <div key={ch.id} onClick={() => toggle(ch.id)} className={`flex items-center gap-3.5 p-4 rounded-2xl cursor-pointer transition-all mb-2.5 ${
          data.commsChannels.includes(ch.id) ? "border-2 border-primary bg-primary-light" : "border-2 border-border bg-white"
        }`}>
          <span className="text-2xl">{ch.emoji}</span>
          <div className="flex-1">
            <div className="text-text-primary text-sm font-bold">{ch.label}</div>
            <div className="text-text-secondary text-xs">{ch.desc}</div>
          </div>
          <div className={`w-6 h-6 rounded-lg flex items-center justify-center text-xs font-bold ${
            data.commsChannels.includes(ch.id) ? "bg-primary text-white" : "border-2 border-border"
          }`}>
            {data.commsChannels.includes(ch.id) && "\u2713"}
          </div>
        </div>
      ))}
      <div className="mt-6"><Btn onClick={next}>{t(data, "Continue", "Siguiente")}</Btn></div>
    </div>
  );
};

const StepBoundaries = ({ data, setData, next }: StepProps) => (
  <div>
    <StepLabel text={t(data, "Step 10 of 11", "Paso 10 de 11")} />
    <StepTitle text={t(data, "Rules & boundaries", "Reglas y l\u00EDmites")} />
    <StepDesc text={t(data, "Your assistant respects your limits. Always.", "Tu asistente respeta tus l\u00EDmites. Siempre.")} />
    <SliderOption label={t(data, "Active hours", "Horario activo")} value={data.activeHours}
      onChange={(v) => setData({ ...data, activeHours: v })}
      options={[
        { emoji: "\u{1F3E2}", label: "9\u20135", value: "business" },
        { emoji: "\u{1F4C5}", label: t(data, "Extended", "Extendido"), value: "extended" },
        { emoji: "\u{1F319}", label: "24/7", value: "always" },
      ]} />
    <SliderOption label={t(data, "Before taking important actions...", "Antes de actuar en algo importante...")} value={data.approvalLevel}
      onChange={(v) => setData({ ...data, approvalLevel: v })}
      options={[
        { emoji: "\u270B", label: t(data, "Always ask me", "Siempre preguntar"), value: "always_ask" },
        { emoji: "\u26A0\u{FE0F}", label: t(data, "Only big stuff", "Solo lo importante"), value: "ask" },
        { emoji: "\u{1F3CE}\u{FE0F}", label: t(data, "I trust you", "Conf\u00EDo en ti"), value: "autonomous" },
      ]} />
    <div className="mt-2">
      <div className="text-text-primary text-sm font-semibold mb-2">
        {t(data, "Anything your assistant should NEVER do:", "Algo que tu asistente NUNCA debe hacer:")}
      </div>
      <textarea
        value={data.neverDo}
        onChange={(e) => setData({ ...data, neverDo: e.target.value })}
        placeholder={t(data, "E.g. Never respond to my ex, never post about politics...", "Ej: Nunca responder a mi ex, nunca postear sobre pol\u00EDtica...")}
        className="w-full h-20 p-3 rounded-xl border-2 border-border bg-bg-page text-text-primary text-sm resize-none outline-none focus:border-primary/50 focus:ring-2 focus:ring-primary/10 transition-all"
      />
    </div>
    <div className="mt-6"><Btn onClick={next}>{t(data, "Continue", "Siguiente")}</Btn></div>
  </div>
);

const StepReview = ({ data, next }: StepProps & { next: () => void }) => {
  const socials = Object.entries(data.socials).filter(([, v]) => v).map(([k]) => k);
  const rows = [
    { label: t(data, "Name", "Nombre"), value: `${data.firstName} ${data.lastName}`.trim() },
    { label: t(data, "Business", "Negocio"), value: `${data.bizName || "\u2014"} (${data.bizType || "\u2014"})` },
    { label: t(data, "Priorities", "Prioridades"), value: data.priorities.join(", ") || "\u2014" },
    { label: "Email", value: data.emailConnected ? `${data.emailProvider} \u2705` : t(data, "Not connected", "No conectado") },
    { label: t(data, "Socials", "Redes"), value: socials.length ? socials.join(", ") : t(data, "None yet", "Ninguna a\u00FAn") },
    { label: t(data, "Voice", "Tono"), value: data.soulTone },
    { label: t(data, "Hours", "Horario"), value: data.activeHours },
    { label: t(data, "Approval", "Aprobaci\u00F3n"), value: data.approvalLevel },
  ];
  return (
    <div>
      <StepLabel text={t(data, "Step 11 of 11", "Paso 11 de 11")} />
      <StepTitle text={t(data, "Your ClawDaddy is ready", "Tu ClawDaddy est\u00E1 listo")} />
      <StepDesc text={t(data, "Here's what we're working with:", "Revisa tu configuraci\u00F3n:")} />
      <div className="flex flex-col gap-2.5">
        {rows.map((item, i) => (
          <div key={i} className="flex justify-between p-3 rounded-xl bg-bg-page border border-border">
            <span className="text-text-secondary text-sm">{item.label}</span>
            <span className="text-text-primary text-sm font-semibold text-right max-w-[60%]">{item.value}</span>
          </div>
        ))}
      </div>
      <div className="mt-8">
        <Btn onClick={next}>{t(data, "Activate ClawDaddy", "Activar ClawDaddy")}</Btn>
      </div>
    </div>
  );
};

const StepAlive = ({ data }: { data: OnboardingData }) => {
  const [phase, setPhase] = useState(0);
  const [dots, setDots] = useState("");
  useEffect(() => {
    const steps = [800, 2200, 3400, 4400, 5400];
    const timers = steps.map((delay, i) => setTimeout(() => setPhase(i + 1), delay));
    const dotInt = setInterval(() => setDots((d) => (d.length >= 3 ? "" : d + ".")), 400);
    return () => { timers.forEach(clearTimeout); clearInterval(dotInt); };
  }, []);

  // Send onboarding data to API
  useEffect(() => {
    if (!API_BASE) return;
    const token = sessionStorage.getItem("clawdaddy_token");
    if (!token) return;
    fetch(`${API_BASE}/onboarding/save`, {
      method: "POST",
      headers: { "Content-Type": "application/json", Authorization: `Bearer ${token}` },
      body: JSON.stringify({
        first_name: data.firstName, last_name: data.lastName,
        biz_name: data.bizName, biz_type: data.bizType, team_size: data.teamSize,
        priorities: data.priorities, email_provider: data.emailProvider,
        email_connected: data.emailConnected, email_autonomy: data.emailAutonomy,
        email_spam: data.emailSpam, email_digest: data.emailDigest,
        socials: data.socials, social_tone: data.socialTone, post_freq: data.postFreq,
        engagement: data.engagement, soul_tone: data.soulTone, emoji_level: data.emojiLevel,
        soul_lang: data.soulLang, comms_channels: data.commsChannels,
        active_hours: data.activeHours, approval_level: data.approvalLevel,
        never_do: data.neverDo, current_step: 13,
      }),
    }).then(() => fetch(`${API_BASE}/onboarding/activate`, {
      method: "POST",
      headers: { Authorization: `Bearer ${token}` },
    })).catch(() => {});
  }, []);

  const msgs = data.lang === "es"
    ? ["Creando tu entorno privado", "Instalando cerebro de IA", "Conectando tus cuentas", "Configurando modo invisible", "Tu ClawDaddy est\u00E1 listo"]
    : ["Spinning up your private environment", "Installing AI brain", "Linking your accounts", "Activating stealth mode", "You're all set!"];
  const icons = ["\u2699\u{FE0F}", "\u{1F9E0}", "\u{1F517}", "\u{1F47B}", "\u2705"];

  return (
    <div className="text-center min-h-[400px] flex flex-col justify-center">
      {phase < 5 ? (
        <>
          <div className="text-5xl mb-6 animate-pulse">{icons[phase]}</div>
          <div className="text-primary text-lg font-bold mb-2">{msgs[phase]}{dots}</div>
          <div className="w-3/5 mx-auto h-1 rounded-full bg-border overflow-hidden mt-5">
            <div className="h-full rounded-full bg-primary transition-all duration-700" style={{ width: `${(phase + 1) * 20}%` }} />
          </div>
        </>
      ) : (
        <div className="animate-[fadeUp_0.8s_ease]">
          <div className="w-20 h-20 bg-success rounded-full flex items-center justify-center mx-auto mb-4">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h1 className="text-2xl font-bold text-text-primary mb-2">
            {t(data, "You're all set!", "\u00A1Listo!")}
          </h1>
          <p className="text-text-secondary text-sm mb-8 leading-relaxed">
            {t(data, `${data.firstName}, your AI assistant is now running. Check your dashboard to see what it's doing.`, `${data.firstName}, tu asistente IA ya est\u00E1 trabajando. Revisa el dashboard para ver qu\u00E9 est\u00E1 haciendo.`)}
          </p>
          <div className="bg-bg-page border border-border rounded-2xl p-5 text-left mb-6">
            <div className="text-primary text-xs font-bold tracking-wide mb-3">
              {t(data, "RIGHT NOW I'M:", "AHORA MISMO ESTOY:")}
            </div>
            {[
              data.emailConnected && t(data, "Scanning your inbox...", "Escaneando tu inbox..."),
              Object.values(data.socials).some(Boolean) && t(data, "Learning your social voice...", "Aprendiendo tu voz en redes..."),
              t(data, "Building your memory...", "Construyendo tu memoria..."),
            ].filter(Boolean).map((msg, i) => (
              <div key={i} className="text-text-primary text-sm py-2 border-b border-border last:border-0">{msg}</div>
            ))}
          </div>
          <Btn onClick={() => {}}>{t(data, "Go to dashboard \u2192", "Ir al dashboard \u2192")}</Btn>
        </div>
      )}
      <style>{`
        @keyframes fadeUp { from { opacity: 0; transform: translateY(20px); } to { opacity: 1; transform: translateY(0); } }
      `}</style>
    </div>
  );
};

// ── Main Orchestrator ──

export default function OnboardingFlow() {
  const [step, setStep] = useState(0);
  const [data, setData] = useState<OnboardingData>(defaultData);
  const containerRef = useRef<HTMLDivElement>(null);

  const next = () => {
    if (step < STEPS.length - 1) {
      setStep(step + 1);
      containerRef.current?.scrollTo({ top: 0, behavior: "smooth" });
    }
  };
  const back = () => { if (step > 0) setStep(step - 1); };

  const stepMap: Record<string, JSX.Element> = {
    lang: <StepLang data={data} setData={setData} next={next} />,
    name: <StepName data={data} setData={setData} next={next} />,
    business: <StepBusiness data={data} setData={setData} next={next} />,
    priorities: <StepPriorities data={data} setData={setData} next={next} />,
    email_connect: <StepEmailConnect data={data} setData={setData} next={next} />,
    email_prefs: <StepEmailPrefs data={data} setData={setData} next={next} />,
    social_connect: <StepSocialConnect data={data} setData={setData} next={next} />,
    social_voice: <StepSocialVoice data={data} setData={setData} next={next} />,
    soul: <StepSoul data={data} setData={setData} next={next} />,
    comms: <StepComms data={data} setData={setData} next={next} />,
    boundaries: <StepBoundaries data={data} setData={setData} next={next} />,
    review: <StepReview data={data} setData={setData} next={next} />,
    alive: <StepAlive data={data} />,
  };

  return (
    <div className="w-full max-w-md mx-auto min-h-screen bg-bg-page flex flex-col font-sans">
      {/* Back button */}
      {step > 0 && step < STEPS.length - 1 && (
        <button onClick={back} className="absolute top-10 left-3 w-11 h-11 flex items-center justify-center text-text-secondary text-2xl hover:text-text-primary transition-colors z-10 rounded-xl hover:bg-border/40">
          \u2190
        </button>
      )}

      {/* Progress */}
      {step > 0 && step < STEPS.length - 1 && (
        <ProgressDots current={step - 1} total={STEPS.length - 2} />
      )}

      {/* Content */}
      <div ref={containerRef} className={`flex-1 overflow-y-auto ${step === 0 ? "pt-16 px-4 sm:px-6 pb-10" : "pt-4 px-4 sm:px-6 pb-10"}`}>
        {stepMap[STEPS[step]]}
      </div>
    </div>
  );
}
