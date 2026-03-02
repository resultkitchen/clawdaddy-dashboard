import { useState, useEffect, useRef, useCallback } from "react";

// ── Types ──

interface User {
  id: string;
  email: string;
  name: string;
  lang: string;
  tier: string;
}

interface AgentStatus {
  container_status: string;
  identity_md: string;
  soul_md: string;
}

interface OnboardingData {
  email_provider?: string;
  email_connected?: boolean;
  socials?: Record<string, boolean>;
  first_name?: string;
  last_name?: string;
  biz_name?: string;
}

interface ChatMessage {
  id: string;
  role: "user" | "agent";
  text: string;
  ts: Date;
}

interface ActivityItem {
  id: string;
  icon: string;
  label: string;
  ts: Date;
}

// ── i18n ──

type Lang = "en" | "es";

const STRINGS: Record<string, Record<Lang, string>> = {
  "nav.settings": { en: "Settings", es: "Ajustes" },

  "status.running": { en: "Your ClawGrab is running", es: "Tu ClawGrab está activo" },
  "status.setting_up": { en: "Setting up...", es: "Configurando..." },
  "status.container": { en: "Container status", es: "Estado del contenedor" },
  "status.agent_label": { en: "Agent", es: "Agente" },

  "stats.emails": { en: "Emails handled", es: "Emails gestionados" },
  "stats.posts": { en: "Posts created", es: "Posts creados" },
  "stats.hours": { en: "Hours saved", es: "Horas ahorradas" },
  "stats.this_week": { en: "This week", es: "Esta semana" },

  "activity.title": { en: "Recent activity", es: "Actividad reciente" },
  "activity.empty": { en: "No activity yet. Your agent is warming up.", es: "Sin actividad aún. Tu agente está iniciando." },
  "activity.item1": { en: "Scanned inbox — 0 new emails", es: "Bandeja escaneada — 0 emails nuevos" },
  "activity.item2": { en: "Social post drafted", es: "Post borrador creado" },
  "activity.item3": { en: "Agent initialized", es: "Agente inicializado" },
  "activity.item4": { en: "Memory sync complete", es: "Sincronización de memoria completa" },
  "activity.item5": { en: "Checking scheduled tasks", es: "Revisando tareas programadas" },

  "chat.title": { en: "Chat with your agent", es: "Habla con tu agente" },
  "chat.placeholder": { en: "Ask your agent anything...", es: "Pregunta cualquier cosa..." },
  "chat.send": { en: "Send", es: "Enviar" },
  "chat.thinking": { en: "Thinking...", es: "Pensando..." },
  "chat.welcome": {
    en: "Hi! I'm your ClawGrab agent. I'm handling your emails, social posts, and more. What do you need?",
    es: "Hola! Soy tu agente ClawGrab. Estoy manejando tus emails, posts y más. ¿En qué te ayudo?",
  },
  "chat.error": {
    en: "Sorry, I couldn't process that. Try again in a moment.",
    es: "Lo siento, no pude procesar eso. Inténtalo de nuevo.",
  },

  "accounts.title": { en: "Connected accounts", es: "Cuentas conectadas" },
  "accounts.email": { en: "Email", es: "Email" },
  "accounts.social": { en: "Social", es: "Social" },
  "accounts.connected": { en: "Connected", es: "Conectado" },
  "accounts.not_connected": { en: "Not connected", es: "No conectado" },
  "accounts.none": { en: "No accounts connected yet.", es: "Sin cuentas conectadas aún." },

  "tier.claw": { en: "Claw", es: "Claw" },
  "tier.daddy": { en: "Daddy", es: "Daddy" },
  "tier.bigdaddy": { en: "Big Daddy", es: "Big Daddy" },

  "loading": { en: "Loading...", es: "Cargando..." },
  "error.auth": { en: "Session expired. Redirecting to login...", es: "Sesión expirada. Redirigiendo..." },
};

function t(lang: Lang, key: string): string {
  return STRINGS[key]?.[lang] ?? STRINGS[key]?.["en"] ?? key;
}

// ── API ──

const API_BASE =
  typeof window !== "undefined"
    ? (window as any).__CLAWGRAB_API__ || "https://api.clawgrab.app"
    : "https://api.clawgrab.app";

