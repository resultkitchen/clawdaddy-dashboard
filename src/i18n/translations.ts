export type Lang = 'en' | 'es';

export const translations: Record<string, Record<Lang, string>> = {
  // ── Header ──
  'header.features': { en: 'Features', es: 'Funciones' },
  'header.pricing': { en: 'Pricing', es: 'Precios' },
  'header.cta': { en: 'Get started free', es: 'Empieza gratis' },

  // ── Hero ──
  'hero.badge': { en: 'Set up in 60 seconds. No tech skills needed.', es: 'Configura en 60 segundos. Sin conocimientos técnicos.' },
  'hero.h1.line1': { en: 'Your day, handled.', es: 'Tu día, resuelto.' },
  'hero.h1.line2': { en: 'Without spending hours on it.', es: 'Sin pasar horas en ello.' },
  'hero.sub': {
    en: 'Your AI assistant handles email, writes social posts in your voice, and never forgets an important detail. Set up in 60 seconds.',
    es: 'Tu asistente IA maneja tu email, escribe publicaciones con tu voz y nunca olvida un detalle importante. Configura en 60 segundos.'
  },
  'hero.cta': { en: 'Get started free', es: 'Empieza gratis' },
  'hero.social': { en: '50,000+ people already reclaiming their time', es: '50,000+ personas ya recuperando su tiempo' },
  'hero.benefit1': { en: 'Clean inbox every morning', es: 'Bandeja limpia cada mañana' },
  'hero.benefit2': { en: 'Social posts in your voice', es: 'Publicaciones con tu voz' },
  'hero.benefit3': { en: 'Never forget a thing', es: 'Nunca olvides nada' },
  'hero.benefit4': { en: 'Works while you sleep', es: 'Trabaja mientras duermes' },

  // ── Features ──
  'features.h2': { en: "Here's what changes", es: 'Esto es lo que cambia' },
  'features.sub': {
    en: 'You stop drowning. You stop forgetting. You stop spending your weekend catching up.',
    es: 'Dejas de ahogarte. Dejas de olvidar. Dejas de pasar el fin de semana poniéndote al día.'
  },

  'features.email.badge': { en: 'Email', es: 'Email' },
  'features.email.title': { en: 'Wake up to inbox zero, every single day', es: 'Despierta con la bandeja vacía, todos los días' },
  'features.email.desc': {
    en: 'While you sleep, ClawGrab reads your email, sorts what matters from what doesn\'t, drafts replies in your voice, and flags anything that needs your attention.',
    es: 'Mientras duermes, ClawGrab lee tu email, separa lo importante, redacta respuestas con tu voz y marca lo que necesita tu atención.'
  },
  'features.email.f1': { en: 'Replies drafted in your tone, not robot-speak', es: 'Respuestas redactadas con tu tono, no como un robot' },
  'features.email.f2': { en: 'Junk filtered, important stuff surfaced', es: 'Spam filtrado, lo importante al frente' },
  'features.email.f3': { en: 'Follow-ups sent automatically so nothing slips', es: 'Seguimientos enviados automáticamente para que nada se escape' },
  'features.email.ex1t': { en: '23 emails handled overnight', es: '23 emails manejados durante la noche' },
  'features.email.ex1d': { en: '5 replies sent, 12 archived, 6 flagged for you', es: '5 respuestas enviadas, 12 archivados, 6 marcados para ti' },
  'features.email.ex2t': { en: 'Time saved this week: 4.5 hours', es: 'Tiempo ahorrado esta semana: 4.5 horas' },
  'features.email.ex2d': { en: "That's a whole afternoon back in your life", es: 'Eso es toda una tarde de vuelta en tu vida' },

  'features.social.badge': { en: 'Social media', es: 'Redes sociales' },
  'features.social.title': { en: 'Your social posts, written in your voice', es: 'Tus publicaciones, escritas con tu voz' },
  'features.social.desc': {
    en: 'No more staring at a blank screen wondering what to post. ClawGrab learns how you talk, what you care about, and creates content that sounds like you — not a marketing robot.',
    es: 'No más mirar una pantalla en blanco sin saber qué publicar. ClawGrab aprende cómo hablas, qué te importa y crea contenido que suena como tú — no como un robot.'
  },
  'features.social.f1': { en: 'Content that sounds like you, not a template', es: 'Contenido que suena como tú, no como una plantilla' },
  'features.social.f2': { en: 'Posted at the right time for maximum reach', es: 'Publicado en el momento ideal para máximo alcance' },
  'features.social.f3': { en: 'Stay visible without social media being your job', es: 'Mantente visible sin que las redes sean tu trabajo' },
  'features.social.ex1': {
    en: '"Just tried the new coffee spot on 5th — the oat milk latte is unreal. If you\'re in the neighborhood, trust me on this one."',
    es: '"Acabo de probar el nuevo café en la 5ta — el latte de avena es increíble. Si estás por el barrio, hazme caso."'
  },
  'features.social.ex1d': { en: 'Written by ClawGrab, sounds like you', es: 'Escrito por ClawGrab, suena como tú' },
  'features.social.tw': { en: 'Twitter', es: 'Twitter' },
  'features.social.ig': { en: 'Instagram', es: 'Instagram' },
  'features.social.li': { en: 'LinkedIn', es: 'LinkedIn' },

  'features.memory.badge': { en: 'Memory', es: 'Memoria' },
  'features.memory.title': { en: 'Never forget a birthday, deadline, or detail', es: 'Nunca olvides un cumpleaños, fecha límite o detalle' },
  'features.memory.desc': {
    en: "ClawGrab remembers everything so you don't have to. Your mom's birthday, that follow-up you promised, the deadline that's creeping up — it's all tracked.",
    es: 'ClawGrab recuerda todo para que tú no tengas que hacerlo. El cumpleaños de tu mamá, ese seguimiento que prometiste, la fecha que se acerca — todo está registrado.'
  },
  'features.memory.f1': { en: 'Automatic reminders before things are due', es: 'Recordatorios automáticos antes de las fechas límite' },
  'features.memory.f2': { en: 'Follow-ups sent so you never ghost anyone', es: 'Seguimientos enviados para que nunca dejes a alguien colgado' },
  'features.memory.f3': { en: 'That feeling of being on top of everything', es: 'Esa sensación de tener todo bajo control' },
  'features.memory.ex1t': { en: "Mom's birthday is tomorrow", es: 'El cumpleaños de mamá es mañana' },
  'features.memory.ex1d': { en: 'Card sent, flowers ordered, reminder set', es: 'Tarjeta enviada, flores ordenadas, recordatorio puesto' },
  'features.memory.ex2t': { en: 'Project deadline in 3 days', es: 'Fecha límite del proyecto en 3 días' },
  'features.memory.ex2d': { en: 'Follow-up sent to your team, status tracked', es: 'Seguimiento enviado a tu equipo, estado rastreado' },
  'features.memory.ex3t': { en: 'Car insurance renewal next week', es: 'Renovación de seguro la próxima semana' },
  'features.memory.ex3d': { en: 'Comparison quotes pulled, best option flagged', es: 'Cotizaciones comparadas, mejor opción marcada' },

  'features.sleep.badge': { en: '24/7', es: '24/7' },
  'features.sleep.title': { en: 'You rest. It works.', es: 'Tú descansas. Él trabaja.' },
  'features.sleep.desc': {
    en: "ClawGrab doesn't take breaks or call in sick. While you're sleeping, having dinner, or just living your life — it's handling the stuff that used to pile up.",
    es: 'ClawGrab no toma descansos ni se reporta enfermo. Mientras duermes, cenas o simplemente vives tu vida — está manejando lo que antes se acumulaba.'
  },
  'features.sleep.stat1': { en: '24/7', es: '24/7' },
  'features.sleep.stat1d': { en: 'Always working for you', es: 'Siempre trabajando para ti' },
  'features.sleep.stat2': { en: '60s', es: '60s' },
  'features.sleep.stat2d': { en: 'To set up, no tech skills', es: 'Configura sin ser técnico' },
  'features.sleep.stat3': { en: '$0', es: '$0' },
  'features.sleep.stat3d': { en: 'Compared to a $3K/mo VA', es: 'Vs. asistente de $3K/mes' },

  // ── Model Tiers ──
  'models.h2': { en: 'Pick your level of support', es: 'Elige tu nivel de ayuda' },
  'models.sub': {
    en: 'Every plan gives you back hours of your day. The only question is how much you want handled.',
    es: 'Cada plan te devuelve horas de tu día. La única pregunta es cuánto quieres que se maneje.'
  },
  'models.popular': { en: 'Most popular', es: 'Más popular' },

  // Claw
  'models.claw.badge': { en: 'The daily helper', es: 'La ayuda diaria' },
  'models.claw.title': { en: 'Claw', es: 'Claw' },
  'models.claw.price': { en: '$29', es: '$29' },
  'models.claw.period': { en: '/month', es: '/mes' },
  'models.claw.desc': {
    en: 'One email, one social platform. Finally get your inbox under control and stop stressing about what to post.',
    es: 'Un email, una red social. Por fin controla tu bandeja y deja de estresarte por qué publicar.'
  },
  'models.claw.f1': { en: 'Wake up to a clean inbox', es: 'Despierta con una bandeja limpia' },
  'models.claw.f2': { en: 'Social posts written and scheduled for you', es: 'Publicaciones escritas y programadas para ti' },
  'models.claw.f3': { en: 'Important reminders so you never drop the ball', es: 'Recordatorios importantes para que nunca falles' },
  'models.claw.f4': { en: 'Set up in 60 seconds, works immediately', es: 'Configura en 60 segundos, funciona de inmediato' },

  // Daddy
  'models.daddy.badge': { en: 'The personal assistant', es: 'El asistente personal' },
  'models.daddy.title': { en: 'Daddy', es: 'Daddy' },
  'models.daddy.price': { en: '$59', es: '$59' },
  'models.daddy.period': { en: '/month', es: '/mes' },
  'models.daddy.desc': {
    en: 'Three emails, three social platforms. Like having a personal assistant without the $3,000/month price tag.',
    es: 'Tres emails, tres redes sociales. Como tener un asistente personal sin pagar $3,000/mes.'
  },
  'models.daddy.f1': { en: 'All your inboxes cleared before breakfast', es: 'Todas tus bandejas limpias antes del desayuno' },
  'models.daddy.f2': { en: 'Social content across all your platforms', es: 'Contenido social en todas tus plataformas' },
  'models.daddy.f3': { en: 'Birthdays, deadlines, follow-ups — all remembered', es: 'Cumpleaños, plazos, seguimientos — todo recordado' },
  'models.daddy.f4': { en: "Works 24/7 so you don't have to", es: 'Trabaja 24/7 para que tú no tengas que hacerlo' },

  // Big Daddy
  'models.bigdaddy.badge': { en: 'The full team', es: 'El equipo completo' },
  'models.bigdaddy.title': { en: 'Big Daddy', es: 'Big Daddy' },
  'models.bigdaddy.price': { en: '$119', es: '$119' },
  'models.bigdaddy.period': { en: '/month', es: '/mes' },
  'models.bigdaddy.desc': {
    en: 'Unlimited everything. Your whole life, handled. Less than a coffee a day for a full digital team.',
    es: 'Todo ilimitado. Toda tu vida, resuelta. Menos que un café al día por un equipo digital completo.'
  },
  'models.bigdaddy.f1': { en: 'Unlimited email accounts, all on autopilot', es: 'Cuentas de email ilimitadas, todas en autopiloto' },
  'models.bigdaddy.f2': { en: 'Every social platform, always posting', es: 'Cada red social, siempre publicando' },
  'models.bigdaddy.f3': { en: 'Your whole life organized and on track', es: 'Toda tu vida organizada y en camino' },
  'models.bigdaddy.f4': { en: 'Priority support — a real human when you need one', es: 'Soporte prioritario — un humano real cuando lo necesitas' },

  // ── Quiz ──
  'quiz.h2': { en: 'Your free AI plan', es: 'Tu plan IA gratis' },
  'quiz.sub': {
    en: '5 quick questions. Personalized AI plan. Takes 30 seconds.',
    es: '5 preguntas rápidas. Plan IA personalizado. Toma 30 segundos.'
  },
  'quiz.start': { en: 'Start here', es: 'Empieza aquí' },
  'quiz.email.q': { en: "What's your email?", es: '¿Cuál es tu email?' },
  'quiz.email.placeholder': { en: 'you@email.com', es: 'tu@email.com' },
  'quiz.email.continue': { en: 'Continue', es: 'Continuar' },

  'quiz.step.1of5': { en: 'Step 1 of 5', es: 'Paso 1 de 5' },
  'quiz.role.q': { en: 'What best describes you?', es: '¿Qué te describe mejor?' },
  'quiz.role.o1': { en: 'I run a business or side hustle', es: 'Tengo un negocio o proyecto' },
  'quiz.role.o2': { en: 'I freelance or create content', es: 'Soy freelance o creador de contenido' },
  'quiz.role.o3': { en: 'I work a 9-to-5', es: 'Trabajo de 9 a 5' },
  'quiz.role.o4': { en: "I'm juggling everything", es: 'Estoy haciendo de todo' },

  'quiz.step.2of5': { en: 'Step 2 of 5', es: 'Paso 2 de 5' },
  'quiz.bottleneck.q': { en: 'What drains your time the most?', es: '¿Qué te consume más tiempo?' },
  'quiz.bottleneck.o1': { en: 'Email & messages', es: 'Email y mensajes' },
  'quiz.bottleneck.o2': { en: 'Research & learning', es: 'Investigación y aprendizaje' },
  'quiz.bottleneck.o3': { en: 'Planning & scheduling', es: 'Planificación y agenda' },
  'quiz.bottleneck.o4': { en: 'Repetitive busywork', es: 'Trabajo repetitivo' },

  'quiz.step.3of5': { en: 'Step 3 of 5', es: 'Paso 3 de 5' },
  'quiz.hours.q': { en: 'How many hours a week do you lose to stuff AI could do?', es: '¿Cuántas horas a la semana pierdes en cosas que la IA podría hacer?' },
  'quiz.hours.o1': { en: '1-5 hours', es: '1-5 horas' },
  'quiz.hours.o2': { en: '5-10 hours', es: '5-10 horas' },
  'quiz.hours.o3': { en: '10-20 hours', es: '10-20 horas' },
  'quiz.hours.o4': { en: '20+ hours', es: '20+ horas' },

  'quiz.step.4of5': { en: 'Step 4 of 5', es: 'Paso 4 de 5' },
  'quiz.spanish.q': { en: 'Do you need Spanish?', es: '¿Necesitas español?' },
  'quiz.spanish.o1': { en: 'Yes, I use it daily', es: 'Sí, lo uso a diario' },
  'quiz.spanish.o2': { en: 'Sometimes', es: 'A veces' },
  'quiz.spanish.o3': { en: 'I want to learn / expand', es: 'Quiero aprender / expandirme' },
  'quiz.spanish.o4': { en: 'English only is fine', es: 'Solo inglés está bien' },

  'quiz.step.5of5': { en: 'Step 5 of 5', es: 'Paso 5 de 5' },
  'quiz.goal.q': { en: 'What would you do with 20 extra hours a week?', es: '¿Qué harías con 20 horas extra a la semana?' },
  'quiz.goal.o1': { en: 'Make more money', es: 'Ganar más dinero' },
  'quiz.goal.o2': { en: 'Actually relax', es: 'Realmente descansar' },
  'quiz.goal.o3': { en: 'Start something new', es: 'Empezar algo nuevo' },
  'quiz.goal.o4': { en: 'Be with people I love', es: 'Estar con quienes quiero' },

  'quiz.loading': { en: 'Building your AI plan...', es: 'Creando tu plan IA...' },

  'quiz.result.h3': { en: 'Your AI plan', es: 'Tu plan IA' },
  'quiz.result.intro': {
    en: "Here's how ClawGrab will help you:",
    es: 'Así es como ClawGrab te va a ayudar:'
  },
  'quiz.result.tier': { en: 'We recommend:', es: 'Te recomendamos:' },
  'quiz.result.cta': { en: 'Get started free', es: 'Empieza gratis' },
  'quiz.result.confirmed': { en: "You're in — check your inbox", es: 'Estás dentro — revisa tu bandeja' },

  // ── Pricing ──
  'pricing.h2': { en: 'Simple plans, real results', es: 'Planes simples, resultados reales' },
  'pricing.sub': {
    en: 'A personal assistant costs $500-$3,000/month. ClawGrab does the same work, starting at less than $1/day.',
    es: 'Un asistente personal cuesta $500-$3,000/mes. ClawGrab hace el mismo trabajo, desde menos de $1/día.'
  },
  'pricing.popular': { en: 'Most popular', es: 'Más popular' },

  'pricing.claw.name': { en: 'Claw', es: 'Claw' },
  'pricing.claw.price': { en: '$29', es: '$29' },
  'pricing.claw.period': { en: '/month', es: '/mes' },
  'pricing.claw.desc': { en: 'The daily helper. Get your inbox and one social platform under control.', es: 'La ayuda diaria. Controla tu bandeja y una red social.' },
  'pricing.claw.f1': { en: '1 email inbox on autopilot', es: '1 bandeja de email en autopiloto' },
  'pricing.claw.f2': { en: '1 social platform managed', es: '1 red social administrada' },
  'pricing.claw.f3': { en: 'Reminders and follow-ups', es: 'Recordatorios y seguimientos' },
  'pricing.claw.f4': { en: 'Mobile app access', es: 'Acceso a la app móvil' },
  'pricing.claw.cta': { en: 'Get started', es: 'Comenzar' },

  'pricing.daddy.name': { en: 'Daddy', es: 'Daddy' },
  'pricing.daddy.price': { en: '$59', es: '$59' },
  'pricing.daddy.period': { en: '/month', es: '/mes' },
  'pricing.daddy.desc': { en: 'The personal assistant. Like hiring help — without the hiring.', es: 'El asistente personal. Como contratar ayuda — sin contrataciones.' },
  'pricing.daddy.f1': { en: '3 email inboxes on autopilot', es: '3 bandejas de email en autopiloto' },
  'pricing.daddy.f2': { en: '3 social platforms managed', es: '3 redes sociales administradas' },
  'pricing.daddy.f3': { en: 'Remembers everything — birthdays, deadlines, details', es: 'Recuerda todo — cumpleaños, plazos, detalles' },
  'pricing.daddy.f4': { en: 'Your day planned and ready each morning', es: 'Tu día planificado y listo cada mañana' },
  'pricing.daddy.f5': { en: 'English + Spanish', es: 'Inglés + Español' },
  'pricing.daddy.cta': { en: 'Get started', es: 'Comenzar' },

  'pricing.bigdaddy.name': { en: 'Big Daddy', es: 'Big Daddy' },
  'pricing.bigdaddy.price': { en: '$119', es: '$119' },
  'pricing.bigdaddy.period': { en: '/month', es: '/mes' },
  'pricing.bigdaddy.desc': { en: 'The full team. Your whole life, handled.', es: 'El equipo completo. Toda tu vida, resuelta.' },
  'pricing.bigdaddy.f1': { en: 'Unlimited email inboxes', es: 'Bandejas de email ilimitadas' },
  'pricing.bigdaddy.f2': { en: 'Unlimited social platforms', es: 'Redes sociales ilimitadas' },
  'pricing.bigdaddy.f3': { en: 'Everything Daddy does, with no limits', es: 'Todo lo que hace Daddy, sin límites' },
  'pricing.bigdaddy.f4': { en: 'Custom automations for your life', es: 'Automatizaciones personalizadas para tu vida' },
  'pricing.bigdaddy.f5': { en: 'Priority support — a real human when you need one', es: 'Soporte prioritario — un humano real cuando lo necesitas' },
  'pricing.bigdaddy.f6': { en: 'English + Spanish', es: 'Inglés + Español' },
  'pricing.bigdaddy.cta': { en: 'Get started', es: 'Comenzar' },

  // ── Login ──
  'login.title': { en: 'Welcome back', es: 'Bienvenido de vuelta' },
  'login.sub': { en: 'Sign in to your ClawGrab account', es: 'Inicia sesión en tu cuenta ClawGrab' },
  'login.tab.signin': { en: 'Sign in', es: 'Iniciar sesión' },
  'login.tab.signup': { en: 'Sign up', es: 'Crear cuenta' },
  'login.field.name': { en: 'Name', es: 'Nombre' },
  'login.field.email': { en: 'Email', es: 'Email' },
  'login.field.password': { en: 'Password', es: 'Contraseña' },
  'login.placeholder.name': { en: 'Your name', es: 'Tu nombre' },
  'login.placeholder.email': { en: 'you@email.com', es: 'tu@email.com' },
  'login.placeholder.password': { en: 'At least 8 characters', es: 'Mínimo 8 caracteres' },
  'login.btn.signin': { en: 'Sign in', es: 'Iniciar sesión' },
  'login.btn.signup': { en: 'Create account', es: 'Crear cuenta' },
  'login.btn.loading': { en: 'Loading...', es: 'Cargando...' },
  'login.back': { en: 'Back to home', es: 'Volver al inicio' },
  'login.error.fields': { en: 'Please fill in all fields.', es: 'Por favor completa todos los campos.' },
  'login.error.api': { en: 'API not configured. Set window.__CLAWGRAB_API__ to your API URL.', es: 'API no configurada.' },

  // ── Footer ──
  'footer.copy': { en: '\u00A9 2026 ClawGrab. All rights reserved.', es: '\u00A9 2026 ClawGrab. Todos los derechos reservados.' },
  'footer.privacy': { en: 'Privacy', es: 'Privacidad' },
  'footer.terms': { en: 'Terms', es: 'Términos' },
  'footer.github': { en: 'GitHub', es: 'GitHub' },
};
