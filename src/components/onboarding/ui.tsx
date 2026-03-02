import type { ReactNode } from "react";

export const ProgressDots = ({ current, total }: { current: number; total: number }) => (
  <div className="flex gap-1.5 justify-center py-4">
    {Array.from({ length: total }).map((_, i) => (
      <div
        key={i}
        className={`h-1.5 rounded-full transition-all duration-400 ${
          i === current ? "w-6 bg-primary" : i < current ? "w-1.5 bg-primary/50" : "w-1.5 bg-border"
        }`}
      />
    ))}
  </div>
);

export const Btn = ({
  children,
  onClick,
  disabled,
  secondary,
}: {
  children: ReactNode;
  onClick?: () => void;
  disabled?: boolean;
  secondary?: boolean;
}) => (
  <button
    onClick={onClick}
    disabled={disabled}
    className={`w-full py-4 px-8 rounded-xl font-bold text-base transition-all ${
      disabled
        ? "bg-border text-text-secondary opacity-50 cursor-not-allowed"
        : secondary
        ? "border-2 border-primary bg-transparent text-primary hover:bg-primary-light"
        : "bg-primary text-white hover:bg-primary/90 shadow-lg shadow-primary/20"
    }`}
  >
    {children}
  </button>
);

export const Chip = ({
  label,
  selected,
  onClick,
  emoji,
}: {
  label: string;
  selected: boolean;
  onClick: () => void;
  emoji?: string;
}) => (
  <button
    onClick={onClick}
    className={`px-4 py-3 rounded-xl text-sm font-semibold transition-all flex items-center gap-2 ${
      selected
        ? "border-2 border-primary bg-primary-light text-primary"
        : "border-2 border-border bg-white text-text-secondary hover:border-primary/30"
    }`}
  >
    {emoji && <span className="text-lg">{emoji}</span>}
    {label}
  </button>
);

export const Input = ({
  placeholder,
  value,
  onChange,
  large,
}: {
  placeholder: string;
  value: string;
  onChange: (v: string) => void;
  large?: boolean;
}) => (
  <input
    value={value}
    onChange={(e) => onChange(e.target.value)}
    placeholder={placeholder}
    className={`w-full rounded-xl border-2 border-border bg-bg-page text-text-primary outline-none transition-all focus:border-primary/50 focus:ring-2 focus:ring-primary/10 ${
      large ? "py-4 px-5 text-xl font-bold" : "py-3 px-4 text-base"
    }`}
  />
);

export const IntegrationCard = ({
  icon,
  name,
  desc,
  connected,
  onConnect,
  locked,
  labelLinked = "Linked",
  labelPro = "Pro",
  labelConnect = "Connect",
}: {
  icon: string;
  name: string;
  desc: string;
  connected?: boolean;
  onConnect?: () => void;
  locked?: boolean;
  labelLinked?: string;
  labelPro?: string;
  labelConnect?: string;
}) => (
  <div
    onClick={locked ? undefined : onConnect}
    className={`flex items-center gap-3.5 p-4 rounded-2xl transition-all cursor-pointer ${
      connected
        ? "border-2 border-success bg-success/5"
        : locked
        ? "border-2 border-border bg-bg-page opacity-45 cursor-default"
        : "border-2 border-border bg-white hover:border-primary/30"
    }`}
  >
    <div className="text-2xl w-10 text-center">{icon}</div>
    <div className="flex-1 min-w-0">
      <div className="text-text-primary text-sm font-bold flex items-center gap-2">
        {name}
        {locked && <span className="text-xs text-text-secondary font-normal">PRO</span>}
      </div>
      <div className="text-text-secondary text-xs">{desc}</div>
    </div>
    <div
      className={`px-3 py-1.5 rounded-lg text-xs font-bold ${
        connected
          ? "bg-success text-white"
          : locked
          ? "bg-border text-text-secondary"
          : "bg-primary text-white"
      }`}
    >
      {connected ? labelLinked : locked ? labelPro : labelConnect}
    </div>
  </div>
);

export const SliderOption = ({
  label,
  options,
  value,
  onChange,
}: {
  label: string;
  options: { emoji: string; label: string; value: string }[];
  value: string;
  onChange: (v: string) => void;
}) => (
  <div className="mb-5">
    <div className="text-text-primary text-sm font-semibold mb-2.5">{label}</div>
    <div className="flex gap-2">
      {options.map((opt) => (
        <button
          key={opt.value}
          onClick={() => onChange(opt.value)}
          className={`flex-1 py-3 px-2 rounded-xl text-xs font-semibold transition-all ${
            value === opt.value
              ? "border-2 border-primary bg-primary-light text-primary"
              : "border-2 border-border bg-white text-text-secondary hover:border-primary/30"
          }`}
        >
          <div className="text-lg mb-1">{opt.emoji}</div>
          {opt.label}
        </button>
      ))}
    </div>
  </div>
);

export const StepLabel = ({ text }: { text: string }) => (
  <span className="text-primary font-medium text-sm mb-1 block">{text}</span>
);

export const StepTitle = ({ text }: { text: string }) => (
  <h2 className="text-2xl font-bold text-text-primary mb-2">{text}</h2>
);

export const StepDesc = ({ text }: { text: string }) => (
  <p className="text-text-secondary text-sm mb-6">{text}</p>
);