async function apiFetch<T>(
  path: string,
  token: string,
  options?: RequestInit
): Promise<{ data: T | null; status: number }> {
  try {
    const res = await fetch(`${API_BASE}${path}`, {
      ...options,
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
        ...(options?.headers ?? {}),
      },
    });
    if (!res.ok) return { data: null, status: res.status };
    const data = await res.json();
    return { data, status: res.status };
  } catch {
    return { data: null, status: 0 };
  }
}

// ── Utility helpers ──

function tierLabel(tier: string, lang: Lang): string {
  const map: Record<string, string> = {
    claw: t(lang, "tier.claw"),
    daddy: t(lang, "tier.daddy"),
    bigdaddy: t(lang, "tier.bigdaddy"),
  };
  return map[tier] ?? tier;
}

function tierColor(tier: string): string {
  if (tier === "bigdaddy") return "bg-accent text-white";
  if (tier === "daddy") return "bg-primary text-white";
  return "bg-primary-light text-primary";
}

function formatTime(date: Date): string {
  return date.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
}

function relativeTime(date: Date, lang: Lang): string {
  const diff = Math.floor((Date.now() - date.getTime()) / 1000);
  if (diff < 60) return lang === "es" ? "justo ahora" : "just now";
  if (diff < 3600) {
    const m = Math.floor(diff / 60);
    return lang === "es" ? `hace ${m} min` : `${m}m ago`;
  }
  const h = Math.floor(diff / 3600);
  return lang === "es" ? `hace ${h}h` : `${h}h ago`;
}

function generateId(): string {
  return Math.random().toString(36).slice(2, 9);
}

// ── Sub-components ──

// Spinner
const Spinner = ({ size = 4 }: { size?: number }) => (
  <svg
    className={`w-${size} h-${size} animate-spin text-primary`}
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
  >
    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
    <path
      className="opacity-75"
      fill="currentColor"
      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
    />
  </svg>
);

// SettingsIcon
const SettingsIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="w-5 h-5"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth={1.8}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
    />
    <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
  </svg>
);

// SendIcon
const SendIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="w-4 h-4"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth={2}
  >
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
  </svg>
);

// ── Nav Bar ──

const NavBar = ({
  user,
  lang,
}: {
  user: User;
  lang: Lang;
}) => (
  <header className="sticky top-0 z-30 bg-white border-b border-border px-4 sm:px-6 h-14 flex items-center justify-between shadow-sm">
    {/* Logo + Brand */}
    <div className="flex items-center gap-2.5">
      <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center flex-shrink-0">
        <span className="text-white font-bold text-base leading-none">C</span>
      </div>
      <span className="text-text-primary font-bold text-base tracking-tight hidden sm:block">
        ClawGrab
      </span>
    </div>

    {/* Right side */}
    <div className="flex items-center gap-3">
      {/* Tier badge */}
      <span
        className={`px-2.5 py-1 rounded-lg text-xs font-bold ${tierColor(user.tier)}`}
      >
        {tierLabel(user.tier, lang)}
      </span>

      {/* User name */}
      <span className="text-text-primary text-sm font-medium hidden sm:block">
        {user.name || user.email}
      </span>

      {/* Avatar circle */}
      <div className="w-8 h-8 rounded-full bg-primary-light flex items-center justify-center flex-shrink-0">
        <span className="text-primary font-bold text-sm">
          {(user.name || user.email).charAt(0).toUpperCase()}
        </span>
      </div>

      {/* Settings */}
      <button
        aria-label={t(lang, "nav.settings")}
        className="w-8 h-8 flex items-center justify-center rounded-lg text-text-secondary hover:text-text-primary hover:bg-bg-page transition-colors"
      >
        <SettingsIcon />
      </button>
    </div>
  </header>
);

// ── Agent Status Card ──

