export type Lang = 'en' | 'es';

export const translations: Record<string, Record<Lang, string>> = {
  // ── Header ──
  'header.features': { en: 'Features', es: 'Funciones' },
  'header.pricing': { en: 'Pricing', es: 'Precios' },
  'header.cta': { en: 'Get Your AI Plan', es: 'Obtén Tu Plan IA' },

  // ── Hero ──
  'hero.badge': { en: 'OpenClaw is free — forever', es: 'OpenClaw es gratis — para siempre' },
  'hero.h1.line1': { en: 'Your Life.', es: 'Tu Vida.' },
  'hero.h1.line2': { en: 'On Autopilot.', es: 'En Autopiloto.' },
  'hero.sub': {
    en: 'OpenClaw went viral for a reason. AI that actually handles your daily grind — email, scheduling, research, busywork — so you get your time back. Free to start. No credit card.',
    es: 'OpenClaw se hizo viral por algo. IA que realmente maneja tu rutina diaria — email, agenda, investigación, tareas — para que recuperes tu tiempo. Gratis para empezar. Sin tarjeta.'
  },
  'hero.cta': { en: 'Get Your Free AI Plan', es: 'Obtén Tu Plan IA Gratis' },
  'hero.social': { en: '50,000+ people already using OpenClaw', es: '50,000+ personas ya usan OpenClaw' },

  // ── Model Tiers ──
  'models.h2': { en: 'TWO ENGINES. ONE APP.', es: 'DOS MOTORES. UNA APP.' },
  'models.sub': {
    en: 'Every task gets the right brain — fast daily autopilot or deep thinking when it matters.',
    es: 'Cada tarea recibe el cerebro adecuado — autopiloto diario rápido o pensamiento profundo cuando importa.'
  },
  'models.t2.title': { en: 'Fast & Efficient', es: 'Rápido y Eficiente' },
  'models.t2.badge': { en: 'Free with OpenClaw', es: 'Gratis con OpenClaw' },
  'models.t2.desc': {
    en: 'Handles your everyday stuff instantly. The reason people can\'t stop talking about OpenClaw.',
    es: 'Maneja tus cosas del día a día al instante. La razón por la que la gente no para de hablar de OpenClaw.'
  },
  'models.t2.f1': { en: 'Email drafts & replies', es: 'Borradores y respuestas de email' },
  'models.t2.f2': { en: 'Quick summaries & lookups', es: 'Resúmenes rápidos y búsquedas' },
  'models.t2.f3': { en: 'Scheduling & reminders', es: 'Agenda y recordatorios' },
  'models.t2.f4': { en: 'Organizing your chaos', es: 'Organiza tu caos' },

  'models.sota.title': { en: 'State-of-the-Art', es: 'Lo Más Avanzado' },
  'models.sota.badge': { en: 'Daddy & Big Daddy', es: 'Daddy y Big Daddy' },
  'models.sota.desc': {
    en: 'Deep thinking for the stuff that actually matters. Research, strategy, writing that sounds like you.',
    es: 'Pensamiento profundo para lo que realmente importa. Investigación, estrategia, escritura que suena como tú.'
  },
  'models.sota.f1': { en: 'Deep research & analysis', es: 'Investigación y análisis profundo' },
  'models.sota.f2': { en: 'Complex problem solving', es: 'Resolución de problemas complejos' },
  'models.sota.f3': { en: 'Strategy & planning', es: 'Estrategia y planificación' },
  'models.sota.f4': { en: 'Writing that sounds human', es: 'Escritura que suena humana' },

  // ── Quiz ──
  'quiz.h2': { en: 'YOUR FREE AI PLAN', es: 'TU PLAN IA GRATIS' },
  'quiz.sub': {
    en: '5 quick questions. Personalized AI plan. Takes 30 seconds.',
    es: '5 preguntas rápidas. Plan IA personalizado. Toma 30 segundos.'
  },
  'quiz.start': { en: 'START HERE', es: 'EMPIEZA AQUÍ' },
  'quiz.email.q': { en: "What's your email?", es: '¿Cuál es tu email?' },
  'quiz.email.placeholder': { en: 'you@email.com', es: 'tu@email.com' },
  'quiz.email.continue': { en: 'Continue', es: 'Continuar' },

  'quiz.step.1of5': { en: 'STEP 01/05', es: 'PASO 01/05' },
  'quiz.role.q': { en: 'What best describes you?', es: '¿Qué te describe mejor?' },
  'quiz.role.o1': { en: 'I run a business or side hustle', es: 'Tengo un negocio o proyecto' },
  'quiz.role.o2': { en: 'I freelance or create content', es: 'Soy freelance o creador de contenido' },
  'quiz.role.o3': { en: 'I work a 9-to-5', es: 'Trabajo de 9 a 5' },
  'quiz.role.o4': { en: 'I\'m juggling everything', es: 'Estoy haciendo de todo' },

  'quiz.step.2of5': { en: 'STEP 02/05', es: 'PASO 02/05' },
  'quiz.bottleneck.q': { en: 'What drains your time the most?', es: '¿Qué te consume más tiempo?' },
  'quiz.bottleneck.o1': { en: 'Email & messages', es: 'Email y mensajes' },
  'quiz.bottleneck.o2': { en: 'Research & learning', es: 'Investigación y aprendizaje' },
  'quiz.bottleneck.o3': { en: 'Planning & scheduling', es: 'Planificación y agenda' },
  'quiz.bottleneck.o4': { en: 'Repetitive busywork', es: 'Trabajo repetitivo' },

  'quiz.step.3of5': { en: 'STEP 03/05', es: 'PASO 03/05' },
  'quiz.hours.q': { en: 'How many hours a week do you lose to stuff AI could do?', es: '¿Cuántas horas a la semana pierdes en cosas que la IA podría hacer?' },
  'quiz.hours.o1': { en: '1–5 hours', es: '1–5 horas' },
  'quiz.hours.o2': { en: '5–10 hours', es: '5–10 horas' },
  'quiz.hours.o3': { en: '10–20 hours', es: '10–20 horas' },
  'quiz.hours.o4': { en: '20+ hours', es: '20+ horas' },

  'quiz.step.4of5': { en: 'STEP 04/05', es: 'PASO 04/05' },
  'quiz.spanish.q': { en: 'Do you need Spanish?', es: '¿Necesitas español?' },
  'quiz.spanish.o1': { en: 'Yes, I use it daily', es: 'Sí, lo uso a diario' },
  'quiz.spanish.o2': { en: 'Sometimes', es: 'A veces' },
  'quiz.spanish.o3': { en: 'I want to learn / expand', es: 'Quiero aprender / expandirme' },
  'quiz.spanish.o4': { en: 'English only is fine', es: 'Solo inglés está bien' },

  'quiz.step.5of5': { en: 'STEP 05/05', es: 'PASO 05/05' },
  'quiz.goal.q': { en: 'What would you do with 20 extra hours a week?', es: '¿Qué harías con 20 horas extra a la semana?' },
  'quiz.goal.o1': { en: 'Make more money', es: 'Ganar más dinero' },
  'quiz.goal.o2': { en: 'Actually relax', es: 'Realmente descansar' },
  'quiz.goal.o3': { en: 'Start something new', es: 'Empezar algo nuevo' },
  'quiz.goal.o4': { en: 'Be with people I love', es: 'Estar con quienes quiero' },

  'quiz.loading': { en: 'BUILDING YOUR AI PLAN...', es: 'CREANDO TU PLAN IA...' },

  'quiz.result.h3': { en: 'YOUR AI PLAN', es: 'TU PLAN IA' },
  'quiz.result.intro': {
    en: 'Here\'s how ClawDaddy is about to change your life:',
    es: 'Así es como ClawDaddy va a cambiar tu vida:'
  },
  'quiz.result.tier': { en: 'We recommend:', es: 'Te recomendamos:' },
  'quiz.result.cta': { en: 'Claim Your Free Plan', es: 'Reclama Tu Plan Gratis' },
  'quiz.result.confirmed': { en: 'YOU\'RE IN — CHECK YOUR INBOX', es: 'ESTÁS DENTRO — REVISA TU BANDEJA' },

  // ── Pricing ──
  'pricing.h2': { en: 'SIMPLE PRICING.', es: 'PRECIOS SIMPLES.' },
  'pricing.sub': {
    en: 'OpenClaw is free forever. Upgrade when you want more power.',
    es: 'OpenClaw es gratis para siempre. Mejora cuando quieras más poder.'
  },
  'pricing.popular': { en: 'Most Popular', es: 'Más Popular' },

  'pricing.claw.name': { en: 'OpenClaw', es: 'OpenClaw' },
  'pricing.claw.price': { en: 'Free', es: 'Gratis' },
  'pricing.claw.desc': { en: 'The one everyone\'s talking about.', es: 'Del que todo el mundo habla.' },
  'pricing.claw.f1': { en: 'Fast AI model for everyday tasks', es: 'Modelo IA rápido para tareas diarias' },
  'pricing.claw.f2': { en: 'English only', es: 'Solo inglés' },
  'pricing.claw.f3': { en: '50 tasks/month', es: '50 tareas/mes' },
  'pricing.claw.f4': { en: 'Mobile app access', es: 'Acceso a la app móvil' },
  'pricing.claw.cta': { en: 'Start Free', es: 'Empieza Gratis' },

  'pricing.daddy.name': { en: 'Daddy', es: 'Daddy' },
  'pricing.daddy.price': { en: '$59', es: '$59' },
  'pricing.daddy.period': { en: '/month', es: '/mes' },
  'pricing.daddy.desc': { en: 'For people who are done wasting time.', es: 'Para gente que ya no quiere perder el tiempo.' },
  'pricing.daddy.f1': { en: 'Most powerful AI model', es: 'El modelo IA más potente' },
  'pricing.daddy.f2': { en: 'English + Spanish', es: 'Inglés + Español' },
  'pricing.daddy.f3': { en: 'Gmail inbox on autopilot', es: 'Bandeja de Gmail en autopiloto' },
  'pricing.daddy.f4': { en: 'Unlimited tasks', es: 'Tareas ilimitadas' },
  'pricing.daddy.f5': { en: 'Priority speed', es: 'Velocidad prioritaria' },
  'pricing.daddy.cta': { en: 'Get Daddy', es: 'Obtén Daddy' },

  'pricing.bigdaddy.name': { en: 'Big Daddy', es: 'Big Daddy' },
  'pricing.bigdaddy.price': { en: '$119', es: '$119' },
  'pricing.bigdaddy.period': { en: '/month', es: '/mes' },
  'pricing.bigdaddy.desc': { en: 'Unlimited everything. Total control.', es: 'Todo ilimitado. Control total.' },
  'pricing.bigdaddy.f1': { en: 'Most powerful AI model', es: 'El modelo IA más potente' },
  'pricing.bigdaddy.f2': { en: 'English + Spanish', es: 'Inglés + Español' },
  'pricing.bigdaddy.f3': { en: 'Gmail inbox on autopilot', es: 'Bandeja de Gmail en autopiloto' },
  'pricing.bigdaddy.f4': { en: 'Unlimited tasks', es: 'Tareas ilimitadas' },
  'pricing.bigdaddy.f5': { en: 'API access & custom automations', es: 'Acceso API y automatizaciones' },
  'pricing.bigdaddy.f6': { en: 'Dedicated support', es: 'Soporte dedicado' },
  'pricing.bigdaddy.cta': { en: 'Get Big Daddy', es: 'Obtén Big Daddy' },

  // ── Footer ──
  'footer.copy': { en: '© 2026 ClawDaddy. All rights reserved.', es: '© 2026 ClawDaddy. Todos los derechos reservados.' },
  'footer.privacy': { en: 'Privacy', es: 'Privacidad' },
  'footer.terms': { en: 'Terms', es: 'Términos' },
  'footer.github': { en: 'GitHub', es: 'GitHub' },
};