const AgentStatusCard = ({
  status,
  loading,
  lang,
}: {
  status: AgentStatus | null;
  loading: boolean;
  lang: Lang;
}) => {
  const isRunning =
    status?.container_status === "running" || status?.container_status === "active";

  return (
    <div className="bg-white border border-border rounded-2xl p-5 shadow-sm">
      <div className="flex items-center gap-3">
        {/* Status indicator */}
        <div className="relative flex-shrink-0">
          {loading ? (
            <div className="w-11 h-11 rounded-xl bg-primary-light flex items-center justify-center">
              <Spinner size={5} />
            </div>
          ) : isRunning ? (
            <div className="w-11 h-11 rounded-xl bg-success/10 flex items-center justify-center">
              {/* Pulsing green dot */}
              <span className="relative flex h-4 w-4">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-success opacity-50" />
                <span className="relative inline-flex rounded-full h-4 w-4 bg-success" />
              </span>
            </div>
          ) : (
            <div className="w-11 h-11 rounded-xl bg-primary-light flex items-center justify-center">
              <Spinner size={5} />
            </div>
          )}
        </div>

        {/* Text */}
        <div className="flex-1 min-w-0">
          <div className="text-text-primary font-bold text-sm">
            {loading
              ? t(lang, "status.setting_up")
              : isRunning
              ? t(lang, "status.running")
              : t(lang, "status.setting_up")}
          </div>
          {status?.container_status && (
            <div className="text-text-secondary text-xs mt-0.5">
              {t(lang, "status.container")}:{" "}
              <span className="font-medium text-text-primary">
                {status.container_status}
              </span>
            </div>
          )}
        </div>

        {/* Agent label */}
        <div className="flex-shrink-0 px-2.5 py-1 rounded-lg bg-primary-light text-primary text-xs font-bold">
          {t(lang, "status.agent_label")}
        </div>
      </div>
    </div>
  );
};

// ── Quick Stats ──

const StatCard = ({
  label,
  value,
  icon,
  sublabel,
  colorClass,
  bgClass,
}: {
  label: string;
  value: string | number;
  icon: string;
  sublabel: string;
  colorClass: string;
  bgClass: string;
}) => (
  <div className="bg-white border border-border rounded-2xl p-4 shadow-sm flex-1 min-w-0">
    <div className={`w-9 h-9 rounded-xl ${bgClass} flex items-center justify-center mb-3`}>
      <span className="text-lg">{icon}</span>
    </div>
    <div className={`text-2xl font-bold ${colorClass} mb-0.5`}>{value}</div>
    <div className="text-text-primary text-xs font-semibold">{label}</div>
    <div className="text-text-secondary text-xs mt-0.5">{sublabel}</div>
  </div>
);

const QuickStats = ({ lang }: { lang: Lang }) => (
  <div className="flex gap-3">
    <StatCard
      label={t(lang, "stats.emails")}
      value={0}
      icon="📧"
      sublabel={t(lang, "stats.this_week")}
      colorClass="text-primary"
      bgClass="bg-primary-light"
    />
    <StatCard
      label={t(lang, "stats.posts")}
      value={0}
      icon="✍️"
      sublabel={t(lang, "stats.this_week")}
      colorClass="text-accent"
      bgClass="bg-accent-light"
    />
    <StatCard
      label={t(lang, "stats.hours")}
      value={0}
      icon="⏱️"
      sublabel={t(lang, "stats.this_week")}
      colorClass="text-success"
      bgClass="bg-success/10"
    />
  </div>
);

// ── Activity Feed ──

const PLACEHOLDER_ACTIVITY: ActivityItem[] = [
  { id: "a1", icon: "📧", label: "activity.item1", ts: new Date(Date.now() - 3 * 60000) },
  { id: "a2", icon: "✍️", label: "activity.item2", ts: new Date(Date.now() - 18 * 60000) },
  { id: "a3", icon: "🧠", label: "activity.item4", ts: new Date(Date.now() - 42 * 60000) },
  { id: "a4", icon: "⚡", label: "activity.item5", ts: new Date(Date.now() - 61 * 60000) },
  { id: "a5", icon: "🤖", label: "activity.item3", ts: new Date(Date.now() - 90 * 60000) },
];

const ActivityFeed = ({ lang }: { lang: Lang }) => (
  <div className="bg-white border border-border rounded-2xl shadow-sm overflow-hidden">
    <div className="px-5 py-3.5 border-b border-border">
      <h2 className="text-text-primary font-bold text-sm">{t(lang, "activity.title")}</h2>
    </div>
    <div className="overflow-y-auto max-h-64">
      {PLACEHOLDER_ACTIVITY.length === 0 ? (
        <div className="px-5 py-8 text-center text-text-secondary text-sm">
          {t(lang, "activity.empty")}
        </div>
      ) : (
        <ul>
          {PLACEHOLDER_ACTIVITY.map((item, idx) => (
            <li
              key={item.id}
              className={`flex items-center gap-3 px-5 py-3 ${
                idx < PLACEHOLDER_ACTIVITY.length - 1 ? "border-b border-border" : ""
              } hover:bg-bg-page transition-colors`}
            >
              <div className="w-8 h-8 rounded-lg bg-primary-light flex items-center justify-center flex-shrink-0">
                <span className="text-sm">{item.icon}</span>
              </div>
              <div className="flex-1 min-w-0">
                <div className="text-text-primary text-sm font-medium truncate">
                  {t(lang, item.label)}
                </div>
              </div>
              <div className="text-text-secondary text-xs flex-shrink-0">
                {relativeTime(item.ts, lang)}
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  </div>
);

// ── Chat Panel ──

const ChatBubble = ({
  msg,
  lang,
}: {
  msg: ChatMessage;
  lang: Lang;
}) => {
  const isUser = msg.role === "user";
  return (
    <div className={`flex items-end gap-2 ${isUser ? "flex-row-reverse" : "flex-row"}`}>
      {/* Avatar */}
      {!isUser && (
        <div className="w-7 h-7 rounded-full bg-primary flex items-center justify-center flex-shrink-0 mb-0.5">
          <span className="text-white text-xs font-bold">C</span>
        </div>
      )}

      <div className={`flex flex-col gap-1 max-w-[75%] ${isUser ? "items-end" : "items-start"}`}>
        <div
          className={`px-3.5 py-2.5 rounded-2xl text-sm leading-relaxed ${
            isUser
              ? "bg-primary text-white rounded-tr-sm"
              : "bg-bg-page border border-border text-text-primary rounded-tl-sm"
          }`}
        >
          {msg.text}
        </div>
        <div className="text-text-secondary text-xs px-1">{formatTime(msg.ts)}</div>
      </div>
    </div>
  );
};

const ChatPanel = ({
  lang,
  token,
}: {
  lang: Lang;
  token: string;
}) => {
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: "welcome",
      role: "agent",
      text: t(lang, "chat.welcome"),
      ts: new Date(),
    },
  ]);
  const [input, setInput] = useState("");
  const [sending, setSending] = useState(false);
  const bottomRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const scrollToBottom = useCallback(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, []);

  useEffect(() => {
    scrollToBottom();
  }, [messages, scrollToBottom]);

  const sendMessage = useCallback(async () => {
    const text = input.trim();
    if (!text || sending) return;

    const userMsg: ChatMessage = {
      id: generateId(),
      role: "user",
      text,
      ts: new Date(),
    };

    setMessages((prev) => [...prev, userMsg]);
    setInput("");
    setSending(true);

    // Optimistic thinking bubble
    const thinkingId = generateId();
    setMessages((prev) => [
      ...prev,
      { id: thinkingId, role: "agent", text: t(lang, "chat.thinking"), ts: new Date() },
    ]);

    try {
      const { data, status } = await apiFetch<{ response?: string; message?: string }>(
        "/agent/message",
        token,
        {
          method: "POST",
          body: JSON.stringify({ message: text }),
        }
      );

      const replyText =
        data?.response || data?.message || t(lang, "chat.error");

      setMessages((prev) =>
        prev.map((m) =>
          m.id === thinkingId
            ? { ...m, text: replyText, ts: new Date() }
            : m
        )
      );
    } catch {
      setMessages((prev) =>
        prev.map((m) =>
          m.id === thinkingId
            ? { ...m, text: t(lang, "chat.error"), ts: new Date() }
            : m
        )
      );
    } finally {
      setSending(false);
      inputRef.current?.focus();
    }
  }, [input, sending, lang, token]);

  const onKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  return (
    <div className="bg-white border border-border rounded-2xl shadow-sm flex flex-col overflow-hidden h-full min-h-[420px]">
      {/* Header */}
      <div className="px-5 py-3.5 border-b border-border flex-shrink-0">
        <h2 className="text-text-primary font-bold text-sm">{t(lang, "chat.title")}</h2>
      </div>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto p-4 flex flex-col gap-4">
        {messages.map((msg) => (
          <ChatBubble key={msg.id} msg={msg} lang={lang} />
        ))}
        <div ref={bottomRef} />
      </div>

      {/* Input */}
      <div className="px-4 pb-4 pt-3 border-t border-border flex-shrink-0">
        <div className="flex items-center gap-2">
          <input
            ref={inputRef}
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={onKeyDown}
            placeholder={t(lang, "chat.placeholder")}
            disabled={sending}
            className="flex-1 px-4 py-2.5 rounded-xl border-2 border-border bg-bg-page text-text-primary text-sm outline-none transition-all focus:border-primary/50 focus:ring-2 focus:ring-primary/10 disabled:opacity-60 placeholder:text-text-secondary"
          />
          <button
            onClick={sendMessage}
            disabled={sending || !input.trim()}
            aria-label={t(lang, "chat.send")}
            className={`w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 transition-all ${
              sending || !input.trim()
                ? "bg-border text-text-secondary cursor-not-allowed"
                : "bg-primary text-white hover:bg-primary/90 shadow-lg shadow-primary/20"
            }`}
          >
            {sending ? <Spinner size={4} /> : <SendIcon />}
          </button>
        </div>
      </div>
    </div>
  );
};

// ── Connected Accounts ──

const AccountBadge = ({
  connected,
  lang,
}: {
  connected: boolean;
  lang: Lang;
}) => (
  <span
    className={`px-2 py-0.5 rounded-lg text-xs font-bold ${
      connected ? "bg-success/10 text-success" : "bg-border text-text-secondary"
    }`}
  >
    {connected ? t(lang, "accounts.connected") : t(lang, "accounts.not_connected")}
  </span>
);

const SOCIAL_META: Record<string, { icon: string; name: string }> = {
  twitter: { icon: "𝕏", name: "X (Twitter)" },
  linkedin: { icon: "in", name: "LinkedIn" },
  instagram: { icon: "📷", name: "Instagram" },
  reddit: { icon: "🤖", name: "Reddit" },
  facebook: { icon: "f", name: "Facebook" },
};

const ConnectedAccounts = ({
  onboarding,
  loading,
  lang,
}: {
  onboarding: OnboardingData | null;
  loading: boolean;
  lang: Lang;
}) => {
  const emailProvider = onboarding?.email_provider || null;
  const emailConnected = onboarding?.email_connected ?? false;
  const socials = onboarding?.socials ?? {};
  const socialEntries = Object.entries(socials);
  const hasSomething = emailProvider || socialEntries.length > 0;

  return (
    <div className="bg-white border border-border rounded-2xl shadow-sm overflow-hidden">
      <div className="px-5 py-3.5 border-b border-border">
        <h2 className="text-text-primary font-bold text-sm">{t(lang, "accounts.title")}</h2>
      </div>

      {loading ? (
        <div className="px-5 py-6 flex justify-center">
          <Spinner size={5} />
        </div>
      ) : !hasSomething ? (
        <div className="px-5 py-6 text-center text-text-secondary text-sm">
          {t(lang, "accounts.none")}
        </div>
      ) : (
        <div className="divide-y divide-border">
          {/* Email */}
          {emailProvider && (
            <div className="px-5 py-3 flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-primary-light flex items-center justify-center flex-shrink-0">
                <span className="text-sm">📧</span>
              </div>
              <div className="flex-1 min-w-0">
                <div className="text-text-primary text-sm font-semibold capitalize">
                  {emailProvider}
                </div>
                <div className="text-text-secondary text-xs">{t(lang, "accounts.email")}</div>
              </div>
              <AccountBadge connected={emailConnected} lang={lang} />
            </div>
          )}

          {/* Socials */}
          {socialEntries.map(([platform, connected]) => {
            const meta = SOCIAL_META[platform] || {
              icon: "🔗",
              name: platform.charAt(0).toUpperCase() + platform.slice(1),
            };
            return (
              <div key={platform} className="px-5 py-3 flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-primary-light flex items-center justify-center flex-shrink-0">
                  <span className="text-sm font-bold text-primary">{meta.icon}</span>
                </div>
                <div className="flex-1 min-w-0">
                  <div className="text-text-primary text-sm font-semibold">{meta.name}</div>
                  <div className="text-text-secondary text-xs">{t(lang, "accounts.social")}</div>
                </div>
                <AccountBadge connected={connected} lang={lang} />
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

// ── Auth Gate ──

function redirect(path: string) {
  if (typeof window !== "undefined") {
    window.location.href = path;
  }
}

// ── Main Dashboard ──

export default function Dashboard() {
  const [token, setToken] = useState<string | null>(null);
  const [user, setUser] = useState<User | null>(null);
  const [agentStatus, setAgentStatus] = useState<AgentStatus | null>(null);
  const [onboarding, setOnboarding] = useState<OnboardingData | null>(null);
  const [authError, setAuthError] = useState(false);
  const [loadingUser, setLoadingUser] = useState(true);
  const [loadingStatus, setLoadingStatus] = useState(true);
  const [loadingOnboarding, setLoadingOnboarding] = useState(true);

  // Derive language: fall back to "en" if not "es"
  const lang: Lang = user?.lang === "es" ? "es" : "en";

  // ── Auth + bootstrap ──

  useEffect(() => {
    const stored = sessionStorage.getItem("clawgrab_token");
    if (!stored) {
      redirect("/login");
      return;
    }
    setToken(stored);

    // Validate token by fetching /users/me
    apiFetch<User>("/users/me", stored).then(({ data, status }) => {
      if (status === 401 || !data) {
        sessionStorage.removeItem("clawgrab_token");
        setAuthError(true);
        setTimeout(() => redirect("/login"), 1500);
        return;
      }
      setUser(data);
      setLoadingUser(false);
    });
  }, []);

  // ── Fetch agent status ──

  useEffect(() => {
    if (!token) return;
    apiFetch<AgentStatus>("/agent/status", token).then(({ data }) => {
      setAgentStatus(data);
      setLoadingStatus(false);
    });
  }, [token]);

  // ── Fetch onboarding data ──

  useEffect(() => {
    if (!token) return;
    apiFetch<OnboardingData>("/onboarding", token).then(({ data }) => {
      setOnboarding(data);
      setLoadingOnboarding(false);
    });
  }, [token]);

  // ── Render states ──

  if (authError) {
    return (
      <div className="min-h-screen bg-bg-page flex items-center justify-center px-4">
        <div className="text-center">
          <div className="w-12 h-12 bg-primary rounded-xl flex items-center justify-center mx-auto mb-4">
            <span className="text-white font-bold text-xl">C</span>
          </div>
          <p className="text-text-secondary text-sm">{t("en", "error.auth")}</p>
        </div>
      </div>
    );
  }

  if (loadingUser || !user || !token) {
    return (
      <div className="min-h-screen bg-bg-page flex items-center justify-center px-4">
        <div className="text-center">
          <div className="w-12 h-12 bg-primary rounded-xl flex items-center justify-center mx-auto mb-4">
            <span className="text-white font-bold text-xl">C</span>
          </div>
          <div className="flex justify-center">
            <Spinner size={6} />
          </div>
          <p className="text-text-secondary text-sm mt-3">{t("en", "loading")}</p>
        </div>
      </div>
    );
  }

  // ── Full Dashboard ──

  return (
    <div className="min-h-screen bg-bg-page font-sans text-text-primary flex flex-col">
      <NavBar user={user} lang={lang} />

      {/* Page body */}
      <main className="flex-1 px-4 sm:px-6 py-5 max-w-7xl mx-auto w-full">
        {/*
          Desktop layout: 3-column CSS grid
            [left: 2fr] [right sidebar: 1fr]
          Left column splits into stacked sections.
          Mobile: single column, chat section after activity.
        */}
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_320px] gap-5">

          {/* ── Left column ── */}
          <div className="flex flex-col gap-5 min-w-0">

            {/* Agent status */}
            <AgentStatusCard
              status={agentStatus}
              loading={loadingStatus}
              lang={lang}
            />

            {/* Quick stats */}
            <QuickStats lang={lang} />

            {/* Activity feed */}
            <ActivityFeed lang={lang} />

            {/* Chat panel — shown below activity on mobile, hidden here on desktop */}
            <div className="block lg:hidden">
              <ChatPanel lang={lang} token={token} />
            </div>
          </div>

          {/* ── Right column (desktop sidebar) ── */}
          <div className="hidden lg:flex flex-col gap-5 min-w-0">
            {/* Chat panel */}
            <div className="flex-1">
              <ChatPanel lang={lang} token={token} />
            </div>

            {/* Connected accounts */}
            <ConnectedAccounts
              onboarding={onboarding}
              loading={loadingOnboarding}
              lang={lang}
            />
          </div>

          {/* Connected accounts on mobile — after chat */}
          <div className="block lg:hidden">
            <ConnectedAccounts
              onboarding={onboarding}
              loading={loadingOnboarding}
              lang={lang}
            />
          </div>
        </div>
      </main>

      <style>{`
        @keyframes ping {
          75%, 100% { transform: scale(2); opacity: 0; }
        }
        .animate-ping {
          animation: ping 1.2s cubic-bezier(0, 0, 0.2, 1) infinite;
        }
      `}</style>
    </div>
  );
}
